import React from 'react';
import styles from "./InfoExclusive.module.css";
import iconE from "../../assets/icons/iconE.svg";
import iconTest from "../../assets/icons/iconTest.svg";
import iconTest2 from "../../assets/icons/iconTest2.svg";
import iconVideo from "../../assets/icons/iconVideo.svg";
import iconVideo2 from "../../assets/icons/iconVideo2.svg";
import iconTarefa from "../../assets/icons/iconTarefa.svg";

const InfoExclusive = () => {
  return (
    <div className={styles.infoExclusive}>
          <div className={styles.exclusiveContent}>
            <h2> Conteudo exclusivo </h2>
              <div className={styles.exclusiveContentIcons}>
                    <div className={styles.contentIcons}>

                        <div>
                          <img className={styles.iconsE} src={iconE} /> 
                          <p> E-Book </p>
                        </div>

                        <div>
                          <img className={styles.iconsVideo} src={iconVideo} /> 
                          <p> 360º Videos </p>
                        </div>

                        <div>
                          <img className={styles.iconsTest} src={iconTest} /> 
                          <p> Tests </p>
                        </div>

                        <div>
                          <img className={styles.iconsTest2} src={iconTarefa} /> 
                          <p> Tarefas </p>
                        </div>
                        
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


