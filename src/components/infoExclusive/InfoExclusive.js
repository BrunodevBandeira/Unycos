import React from 'react';
import styles from "./InfoExclusive.module.css";
import dadosInfo from './dadosInfo';


const InfoExclusive = () => {
  return (
    <div className={styles.infoExclusive}>
          <div className={styles.exclusiveContent}>
            <h2> Conteudo exclusivo </h2>
              <div className={styles.exclusiveContentIcons}>
                    <div className={styles.contentIcons}>
                      { dadosInfo.map(({image, title}) =>(
                       <div>
                          <img className={styles.iconsE} src={image} /> 
                          <p> {title} </p>
                        </div>))
                      }

                    </div>
                    <div className={styles.exclusiveContentButton}>
                      <button className={styles.contentBtn}>  Mais Informação </button>
                    </div>
              </div>
          </div>
        </div>
  );
};

export default InfoExclusive;


