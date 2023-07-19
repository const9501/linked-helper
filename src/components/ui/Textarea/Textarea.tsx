import styles from "./Textarea.module.scss";
import React, {Dispatch, MutableRefObject, SetStateAction, useRef, useState} from "react";
import TextareaAutosize from "react-textarea-autosize";
import {IInput} from "../../MessageTemplate/MessageTemplate";


interface ITextarea {
  rows: number
  input: IInput
  inputs: IInput[]
  setInputs: (elem: IInput[]) => void
  onClick?: () => void
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  setInputInfo: (elem: HTMLTextAreaElement | null) => void
}

const Textarea = ({rows, onChange, input, inputs, setInputs, setInputInfo}: ITextarea) => {

  const inputRef = useRef<HTMLTextAreaElement | null>(null)

  return (
    <>
      <TextareaAutosize
        minRows={rows}
        className={styles.textarea}
        onChange={event => {
          setInputs([...inputs, {text: event.target.value, isActive: false}])
        }}
        ref={inputRef}
        onClick={() => setInputInfo(inputRef.current)}
        value={input.text}
      />
    </>
  );
};

export default Textarea;