import styles from "./TextField.module.css";
const TextField = (props) => {
  const { type, value, label, blurHandler, inputHandler, isInvalid, context } = props;
  return (
    <div>
    <div className={`${styles["text-field"]} ${isInvalid && styles.invalid}`}>
      <input
        type={type}
        value={value}
        onChange={inputHandler}
        onBlur={blurHandler}
        required
      />
      <label htmlFor={value}>{label}</label>
    </div>
    {isInvalid && context}
    </div>
  );
};
export default TextField;
