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
import { useSession } from "./user-context";
import * as sdgApi from "../backend/api/sdgs";

export const SDG_Context = createContext();
export const useSDG = () => useContext(SDG_Context);

export const SDG_Provider = ({ children }) => {
  const { selected_category } = useCategory();
  const { ready: authReady } = useSession();
  const [selected_SDG, setSelected_SDG] = useState({});
  const [allSDG, setAllSDG] = useState();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("NO ERROR");

  // alles ophalen van data
  const fetchAllSDG = useCallback(async () => {
    try {
      if (!Boolean(selected_category)) return;
      setError("NO ERRORS FOUND");
      setLoading(true);
      const data = await sdgApi.getAllSDGSByCategoryId(selected_category?.id);
      setAllSDG(data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [selected_category]);

  useEffect(() => {
    fetchAllSDG();
  }, [selected_category, fetchAllSDG]);

  const value = useMemo(
    () => ({
      selected_SDG,
      setSelected_SDG,
      allSDG,
      error,
      loading,
    }),
    [selected_SDG, setSelected_SDG, allSDG, error, loading]
  );

  return <SDG_Context.Provider value={value}>{children}</SDG_Context.Provider>;
};
