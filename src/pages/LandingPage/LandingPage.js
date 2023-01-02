import React from 'react';
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import ContentInfo from "../../components/contentInfo/ContentInfo";
import ContentInfo2 from "../../components/contentInfo2/ContentInfo2";
import InfoExclusive from "../../components/infoExclusive/InfoExclusive";
import LessonPlan from "../../components/lessonPlan/LessonPlan";
import MoreCourses from "../../components/moreCourses/MoreCourses";
import Articles from "../../components/articles/Articles";
import Footer from "../../components/Footer/Footer";
import Head from "../../components/Head/Head";



const LandingPage = () => {
  return (
    <div>   
      <Head title="Unycos || 🏊🏻‍♂️" description="Unycos"/>
      <Header />
          <Main />
          <ContentInfo />
          <ContentInfo2 />
          <InfoExclusive />
          <LessonPlan />
          <MoreCourses />
          <Articles />
      <Footer />
    </div>
  )
}

export default LandingPage;
