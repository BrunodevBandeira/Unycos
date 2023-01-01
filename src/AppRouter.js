import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SplitPage from "./pages/splitPage/SplitPage";

const AppRouter = () => {

    return(
        <Router> 
            <Routes>
            <Route path="/" element={ <SplitPage /> } />
            <Route path="home" element={ <LandingPage /> } />
            </Routes>
        </Router>
    );
    
};

export default AppRouter;