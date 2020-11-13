import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Modal from './components/Modal';
import SymptompsDetection from './pages/SymtompsDetection';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Modal />
      <div className="d-flex" style={{'minHeight': '90vh'}}>
        <NavBar />
        <SymptompsDetection />
      </div>
    </div>
  );
}

export default App;
