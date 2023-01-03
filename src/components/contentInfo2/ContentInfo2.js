import React from 'react';
import styles from "./ContentInfo2.module.css";
import image from "../../assets/image.svg";
import dadosContent2 from './dadosContent2';


const ContentInfo2 = () => {
  return (
    <div className={styles.contentInfo2}>
          <div className={styles.contentSplitInfo}>


            <div className={styles.contentSplitLeft}> 
              <img src={image} />
            </div>

            <div className={styles.contentSplitRight}> 
              <div className={styles.splitRightInfo}> 
                  <h1> Entrenar para el éxito </h1>
                  <div>
                      E un fapt bine stabilit că cititorul va fi sustras de conţinutul citibil al unei pagini atunci când se uită la aşezarea în pagină. Scopul utilizării a Lorem Ipsum, este acela că are o distribuţie a literelor mai mult sau mai puţin normale
                      literelor mai mult sau mai puţin normale...
                  </div>
              </div>



                <div   className={styles.contentSplitContainer}> 
                  {
                    dadosContent2.map(({title, image}) => (
                      <div className={styles.splitContainer}>
                        <img src={image} />
                        <p> {title} </p>
                      </div>
                    ))
                  }
                </div>
            </div>
          </div>
        </div>
  );
};


export default ContentInfo2;