import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext.js'
import { Link } from 'react-router-dom'
import './Navbar.css'

const navStyles = {
  backgroundColor: '#e3f2fd'
}

const Navbar = () => {
  const { isAuth, user } = useContext(AuthContext)
  console.log(user, 'Navbar');
  return (
    <nav className="navbar navbar-light" style={navStyles}>
      <div className="photify-flex-row">
        <Link to={'/'}>
          <span className="navbar-brand">
            Photify
          </span> 
        </Link>
        {
          isAuth
            ? (
              <ul className="navbar-nav photify-flex-row">
              <Link to={'/example'}>
                <span className="nav-link">Example</span>
              </Link>
              </ul>
            )
            : null
        }
      </div>
        {
          isAuth
          ? (
            <div className="photify-flex-row">
              <img className="photify-profile-img mr-3" src={user.profile_img} alt="Profile" />
              <Link to={ `/profile/${user.id}` }>
                <span className="navbar-brand">{ user.first_name }</span>
              </Link>
              <ul className="navbar-nav photify-flex-row">
                  <Link to={'/logout'}>
                    <li className="nav-item ml-3">
                      <span className="nav-link">Cerrar sesión</span>
                    </li>
                  </Link>
              </ul>
            </div>
            )
          : (
            <ul className="navbar-nav photify-flex-row">
              <Link to={'/signup'}>
                <li className="nav-item ml-3">
                  <span className="nav-link">Registro</span>
                </li>
              </Link>
              <Link to={'/login'}>
                <li className="nav-item ml-3">
                  <span className="nav-link">Iniciar sesión</span>
                </li>
              </Link>
            </ul>
            )
        }
    </nav>
  )
}

export default Navbar