import React, { useState, useEffect } from "react";
import CsrCard from "../../components/csr/CsrCard";
import { csrs } from "../../backend/mock-data/all-mock";
import { Link } from "react-router-dom";
import { useCSR } from "../../context/csr-context";

const CsrDashboard = ({ csrs }) => {
  const { setSelected_CSR } = useCSR();

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div
      className="category-grid-all"
      style={
        matches
          ? {
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(2, 250px)",
            }
          : {
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(4, 250px)",
            }
      }
    >
      {
        /*generatedTemplate.tiles*/ csrs.data.map((csr) => {
          return (
            <Link
              to={`/csr/${csr.id}`}
              onClick={() => setSelected_CSR(csr)}
              className="link-nodeco"
              key={csr.id}
            >
              <CsrCard key={csr.id} csr={csr} /* icon={cat} */ />
            </Link>
          );
        })
      }
    </div>
  );
};

export default CsrDashboard;
