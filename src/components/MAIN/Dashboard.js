import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Card from "./Card";

const DashBoard = ({
  items,
  areas = {
    narrow: "",
    wide: "",
  },
}) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  useEffect(() => {}, [matches]);

  //sorteer mvo doelstellingen op naam
  items.sort((i1, i2) => i1?.name.localeCompare(i2?.name));
  return (
    <>
      <div
        className="template"
        data-cy="dashboard"
        style={
          matches
            ? {
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateAreas: areas?.wide,
              }
            : {
                gridTemplateAreas: areas?.narrow,
                gridTemplateColumns: "repeat(2, 1fr)",
              }
        }
      >
        {items.map((item) => {
          return (
            <div
              key={item.id}
              style={
                !Boolean(areas.wide) && !Boolean(areas.narrow)
                  ? {}
                  : { gridArea: item.place }
              }
            >
              <Card
                type={item.card_type}
                card_content={item}
                onClick={item?.handleClick}
                action={() => item?.action()}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DashBoard;
