import styles from "./MessagePreview.module.scss";
import TextareaAutosize from "react-textarea-autosize";
import Button from "../ui/Button/Button";

interface IMessagePreview {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const MessagePreview = ({isOpen, setIsOpen}: IMessagePreview) => {
  return (

    <div className={isOpen ? styles.modalWrapper + ' ' + styles.open : styles.modalWrapper}>

      <div style={{minHeight: '0'}}>
        <div className={styles.modalBody}>
          <div className={styles.closeBtn} onClick={() => {setIsOpen(!isOpen)}}></div>
          <h1 className={styles.heading}>Message Preview</h1>
          <TextareaAutosize minRows={4}/>
          <Button label='Close' onClick={() => {setIsOpen(!isOpen)}}/>
        </div>
      </div>


    </div>

  );
};

export default MessagePreview;