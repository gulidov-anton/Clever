import React from 'react';

import style from './card.module.css';


export class Card extends React.Component {
    render() {
        return (
            <dev className={style.card}>
                <h2>Карточка товара</h2>
                <p>{this.props.title}</p>
                <p>{this.props.price} рублей</p>
                <p>{this.props.src}</p>
            </dev>
        )
    }
}