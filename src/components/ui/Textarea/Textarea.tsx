import styles from "./Textarea.module.scss";
import React, {Dispatch, SetStateAction, useState} from "react";
import TextareaAutosize from "react-textarea-autosize";
import {IInput} from "../../MessageTemplate/MessageTemplate";


interface ITeatarea {
  rows: number
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  inputs: IInput[]
  setInputs: Dispatch<SetStateAction<IInput[]>>
  index: number
}

const Textarea = ({rows, onChange, inputs, index, setInputs}: ITeatarea) => {


  const handleChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

  }

  console.log(inputs[index].text);

  return (
    <>
      <TextareaAutosize
        minRows={rows}
        className={styles.textarea}
        // value={inputs[index].text}
        onChange={event => {
          const newInputs = inputs
          newInputs[index].text = event.target.value
          setInputs(newInputs)
        }}
      />
    </>
  );
};

export default Textarea;