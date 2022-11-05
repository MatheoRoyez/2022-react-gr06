import { useSDG } from "../../context/sdg-context";
import { useCallback } from "react";

const SdgIcon = ({ sdg, showPopup }) => {
  const { setSelected_SDG } = useSDG();

  const changeSDG_POPUP = useCallback((sdg) => {
    setSelected_SDG(sdg);
    showPopup();
  }, []);

  return (
    <div className="under-sdg-icon">
      <div
        className="sdg-icon"
        onClick={() => changeSDG_POPUP(sdg)}
        data-cy="sdg-icon"
        style={{
          backgroundColor: sdg.color,
          color: "white",
        }}
      >
        {sdg?.number}
      </div>
    </div>
  );
};

export default SdgIcon;
