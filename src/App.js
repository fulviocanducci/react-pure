import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import routers from './Routers';
import './App.css';

export default function App() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);
  return (
    <BrowserRouter>
      <div id="layout" className={menu?'active':''}>
        <a href="#menu" onClick={toggleMenu} id="menuLink" className={menu?'menu-link active':'menu-link'}>        
          <span></span>
        </a>
        <div id="menu">
          <div className="pure-menu">
            {/* eslint-disable */}
            <a className="pure-menu-heading" href="#">System</a>
            <ul className="pure-menu-list">
            {routers.map((item, index) => (
                <li className="pure-menu-item" key={index} onClick={toggleMenu}>
                  <Link id="pure-menu-link" className="pure-menu-link" to={item.linkTo}>{item.name}</Link>
                </li>
            ))}
            </ul>          
          </div>
        </div>
        <div id="main">
          <div className="header">
              <h1>Page Title</h1>
              <h2>A subtitle for your page goes here</h2>
          </div>
          <div className="content">        
            <Switch>
              {routers.map((item, index) => (
                <Route key={index} path={item.linkTo} exact component={item.component} />   
              ))}        
            </Switch>
          </div>
        </div>
      </div>          
    </BrowserRouter>
  );
}