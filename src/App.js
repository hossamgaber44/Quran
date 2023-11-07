import React from 'react';
import { Routes, Route,  } from 'react-router-dom'
import ContextProvider from './Context/Context'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Quran from './component/Quran/Quran';
const App = () => {
  return (
    <>
      <ContextProvider>
        <Navbar/>
        <div style={{height:'80px'}} ></div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Quran' element={<Quran/>}/>
        </Routes>
      </ContextProvider>
      <ToastContainer />
    </>
  )
}


export default App;




