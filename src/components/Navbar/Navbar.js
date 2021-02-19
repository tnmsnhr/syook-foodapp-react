import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar__container">
            <div className="container">
                <div className="navbar__nav">
                    <section className="navbar__left">
                        <ul className="navbar__menu-items">
                            <li className="navbar__menu-item"><NavLink to="/home/profile" activeClassName="active__nav">Profile</NavLink></li>
                            <li className="navbar__menu-item"><NavLink to="/home/vote" activeClassName="active__nav">Vote</NavLink></li>
                            <li className="navbar__menu-item"><NavLink to="/home/result" activeClassName="active__nav">Result</NavLink></li>
                        </ul>
                    </section>

                    <section className="navbar__right">
                        <button className="btn btn-primary"><Link to="/">Log in</Link></button>
                        <button className="btn btn-default"><Link to="/">Sign up</Link></button>
                    </section>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
