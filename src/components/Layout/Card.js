import styles from './Card.module.css'
const Card = (props) => {
  return <div className={styles.center}>{props.children}</div>;
};
export default Card;
