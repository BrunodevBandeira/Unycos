import React from 'react';
import dadosLesson from "./dadosLesson"
import styles from "./LessonPlan.module.css";


const LessonPlan = () => {
  return (
    <div className={styles.lessonPlan}>
          <h2> LESSON PLAN </h2>
          <div className={styles.lessonPlanContent}>

           { dadosLesson.map(({number, title, description}, index) => (
              <div className={styles.lessonPlanContentText}>
                <div className={styles.contentText} key={index}>
                    <h1> <span> {number} </span> {title} </h1>
                    <p> {description} </p>
                </div>
              </div>))
            }

              {/* <div className={styles.lessonPlanLine}></div> */}

            {/* <div className={styles.lessonPlanContentText}>
            <div className={styles.contentText}>
                  <h1> <span> 02 </span> Natação aspectos gerais </h1>
                  <p> Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta din anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. </p>
              </div>
            </div>

            <div className={styles.lessonPlanContentText}>
            <div className={styles.contentText}>
                  <h1> <span> 03 </span> Bases bionicas da natação </h1>
                  <p> Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta din anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. </p>
              </div>
            </div>

            <div className={styles.lessonPlanContentText}>
            <div className={styles.contentText}>
                  <h1> <span> 04 </span> Estilo de natação </h1>
                  <p> Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta din anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. </p>
              </div>
            </div>

            <div className={styles.lessonPlanContentText}>
            <div className={styles.contentText}>
                  <h1> <span> 05 </span> Saltos na piscina </h1>
                  <p> Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta din anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. </p>
              </div>
            </div> */}

          </div>
    </div>
  );
};


export default LessonPlan;