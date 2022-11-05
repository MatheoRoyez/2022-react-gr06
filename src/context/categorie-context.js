import React, {
  useState,
  createContext,
  useCallback,
  useMemo,
  useContext,
  useEffect,
} from "react";
import * as categoryApi from "../backend/api/categories";
import { useSession } from "./user-context";

export const Category_Context = createContext();
export const useCategory = () => useContext(Category_Context);

export const Category_Provider = ({ children }) => {
  const { ready: authReady } = useSession();
  const [selected_category, setSelected_category] = useState();
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [initialLoad, setInitialLoad] = useState(false);

  const fetchAll = useCallback(async () => {
    try {
      setError({});
      setLoading(true);
      const data = await categoryApi.getAllCategories();
      setAllCategories(data.data);
    } catch (error) {
      setError({
        title: "Oei, er is iets misgelopen!",
        description: "Het overzicht van categorieën kon niet opgehaald worden.",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authReady) {
      fetchAll();
      setInitialLoad(true);
    }
  }, [authReady, , fetchAll]);
  const value = useMemo(
    () => ({
      selected_category,
      setSelected_category,
      allCategories,
      error,
      loading,
    }),
    [selected_category, setSelected_category, allCategories, error, loading]
  );

  return (
    <Category_Context.Provider value={value}>
      {children}
    </Category_Context.Provider>
  );
};
