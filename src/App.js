//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

//styles
import {StyledContainer} from './components/Styles';

// Loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

//route
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <StyledContainer>
                <Switch>
                    <Route path="/signup">
                        <Signup/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </StyledContainer>
        </Router>
    );
}

export default App;
