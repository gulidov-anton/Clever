import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "../header";
import { Main } from "../main";
import { SidePanel } from "../sidepanel";
import { Todo } from "../todo";
import { Counter } from '../counter';

import "./app.css";

export const App = (props) => {
  return (
    <div className="app">
      <Header />
      <Main store={props.store} />
      <SidePanel />
      <Switch>
        <Route path='/todo'>
          <Todo />
        </Route>
        <Route path='/counter'>
          <Counter />
        </Route>
      </Switch>
    </div>
  );
};