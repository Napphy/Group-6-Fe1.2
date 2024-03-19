// Importing browser router, install it first --- npm i -D react-router-dom@latest
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import Template from "./components/Template";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import Error from "./components/pages/error/Error";
import Gavino from "./components/pages/gavino/Gavino";

import './App.css';
import Enciso from "./components/pages/enciso/Enciso";

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        {/* Importing the Nav component before nested routes */}
        <Nav />

        {/* Using the Routes and Route components from react-router-dom */}
        <Routes>
          <Route path="/" element={<Template />}>
            <Route path="/gavino" element={<Gavino/>}/>
            <Route path="/enciso" element={<Enciso/>}/>

            {/* Copy and paste this -> "<Route path="/surname" element={<Surname/>}/>" change surname to your own surname */}


            <Route path="*" element={<Error />} />
          </Route>
        </Routes>

        {/* Importing the Footer component after nested routes */}
        <Footer />

      </BrowserRouter>
      
    </div>
  );
}

export default App;
