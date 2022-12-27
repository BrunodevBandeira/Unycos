import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./pages/Footer/Footer"

const AppRouter = () => {

    return(
        <Router> 
            <Routes>
                <Header />
                    <Route path="/" element={ <Main /> } />
                <Footer />
            </Routes>
        </Router>
    );
    
};

export default AppRouter;