import { useContext } from "react";
import { authContext } from "./store/auth-context";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-bootstrap";
const Profile = () => {
  const navigate = useHistory();
  const authctx = useContext(authContext);
  const logoutHandler = () => {
    authctx.logout();
    navigate.replace("/");
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick={logoutHandler}>Log out</button>
    </div>
  );
};
export default Profile;
