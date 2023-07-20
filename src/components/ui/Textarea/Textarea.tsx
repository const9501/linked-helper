import styles from "./Textarea.module.scss";
import React, {MutableRefObject, useRef} from "react";
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
  inputRef: MutableRefObject<HTMLTextAreaElement>;
}

const Textarea = ({rows, onChange, index, input, inputs, setInputs, inputRef}: ITextarea) => {


  return (
    <>
      <TextareaAutosize
        minRows={rows}
        className={styles.textarea}
        onChange={event => {
          const newInputs = inputs.map((input, i) => index === i ? {text: event.target.value, isActive: true} : {...input, isActive: false})
          setInputs(newInputs)
        }}
        ref={input.isActive ? inputRef : null}
        onClick={() => {
          const newInputs = inputs.map((input, i) => index === i ? {...input, isActive: true} : {...input, isActive: false})
          setInputs(newInputs)
        }}
        value={input.text}
      />
    </>
  );
};

export default Textarea;