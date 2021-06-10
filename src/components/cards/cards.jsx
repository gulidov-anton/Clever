import React from "react";

import { Card } from "../card";

import { data } from "../../data/goods";

import styles from "./cards.module.css";

const DEFAULT_STATE = { kettle: 0, toster: 0, mixer: 0 };

export class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  onBuy = (goods, count) => {
    this.setState({ [goods]: this.state[goods] + count });
  };

  render() {
    return (
      <div className={styles.main}>
        {data.map((cardData) => (
          <Card cardData={cardData} key={cardData.key} onBuy={this.onBuy} />
        ))}
        <div>
          Корзина:
          <p>Чайник: {this.state.kettle}</p>
          <p>Тостер: {this.state.toster}</p>
          <p>Миксер: {this.state.mixer}</p>
          <button type="button" onClick={() => this.setState(DEFAULT_STATE)}>
            Очистить корзину
          </button>
        </div>
      </div>
    );
  }
}