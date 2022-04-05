import styles from './Form.module.css'
const Form = (props) => {
    const{title,submitHandler} = props
    
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <form className={styles.forms} onSubmit={submitHandler}>{props.children}</form>
    </div>
  );
};
export default Form