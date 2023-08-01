import styles from "./MessageTemplate.module.scss";
import VarNameButton from "../ui/VarNameButton/VarNameButton";
import AddIfButton from "../AddIfButton/AddIfButton";
import Textarea from "../ui/Textarea/Textarea";
import Button from "../ui/Button/Button";
import React, {MutableRefObject, useState} from "react";
import {useRef} from "react";
import MessagePreview from "../MessagePreview/MessagePreview";
import IfThenElse from "../IfThenElse/IfThenElse";
import {v4 as uuidv4} from 'uuid';
import TextareaAutosize from "react-textarea-autosize";

interface IMessageTemplate {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export interface IInput {
  id: string
  head: string
  ifBlock: IInput | null
  thenBlock: IInput | null
  elseBlock: IInput | null
  tail: string | null
  activePart: string | null
}

const arrVarNames: string[] = ['{firstname}', '{lastname}', '{company}', '{position}']

const MessageTemplate = ({isOpen, setIsOpen}: IMessageTemplate) => {

  const [inputs, setInputs] = useState<IInput[]>([
    {
      id: uuidv4(),
      head: '',
      ifBlock: {
        id: uuidv4(),
        head: '',
        ifBlock: null,
        thenBlock: null,
        elseBlock: null,
        tail: null,
        activePart: 'head'
      },
      thenBlock: {
        id: uuidv4(),
        head: '',
        ifBlock: null,
        thenBlock: null,
        elseBlock: null,
        tail: null,
        activePart: 'head'
      },
      elseBlock: {
        id: uuidv4(),
        head: '',
        ifBlock: null,
        thenBlock: null,
        elseBlock: null,
        tail: null,
        activePart: 'head'
      },
      tail: null,
      activePart: 'head'
    },
  ])

  const inputRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

  const [messagePreviewIsOpen, setMessagePreviewIsOpen] = useState(false)

  console.log(inputs);
  console.log(inputRef);

  const renderTextArea = (input: IInput | null, index: number, array: IInput[], type: string | null): any => {
    switch (type) {
      case 'IF': {
        return (
          <div className={styles.ifRow}>
            <div className={styles.ifWrapper}>
              <div className={styles.blockTitle}>
                {type}
              </div>
              <button className={styles.deleteBtn}>Delete</button>
            </div>

            <div className={styles.textareaWrapper}>
              <TextareaAutosize minRows={2}/>
            </div>
          </div>
        )
      }
      case 'THEN':
      case 'ELSE': {
        return (
          <div className={styles.thenRow}>
            <div className={styles.blockTitle}>
              {type}
            </div>

            <div className={styles.textareaWrapper}>
              <TextareaAutosize minRows={2}/>
            </div>
          </div>
        )
      }
      default:
        break
    }
    if (input) {
      if (input.tail !== null) {
        return (
          <>
            <Textarea
              key={index}
              index={index}
              rows={4}
              input={input}
              setInputs={setInputs}
              inputs={array}
              inputRef={inputRef}
              value={input.head}
            />
            {renderTextArea(input.ifBlock, index, array, 'IF')}
            {renderTextArea(input.thenBlock, index, array, 'THEN')}
            {renderTextArea(input.elseBlock, index, array, 'ELSE')}
            <Textarea
              key={index}
              index={index}
              rows={4}
              input={input}
              setInputs={setInputs}
              inputs={array}
              inputRef={inputRef}
              value={input.tail}
            />
          </>
        )
      } else {
        return (
          <Textarea
            key={index}
            index={index}
            rows={4}
            input={input}
            setInputs={setInputs}
            inputs={array}
            inputRef={inputRef}
            value={input.head}
          />
        )
      }
    }

  }


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
                  return input.activePart ? {...input, head: input.head + item} : {...input}
                })

                setInputs(res)
              }}
            />
          )}
        </div>


        <div className={styles.addIfButton}>
          <AddIfButton onClick={() => {
            const textInInput = inputRef.current.value
            const slicePosition = inputRef.current.selectionStart
            const firstPart = textInInput.slice(0, slicePosition)
            const secondPart = textInInput.slice(slicePosition)
            const res = inputs.map((input) => input.activePart ? {
              ...input,
              head: firstPart,
              tail: secondPart
            } : {...input})
            setInputs(res)

          }}/>
        </div>

        {/*<Textarea*/}
        {/*  key={index}*/}
        {/*  index={index}*/}
        {/*  rows={4}*/}
        {/*  input={input}*/}
        {/*  setInputs={setInputs}*/}
        {/*  inputs={array}*/}
        {/*  inputRef={inputRef}*/}
        {/*  value={input.head}*/}
        {/*/>*/}


        {
          inputs.map((input, index, array) => {

              return renderTextArea(input, index, array, null)

            }
          )
        }


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


      <MessagePreview
        isOpen={messagePreviewIsOpen}
        setIsOpen={setMessagePreviewIsOpen}
      />

    </div>
  );
};

export default MessageTemplate;