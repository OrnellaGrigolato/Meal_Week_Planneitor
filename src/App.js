//Style
import './App.css';

//Components
import Landing from './Components/Landing/Landing.js';
import Calendar from './Components/Calendar/Calendar.js';
import MealList from './Components/MealList/MealList';
//React Router
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
 
        <div className='containter'>
          <Switch>
              <Route exact path='/'>
                <Landing />
                <Calendar />
              </Route>
              <Route exact path='/meals'>
                <MealList/>
              </Route>
          </Switch>
        </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
