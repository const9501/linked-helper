import styles from "./AddIfButton.module.scss";

interface IAddIfButton {
  onClick: () => void
}

const AddIfButton = ({onClick}: IAddIfButton) => {
  return (
    <button className={styles.button} onClick={onClick}>
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