import { Route, Switch } from "react-router-dom";
import ForgetPass from "./components/ForgetPass";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import { authContext } from "./components/store/auth-context";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
function App() {
  const authctx = useContext(authContext);
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/forgetPassword">
          <ForgetPass />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/profile">
          {authctx.isLoggedIn && <Profile />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
