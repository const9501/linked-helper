import styles from "./Textarea.module.scss";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";


interface ITeatarea {
  rows: number
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  value?: string
}

const Textarea = ({rows, onChange, value}: ITeatarea) => {
  return (
    <>
      <TextareaAutosize
        minRows={rows}
        className={styles.textarea}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default Textarea;