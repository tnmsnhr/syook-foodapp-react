import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

const Navbar = props => {
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
                        {props.loginSuccess ?<>
                            <div className="avatar">
                                <img src='https://hscweb3.hsc.usf.edu/wp-content/uploads/2020/09/Grichnik-James-headshot-200x200-1.jpg'/>
                            </div>
                            <div className="navbar__username">
                                <h4>Tanmoy Roy</h4>
                            </div>
                            <div className="navbar__username">
                            <button className="btn btn-default"><Link to="/">Log out</Link></button>
                            </div>
                        </>
                        :
                        <>
                            <button className="btn btn-primary"><Link to="/">Log in</Link></button>
                            <button className="btn btn-default"><Link to="/">Sign up</Link></button>
                        </>}
                    </section>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps=state=>{
    return{
        loginSuccess: state.user.loginSuccess
    }
}


export default connect(mapStateToProps)(Navbar)
