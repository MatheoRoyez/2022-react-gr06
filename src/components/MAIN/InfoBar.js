import SdgIcon from "../sdg/SdgIcon";
import { Link } from "react-router-dom";
import { useSDG } from "../../context/sdg-context";
import { sortBySdgNumber } from "../../functions/helper";

const InfoBar = ({ item, showPopup, csr = "", isEmpty = false }) => {
  const { allSDG } = useSDG();

  if (allSDG) {
    allSDG.sort((s1, s2) => {
      return sortBySdgNumber(s1.number, s2.number);
    });
  }

  return (
    <>
      <ul className="category-bar">
        <li data-cy="card_name" className="category-title">
          {item?.name}
        </li>
        <li
          className="category-icon"
          style={{ backgroundColor: item?.icon }}
        ></li>
        <li></li>
        <li>
          {!isEmpty && !csr ? (
            <Link to={"/csr/all"} className={"under-filter-button"}>
              <div className="under-filter-button">
                <button data-cy="filter-button" className="filter-button">
                  Filteren
                </button>
              </div>
            </Link>
          ) : (
            <div></div>
          )}
        </li>
        <li>
          <ul className="sdg-list">
            {allSDG
              ?.filter((sdg) => {
                if (csr)
                  return csr && sdg?.number === csr.sdgNumber.split(".")[0];
                return sdg;
              })
              .map((sdg) => {
                return <SdgIcon sdg={sdg} key={sdg.id} showPopup={showPopup} />;
              })}
          </ul>
        </li>
      </ul>
    </>
  );
};

export default InfoBar;
