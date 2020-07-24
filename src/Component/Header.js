import React, {useState} from "react";
import { useSelector } from "react-redux";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Login from "./Login";
import HomePage from "./Body"

function Header() {
    const statusAuthen = useSelector(state => state.Authen.statusAuthenFeature)
    const statusNoneAuthen = useSelector(state => state.Authen.statusNoneAuthenFeature)
    const userName = useSelector(state => state.Authen.userName)
    return (
        <Router>
        <div>
            <div className="row">
                <div className="col-md-9">
                    <p className="font-color-green">conduit</p>
                </div>
                <div className="col-md-3">
                    <nav className="navbar navbar-inverse">
                        <ul className="nav navbar-nav">
                            <li  style={{display: "block"}}>
                                <NavLink  to="/HomePage" >Home</NavLink>
                            </li>
                            <li style={{display: statusNoneAuthen}}>
                                <NavLink exac to="/SignIn" >Sign in</NavLink>
                            </li>
                            <li style={{display: statusNoneAuthen}}>
                                <NavLink exac to="/SignUp" >Sign up</NavLink>
                            </li>
                            <li style={{display: statusAuthen}}>
                                <NavLink exac to="/NewPost" >New Post</NavLink>
                            </li>
                            <li style={{display: statusAuthen}}>
                                <NavLink exac to="/Setting" >Setting</NavLink>
                            </li>
                            <li style={{display: statusAuthen}}>
                                <NavLink exac to="/userName" >{userName}</NavLink>
                            </li>
                        </ul>
                    </nav>
                    
                </div>
                
            </div>
            <Route path="/SignIn" component={Login} />
            <Route exac path="/HomePage" component={HomePage} />
            
        </div>
        </Router>
       
    )
}
export default Header