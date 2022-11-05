import React, { useCallback } from "react";
import { useCategory } from "../../context/categorie-context";
import { useCSR } from "../../context/csr-context";
import CategoryCard from "../category/CategoryCard";
import CsrCard from "../csr/CsrCard";
import DatasourceCard from "../datasource/DatasourceCard";
import { Link } from "react-router-dom";
import RoleCard from "../role/RoleCard";
import OptionCard from "../role/OptionCard";
import { useRole } from "../../context/roles-context";

const Card = ({ type, card_content, action }) => {
  const { setSelected_category, selected_category } = useCategory();
  const { setSelected_CSR, getSpecificCSR, selected_CSR } = useCSR();
  const { setSelected_Role, selected_role: role } = useRole();

  const buildRole = useCallback(() => {
    return (
      <>
        <RoleCard ds={card_content} action={() => action()} />
      </>
    );
  });

  const buildOptions = useCallback(() => {
    return (
      <>
        {Boolean(card_content?.url) ? (
          <Link
            to={card_content?.url}
            className="link-nodeco"
            key={card_content.id}
          >
            <OptionCard
              title={card_content?.title}
              value={card_content?.value}
              visibleOption={card_content?.visibleOption}
              type={card_content?.type}
            />
          </Link>
        ) : (
          <>
            <OptionCard
              title={card_content?.title}
              value={card_content?.value}
              visibleOption={card_content?.visibleOption}
              type={card_content?.type}
            />
          </>
        )}
      </>
    );
  });

  const buildDatasource = useCallback(() => {
    return (
      <>
        <Link
          to={`/category/${selected_category?.id}/csr/${selected_CSR?.id}/datasource/${card_content.id}`}
          className="link-nodeco"
          key={card_content.id}
        >
          <DatasourceCard ds={card_content} />
        </Link>
      </>
    );
  }, []);

  const buildCsr = useCallback(() => {
    return (
      <>
        <Link
          to={`/category/${selected_category?.id}/csr/${card_content.id}`}
          // onClick={() => getSpecificCSR(card_content.id)}
          className="link-nodeco"
          key={card_content.id}
        >
          <CsrCard csr={card_content} />
        </Link>
      </>
    );
  }, []);

  const buildCategory = useCallback(() => {
    return (
      <>
        <Link
          to={`/category/${card_content.id}`}
          onClick={() => setSelected_category(card_content)}
          className="link-nodeco"
          key={card_content.id}
        >
          <CategoryCard category={card_content} />
        </Link>
      </>
    );
  }, []);

  return (
    <>
      {type === "CATEGORY" && buildCategory()}
      {type === "CSR" && buildCsr()}
      {type === "DATASOURCE" && buildDatasource()}
      {type === "ROLE" && buildRole()}
      {type === "OPTION" && buildOptions()}
    </>
  );
};

export default Card;
