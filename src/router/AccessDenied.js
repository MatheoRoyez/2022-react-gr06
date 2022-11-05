import React, { useContext } from "react";
import { useSDG } from "../context/sdg-context";
import Nav from "../components/MAIN/Navigation";
import Error from "../components/MAIN/Error";

const MainPage = () => {
  const { allSDG } = useSDG();

  return (
    <>
      <Error
        error={{
          title: "Geen toegang.",
          description: "Sorry, maar je hebt toegang tot deze pagina.",
        }}
      />
    </>
  );
};

export default MainPage;
