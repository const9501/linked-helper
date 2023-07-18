import styles from "./Button.module.scss";

interface IButton {
  label: string
}

const Button = ({label}: IButton) => {

  return (
    <>
      <button className={styles.button}>{label}</button>
      {/*<button>{label}</button>*/}
    </>
  );
};

export default Button;