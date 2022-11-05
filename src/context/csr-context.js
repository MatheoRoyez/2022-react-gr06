import React, {
  useState,
  createContext,
  useCallback,
  useMemo,
  useContext,
  useEffect,
} from "react";
import { useCategory } from "./categorie-context";
import * as csrApi from "../backend/api/csrs";
import * as categoryApi from "../backend/api/categories";
import { useSession } from "./user-context";

export const CSR_Context = createContext();
export const useCSR = () => useContext(CSR_Context);

export const CSR_Provider = ({ children }) => {
  const { selected_category } = useCategory();
  const { ready: authReady } = useSession();
  const [selected_CSR, setSelected_CSR] = useState({});
  const [allCSR, setAllCSR] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [initialLoad, setInitialLoad] = useState(false);

  const fetchAllCSR = useCallback(async () => {
    try {
      if (!Boolean(selected_category)) return;
      setError({});
      setLoading(true);
      const data = await categoryApi.getCSRGoalsByCategoryId(
        selected_category?.id
      );
      setAllCSR(data.data);
    } catch (error) {
      console.error(error);
      if (error.response.status === 404) {
        setError({
          title: "Huh, geen doelstellingen?",
          description:
            "We hebben nog geen doelstellingen toegevoegd aan deze categorie. Kijk later nog eens!",
        });
      } else {
        setError({
          title: "Oei, er is een probleem opgetreden.",
          description:
            "We konden de doelstellingen niet ophalen. Kijk later nog eens!",
        });
      }
    } finally {
      setLoading(false);
    }
  }, [selected_category]);

  useEffect(() => {
    fetchAllCSR();
  }, [selected_category, fetchAllCSR]);

  const getSpecificCSR = useCallback(async (id) => {
    try {
      setError({});
      setLoading(true);
      const csr = await csrApi.getCSRByID(id);
      setSelected_CSR(csr);
    } catch (error) {
      setError({
        title: "Oei, er is iets misgelopen!",
        description: `We konden de doelstelling niet vinden`,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      selected_CSR,
      setSelected_CSR,
      getSpecificCSR,
      allCSR,
      error,
      loading,
      fetchAllCSR,
    }),
    [
      selected_CSR,
      setSelected_CSR,
      getSpecificCSR,
      fetchAllCSR,
      allCSR,
      error,
      loading,
    ]
  );

  return <CSR_Context.Provider value={value}>{children}</CSR_Context.Provider>;
};
