import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Modal from './components/Modal';
import SymptompsDetection from './pages/SymtompsDetection';
import DoctorReservation from './pages/DoctorReservation';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Modal />
      <div className="d-flex" style={{'minHeight': '90vh'}}>
        <NavBar nav="DR" />
        <DoctorReservation />
        {/* <SymptompsDetection /> */}
      </div>
    </div>
  );
}

export default App;
