import React, { Component } from "react";
//import Login from "./Login";
import NavBar from "./NavBar";
///import MainContent from "./MainContent";
import ShoppingCart from "./ShoppingCart";
//import Login from'./Login';
import Dashboard from "./Dashboard";
//import ShoppingCard from "./ShoppingCard";
import Login from "./Login";
import CustomersList from "./CustomersList";
//import {Switch} from 'react-router';
//import {BrowserRouter} from 'react-router-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/customers" exact component={CustomersList} />
            <Route path="/cart" exact component={ShoppingCart} />
            <Route path="*" component={NoMatchPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
