import styles from "./AddIfButton.module.scss";

const AddIfButton = () => {
  return (
    <button className={styles.button}>
      <b>Click to add:</b>
      <span>IF</span>
      {'[{some_variable} or expression]'}
      <span>THEN</span>
      [then_value]
      <span>ELSE</span>
      [else_value]
    </button>
  );
};

export default AddIfButton;