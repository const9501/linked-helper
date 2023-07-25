import styles from "./IfThenElse.module.scss";
import TextareaAutosize from "react-textarea-autosize";


const IfThenElse = () => {
  return (
    <div className={styles.wrapper}>

      <div className={styles.ifRow}>
        <div className={styles.ifWrapper}>
          <div className={styles.blockTitle}>
            IF
          </div>
          <button className={styles.deleteBtn}>Delete</button>
        </div>

        <div className={styles.textareaWrapper}>
          <TextareaAutosize minRows={2}/>
        </div>
      </div>

      <div className={styles.thenRow}>
        <div className={styles.blockTitle}>THEN</div>

        <div className={styles.textareaWrapper}>
          <TextareaAutosize minRows={2}/>
        </div>
      </div>

      <div className={styles.elseRow}>
        <div className={styles.blockTitle}>ELSE</div>

        <div className={styles.textareaWrapper}>
          <TextareaAutosize minRows={2}/>
        </div>
      </div>

    </div>
  );
}

export default IfThenElse;