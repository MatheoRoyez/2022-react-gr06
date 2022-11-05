import { useLocation, Navigate } from "react-router-dom";
import { useSession } from "../context/user-context";
import AccessDenied from "./AccessDenied";

export default function PrivateRoute({ children, roles }) {
  const { isAuthed, user } = useSession();
  const { pathname } = useLocation();

  if (user === null) return;

  if (!roles.includes(user.role)) {
    return <AccessDenied />;
  }

  if (!isAuthed) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
