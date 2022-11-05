import { useTemplateGenerator } from "../../context/template-context";
import { useState, useEffect, useCallback } from "react";
import { categoryAll } from "../../backend/mock-data/all-mock";
import { useBreadcrumbs } from "../../context/breadcrumb-context";
import DashBoard from "../../components/MAIN/Dashboard";
import { useCategory } from "../../context/categorie-context";
import Loading from "../../components/MAIN/Loading";
import Error from "../../components/MAIN/Error";
import { useParams } from "react-router-dom";
import { useSession } from "../../context/user-context";

const cat_mock = [
  {
    name: "Energie",
    icon: "blue",
    mvo: [],
    gridArea: "a",
  },
  {
    name: "Economie",
    icon: "red",
    mvo: [],
    gridArea: "b",
  },
  {
    name: "Milieu",
    icon: "orange",
    mvo: [1, 2],
    gridArea: "c",
  },
  {
    name: "Sociaal",
    icon: "purple",
    mvo: [3],
    gridArea: "d",
  },
  {
    name: "Sociaal123",
    icon: "magenta",
    mvo: [1, 2, 3, 4],
    gridArea: "g",
  },
];

const CategoryIndex = () => {
  const { setBreadcrumbs } = useBreadcrumbs();
  const { template } = useSession();
  const { error, loading, allCategories } = useCategory();

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    setBreadcrumbs([
      { name: "home", url: "/categories", key: "allCategories" },
    ]);
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const initDashboard = useCallback(() => {
    template.tiles.map((cat) => (cat.card_type = "CATEGORY"));
    template.tiles.map((cat) => (cat.place = "c" + cat.id));


    return template.tiles;
  }, [template]);

  if (error?.hasOwnProperty("title")) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <DashBoard
      items={initDashboard()}
      areas={{
        narrow: template?.layout?.narrow?.areas,
        wide: template?.layout?.wide?.areas,
      }}
    />
  );
};

export default CategoryIndex;
