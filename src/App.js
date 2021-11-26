import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AddForm from './components/AddForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/send-mensage" element={<AddForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
