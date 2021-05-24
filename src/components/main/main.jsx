import React from 'react';
import { Card } from '../card';
import { goods } from '../../data/goods';
import style from './main.module.css';


export class Main extends React.Component {
    render() {
        return (
            <main className={style.main}>
                {goods.map((item) => <Card id={item.id} title={item.title} src={item.src} price={item.price}/>)}
            </main>
        )
    }
}