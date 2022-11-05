import { useCallback, useEffect, useRef, useState } from "react";
import { useTemplateGenerator } from "../../context/template-context";
import Dashboard from "../../components/MAIN/Dashboard";
import { useRole } from "../../context/roles-context";
import { useLocation, useNavigate } from "react-router";
import { useSession } from "../../context/user-context";
import Error from "../../components/MAIN/Error";

const CreateTemplate = ({ role }) => {
  const categoryButtons = useRef();
  const mvoButtons = useRef();
  const [dashboard, setDashboard] = useState([]);
  const [templateBuild, setTemplateBuild] = useState();
  const [selected_category, setSelected_category] = useState({});
  const { template, user, updateUserTemplate } = useSession();
  const { selected_role } = useRole();

  const { generateGrid, templateData, saveTemplate, roleTemplate } =
    useTemplateGenerator();
  const navigate = useNavigate();

  useEffect(() => {
    addToPane();
  }, []);

  useEffect(() => {}, [templateData]);

  const changeCat = useCallback((e, cat) => {
    Array.from(categoryButtons.current.children).forEach((button) => {
      button.style.backgroundColor = "#efefef";
      button.style.background = "";
      button.style.color = "#004c69";
    });

    if (cat === "NONE") {
      e.target.style.background = "gray";
    } else {
      e.target.style.backgroundColor = cat.icon;
    }

    e.target.style.color = "white";

    setSelected_category(cat);
  }, []);

  const addToPane = useCallback(() => {
    setDashboard((dashboard) => {
      let items = [];

      for (let i = 0; i < 8; i++) {
        items.push({ category: undefined });
      }

      return [...dashboard, ...items];
    });
  }, []);

  const generate = useCallback(async () => {
    let areas = dashboard.map((cat) => {
      const category = templateData.categories.find(
        (c) => c.name === cat.category
      );

      return {
        category: category ? "c" + category.categoryId : ".",
      };
    });

    const template = generateGrid({
      areas: areas,
      categories: new Set(dashboard.map((e) => e.category)),
    });

    await saveNewTemplate(template);

    //navigate("/roles", { replace: true });
  }, [dashboard, templateBuild, role, templateData]);

  const resetTile = useCallback((tile, item) => {
    tile.setAttribute("class", "grid-add-category-default");
    tile.setAttribute("cat_id", "");
    tile.style.backgroundColor = "white";
    tile.style.color = "#EFEFEF";
    tile.textContent = "+";
  });

  const changeTileCategory = useCallback(
    (tile, item) => {
      if (selected_category === "NONE") {
        resetTile(tile, item);
        return;
      }

      item.category = selected_category.name;

      tile.setAttribute("class", "grid-add-category-assigned");
      tile.setAttribute("cat_id", selected_category.name);
      tile.style.backgroundColor = selected_category.icon;
      tile.style.color = "white";
      tile.textContent = selected_category.name;
    },
    [selected_category]
  );

  const initDashboard = useCallback(() => {
    const cat_ids = templateBuild.tiles.map((tile) => tile.id);

    const items = templateData.categories.filter((cat) =>
      cat_ids.includes(cat.categoryId)
    );

    items.map((cat) => (cat.card_type = "CATEGORY"));
    items.map((cat) => (cat.place = "c" + cat.categoryId));

    return items;
  }, [templateBuild]);

  const addCsrToCurrentCategory = useCallback(
    (e, csr) => {
      const button = e.target;
      const cat = templateBuild.tiles.find((tile) => tile.id === csr.cat_id);

      for (let i = 0; i < cat.csr_ids.length; i++) {
        if (cat.csr_ids.includes(csr.id)) {
          let index = cat.csr_ids.indexOf(csr.id);
          cat.csr_ids[index] = undefined;
          break;
        }

        if (cat.csr_ids[i] === undefined) {
          cat.csr_ids[i] = csr.id;
          break;
        }
      }
    },
    [templateBuild, selected_category, templateBuild?.tiles]
  );

  const location = useLocation();
  const saveNewTemplate = useCallback(
    async (template) => {
      if (location.pathname.includes("personalise")) {
        await updateUserTemplate(template);
        navigate("/");
      } else {
        await saveTemplate(template);
        navigate("/roles");
      }
    },
    [templateBuild]
  );

  const [size, setSize] = useState(window.outerWidth);
  const handleWindowResize = useCallback((event) => {
    setSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  if (size <= 1024) {
    return (
      <Error
        error={{
          title: "Oei, het scherm is te klein.",
          description:
            "Het beheren van templates is niet mogelijk op kleine schermen.",
        }}
      ></Error>
    );
  } else {
    if (
      templateData === undefined ||
      !templateData.hasOwnProperty("categories")
    ) {
      return (
        <>
          <p>GEEN DATA</p>
        </>
      );
    }

    // if (user.role === "mvo_coordinator") {
    if (Boolean(templateBuild)) {
      return (
        <>
          <div className="create-dashboard-category-list" ref={categoryButtons}>
            {templateData.categories.map((cat) => {
              return (
                <button
                  key={cat.name}
                  className="category-button-create-template"
                  onClick={(e) => changeCat(e, cat)}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          <div className="create-dashboard-category-list" ref={mvoButtons}>
            {templateData.csrs.map((csr) => {
              if (csr.cat_id === selected_category.categoryId) {
                return (
                  <button
                    key={csr.name}
                    className="category-button-create-template"
                    onClick={(e) => addCsrToCurrentCategory(e, csr)}
                  >
                    {csr.name}
                  </button>
                );
              } else {
                return <></>;
              }
            })}
          </div>

          <Dashboard
            items={initDashboard()}
            areas={{
              narrow: templateBuild?.layout?.narrow?.areas,
              wide: templateBuild?.layout?.wide?.areas,
            }}
          />

          <div className="buttongroup">
            <button
              className="category-button-create-template button-full"
              onClick={() => addToPane()}
            >
              Ga terug naar beheer scherm
            </button>
            <button
              className="category-button-create-template button-full"
              onClick={() => {
                saveNewTemplate();
              }}
            >
              Template opslaan
            </button>
          </div>
        </>
      );
    }

    return (
      <>
        <p className="template-options-label">Beschikbare categorieën:</p>
        <div className="create-dashboard-category-list" ref={categoryButtons}>
          {templateData.categories.map((cat) => {
            return (
              <button
                key={cat.name}
                className="category-button-create-template"
                onClick={(e) => changeCat(e, cat)}
                data-cy="cat_template"
              >
                {cat.name}
              </button>
            );
          })}
          <button
            className="category-button-create-template"
            onClick={(e) => changeCat(e, "NONE")}
          >
            Reset
          </button>
        </div>
        <div className="template-update-options">
          <p>Template:</p>
          <div className="under-filter-button">
            <button onClick={() => addToPane()}>Rij toevoegen</button>
          </div>
          <div className="under-filter-button">
            <button
              id="update-template"
              onClick={async () => {
                generate();
              }}
              data-cy="save_temp_button"
            >
              Template opslaan
            </button>
          </div>
          <div className="under-filter-button">
            <button
              id="return"
              onClick={() => {
                navigate(-1);
              }}
            >
              Terug
            </button>
          </div>
        </div>
        <div
          className="template update-template"
          style={{
            gridTemplateRows: `repeat(${Math.ceil(
              dashboard.length / 4
            )}, 250px)`,
          }}
        >
          {dashboard.map((item, index) => {
            return (
              <button
                data-cy="add_cat_template"
                key={index}
                cat_id=""
                className="grid-add-category-default"
                onClick={(e) => {
                  if (
                    e.target.getAttribute("cat_id") === selected_category.name
                  )
                    resetTile(e.target, item);
                  else changeTileCategory(e.target, item);
                }}
              >
                +
              </button>
            );
          })}
        </div>

        {/* <div className="buttongroup">
          <button
            className="category-button-create-template button-full"
            onClick={() => addToPane()}
          >
            Ga terug naar beheer scherm
          </button>

          <button
            className="category-button-create-template button-full"
            onClick={() => addToPane()}
          >
            Voeg een nieuwe laag toe
          </button>
          <button
            className="category-button-create-template button-full"
            onClick={async () => {
              generate();
            }}
          >
            Maak template aan
          </button>
        </div> */}
      </>
    );
    //   } else {
    //     //   roleTemplate.template.layout.wide.areas.replaceAll('"', "").replaceAll(" ", "")
    //     // );
    //     return (
    //       <>
    //         <div className="create-dashboard-category-list" ref={categoryButtons}>
    //           {templateData.categories.map((cat) => {
    //             return (
    //               <button
    //                 key={cat.name}
    //                 className="category-button-create-template"
    //                 onClick={(e) => changeCat(e, cat)}
    //               >
    //                 {cat.name}
    //               </button>
    //             );
    //           })}
    //           <button
    //             className="category-button-create-template"
    //             onClick={(e) => changeCat(e, "NONE")}
    //           >
    //             Reset
    //           </button>
    //         </div>

    //         <div
    //           className="template update-template"
    //           style={{
    //             gridTemplateRows: `repeat(${Math.ceil(
    //               dashboard.length / 4
    //             )}, 250px)`,
    //           }}
    //         >
    //           {template.layout.wide.areas
    //             .replace('"', "")
    //             .replace(" ", "")
    //             .split("c")
    //             .map((item, index) => {
    //               return (
    //                 <button
    //                   key={index}
    //                   cat_id=""
    //                   className="grid-add-category-default"
    //                   onClick={(e) => {
    //                     if (
    //                       e.target.getAttribute("cat_id") === selected_category.id
    //                     )
    //                       resetTile(e.target, item);
    //                     else changeTileCategory(e.target, item);
    //                   }}
    //                 >
    //                   +
    //                 </button>
    //               );
    //             })}

    //           <div className="buttongroup">
    //             <button
    //               className="category-button-create-template button-full"
    //               onClick={() => addToPane()}
    //             >
    //               Voeg een nieuwe laag toe
    //             </button>

    //             {/* <button
    //             className="category-button-create-template button-full"
    //             onClick={() => generate()}
    //           > */}
    //             <button
    //               className="category-button-create-template button-full"
    //               onClick={async () => {
    //                 generate();
    //               }}
    //             >
    //               Bevestigen
    //             </button>
    //           </div>
    //         </div>
    //       </>
    //     );
    //   }
  }
};

export default CreateTemplate;
