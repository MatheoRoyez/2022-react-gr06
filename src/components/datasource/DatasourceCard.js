import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const DatasourceCard = ({ ds }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="under-card" data-aos="fade-up" data-cy="datasource_item">
        <div data-cy="datasource_card" className="datasource-card card">
          <div className="datasource-title">{ds?.name}</div>
          <div className="datasource-source">{ds?.soort}</div>
        </div>
      </div>
    </>
  );
};

export default DatasourceCard;
