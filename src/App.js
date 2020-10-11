import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navegation from './component/navegacion'

function App() {
  return (

    <Router>
    
    {/* <Route path="/edit/:id" component={CrearNotas} /> 
    <Route path="/create" component={CrearNotas} /> */}

      <Navegation />
     
    </Router>
  );
}

export default App;
