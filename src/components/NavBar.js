import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/auth";

export function Navbar() {
  const {currentUser, setCurrentUser} = useContext(AuthContext);
  let navigate = useNavigate();

  function handleLogOut(){
    setCurrentUser(null);
    navigate('/home')
  }

  return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={`home`}>Home</Link>
          <button className="navbar-toggler" type="button"
                  data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {currentUser ? '':
                               <Link className="navbar-brand" to={`sign-in`}>Sign-In</Link>}
              </li>
              <li className="nav-item">
                {currentUser ? <Link className="navbar-brand" to={`todos`}>ToDo</Link> : 
                               ''}
              </li>
            </ul>
          </div>
          {currentUser && (
              <>
                <div style={{padding:'20px'}}>
                  <button className="navbar-brand" disabled style={{color: 'red'}}>Hello {currentUser.name}</button>
                </div>
                <button onClick={handleLogOut} className="navbar-brand">Sign out</button>
              </>
          )}
        </div>
      </nav>
  )
}