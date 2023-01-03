import React from 'react';
import styles from "./ContentInfo.module.css";
import dadosContent from './dadosContent';


const ContentInfo = () => {
  return (
    <div>
        <div className={styles.contentInfo}>
            {dadosContent.map(({title, image, image2}) => (
              <div className={styles.contentIcon}>
                <img className={styles.iconCircle} src={image} />
                <img className={styles.iconHoras} src={image2} /> <p> {title} </p>
              </div>
            ))}

            <div className={styles.contentButton}>
              <button  className={styles.contentBtn}> Mais Informações </button>
            </div>
        </div>
    </div> 
  )
}

export default ContentInfo;

