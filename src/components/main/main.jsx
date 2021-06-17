import React from "react";

import { Cards } from "../cards";
import { Todo } from "../todo";

import styles from "./main.module.css";

export class Main extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <Cards />
        <Todo />
      </div>
    );
  }
}