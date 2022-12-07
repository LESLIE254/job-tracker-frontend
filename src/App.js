import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    < BrowserRouter className="App">
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='dashboard/*' element={<Dashboard />} />
      
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
