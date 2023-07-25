import styles from "./MessageTemplate.module.scss";
import VarNameButton from "../ui/VarNameButton/VarNameButton";
import AddIfButton from "../AddIfButton/AddIfButton";
import Textarea from "../ui/Textarea/Textarea";
import Button from "../ui/Button/Button";
import React, {MutableRefObject, useState} from "react";
import {useRef} from "react";
import {log} from "util";
import MessagePreview from "../MessagePreview/MessagePreview";
import IfThenElse from "../IfThenElse/IfThenElse";

interface IMessageTemplate {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export interface IInput {
  text: string
  isActive: boolean
}

const arrVarNames: string[] = ['{firstname}', '{lastname}', '{company}', '{position}']

const MessageTemplate = ({isOpen, setIsOpen}: IMessageTemplate) => {

  const [inputs, setInputs] = useState<IInput[]>([
    {text: '', isActive: true},
  ])

  const inputRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

  const [messagePreviewIsOpen, setMessagePreviewIsOpen] = useState(false)


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
          <AddIfButton onClick={() => {
            console.log(inputs);
            console.log(inputRef);
            const textInInput = inputRef.current.value
            const slicePosition = inputRef.current.selectionStart
            const firstPart = textInInput.slice(0, slicePosition)
            const secondPart = textInInput.slice(slicePosition)
            const res = inputs.map((input) => input.isActive ? {...input, text: firstPart} : {...input})
            setInputs([...res, {text: secondPart, isActive: false}])
          }}/>
        </div>


        {
          inputs.map((input, index, array) => (
            <Textarea
              key={index}
              index={index}
              rows={4}
              input={input}
              setInputs={setInputs}
              inputs={array}
              inputRef={inputRef}
            />
          ))
        }

        <IfThenElse/>

        <div className={styles.actionButtons}>
          <Button
            label='Preview'
                  onClick={() => setMessagePreviewIsOpen(!messagePreviewIsOpen)}
          />
          <Button label='Save'/>
          <Button
            label='Close'
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

      </div>


      <MessagePreview isOpen={messagePreviewIsOpen} setIsOpen={setMessagePreviewIsOpen}/>

    </div>
  );
};

export default MessageTemplate;