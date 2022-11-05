import { useParams } from "react-router-dom";
import InfoBar from "../../components/MAIN/InfoBar";
import React, { useState, useEffect, useCallback, useRef } from "react";
import InfoCard from "../../components/MAIN/InfoCard";
import ItemList from "../../components/MAIN/ItemList";
import { useBreadcrumbs } from "../../context/breadcrumb-context";
import { useCategory } from "../../context/categorie-context";
import { useCSR } from "../../context/csr-context";
import Statistics from "../../components/MAIN/Statistics";
import { useSDG } from "../../context/sdg-context";
import Loading from "../../components/MAIN/Loading";
import Error from "../../components/MAIN/Error";
import SdgInfoBox from "../../components/sdg/SdgInfoBox";
import { useSession } from "../../context/user-context";
import { isAchieved } from "../../functions/helper";

const CSRDetails = () => {
  const { selected_category: cat } = useCategory();

  const { catid, csrid: id } = useParams();

  const {
    selected_CSR: csr,
    setSelected_CSR,
    getSpecificCSR,
    loading,
  } = useCSR();
  const { allSDG: sdgs } = useSDG();

  const { setBreadcrumbs } = useBreadcrumbs();
  const sdginfo = useRef();
  const { user } = useSession();

  useEffect(() => {
    setSelected_CSR(getSpecificCSR(id));
  }, [id, getSpecificCSR]);

  const showPopup = useCallback(() => {
    sdginfo.current.style.display = "flex";
  }, []);

  const closePopup = useCallback(() => {
    sdginfo.current.style.display = "none";
  }, []);

  useEffect(() => {
    setBreadcrumbs([
      { name: "home", url: "/categories", key: "allCategories" },
      {
        name: cat?.name,
        prefix: "Categorie - ",
        url: `/category/${cat?.id}`,
        key: `Category-${cat?.id}`,
      },
      {
        name: csr?.name,
        prefix: "MVO - ",
        url: `/category/${cat?.id}/csr/${id}`,
        key: `CSR-${csr?.id}`,
      },
    ]);
  }, [id, setBreadcrumbs, csr]);

  //allCategories, fetchData, catid, setSelected_category, id, sdgs, csr.id
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!csr.hasOwnProperty("id")) {
    return (
      <Error
        error={{
          title: "Oei, er is iets misgelopen!",
          description: "De data voor deze MVO kon niet worden opgehaald.",
        }}
      />
    );
  }
  return (
    <>
      <InfoBar item={csr} showPopup={showPopup} csr={csr} />

      <div
        className="mvo-info-template"
        style={
          matches
            ? {
                gridTemplateAreas:
                  '"value graph graph graph" "threshold graph graph graph"',
                gridTemplateColumns: "repeat(4, 1fr)",
                // gridTemplateRows: "repeat(2, 250px)",
                // marginBottom: "75px",
              }
            : {
                gridTemplateAreas:
                  '"graph graph" "graph graph" "graph graph" "value threshold"',
                gridTemplateColumns: "repeat(2, 1fr)",
                // gridTemplateRows: "repeat(4, 250px)",
                // marginBottom: "75px",
              }
        }
      >
        <div style={{ gridArea: "value" }}>
          <InfoCard
            title={"Behaalde waarde: "}
            value={csr.value + " " + csr.unit}
            isAchieved={isAchieved(csr)}
          ></InfoCard>
        </div>

        <div style={{ gridArea: "threshold" }}>
          <InfoCard
            title={"Doelwaarde: "}
            value={
              ((csr.threshold.behaviour === "lowerThanValue" && " < ") ||
                (csr.threshold.behaviour === "higherThanValue" && " > ")) +
              csr.threshold.value +
              " " +
              csr.unit
            }
            isAchieved={isAchieved(csr)}
          ></InfoCard>
        </div>

        <div style={{ gridArea: "graph" }}>
          {/* <InfoCard title={"GRAPH: "} value={"NO GRAPH"}></InfoCard> */}
          <Statistics csr={csr} />
        </div>
      </div>
      {user.role === "management" && csr.hasOwnProperty("datasources") ? (
        <ItemList name={"Gegevensbronnen"} items={csr.datasources} />
      ) : user.role !== "stakeholder" && csr.hasOwnProperty("csrs") ? (
        <ItemList name={"Subdoelstellingen"} items={csr.csrs} />
      ) : (
        <div></div>
      )}

      <div ref={sdginfo} className="sdg-info-back">
        <SdgInfoBox closePopup={closePopup} csr={csr} />
      </div>
    </>
  );
};

export default CSRDetails;
