import React, { useContext } from "react";
import { useSDG } from "../context/sdg-context";
import Nav from "../components/MAIN/Navigation";
import Dashboard from "../components/MAIN/Dashboard";

const MainPage = () => {
  {
    /* WERKT DIT TEST */
  }
  {
    /* Momenteel niet */
  }
  const { allSDG } = useSDG();

  return (
    <>
      <main>
        <Dashboard />
      </main>
    </>
  );
};

export default MainPage;
