import React from 'react';
import styles from "./MoreCourses.module.css";
import cooper from "../../assets/cooper.jpg";
import ismael from "../../assets/ismael.jpg";
import amarante from "../../assets/amarante.jpg";
import iconLike from "../../assets/icons/iconLike.svg";
import imagem4 from "../../assets/imagem4.svg";

const MaisCursos = () => {
  return (
    <section className={styles.Courses}>

      <h1> Mais Cursos </h1>
      <section className={styles.coursesContainer}>

        <div className={styles.coursesContainerImg}>

          <div className={styles.coursesContainerTitles}>
            
          <img src={cooper} />
            <h2> Marcus Cooper </h2>
            <p> <span> Ensina </span> canoagem</p>
          </div>
          
        </div>

        <div className={styles.coursesContainerImg}>

            <img src={ismael} />
            <div className={styles.coursesContainerTitles}>
              <h2> Ismael Cala </h2>
              <p> <span> Ensina </span> Alguma coisa </p>
          </div>

        </div>

        <div className={styles.coursesContainerImg}>

            <img src={amarante} />
            <div className={styles.coursesContainerTitles}>
              <h2> Lewis Amarantes </h2>
              <p> <span> Ensina </span> Maquiagem </p>
          </div>

        </div>

      </section>

      <section className={styles.coursesContainerInfo}>
        <h1> Obter mais informações </h1>
        <div className={styles.coursesContainerForm}>
            <form className={styles.containerForm}> 
                <div className={styles.containerLeft}>

                  <input
                    type="name"
                    name="name"
                    placeholder='Nome Completo'
                  />


                  <input
                    type="country"
                    name="country"
                    placeholder='Pais/ Codigo pais'
                  />
                  

                  <div>

                    <input
                      type="checkbox"
                      name="checkbox"
                      placeholder='Telefone'
                    />
                  </div>
                  
                </div>


                <div className={styles.containerRight}>

                  <input
                    type="email"
                    name="email"
                    placeholder='Correio eletronico'
                  />

                  <input
                    type="tell"
                    name="tell"
                    placeholder='Telefone'
                  />

                  <div>
                    <input
                      type="checkbox"
                      name="checkbox"
                      placeholder='Telefone'
                    />
                  </div>

                </div>

            </form>
            <button  className={styles.coursesContainerBtn}> Enviar </button>
        </div>
      </section>


      <section className={styles.studyContainer}>
            <h1> Comentarios dos estudantes </h1>

            <div>
              <h2>  
                <span> <img src={iconLike} /> 98.7% de valores positivas </span>/ total de 726 alunos
              </h2>
            </div>

            <section className={styles.studyContainerContent}>
              <div>
                <p className={styles.studyContainerEllipse}> SV </p>
              </div>

              <div className={styles.studyContainerText}>
                    <h1> 
                        Samuel Vidal Hernandez <span> 
                                                  <img src={iconLike} /> 
                                                  Hace 2 meses 
                                                </span>
                    </h1>

                    <div >
                      <p> 
                      Ha sido un curso muy gratificante,en el que he podido aprender muchas cosas gracias a los grandes ponentes que han colaborado y aportado sus conocimientos. Ahora toca ponerse manos a la obra y poner en practica todo lo aprendido. Estoy muy orgulloso. 
                      </p>
                    </div>
                    
              </div>

            </section>

            <div className={styles.studyContainerLine}></div>

            <section className={styles.studyContainerContent}>
              <div>
                <p className={styles.studyContainerEllipse}> F </p>
              </div>

              <div className={styles.studyContainerText}>
                    <h1> 
                        Francisco Jose Sacedo <span> 
                                                  <img src={iconLike} /> 
                                                  Hace 3 meses 
                                                </span>
                    </h1>

                    <div>
                      <p> 
                      Seguir creciendo como profesional es necesario pero si lo haces junto a tus ídolos se convierte en un placer. Gracias por esta experiencia y espero poder comentarlo en persona con sus protagonistas muy pronto  
                      </p>

                      <div className={styles.studyContainerLine2}></div>

                      <p className={styles.studyContainerTextP}> 
                      Este texto es una simulación de una contestación del equipo o del profesor directamente. El texto tendrá un aspecto diferenciado, y también tendrá un destaque mayor  
                      </p>

                      <p> 
                        <span className={styles.span1}> 
                                          Equipe Unycos 
                                        </span> 
                                        <span className={styles.span2}>  
                                          - hace 3 meses 
                                        </span>
                      </p>

                    </div>
              </div>
            </section>

            <div className={styles.studyContainerLine}></div>

            <section className={styles.studyContainerContent}>
              <div>
                <p className={styles.studyContainerEllipseImg}> 
                  <img src={imagem4} />
                </p>
              </div>

              <div className={styles.studyContainerText}>

                    <h1> 
                        ana Milena Gomez <span src={iconLike}> 
                                            <img /> 
                                            Hace 3 meses 
                                         </span>
                    </h1>

                    <div>
                      <p> 
                        Profundizar en el entrenamiento y proceso de enseñanza
                      </p>
                    </div>

                    <div className={styles.studyContainerLine2}></div>

                    <div className={styles.studyContainerText2}>
                      <p> 
                        Hola, Ana! Continúa a practicar y seguro que mejorarás más y más tu desempeño! Un abrazo!
                      </p>
                      <p> 
                        Mireia Belmonte <span className={styles.span1}> 
                                          ● Professor 
                                        </span> 
                                        <span className={styles.span2}>  
                                          - hace 3 meses 
                                        </span>
                      </p>
                    </div>
              </div>

            </section>

            <button className={styles.studyContainerButton}> Ver Más </button>
            
      </section>


    </section>
  )
} 

export default MaisCursos;