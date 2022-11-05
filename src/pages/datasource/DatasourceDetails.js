import { useState, useEffect } from "react";
import { useBreadcrumbs } from "../../context/breadcrumb-context";
import { useCategory } from "../../context/categorie-context";
import { useParams } from "react-router-dom";
import { useDatasource } from "../../context/datasource-context";
import { useCSR } from "../../context/csr-context";
import Error from "../../components/MAIN/Error";
import { useNavigate } from "react-router";

const DatasourceDetails = () => {
  const { setBreadcrumbs } = useBreadcrumbs();
  const navigate = useNavigate();
  const {
    selected_datasource: ds,
    error,
    setSelected_datasource,
    getSpecificDatasource,
  } = useDatasource();
  const {
    selected_category: cat,
    setSelected_category,
    allCategories,
  } = useCategory();
  const { selected_CSR: csr, getSpecificCSR } = useCSR();
  const { allCSR, setSelected_CSR, selected_CSR } = useCSR();
  const [text, setText] = useState();
  const { catid, csrid, dsid } = useParams();

  useEffect(() => {
    setSelected_datasource(getSpecificDatasource(dsid));
  }, [dsid, getSpecificDatasource]);

  useEffect(() => {
    setBreadcrumbs([
      { name: "home", url: "/categories", key: "allCategories" },
      {
        name: cat?.name,
        prefix: "Categorie - ",
        url: `/category/${cat?.id}`,
        key: `Category-${cat?.id}`,
      },
      {
        name: csr?.name,
        prefix: "MVO - ",
        url: `/category/${cat?.id}/csr/${csr?.id}`,
        key: `CSR-${csr?.id}`,
      },
      {
        name: ds?.name,
        prefix: "Bron - ",
        url: `/category/${cat?.id}/csr/${csr?.id}/datasource/${ds?.id}`,
        key: `Datasource-${ds?.id}`,
      },
    ]);
  }, [dsid, setBreadcrumbs, ds]);

  if (error?.title === "Oei, er is een probleem opgetreden.") {
    return <Error error={error} />;
  }

  return (
    <div>
      <ul className="category-bar">
        <li className="category-title" data-cy="datasource_title">{ds?.name}</li>
      </ul>
      <div className="datasource-details">
        <textarea
          spellCheck="false"
          className="textarea_datasource"
          value={
            ds?.content === undefined
              ? ds?.content
              : ds?.content.split(";").join("\n")
          }
          rows={12}
          data-cy="datasource_content"
        />
        <div className="div_btn_goback">
          <div className="btn_goback_hover">
            <input
              type="submit"
              value="Ga terug"
              className="goBackbtn"
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatasourceDetails;
