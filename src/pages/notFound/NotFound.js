import react from "react";
import Head from "../../components/Head/Head";
import style from "./NotFound.module.css";
import foto from "../../assets/splitNatacao3.jpg";

const NotFound = () => {
    return(
        <div className={style.notFound}>
            <Head title="Página não encontrada" description="404"/>          
            <div  className={style.notFoundContainer}>
                <p  className={style.containerText}> NotFound... </p>
                <img src={foto} title="Not Found... Salvador Dali" />
            </div>
        </div>
    );
};

export default NotFound;