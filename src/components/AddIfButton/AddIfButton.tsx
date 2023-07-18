import styles from "./AddIfButton.module.scss";


const AddIfButton = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>
        <b>Click to add:</b>
        <span>IF</span>
        {'[{some_variable} or expression]'}
        <span>THEN</span>
        [then_value]
        <span>ELSE</span>
        [else_value]
      </button>
    </div>
  );
};

export default AddIfButton;