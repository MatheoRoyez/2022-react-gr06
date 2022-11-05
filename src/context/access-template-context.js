import React, {
  useState,
  createContext,
  useMemo,
  useContext,
  useEffect,
} from "react";
import { useRole } from "./roles-context";

export const Access_Template_Context = createContext();
export const useAccessTemplate = () => useContext(Access_Template_Context);

export const Access_Template_Provider = ({ children }) => {
  const [enabled, setEnabled] = useState(false);

  const { selected_role } = useRole();

  useEffect(() => {
    setEnabled(false);
  }, [selected_role]);

  const value = useMemo(
    () => ({
      enabled,
      setEnabled,
    }),
    [enabled, setEnabled]
  );

  return (
    <Access_Template_Context.Provider value={value}>
      {children}
    </Access_Template_Context.Provider>
  );
};
