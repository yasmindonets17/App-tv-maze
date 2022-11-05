import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

//Componets folder
import Navbar from "./componets/Navbar";
//Pages folder
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Singlepage from './pages/Singlepage';

const App = () => {
  return (
    <>
   
    <div className="container">
      <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
                        {/* Homepage Route */}
            <Route exact path="/" element={ <Homepage /> } />
                        {/* About page Route */}
            <Route exact path="/about" element={<Aboutpage />} />
                        {/* Single show detauls page Route */}
            <Route exact path="/singleshow/:id" element=
            {<Singlepage />} />

          </Routes>
        </div>
        </BrowserRouter>
      </div>
      </>
  );
};



export default App;
