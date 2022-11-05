import AOS from "aos";
import "aos/dist/aos.css";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAccessTemplate } from "../../context/access-template-context";
import { useRole } from "../../context/roles-context";
import { useTemplateGenerator } from "../../context/template-context";
import { useSession } from "../../context/user-context";

const OptionCard = ({ title, value, visibleOption, type }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { enabled, setEnabled } = useAccessTemplate();
  const { updateCustomizable, selected_role } = useRole();

  const [isPersonaliseerbaar, setPersonaliseerbaar] = useState();
  const { deleteTemplate } = useTemplateGenerator();
  const user = useSession();
  const navigate = useNavigate();
  const location = useLocation();

  const remove = useCallback(async () => {
    if (title.includes("verwijderen")) {
      if (location.pathname === "/personalise") {
        await user.deleteUserTemplate();
        navigate("/");
      } else {
        await deleteTemplate();
        navigate("/roles");
        window.location.reload();
      }
    }
  });

  useEffect(() => {
    if (selected_role.hasOwnProperty("customizable")) {
      setPersonaliseerbaar(selected_role.customizable);
    }
  }, [selected_role]);

  const updateSlider = async () => {
    //update databank
    await updateCustomizable(selected_role.name, !isPersonaliseerbaar);
    //update slider
    setPersonaliseerbaar(!isPersonaliseerbaar);
  };

  return (
    <>
      <div className="under-card" data-aos="fade-up">
        <div
          className="datasource-card card"
          style={{ position: "relative" }}
          onClick={async () => await remove()}
          data-cy="option_card"
        >
          <div style={{ paddingTop: 10 + "px" }} className="category-title">
            {title}
          </div>
          <div className="datasource-source">{value}</div>
          <div
            className="toggle"
            style={{ position: "absolute", display: visibleOption }}
            data-cy="toggle_switch"
          >
            <label className="switch" data-cy="option_switch">
              <input
                type="checkbox"
                checked={
                  type === "personaliseerbaar" ? isPersonaliseerbaar : enabled
                }
                onChange={async () => {
                  type === "personaliseerbaar"
                    ? await updateSlider()
                    : setEnabled(!enabled);
                }}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default OptionCard;
