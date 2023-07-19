import styles from "./VarNameButton.module.scss";

interface IVarNameButton {
  label: string
  onClick?: () => void
}

const VarNameButton = ({label, onClick}: IVarNameButton) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >{label}</button>
  );
};

export default VarNameButton;