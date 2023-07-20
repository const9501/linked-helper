import styles from "./Textarea.module.scss";
import React, {useRef} from "react";
import TextareaAutosize from "react-textarea-autosize";
import {IInput} from "../../MessageTemplate/MessageTemplate";


interface ITextarea {
  rows: number
  input: IInput
  inputs: IInput[]
  index: number
  setInputs: (elem: IInput[]) => void
  onClick?: () => void
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  setInputInfo: (elem: HTMLTextAreaElement | null) => void
}

const Textarea = ({rows, onChange, index, input, inputs, setInputs, setInputInfo}: ITextarea) => {

  const inputRef = useRef<HTMLTextAreaElement | null>(null)

  return (
    <>
      <TextareaAutosize
        minRows={rows}
        className={styles.textarea}
        onChange={event => {
          const newInputs = inputs.map((input, i) => {
            return index === i ? {text: event.target.value, isActive: true} : {...input, isActive: false}
          })
          setInputs(newInputs)
        }}
        ref={inputRef}
        onClick={() => {
          setInputInfo(inputRef.current)
          const newInputs = inputs.map((input, i) => {
            return index === i ? {...input, isActive: true} : {...input, isActive: false}
          })
          setInputs(newInputs)
        }}
        value={input.text}
      />
    </>
  );
};

export default Textarea;