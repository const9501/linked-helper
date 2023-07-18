import styles from "./Button.module.scss";

interface IButton {
  label: string
  onClick?: ()=> void
}

const Button = ({label, onClick}: IButton) => {

  return (
    <>
      <button className={styles.button} onClick={onClick}>{label}</button>
      {/*<button>{label}</button>*/}
    </>
  );
};

export default Button;