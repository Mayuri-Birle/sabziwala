import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {LoginPage} from '../login'

import {Home} from '../../pages/home'
import {Cart} from '../../pages/cart'
import cartImg from "./../../assets/image/cart.png" 
import './style.scss'
export default function Nav() {
  return (
    <Router>
      <div>
        <header>
          <div className="title">Sabzi<span>wala</span></div>
          <nav class="nav">
            <ul class="menu-nav">
             <li class="menu-nav__item">
                <Link className="menu-nav__link" to="/">Home</Link>
              </li>
              <li class="menu-nav__item">
                <Link className="menu-nav__link" to="/about">About</Link>
              </li>
              <li class="menu-nav__item">
                <Link className="menu-nav__link" to="/users">Users</Link>
              </li>
              <li class="menu-nav__item">
                <Link className="menu-nav__link" to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <div className="logo">
            <Link className="menu-nav__link" to="/cart">
              <img src={cartImg} /> 
            </Link>
          </div>

        </header>

</div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/Login">
            <LoginPage />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route> <Route path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Home />
          </Route>
        </Switch>
      
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
function Search() {
  return <h2>Search</h2>;
}