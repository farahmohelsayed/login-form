import Card from "./Layout/Card";
import styles from "./SignUp.module.css";
import TextField from "./UI/TextField";
import Form from "./UI/Form";
import Button from "./UI/Button";
import { Link, useHistory } from "react-router-dom";
import useRequest from "../hooks/useRequest";
import useInput from "../hooks/useInput";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (email) => email.includes("@" && ".com");
const isPassLength = (pass) => pass.length > 8;

const SignUp = () => {
  const navigate = useHistory();
  const {
    value: fName,
    inputHandler: fNameInputHandler,
    blurHandler: fNameBlurHandler,
    isValid: isfNameValid,
    isInvalid: isfNameInvalid,
    reset: resetfName,
  } = useInput(isNotEmpty);

  const {
    value: lName,
    inputHandler: lNameInputHandler,
    blurHandler: lNameBlurHandler,
    isValid: islNameValid,
    isInvalid: islNameInvalid,
    reset: resetlName,
  } = useInput(isNotEmpty);

  const {
    value: userName,
    inputHandler: userNameInputHandler,
    blurHandler: userNameBlurHandler,
    isValid: isuserNameValid,
    reset: resetUsername,
    isInvalid: isuserNameInvalid,
  } = useInput(isNotEmpty);

  const {
    value: email,
    inputHandler: emailInputHandler,
    blurHandler: emailBlurHandler,
    isValid: isEmailValid,
    reset: resetEmail,
    isInvalid: isEmailInvalid,
  } = useInput(isEmail);
  const {
    value: password,
    inputHandler: passwordInputHandler,
    blurHandler: passwordBlurHandler,
    isValid: isPassValid,
    reset: resetPassword,
    isInvalid: isPassInvalid,
  } = useInput(isPassLength);
  const {
    value: passConfirm,
    inputHandler: passConfirmInputHandler,
    blurHandler: passConfirmBlurHandler,
    isValid: ispassConfirmValid,
    reset: resetConfirmPass,
    isInvalid: ispassConfirmInvalid,
  } = useInput((pass) => pass.trim() === password.trim() && pass !== "");

  let isFormValid = false;
  if (
    isEmailValid &&
    isPassValid &&
    islNameValid &&
    isfNameValid &&
    isuserNameValid &&
    ispassConfirmValid
  ) {
    isFormValid = true;
  }
  const data = {
    email: email,
    password: password,
  };
  const navigationDetails = () => {
    navigate.replace("/");
  };
  const { isLoading: loading, error, fetchRequests } = useRequest();

  const textError = <p className='error'>Invalid or empty field</p>;
  const passError = <p className='error'>Passwords do not match</p>;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    fetchRequests(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDEZtTOdhzErGIlUj5SL03Ff6mZdJu8Wug",
      data,
      navigationDetails,
      false
    );
  };

  return (
    <Card>
      <Form title="Sign Up" submitHandler={submitHandler}>
        <p className="error">{error}</p>
        <TextField
          value={fName}
          inputHandler={fNameInputHandler}
          blurHandler={fNameBlurHandler}
          isInvalid={isfNameInvalid}
          isValid={isfNameValid}
          type="text"
          label="First Name"
          context={textError}
          reset={resetfName}
        />
        <TextField
          value={lName}
          inputHandler={lNameInputHandler}
          blurHandler={lNameBlurHandler}
          isInvalid={islNameInvalid}
          isValid={islNameValid}
          type="text"
          label="Last Name"
          context={textError}
          reset={resetlName}
        />
        <TextField
          value={userName}
          inputHandler={userNameInputHandler}
          blurHandler={userNameBlurHandler}
          isInvalid={isuserNameInvalid}
          isValid={isuserNameValid}
          type="text"
          label="Username"
          context={textError}
          reset={resetUsername}
        />
        <TextField
          value={email}
          inputHandler={emailInputHandler}
          blurHandler={emailBlurHandler}
          isInvalid={isEmailInvalid}
          isValid={isEmailValid}
          type="email"
          label="Email"
          context={textError}
          reset={resetEmail}
        />
        <TextField
          value={password}
          inputHandler={passwordInputHandler}
          blurHandler={passwordBlurHandler}
          isInvalid={isPassInvalid}
          isValid={isPassValid}
          type="password"
          label="Password"
          context={textError}
          reset={resetPassword}
        />
        <TextField
          value={passConfirm}
          inputHandler={passConfirmInputHandler}
          blurHandler={passConfirmBlurHandler}
          isInvalid={ispassConfirmInvalid}
          isValid={ispassConfirmValid}
          type="password"
          label="Confirm Password"
          context={passError}
          reset={resetConfirmPass}
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Button isValid={isFormValid}>Sign Up</Button>
        )}

        <p className={styles["login-link"]}>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </Form>
    </Card>
  );
};
export default SignUp;
