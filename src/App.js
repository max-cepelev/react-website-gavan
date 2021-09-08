import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import CardPage from './components/pages/CardPage';
import MainPage from './components/pages/MainPage';
import PlansPage from './components/pages/PlansPage';
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/plans" component={PlansPage}/>
        <Route path="/layouts/:id" render={
          ({match}) => <CardPage id={match.params.id - 1}/>}/>
      </Switch>
    </Router >
  );
}

export default App;
