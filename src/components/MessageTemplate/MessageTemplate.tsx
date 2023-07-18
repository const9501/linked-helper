import styles from "./MessageTemplate.module.scss";
import VarNameButton from "../ui/VarNameButton/VarNameButton";

const arrVarNames:string[] = ['firstname', 'lastname', 'company', 'position']

const MessageTemplate = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Message template editor</h1>
      <div className={styles.varNamesButtonsWrapper}>
        {arrVarNames.map((item, index) =>
          <VarNameButton key={index} label={item}/>
        )}
      </div>
    </div>
  );
};

export default MessageTemplate;