import React from 'react'
import styles from './headerStyles.module.css'
const Header = () => {
  return (
    <div className='container-fluid'>
      <nav className="navbar navbar-expand-lg headerStyle">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01" style={{display:"flex",justifyContent:"space-between"}}>
    <div>
    <a className="navbar-brand" href="#" style={{color:"white",fontSize:"large",fontWeight:"bold"}}>Hidden brand</a>
    </div>
    <div>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
      <li className="nav-item active">
        <a className="nav-link" href="#" style={{color:"white",fontSize:"large",fontWeight:"bold"}}>Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" style={{color:"white",fontSize:"large",fontWeight:"bold"}}>Link</a>
      </li>

    </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
