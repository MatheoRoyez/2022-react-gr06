import AOS from "aos";
import "aos/dist/aos.css";
import React, { useCallback, useEffect, useState } from "react";
import { useRole } from "../../context/roles-context";

const RoleCard = ({ ds, action }) => {
  const { allRoles, selected_role } = useRole();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="under-card" data-aos="fade-up">
        <div
          className={`${
            selected_role?.name === ds.name ? "selected-card" : ""
          } datasource-card card  `}
          onClick={() => action()}
          data-cy="role_card"
        >
          <div
            style={{ paddingTop: 50 + "px", textTransform: "capitalize" }}
            className="category-title"
          >
            {ds?.dutch_name}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoleCard;
