import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import fluviusIcon from "../../assets/images/fluvius_icon.svg";
import { useLogout, useSession } from "../../context/user-context";
import { useNavigate } from "react-router";
import { useRole } from "../../context/roles-context";

const Navigation = () => {
  const { user } = useSession();
  const logout = useLogout();
  const navigate = useNavigate();

  const [logoutShown, setLogoutShown] = useState(false);
  const logoutref = useRef();
  const { allRoles, selected_role, setselected_Role } = useRole();

  const [userUpp, setUserUpp] = useState(user);

  const [links, setLinks] = useState([]);

  const changeSelected = useCallback(
    (link) => {
      if (user === null) return;

      if (
        link?.accessible === "director" ||
        link?.accessible === "management"
      ) {
        setselected_Role(allRoles.find((e) => e.name === link.accessible));
      }

      const n_links = [];

      links.forEach((e) => {
        e.selected = e !== link ? false : true;
        n_links.push(e);
      });

      setLinks(n_links);
    },
    [user, links]
  );

  useEffect(() => {
    setUserUpp(allRoles.find((e) => e.name == user?.role));
  }, [allRoles, user]);

  const logoutAccount = useCallback(() => {
    logout();
    navigate("/login", { replace: true });
  }, []);

  return (
    <>
      <header>
        <nav id="fixed_nav">
          <div className="elements" data-cy="navigation_bar">
            <Link
              className=""
              to={"/categories"}
              onClick={() => changeSelected()}
            >
              <div id="fluvius_icon">
                <img
                  className="nav-icon"
                  src={fluviusIcon}
                  alt="Fluvius icon"
                />
              </div>
            </Link>

            <div className="fluvius-name">Fluvius</div>
            <div>
              {userUpp?.customizable == 1 ? (
                <Link
                  to="/personalise"
                  onClick={() => changeSelected()}
                  className="nav-text-link"
                  data-cy="personaliseren"
                >
                  Personaliseren
                </Link>
              ) : (
                ""
              )}
            </div>
            {user?.role == "mvo_coordinator" ? (
              <Link
                to="/roles"
                onClick={() => changeSelected()}
                className="nav-text-link"
                data-cy="nav_beheren"
              >
                Template beheren
              </Link>
            ) : (
              ""
            )}
            <div className="nav-user-main">
              <button
                data-cy="log_out"
                onClick={() => {
                  logoutAccount();
                }}
                className="nav-text-link"
              >
                {user?.username}
                <i className="fa-solid fa-right-from-bracket"></i>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
