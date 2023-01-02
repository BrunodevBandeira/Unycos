import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SplitPage from "./pages/splitPage/SplitPage";
import Login from "./pages/loginPage/LoginPage";
import Register from "./pages/registerPage/RegisterPage";
import NotFound from "./pages/notFound/NotFound";
import { AuthProvider } from "./contexts/Auth";

const AppRouter = () => {

    return(
        <Router> 
            <AuthProvider>
                <Routes>
                    <Route path="/" element={ <SplitPage /> } />
                    <Route path="login" element={ <Login /> } />
                    <Route path="register" element={ <Register /> } />
                    <Route path="home" element={ <LandingPage /> } />
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </AuthProvider>
        </Router>
    );
    
};

export default AppRouter;