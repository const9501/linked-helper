import styles from "./MessageTemplate.module.scss";
import VarNameButton from "../ui/VarNameButton/VarNameButton";
import AddIfButton from "../AddIfButton/AddIfButton";
import Textarea from "../ui/Textarea/Textarea";
import Button from "../ui/Button/Button";
import {useState} from "react";

interface IMessageTemplate {
  isOpen: boolean
}

export interface IInput {
  text: string
  isActive: boolean
}

const arrVarNames: string[] = ['{firstname}', '{lastname}', '{company}', '{position}']

const MessageTemplate = ({isOpen}: IMessageTemplate) => {

  // const [firstTextarea, setFirstTextarea] = useState('')
  const [inputs, setInputs] = useState<IInput[]>([
    {text: '', isActive: false},
    {text: '', isActive: false},
  ])

  return (
    <div className={isOpen ? styles.wrapper + ' ' + styles.open : styles.wrapper}>

      <div className={styles.animationWrapper}>

        <h1 className={styles.heading}>Message template editor</h1>

        <div className={styles.varNamesButtons}>
          {arrVarNames.map((item, index) =>
            <VarNameButton
              key={index}
              // onClick={() => setFirstTextarea(firstTextarea + item)}
              label={item}
            />
          )}
        </div>

        <div className={styles.addIfButton}>
          <AddIfButton/>
        </div>

        {
          inputs.map((input, index, inputs) => (
            <Textarea
              key={index}
              rows={4}
              inputs={inputs}
              setInputs={setInputs}
              index={index}
            />
          ))
        }


        <div className={styles.actionButtons}>
          <Button label='Preview'/>
          <Button label='Save'/>
          <Button label='Close'/>
        </div>


      </div>

    </div>
  );
};

export default MessageTemplate;