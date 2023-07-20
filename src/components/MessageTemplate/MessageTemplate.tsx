import styles from "./MessageTemplate.module.scss";
import VarNameButton from "../ui/VarNameButton/VarNameButton";
import AddIfButton from "../AddIfButton/AddIfButton";
import Textarea from "../ui/Textarea/Textarea";
import Button from "../ui/Button/Button";
import React, {useState} from "react";
import {useRef} from "react";

interface IMessageTemplate {
  isOpen: boolean
}

export interface IInput {
  text: string
  isActive: boolean
}

const arrVarNames: string[] = ['{firstname}', '{lastname}', '{company}', '{position}']

const MessageTemplate = ({isOpen}: IMessageTemplate) => {

  const [inputs, setInputs] = useState<IInput[]>([
    {text: '1', isActive: false},
    {text: '2', isActive: false},
    {text: '3', isActive: false},
  ])

  const [inputInfo, setInputInfo] = useState<HTMLTextAreaElement | null>(null)

  console.log(inputs);

  return (
    <div className={isOpen ? styles.wrapper + ' ' + styles.open : styles.wrapper}>

      <div className={styles.animationWrapper}>

        <h1 className={styles.heading}>Message template editor</h1>

        <div className={styles.varNamesButtons}>
          {arrVarNames.map((item, index) =>
            <VarNameButton
              key={index}
              label={item}
              onClick={() => {
                const res = inputs.map((input) => {
                  return input.isActive ? {...input, text: input.text+item} : {...input}
                })
                setInputs(res)
              }}
            />
          )}
        </div>

        <div className={styles.addIfButton}>
          <AddIfButton/>
        </div>



        {
          inputs.map((input, index, array) => (
            <Textarea
              key={index}
              index={index}
              rows={4}
              input={input}
              setInputs={setInputs}
              setInputInfo={setInputInfo}
              inputs={array}
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