import { useReducer } from "react";

const defaultValues = {
  value: "",
  isTouched: false,
};
const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return defaultValues;
};
const useInput = (validate) => {
  const [inputState, dispatchInput] = useReducer(inputReducer, defaultValues);
  
  const isValid = validate(inputState.value)
  const isInvalid = !isValid && inputState.isTouched

  const inputHandler = (event) => {
    dispatchInput({ type: "INPUT", value: event.target.value });
  };
  const blurHandler = () => {
    dispatchInput({ type: "BLUR" });
  };
  const reset = () => {
    dispatchInput({ type: "RESET" });
  };
  return {value: inputState.value, inputHandler,blurHandler,reset, isValid, isInvalid}
};
export default useInput;
