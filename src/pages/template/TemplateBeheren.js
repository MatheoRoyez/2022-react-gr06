import DashBoard from "../../components/MAIN/Dashboard";
import { useCallback, useEffect, useState } from "react";
import { useRole } from "../../context/roles-context";
import { useAccessTemplate } from "../../context/access-template-context";
import { useCategory } from "../../context/categorie-context";
import { useBreadcrumbs } from "../../context/breadcrumb-context";
import { useSession } from "../../context/user-context";
import { useTemplateGenerator } from "../../context/template-context";
import * as templateApi from "../../backend/api/template";

const TemplateBeheren = () => {
  const {
    error,
    loading,
    allRoles,
    allRolesPerson,
    setselected_Role,
    selected_role,
  } = useRole();

  const [templateRole, setTemplateRole] = useState({});

  const options = [
    {
      name: "A",
      title: "Personaliseren",
      value: "Kan template aangepast worden?",
      visibleOption: "block",
      type: "personaliseerbaar",
    },
    {
      name: "C",
      title: "Template raadplegen",
      value: "Raadpleeg indeling categorieën.",
      visibleOption: "block",
    },
    {
      name: "B",
      title: "Template beheren",
      value: "Beheer indeling categorieën.",
      visibleOption: "none",
      url: `/template/${selected_role.name}/create`,
    },
    {
      name: "D",
      title: "Template verwijderen",
      value: "Verwijder ingestelde template.",
      visibleOption: "none",
    },
  ];

  const [showTemplate, setShowTemplate] = useState(false);
  const { allCategories } = useCategory();

  const { enabled } = useAccessTemplate();
  const { setBreadcrumbs } = useBreadcrumbs();
  const { roleTemplate } = useTemplateGenerator();

  const { template } = useSession();

  useEffect(() => {
    setBreadcrumbs([
      { name: "home", url: "/categories", key: "allCategories" },
      {
        name: `Templates Beheren  ${
          selected_role?.dutch_name === undefined
            ? ""
            : "- " + selected_role?.dutch_name
        }`,
        url: "/roles",
        key: "roles",
      },
    ]);
  }, [selected_role]);

  const initDashboard = useCallback(() => {
    allRoles.map((e) => (e.card_type = "ROLE"));
    allRoles.map(
      (e) =>
        (e.action = () =>
          setselected_Role((last) => {
            if (last.id === e.id) {
              return {};
            } else {
              return e;
            }
          }))
    );

    return allRoles;
  }, [allRoles]);

  const initDashboardTemplate = useCallback(async () => {
    if (selected_role.hasOwnProperty("id")) {
      const fetchedtemplate = await templateApi.getRoleTemplate(
        selected_role.name
      );

      if (fetchedtemplate === "") {
        setTemplateRole({});
        return;
      }

      fetchedtemplate?.template.tiles.map(
        (cat) => (cat.card_type = "CATEGORY")
      );

      fetchedtemplate?.template.tiles.map((cat) => (cat.place = "c" + cat.id));

      setTemplateRole({
        items: fetchedtemplate?.template?.tiles,
        layout: {
          narrow: fetchedtemplate?.template?.layout?.narrow?.areas,
          wide: fetchedtemplate?.template?.layout?.wide?.areas,
        },
      });
    }
  }, [selected_role, roleTemplate, selected_role]);

  const initDashboardOptions = useCallback(() => {
    options.map((e) => (e.card_type = "OPTION"));
    return options;
  }, [options]);

  useEffect(() => {
    initDashboardTemplate();
  }, [selected_role]);

  return (
    <>
      <div className="roles">
        <ul className="category-bar">
          <li data-cy="beheren_title" className="category-title">
            Rollen
          </li>
        </ul>
        <ul className="category-bar">
          <p data-cy="beheren_info" className="role-info">
            Kies de rol waarvan u het template overzicht wenst te beheren
          </p>
        </ul>
        <div>
          <DashBoard items={initDashboard()} />
        </div>
      </div>
      <div
        className="options"
        style={{
          display: selected_role.hasOwnProperty("id") ? "grid" : "none",
          gap: "60px",
        }}
      >
        <div>
          <ul className="category-bar">
            <li data-cy="beheren_opties_title" className="option-title">
              Opties
            </li>
          </ul>
          <DashBoard items={initDashboardOptions()} />
        </div>

        {/* TEMPLATE TONEN */}

        <div
          className="template_option"
          style={{ display: enabled ? "block" : "none", pointerEvents: "none" }}
        >
          <ul className="category-bar">
            <li data-cy="beheren_template_title" className="option-title">
              Template
            </li>
          </ul>

          {!(Object.keys(templateRole).length === 2) ? (
            <p
              data-cy="error_noRoleTemplate"
              className="template-options-label"
            >
              Geen template beschikbaar.
            </p>
          ) : (
            <>
              <DashBoard
                data-cy="beheren_template_overzicht"
                items={templateRole.items}
                areas={templateRole.layout}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TemplateBeheren;
