import React, {
  useState,
  createContext,
  useCallback,
  useMemo,
  useContext,
  useEffect,
} from "react";
import * as roleApi from "../backend/api/roles";
import { useSession } from "./user-context";

export const Role_Context = createContext();
export const useRole = () => useContext(Role_Context);

export const Role_Provider = ({ children }) => {
  const { ready: authReady } = useSession();
  const [allRoles, setAllRoles] = useState([]);
  const [selected_role, setselected_Role] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [initialLoad, setInitialLoad] = useState(false);

  const fetchAlRoles = useCallback(async () => {
    try {
      setError({});
      setLoading(true);
      const data = await roleApi.getAllRoles();
      setAllRoles(rollenToDutch(data.data));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateCustomizable = useCallback(
    async (name, customizable) => {
      try {
        setError();
        setLoading(true);
        const role = await roleApi.updateCustomizable(name, customizable);
        await fetchAlRoles();
        return role;
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [fetchAlRoles]
  );

  const dutch_names = {
    mvo_coordinator: "MVO-coördinator",
    director: "Directie",
    stakeholder: "Stakeholder",
    management: "Manager",
  };

  const rollenToDutch = useCallback((rollen) => {
    rollen.map((e) => (e.dutch_name = dutch_names[e.name]));
    return rollen;
  }, []);

  useEffect(() => {
    if (authReady && !initialLoad) {
      fetchAlRoles();
      setInitialLoad(true);
    }
  }, [authReady, initialLoad, fetchAlRoles]);

  const value = useMemo(
    () => ({
      selected_role,
      setselected_Role,
      updateCustomizable,
      allRoles,
      error,
      loading,
    }),
    [selected_role, allRoles, updateCustomizable, error, loading]
  );

  return (
    <Role_Context.Provider value={value}>{children}</Role_Context.Provider>
  );
};
