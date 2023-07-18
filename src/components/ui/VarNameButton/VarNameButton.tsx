import styles from "./VarNameButton.module.scss";



interface IVarNameButton {
  label: string
}

const VarNameButton = ({label}: IVarNameButton) => {
  return (
    <button className={styles.button}>{`{${label}}`}</button>
  );
};

export default VarNameButton;