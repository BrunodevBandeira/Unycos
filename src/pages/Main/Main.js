import React from 'react';
import styles from "./Main.module.css";
import foto from "../../assets/Hero.svg";
import iconEllipse from "../../assets/iconEllipse.svg";
import iconHoras from "../../assets/iconHoras.svg";
import iconBook from "../../assets/iconBook.svg";

const Main = () => {
  const [ dados, setDados ] = React.useState([]);


  return (
      <section className={styles.Main}>

        <div className={styles.contentMain}>
            <img src={foto} alt="Foto" />
              <div className={styles.contentMainTitle}> 
                <h1> Mireia Belmonste </h1>
                <h3> <span> Ensina </span> Natação </h3>
              </div>
        </div>

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


        <div className={styles.contentInfo2}>
          <div className={styles.contentSplitInfo}>
            <div className={styles.contentSplitLeft}> </div>
          </div>
        </div>

      </section>
  );
};

export default Main;