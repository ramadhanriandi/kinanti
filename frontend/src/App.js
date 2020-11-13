import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import MainBar from './components/MainBar';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Modal />
      <div className="d-flex" style={{'min-height': '90vh'}}>
        <NavBar />
        <SideBar />
        <MainBar />
      </div>
    </div>
  );
}

export default App;
