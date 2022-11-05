import React, { useState, createContext, useMemo, useContext } from "react";

export const Breadcrumb_Context = createContext();
export const useBreadcrumbs = () => useContext(Breadcrumb_Context);

export const Breadcrumb_Provider = ({ children }) => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const value = useMemo(
    () => ({
      breadcrumbs,
      setBreadcrumbs,
    }),
    [breadcrumbs, setBreadcrumbs]
  );

  return (
    <Breadcrumb_Context.Provider value={value}>
      {children}
    </Breadcrumb_Context.Provider>
  );
};
