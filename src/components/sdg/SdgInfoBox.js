import React, { useCallback, useState } from "react";
import { useSDG } from "../../context/sdg-context";

const SdgInfoBox = ({ closePopup, csr=""}) => {
  const { selected_SDG: sdg, setSelected_SDG } = useSDG();

  const [selectedSubSDG, setSelectedSubSDG] = useState({});

  const changeSelectedSub = useCallback((number) => {
    setSelectedSubSDG(number);
  }, []);

  return (
    <>
      <div className="sdg-info" style={{ backgroundColor: sdg.color }}>
        <div className="sdg-info-title">{sdg?.name}</div>
        <div className="sdg-info-desc">{sdg?.description}</div>
        <div className="close" onClick={() => closePopup()}>
          +
        </div>
        <ul className="subsdg-options">
          {sdg?.children?.filter(c=>{
            if(csr) return c.number === csr.sdgNumber 
            return c
          }).map((child) => {
            return (
              <li
                className={`subsdg-button ${
                  child.number === selectedSubSDG.number && "selectedSub"
                }`}
                onClick={() => changeSelectedSub(child)}
                key={child.number}
              >
                {child?.number}
              </li>
            );
          })}
        </ul>

        <div className="sdg-info-details">{selectedSubSDG.description}</div>
      </div>
    </>
  );
};

export default SdgInfoBox;
