import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/About">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/Portfolio">
                    Portfolio
                </NavLink>
            </li>
            <li>
                <NavLink to="/Resume">
                    Resume
                </NavLink>
            </li>
            <li>
                <NavLink to="/Contact">
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink to="/Credits">
                    Credits
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Header