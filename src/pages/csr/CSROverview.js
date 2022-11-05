import { useCallback, useEffect, useState } from "react";
// import { csrs } from "../../backend/mock-data/all-mock";
import { SdgForCategory } from "../../backend/mock-data/all-mock";
import DashBoard from "../../components/MAIN/Dashboard";
import { useCategory } from "../../context/categorie-context";
import { useCSR } from "../../context/csr-context";
import { useSDG } from "../../context/sdg-context";
import { useNavigate } from "react-router-dom";

const CSROverview = () => {
  const navigate = useNavigate();
  const [filteredCSR, setFilteredCSR] = useState([]);
  const [searchValue, setSearchValue] = useState();

  const { selected_category } = useCategory();
  const { allCSR: csrs } = useCSR();
  const { allSDG: sdgs } = useSDG();

  useEffect(() => {
    ["/", undefined].includes(searchValue)
      ? setFilteredCSR(csrs)
      : setFilteredCSR(csrs.filter((e) => e.sdgNumber.split('.')[0] == searchValue));
  }, [searchValue]);

  const initDashboard = useCallback(() => {
    filteredCSR.map((e) => (e.card_type = "CSR"));
    return filteredCSR;
  }, [filteredCSR]);

  return (
    <>
      <div className="filter-top">
        <div className="filter-title">
          <div className="category-title">{selected_category.name}</div>
          <div
            className="category-icon"
            style={{ backgroundColor: selected_category.icon }}
          />
        </div>

        <select
          className="filter-sdg"
          defaultValue={"/"}
          onChange={(e) => {
            if (e.target.value === "/") navigate(-1);
            else setSearchValue(e.target.value);
          }}
        >
          {sdgs.map((s) => {
            return (
              <option key={s.number} value={s.number}>
                {s.number}. {s.name}
              </option>
            );
          })}
          <option value={"/"}>Geen filter</option>;
        </select>
      </div>

      <DashBoard items={initDashboard()} />
    </>
  );
};

export default CSROverview;
