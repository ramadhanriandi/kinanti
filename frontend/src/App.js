import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import SymptompsDetection from './pages/SymtompsDetection';
import DoctorReservation from './pages/DoctorReservation';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Router>
        <div className="d-flex" style={{'minHeight': '90vh'}}>
          <NavBar/>
          <Switch>
            <Route path="/doctors">
              <DoctorReservation />
            </Route>
            <Route path="/symtomps">
              <SymptompsDetection />
            </Route>
            <Redirect to='/symtomps' />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
