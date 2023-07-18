import styles from "./MessageTemplate.module.scss";
import VarNameButton from "../ui/VarNameButton/VarNameButton";
import AddIfButton from "../AddIfButton/AddIfButton";

interface IMessageTemplate {
  isOpen: boolean
}

const arrVarNames:string[] = ['firstname', 'lastname', 'company', 'position']

const MessageTemplate = ({isOpen}: IMessageTemplate) => {
  return (
      <div className={isOpen ? styles.wrapper + ' ' + styles.open : styles.wrapper}>

        <h1 className={styles.heading}>Message template editor</h1>

        <div className={styles.varNamesButtonsWrapper}>

          {arrVarNames.map((item, index) =>
            <VarNameButton key={index} label={item}/>
          )}

        </div>

        <AddIfButton/>

      </div>
  );
};

export default MessageTemplate;