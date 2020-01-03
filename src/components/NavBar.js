import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../App.css';
import AuthModal from '../components/AuthModal'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <div id="nav">
      <Navbar color="transparent" light expand="md">
        <NavbarBrand tag={Link} to="/" href="/">
          <img
            height="35"
            width="47"
            src="https://cdn.dribbble.com/users/41636/screenshots/2719580/instagram-logo-concept.jpg"
            alt=""
          />
          Reactagram
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                <AuthModal/>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}



// const Navbar = () => {
//   return (

//     <div>
//       <ul className="WholeNav">
//         <li className = "Login"><a href="#login">Login</a>
//         </li>
//         <li>
//           <div className="logo">
//             <Link to="/"><img height="50" width="120" src={logo} /></Link>
//           </div>
//         </li>
//       </ul>
//     </div>
//   )
// }

export default NavBar;