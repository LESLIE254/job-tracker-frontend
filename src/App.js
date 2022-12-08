import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {createContext, useState} from 'react'
import Dashboard from "./components/Dashboard"

export const AppContext = createContext(null)

function App() {
  const [me,setMe] = useState({})
  return (
    <AppContext.Provider value={{me, setMe}}>
     < BrowserRouter className="App">
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='dashboard/*' element={<Dashboard />} />
      
      </Routes>
     
    </BrowserRouter>
    </AppContext.Provider>
   
  );
}

export default App;
