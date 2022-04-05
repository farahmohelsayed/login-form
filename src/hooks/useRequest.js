import { useContext, useState } from "react";
import { authContext } from "../components/store/auth-context";

const useRequest = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const authctx = useContext(authContext);

  const fetchRequests = async (url, user, navigationDetails, login) => {
    setError(null);
    setIsLoading(true);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    });
    setIsLoading(false);
    if (!response.ok) {
      if (login) {
        setError("Wrong email or password combination");
      } else {
        setError("Authentication Failed, email already in use");
      }
    } else if (response.ok) {
      const data = await response.json();
      if (login) {
      //  const expirationTime = Date.now() + +data.expiresIn * 1000

        authctx.login(data.idToken, Date.now() + data.expiresIn*1000);
      }
      navigationDetails();
    }
  };
  return { isLoading, error, fetchRequests };
};
export default useRequest;
