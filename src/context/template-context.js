import React, {
  useState,
  createContext,
  useCallback,
  useMemo,
  useContext,
  useEffect,
} from "react";
import { useCategory } from "./categorie-context";
import { useRole } from "./roles-context";
import * as templateApi from "../backend/api/template";
import { useSession } from "./user-context";

export const TemplateGenerator_Context = createContext();
export const useTemplateGenerator = () => useContext(TemplateGenerator_Context);

export const TemplateGenerator_Provider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [templateData, setTemplateData] = useState({});
  const [roleTemplate, setRoleTempalte] = useState({});

  const { allCategories } = useCategory();

  const { allRoles, selected_role, setselected_Role } = useRole();
  const { fetchTemplateForUser } = useSession();

  const fetchDataForRole = useCallback(async () => {
    try {
      setError({});
      setLoading(true);
      const data = await templateApi.getAllData(selected_role.name);
      setTemplateData(data);
      const template = await templateApi.getRoleTemplate(selected_role.name);
      setRoleTempalte(template);
    } catch (error) {
      setError({
        title: "Oei, er is iets misgelopen!",
        description: "Het de data voor het template kon niet opgehaald worden!",
      });
    } finally {
      setLoading(false);
    }
  }, [selected_role, roleTemplate, templateData]);

  useEffect(() => {
    fetchDataForRole();
  }, [selected_role]);

  useEffect(() => {}, [selected_role]);

  useEffect(() => {}, [templateData]);

  const generateGrid = useCallback(
    ({ areas, categories }) => {
      const grid = {
        tiles: [],
        layout: {
          wide: {
            areas: "",
            rowCount: 0,
          },
          narrow: {
            areas: "",
            rowCount: 0,
          },
        },
      };

      generateWide(areas, grid);
      generateNarrow(grid);
      const cat_count = mapCategoryCount(areas);
      addCategoriesToGridObject(areas, cat_count, grid);

      return grid;
    },
    [selected_role, templateData]
  );

  const mapCategoryCount = useCallback((areas) => {
    const categoryCount = new Map();

    const categoryArray = areas.map((e) => e.category);
    const uniqueCategories = categoryArray.filter(
      (v, i, a) => a.indexOf(v) === i
    );

    uniqueCategories.forEach((cat) => {
      categoryCount.set(cat, categoryArray.filter((e) => e === cat).length);
    });

    return categoryCount;
  }, []);

  const saveTemplate = useCallback(async (template) => {
    try {
      evaluate(template?.layout?.wide?.areas);
      await templateApi.postTemplate(template, selected_role);
      await fetchTemplateForUser();
    } catch (error) {
      alert(error.message);
    }
  });

  const evaluate = (template) => {
    const cardcount = new Map();

    const ids = template.match(/\d+/g);

    if (ids.length === 0) {
      throw new Error("Template mag niet leeg zijn.");
    }

    ids.forEach((id, index) => {
      cardcount.set(id, cardcount.has(id) ? cardcount.get(id) + 1 : 1);
    });

    cardcount.forEach((count, id) => {
      if ((count % 2 !== 0 && count !== 1) || count > 8) {
        throw new Error(
          "Categorie kaart heeft verkeerde afmeting of is te groot"
        );
      }
    });
  };

  const deleteTemplate = useCallback(async () => {
    try {
      setError({});
      await templateApi.deleteRoleTemplate(selected_role.name);
      setRoleTempalte({});
    } catch (error) {
      setError({
        title: "Oei, er is iets misgelopen!",
        description: "Het is niet moegelijk om het template te verwijderen!",
      });
    }
  });

  // DIT VOEGT DE WAARDEN TOE AAN HET GRID_OBJ
  const addToObject = useCallback((type, areas, grid) => {
    let str_areas = "";
    areas.forEach((row) => {
      if (type === "wide") row = row.map((e) => e.category);
      str_areas += ` "${row.join(" ")}" `;
    });

    grid.layout[type].areas = str_areas.trim();
    grid.layout[type].rowCount =
      str_areas.replaceAll('"', "").replaceAll("  ", " ").trim().split(" ")
        .length / (type === "narrow" ? 2 : 4);
  }, []);

  // DIT DEELT DE ORIGINELE ARRAY OP IN VERSCHILLDENDE DELEN (n)
  const splitArrayUpInPieces = useCallback((n, array) => {
    let splitup = [];
    for (let i = 0; i < array.length; i += n)
      splitup.push(array.slice(i, i + n));
    return splitup;
  }, []);

  // MAAKT DE LAYOUT VOOR BREDE SCHERMEN
  const generateWide = useCallback((areas, grid) => {
    const splitup = splitArrayUpInPieces(4, areas);
    addToObject("wide", splitup, grid);
  }, []);

  // MAAKT DE LAYOUT VOOR SMALLE SCHERMEN
  const generateNarrow = useCallback((grid) => {
    let dash = grid.layout.wide.areas;
    const placesForCard = {};
    const smallDashboard = [];
    dash
      .replaceAll('"', " ")
      .replaceAll("   ", " ")
      .split(" ")
      .forEach((cat) => {
        cat !== "" &&
          !placesForCard.hasOwnProperty(cat) &&
          (placesForCard[cat] = 0);
        placesForCard.hasOwnProperty(cat) && placesForCard[cat]++;
      });
    let places = 0;
    let added = false;
    for (const key in placesForCard) {
      places = placesForCard[key];
      if (places % 2 == 0)
        for (let i = 0; i < places / 2; i++) smallDashboard.push([key, key]);
      else {
        smallDashboard.forEach((rowElement) => {
          if (rowElement.includes("EMPTY"))
            for (let i = 0; i < 2; i++)
              rowElement[i] === "EMPTY" &&
                (rowElement[i] = key) &&
                (added = true);
        });
        !added && smallDashboard.push([key, "EMPTY"]) && (added = false);
      }

      addToObject("narrow", smallDashboard, grid);
    }
  }, []);

  //VOET DE UNIEKE CATEGORIEEN TOE AAN DE TEMPLATE
  const addCategoriesToGridObject = useCallback(
    (categories, categoryCount, grid) => {
      let uniqueCategories = categories
        .map((e) => e.category)
        .filter((v, i, a) => a.indexOf(v) === i);
      uniqueCategories.forEach((cat) => {
        const found_cat = templateData.categories.find(
          (e) => "c" + e.categoryId == cat
        );
        if (found_cat === undefined) {
          return;
        }

        grid.tiles.push({
          id: found_cat?.categoryId,
          csr_ids: new Array(Math.floor(categoryCount.get(cat) / 2)),
        });
      });
    },
    [templateData, selected_role, templateData?.categories]
  );

  const value = useMemo(
    () => ({
      templateData,
      roleTemplate,
      setTemplateData,
      generateGrid,
      addCategoriesToGridObject,
      saveTemplate,
      deleteTemplate,
    }),
    [
      templateData,
      roleTemplate,
      setTemplateData,
      generateGrid,
      addCategoriesToGridObject,
      saveTemplate,
      deleteTemplate,
    ]
  );

  return (
    <TemplateGenerator_Context.Provider value={value}>
      {children}
    </TemplateGenerator_Context.Provider>
  );
};
