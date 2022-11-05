import DatasourceCard from "../datasource/DatasourceCard";
import CsrCard from "../csr/CsrCard";
import { Link } from "react-router-dom";
import { useCSR } from "../../context/csr-context";
import React, { useState, useEffect } from "react";
import Card from "./Card";

const ItemList = ({ name, items }) => {
  const { setSelected_CSR } = useCSR();

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div className="itemlist">
      <p className="itemlist-name" data-cy="itemList_name">
        {name}
      </p>
      <div
        style={
          matches
            ? {
                gridTemplateColumns: `repeat(4, 1fr)`,
              }
            : {
                gridTemplateColumns: `repeat(2, 1fr)`,
              }
        }
        className="item-list-items"
        data-cy="item_list_items"
      >
        {items.map((e) => {
          return (
            <div key={e.name}>
              {name === "Gegevensbronnen" ? (
                // <Link
                //   key={e.name}
                //   to={`/datasource/${e.id}`}
                //   className="link-nodeco"
                // >
                <Card type={"DATASOURCE"} card_content={e} />
              ) : (
                // </Link>
                // <Link
                //   key={e.name}
                //   to={`/csr/${e.csrComponentId}`}
                //   onClick={() => setSelected_CSR(e)}
                //   className="link-nodeco"
                // >
                <Card type={"CSR"} data-cy="child_csr_card" card_content={e} />
                // </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
