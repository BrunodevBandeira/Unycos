import React from 'react';
import styles from "./Articles.module.css";

const Articles = () => {
  return (
    <section className={styles.Articles}>
            <div className={styles.articlesTitle}>
                <h1> ARTÍCULOS RELACIONADOS </h1>
            </div>

            <div className={styles.articlesContainer}>

              <div className={styles.articlesContainerLeft}>
                <h1> Consejos para nadadores principiantes </h1>
                <p> 22.06.2019 </p>
                <div className={styles.articlesLine}></div>

                <h1> ¿Nadar es un buen método para adelgazar? </h1>
                <p> 22.06.2019 </p>
                <div className={styles.articlesLine}></div>
              </div>

              <div className={styles.articlesContainerRight}>
                <h1> Recomendaciones para lograr que un niño venza el miedo al agua </h1>
                <p> 22.06.2019 </p>
                <div className={styles.articlesLine}></div>
                <h1> Consejos para mejorar la técnica del estilo crol </h1>
                <p> 22.06.2019 </p>
              </div>

            </div>

            <div  className={styles.ArticlesBtn}>
              <button className={styles.ArticlesButton}> leer más en nuestro blog </button>
            </div>
    </section>  
  );
};

export default Articles;
