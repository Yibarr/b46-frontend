import { Link } from 'react-router-dom'

const navStyles = {
  backgroundColor: '#e3f2fd'
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-light" style={navStyles}>
      <Link to={'/'}>
        <span className="navbar-brand">
          Photify
        </span> 
      </Link>
      <ul className="navbar-nav">
        <Link to={'/signup'}>
          <li className="nav-item">
            <span className="nav-link">Registro</span>
          </li>
        </Link>
        <Link to={'/example'}>
          <li className="nav-item">
            <span className="nav-link">Example</span>
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar