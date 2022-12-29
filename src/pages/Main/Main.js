import React from 'react';
import styles from "./Main.module.css";
import foto from "../../assets/Hero.svg";
import iconEllipse from "../../assets/icons/iconEllipse.svg";
import iconHoras from "../../assets/icons/iconHoras.svg";
import iconBook from "../../assets/icons/iconBook.svg";
import image from "../../assets/image.svg";
import natacao from "../../assets/natacao.svg";
import natacao2 from "../../assets/natacao2.svg";
import natacao3 from "../../assets/natacao3.svg";
import iconE from "../../assets/icons/iconE.svg";
import iconTest from "../../assets/icons/iconTest.svg";
import iconTest2 from "../../assets/icons/iconTest2.svg";
import iconVideo from "../../assets/icons/iconVideo.svg";
import iconVideo2 from "../../assets/icons/iconVideo2.svg";
import iconTarefa from "../../assets/icons/iconTarefa.svg";

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
            <div className={styles.contentSplitLeft}> 
              <img src={image} />
            </div>

            <div className={styles.contentSplitRight}> 
              <div className={styles.splitRightInfo}> 
                  <h1> Treinar para o exito </h1>
                  <div>
                      E un fapt bine stabilit că cititorul va fi sustras de conţinutul citibil al unei pagini atunci când se uită la aşezarea în pagină. Scopul utilizării a Lorem Ipsum, este acela că are o distribuţie a literelor mai mult sau mai puţin normale
                      literelor mai mult sau mai puţin normale...
                  </div>
              </div>

              <div className={styles.contentSplitContainer}> 

                <div className={styles.splitContainer}>
                  <img src={natacao} />
                  <p> Estilo de Natação </p>
                </div>

                <div className={styles.splitContainer}>
                   <img src={natacao2} />
                   <p> Preparação fisica </p>
                </div>

                <div className={styles.splitContainer}>
                   <img src={natacao3} />
                   <p> Condicionamento </p>
                </div>

              </div>
            </div>
          </div>
        </div>


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



        <div className={styles.lessonPlan}>
          <h2> Planos de Ensino </h2>
          <div className={styles.lessonPlanContent}>
            <div className={styles.lessonPlanContent}>
              
            </div>
          </div>
        </div>

      </section>
  );
};

export default Main;