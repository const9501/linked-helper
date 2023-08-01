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
  inputRef: MutableRefObject<HTMLTextAreaElement>
  value: string
}

const Textarea = ({rows, onChange, index, input, inputs, setInputs, inputRef, value}: ITextarea) => {


  return (
    <>
      <TextareaAutosize
        minRows={rows}
        className={styles.textarea}
        onChange={event => {
          const newInputs = inputs.map((input, i) => index === i ? {...input, head: event.target.value, activePart: 'head'} : {...input, activePart: null})
          setInputs(newInputs)
        }}
        ref={input.activePart ? inputRef : null}
        onClick={() => {
          const newInputs = inputs.map((input, i) => index === i ? {...input, activePart: 'head'} : {...input, activePart: null})
          setInputs(newInputs)
        }}
        value={value}
      />
    </>
  );
};

export default Textarea;