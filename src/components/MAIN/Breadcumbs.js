import { createContext, useContext } from "react";
import { useBreadcrumbs } from "../../context/breadcrumb-context";
import { Link } from "react-router-dom";

const paths = {
  home: "Home",
  category: "Category",
};

export const Breadcrumbs = () => {
  const { breadcrumbs } = useBreadcrumbs();

  return (
    <div className="breadcrumb-trail">
      {breadcrumbs.map((b) => {
        return (
          <Link
            to={(b.url ??= "/categories")}
            key={b.key}
            className="breadcrumb-item link-nodeco"
          >
            {b.prefix}
            {paths.hasOwnProperty(b.name)
              ? paths[b.name]
              : (b.name ??= "Niet gevonden")}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
