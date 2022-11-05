import AOS from "aos";
import "aos/dist/aos.css";
import React, { useCallback, useEffect } from "react";

import { isAchieved } from "../../functions/helper";

const CsrCard = ({ csr, isMini = false, icon }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const isComplete = useCallback(() => isAchieved(csr), [csr]);

  return (
    <>
      <div
        className="under-card"
        style={{ backgroundColor: icon }}
        data-aos="fade-up"
      >
        <div
          className={`card csr-card`}
          data-cy="dashboard_csr_item"
          style={isMini ? { backgroundColor: "#EFEFEF", padding: "30px" } : {}}
        >
          <div className={` ${isMini ? "mini-csr-title" : "csr-title"}`}>
            {csr?.name}
          </div>
          <div
            className={`csr-value ${
              isComplete() ? "csrcomplete" : "csruncomplete"
            }`}
          >
            <p>
              Bereikt: {csr?.value} {csr?.unit}
            </p>
            <p>
              Doel: {csr?.threshold.behaviour === "lowerThanValue" && "<"}{" "}
              {csr?.threshold.behaviour === "higherThanValue" && ">"}{" "}
              {csr?.threshold.value}
            </p>
          </div>
          {!isMini && (
            <div className="sdg-number-csr-card">{csr?.sdgNumber}</div>
          )}
          <div
            className="icon-bottom category-icon"
            style={{ backgroundColor: csr.icon }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default CsrCard;
