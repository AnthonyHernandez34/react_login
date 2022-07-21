//pages
import Home from './pages/Home';
import Login from './pages/Login';

//styles
import {StyledContainer} from './components/Styles';

//buttons
import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom';

function App() {
  return (
 <Router>
  <StyledContainer>
    <Login />
  </StyledContainer>
 </Router>
  );
}

export default App;
