import DashBoard from "../../components/MAIN/Dashboard";
import { useCallback, useEffect, useState } from "react";
import { useRole } from "../../context/roles-context";
import { createPortal } from "react-dom";
import { useAccessTemplate } from "../../context/access-template-context";
import { useCategory } from "../../context/categorie-context";
import { useBreadcrumbs } from "../../context/breadcrumb-context";
import { useSession } from "../../context/user-context";
import { useTemplateGenerator } from "../../context/template-context";

const UserPersonaliseren = () => {
  const {
    error,
    loading,
    allRoles,
    allRolesPerson,
    setselected_Role,
    selected_role,
  } = useRole();

  const { user, template } = useSession();

  const options = [
    {
      name: "B",
      title: "Template raadplegen",
      value: "Raadpleeg indeling categorieën.",
      visibleOption: "block",
    },
    {
      name: "A",
      title: "Template beheren",
      value: "Beheer indeling categorieën.",
      visibleOption: "none",
      url: `/personalise/create`,
    },

    {
      name: "C",
      title: "Template verwijderen",
      value: "Verwijder gepersonaliseerde template.",
      visibleOption: "none",
    },
  ];

  const { enabled } = useAccessTemplate();
  const { setBreadcrumbs } = useBreadcrumbs();
  const { roleTemplate } = useTemplateGenerator();

  useEffect(() => {
    setselected_Role(allRoles.find((role) => role.name === user.role));
  }, [setselected_Role]);

  useEffect(() => {
    setBreadcrumbs([
      { name: "home", url: "/categories", key: "allCategories" },
      {
        name: `Dashboard personaliseren`,
        url: "/personalise",
        key: "personalise",
      },
    ]);
  }, [selected_role]);

  const initDashboardTemplate = useCallback(() => {
    // allCategories.map((cat) => (cat.card_type = "CATEGORY"));
    // return allCategories;

    // if (selected_role.hasOwnProperty("id")) {
    //   roleTemplate?.template.tiles.map((cat) => (cat.card_type = "CATEGORY"));
    //   return roleTemplate?.template.tiles;
    // }
    template.tiles.map((cat) => (cat.card_type = "CATEGORY"));
    return template?.tiles;

  }, [ template]);

  const initDashboardOptions = useCallback(() => {
    options.map((e) => (e.card_type = "OPTION"));
    return options;
  }, [options]);

  return (
    <>
      <div
        className="options"
        style={{
          display: selected_role.hasOwnProperty("id") ? "grid" : "none",
          gap: "60px",
        }}
      >
        <div>
          <ul className="category-bar">
            <li className="option-title">Opties</li>
          </ul>
          <DashBoard items={initDashboardOptions()} />
        </div>

        <div
          className="template_option"
          style={{ display: enabled ? "block" : "none" }}
        >
          <ul className="category-bar">
            <li className="option-title">Template</li>
          </ul>
          <div style={{ pointerEvents: "none" }}>
              <DashBoard
                items={initDashboardTemplate()}
                areas={{
                  narrow: template?.layout?.narrow?.areas,
                  wide: template.layout?.wide?.areas,
                }}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPersonaliseren;
