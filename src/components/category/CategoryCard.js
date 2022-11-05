import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const CategoryCard = ({ category }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  let main = { test: "yes" };
  let titlesection = {};
  let mvosection = {};

  switch (category?.mvo_ids?.length) {
    case 0:
      break;
    case 1:
      titlesection = {
        width: "100%",
      };

      main = {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
      };
      break;
    case 2:
      titlesection = {
        width: "100%",
        height: "50%",
      };

      mvosection = {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        height: "50%",
      };

      break;
    case 4:
      titlesection = {
        width: "100%",
        height: "50%",
      };

      mvosection = {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        height: "50%",
      };
      break;
  }

  return (
    <div
      className="under-card"
      data-aos="fade-up"
      style={{
        gridArea: category.cat_id,
      }}
    >
      <div
        className="category-card card"
        style={{ padding: "15px" }}
        data-cy="dashboard_item"
      >
        <div className="category-title-section" style={main}>
          <div className="category-title" style={{ ...titlesection }}>
            {category?.name}
          </div>
          <div
            className="icon-bottom category-icon"
            style={{
              backgroundColor: category?.icon,
            }}
          />
          {}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
