import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AddForm from './components/AddForm';
import MensagesPage from './components/MensagesPage';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div >
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/send-mensage" element={<AddForm />} />
          <Route path="/mensages" element={<MensagesPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
