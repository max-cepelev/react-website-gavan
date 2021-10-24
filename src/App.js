import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import CardPage from './components/pages/CardPage';
import MainPage from './components/pages/MainPage';
import ProgressPage from './components/pages/ProgressPage';
import ScrollToTop from './components/ScrollToTop'
import { getUTM } from './services/ServiceFunctions';


function App() {

  getUTM();

  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route path="/" exact>
          <MainPage/>
        </Route>
        <Route path="/progress/:id">
          <ProgressPage/>
        </Route>
        <Route path="/layouts/:id" >
          <CardPage/>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
