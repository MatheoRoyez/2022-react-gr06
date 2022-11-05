import { useCallback, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import LabelInput from "../components/MAIN/LabelInput";
import { useLogin, useSession } from "../context/user-context";
import { useNavigate } from "react-router-dom";
import FluvPattern from "../assets/images/fluvius_pattern_green_cut.svg";
import FluvLogo from "../assets/images/fluvius_logo_white.svg";
import { Navigate } from "react-router-dom";

const validationRules = {
  username: {
    required: true,
  },
  password: {
    required: true,
  },
};

export default function Login() {
  const login = useLogin();
  const navigate = useNavigate();
  const { loading, error, isAuthed, user } = useSession();
  const methods = useForm();
  const { handleSubmit, reset } = methods;
  const onSubmit = useCallback(
    async ({ Wachtwoord: password, Gebruikersnaam: user }) => {
      const success = await login(user, password);
      if (success) {
        navigate("/categories", { replace: true });
      }
    },
    [navigate, login]
  );

  if (isAuthed) {
    return <Navigate to={"/categories"} replace />;
  }

  return (
    <FormProvider {...methods}>
      <div className="login">
        <div className="login_details">
          <h1>Inloggen</h1>
          <p className="login-text-info">Kijk hoe we ons steenje bijdragen!</p>
          <div className="under-button" style={{ backgroundColor: "#7FA5B4" }}>
            <button
              id="btn_eId"
              data-cy="login_eid"
              onClick={() =>
                onSubmit({
                  Wachtwoord: "stakeholder",
                  Gebruikersnaam: "stakeholder",
                })
              }
            >
              Log in met eID
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>
              <span>Of log in met account</span>
            </h2>
            {error ? (
              <p className="login-error" data-cy="login_failed">
                {error}
              </p>
            ) : null}
            <LabelInput
              id="username"
              label="Gebruikersnaam"
              type="text"
              defaultvalue=""
              validation={validationRules.username}
              data-cy="username_input"
            />
            <LabelInput
              id="password"
              label="Wachtwoord"
              type="password"
              defaultvalue=""
              validation={validationRules.password}
              data-cy="password_input"
            />
            <label className="remember-me hidemarks">
              <input type="checkbox" id="exampleCheck" />
              <span className="checkmark"></span>
              Onthoud mij
            </label>

            <div
              className="under-button"
              style={{ backgroundColor: "#7FA5B4" }}
            >
              <button id="btn_inloggen" type="submit" data-cy="submit_btn">
                Inloggen
              </button>
            </div>
          </form>
        </div>

        <div className="login_svg">
          <div>
            <img src={FluvLogo} id="fluvius-logo" />
            <p>
              Er is nog een hoop werk aan de winkel voor een duurzame toekomst.
            </p>
            <br />
            <p>Kijk hoe wij ons steentje bijdragen!</p>
          </div>
          <img src={FluvPattern} id="fluvius-pattern" />
        </div>
      </div>
    </FormProvider>
  );
}
