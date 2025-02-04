import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"; 
import { Home , LoginPage, SignupPage, CreateProduct} from "./Routes.jsx"
import './App.css';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Signup" element={<SignupPage/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/Create-product" element={<CreateProduct/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;