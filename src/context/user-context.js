import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as usersApi from "../backend/api/users";
import config from "../config.json";
import * as api from "../backend/api";
import { Buffer } from "buffer";

const JWT_TOKEN_KEY = config.token_key;
const User_Context = createContext();

//kijken of JWT token nog geldig is
function parseJwt(token) {
  if (!token) return {};
  const base64Url = token.split(".")[1];
  const payload = Buffer.from(base64Url, "base64");
  const jsonPayload = payload.toString("ascii");
  return JSON.parse(jsonPayload);
}

//functie om expire date van JWT te parsen
function parseExp(exp) {
  if (!exp) return null;
  if (typeof exp !== "number") exp = Number(exp);
  if (isNaN(exp)) return null;
  return new Date(exp * 1000);
}

const useUser = () => useContext(User_Context);

export const useSession = () => {
  const {
    loading,
    token,
    user,
    ready,
    error,
    template,
    deleteUserTemplate,
    fetchTemplateForUser,
    updateUserTemplate,
  } = useUser();
  return {
    loading,
    token,
    user,
    ready,
    isAuthed: Boolean(token),
    error,
    template,
    deleteUserTemplate,
    fetchTemplateForUser,
    updateUserTemplate,
  };
};

export const useLogin = () => {
  const { login } = useUser();
  return login;
};

export const useLogout = () => {
  const { logout } = useUser();
  return logout;
};

export const User_Provider = ({ children }) => {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState(localStorage.getItem(JWT_TOKEN_KEY));
  const [user, setUser] = useState(null);
  const [template, setTemplate] = useState({});

  const setSession = useCallback(async (token, user) => {
    //parsen token en halen expire date eruit
    const { exp, id } = parseJwt(token);
    //converteren dit naar datum
    const expiry = parseExp(exp);
    //controleren of hij nog geldig is
    const stillValid = expiry >= new Date();

    //als token geldig is, opgeslagen in localStorage
    if (stillValid) {
      localStorage.setItem(JWT_TOKEN_KEY, token);
    } else {
      localStorage.removeItem(JWT_TOKEN_KEY);
      token = null;
    }

    //we houden token bij in state en axios
    api.setAuthToken(token);
    setReady(stillValid);
    setToken(token);

    if (stillValid) {
      user = await usersApi.getById(id);

      await fetchTemplateForUser();
    }

    setUser(user);
  }, []);

  const fetchTemplateForUser = useCallback(async () => {
    const template = await usersApi.getTemplate();
    setTemplate(template);
  }, [user, template]);

  const deleteUserTemplate = useCallback(async () => {
    await usersApi.deleteTemplate();
    await fetchTemplateForUser();
  }, [user]);

  const updateUserTemplate = useCallback(async (template) => {
    await usersApi.updateTemplate(template);
    await fetchTemplateForUser();
  });

  useEffect(() => {
  }, [template]);

  //useEffect die ervoor zorgt dat token behouden blijft tussen de verschillende keren dat we naar de website gaan
  useEffect(() => {
    setSession(token, null);
  }, [token, setSession]);

  const login = useCallback(
    async (username, password) => {
      try {
        setError("");
        setLoading(false);
        const { token, user } = await usersApi.login(username, password);
        setSession(token, user);
        return true;
      } catch (error) {
        console.error(error.response.status);
        if (error.response.status === 403) {
          setError(
            "Uw account is geblokkeerd. Gelieve de admin te contacteren."
          );
        } else {
          setError("Uw gebruikersnaam en/of wachtwoord komen niet overeen.");
        }

        return false;
      } finally {
        setLoading(false);
      }
    },
    [setSession]
  );

  const logout = useCallback(() => {
    setSession(null, null);
  }, [setSession, setUser]);

  const value = useMemo(
    () => ({
      deleteUserTemplate,
      token,
      user,
      ready,
      error,
      loading,
      login,
      logout,
      template,
      fetchTemplateForUser,
      updateUserTemplate,
    }),
    [
      token,
      user,
      ready,
      error,
      loading,
      login,
      logout,
      template,
      deleteUserTemplate,
      fetchTemplateForUser,
      updateUserTemplate,
    ]
  );

  return (
    <User_Context.Provider value={value}>{children}</User_Context.Provider>
  );
};
