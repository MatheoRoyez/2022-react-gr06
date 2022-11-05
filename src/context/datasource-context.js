import React, {
    useState,
    createContext,
    useCallback,
    useMemo,
    useContext,
    useEffect,
  } from "react";
  import { get } from "../backend/mock-data/mock-sdgs";
  import { ACTION } from "../backend/api-calls";
  import { useCategory } from "./categorie-context";
  import * as datsourceApi from "../backend/api/datasources";
  import * as categoryApi from "../backend/api/categories";
  import { useSession } from "./user-context";
  
  export const Datasource_Context = createContext();
  export const useDatasource = () => useContext(Datasource_Context);
  
  export const Datasource_Provider = ({ children }) => {
    const [selected_datasource, setSelected_datasource] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
  
    
    const getSpecificDatasource = useCallback(async (id) => {
      try {
        setError({});
        setLoading(true);
        const datasource = await datsourceApi.getDatasourceByID(id);
        setSelected_datasource(datasource);
      } catch (error) {
        setError({
          title: "Oei, er is iets misgelopen!",
          description: `We konden de doelstelling niet vinden`,
        });
      } finally {
        setLoading(false);
      }
    }, []);
  

    // alle data die beschikbaar moet zijn voor de componenten
    const value = useMemo(() => ({
        getSpecificDatasource,
        selected_datasource,
        setSelected_datasource,
        error,
        loading,
    }), [getSpecificDatasource,selected_datasource,setSelected_datasource, error, loading]);
    
    return ( 
    <Datasource_Context.Provider value = {value} > 
        {children} 
    </Datasource_Context.Provider>
    );
};
  