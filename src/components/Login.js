import { Link, useHistory } from "react-router-dom";
import useInput from "../hooks/useInput";
import Card from "./Layout/Card";
import styles from "./Login.module.css";
import Button from "./UI/Button";
import Form from "./UI/Form";
import TextField from "./UI/TextField";
import useRequest from "../hooks/useRequest";

const isEmail = (value) => value.trim().includes("@" && ".com");
const isPassLength = (value) => value.trim().length > 8;

function Login() {
  const navigate = useHistory();

  const {
    value: email,
    inputHandler: emailInputHandler,
    blurHandler: emailBlurHandler,
    isValid: isEmailValid,
    isInvalid: isEmailInvalid,
  } = useInput(isEmail);

  const {
    value: password,
    inputHandler: passwordInputHandler,
    blurHandler: passwordBlurHandler,
    reset: resetPassword,
    isValid: isPasswordValid,
    isInvalid: isPasswordInvalid,
  } = useInput(isPassLength);

  let isFormValid = false;
  if (isEmailValid && isPasswordValid) {
    isFormValid = true;
  }
  const data = {
    email: email,
    password: password,
  };
  const navigationDetails = () => {
    navigate.replace("/profile");
  };
  const { isLoading: loading, error, fetchRequests } = useRequest();

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    fetchRequests(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDEZtTOdhzErGIlUj5SL03Ff6mZdJu8Wug",
      data,
      navigationDetails,
      true
    );
  };

  return (
    <Card>
      <Form title="Login" submitHandler={submitHandler}>
      <p className="error">{error}</p>
        <TextField
          type="text"
          label="Email"
          value={email}
          inputHandler={emailInputHandler}
          blurHandler={emailBlurHandler}
          isInvalid={isEmailInvalid}
        />

        {isEmailInvalid && (
          <p className={styles.error}>Invalid or empty email</p>
        )}

        <TextField
          type="password"
          label="Password"
          value={password}
          inputHandler={passwordInputHandler}
          blurHandler={passwordBlurHandler}
          isInvalid={isPasswordInvalid}
        />
        {isPasswordInvalid && (
          <p className={styles.error}>Invalid or empty password field</p>
        )}

        <div className={styles["forget-pass"]}>
          <Link to="/forgetPassword">Forgot Password?</Link>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Button isValid={isFormValid}>Login</Button>
        )}
      </Form>
      <div className={styles["sign-up"]}>
        <p>
          Not a member? <Link to="/signup"> Signup</Link>
        </p>
      </div>
    </Card>
  );
}

export default Login;
