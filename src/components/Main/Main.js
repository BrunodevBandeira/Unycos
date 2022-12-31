import React from 'react';
import styles from "./Main.module.css";
import foto from "../../assets/Hero.svg";
import ContentInfo from "../contentInfo/ContentInfo";
import ContentInfo2 from "../contentInfo2/ContentInfo2";
import InfoExclusive from "../infoExclusive/InfoExclusive";
import LessonPlan from "../lessonPlan/LessonPlan";
import MoreCourses from "../moreCourses/MoreCourses";
import Articles from "../articles/Articles";

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
          <ContentInfo />
          <ContentInfo2 />
          <InfoExclusive />
          <LessonPlan />
          <MoreCourses />
          <Articles />
      </section>
  );
};

export default Main;