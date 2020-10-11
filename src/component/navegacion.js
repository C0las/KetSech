import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class navegacion extends Component {

  
  render() {


    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
        <div className="container">
        <Link  className="navbar-brand " to="/">GabrielApp</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarText" >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item  className">
            <Link  className="nav-link" to="/">Notas</Link>
            </li>
            <li className="nav-item className">
            <Link  className="nav-link" to="/create">Crear notas</Link>
            </li>
            <li className="nav-item className">
            <Link  className="nav-link" to="/user">crear usuario</Link>
            </li>
            <li className="nav-item className">
            <Link  className="nav-link" to="/api">Api Externa</Link>
            </li>
          </ul>
          <span className="navbar-text">
            proximamente lo usaré
    </span>
        </div>
        </div>
      </nav>
    )
  }
  
}

export default navegacion