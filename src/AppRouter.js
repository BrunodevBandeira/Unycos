import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SplitPage from "./pages/splitPage/SplitPage";
import Login from "./pages/loginPage/LoginPage";
import Register from "./pages/registerPage/RegisterPage";

const AppRouter = () => {

    return(
        <Router> 
            <Routes>
                <Route path="/" element={ <SplitPage /> } />
                <Route path="login" element={ <Login /> } />
                <Route path="register" element={ <Register /> } />
                <Route path="home" element={ <LandingPage /> } />
            </Routes>
        </Router>
    );
    
};

export default AppRouter;