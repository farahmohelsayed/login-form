import styles from "./Button.module.css";
const Button = (props) => {
    const{isValid, className} = props
  return (
    <button disabled={!isValid} className={className || styles.btn}>{props.children}</button>
  );
};

export default Button