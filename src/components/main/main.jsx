import React from 'react';
import Card from '../card';
import style from './main.module.css';

const data = [
    {
        title: 'Чайник',
        id: 1,
    },
    {
        title: 'Тостер',
        id: 2,
    },
    {
        title: 'Миксер',
        id: 3,
    }
];

export class Main extends React.Component {
    render() {
        return (
            <main className={style.main}>
                {data.map((item) => <Card />)}
            </main>
        )
    }
}