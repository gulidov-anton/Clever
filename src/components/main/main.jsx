import React from "react";
import { Purchases } from "../purchases";

import { Cards } from "../cards";

import styles from "./main.module.css";

export class Main extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <Cards />
        <Purchases />
      </div>
    );
  }
}