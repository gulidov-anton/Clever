import React from 'react';
import style from './card.module.css';

import kettleImg from './assets/kettle.jpeg';

export class Card extends React.Component {
    render() {
        return (
            <dev className={style.card}>
                <h1>Карточка товара</h1>
                <img src={kettleImg} alt="kettle-img"/>
            </dev>
        )
    }
}