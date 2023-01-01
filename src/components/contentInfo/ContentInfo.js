import React from 'react';
import styles from "./ContentInfo.module.css";
import iconEllipse from "../../assets/icons/iconEllipse.svg";
import iconHoras from "../../assets/icons/iconHoras.svg";
import iconBook from "../../assets/icons/iconBook.svg";

const ContentInfo = () => {
  return (
    <div className={styles.contentInfo}>

          <div className={styles.contentIcon}>
            <img className={styles.iconCircle} src={iconEllipse} />
            <img className={styles.iconHoras} src={iconHoras} /> <p> 12 MÒDULOS </p>
          </div>

          <div className={styles.contentIcon}>
            <img className={styles.iconCircle1} src={iconEllipse} /> 
            <img className={styles.iconBooks} src={iconBook} /> <p> +3,5 HORAS </p>
          </div>

          <div className={styles.contentButton}>
            <button  className={styles.contentBtn}> Mais Informações </button>
          </div>

        </div>
  )
}


export default ContentInfo