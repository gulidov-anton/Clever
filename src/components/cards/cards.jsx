import React from 'react';

import { Card } from '../card/card';
import { data } from "../../data/goods";
import style from './card.module.css';


export class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = { kettle: 0, toster: 0, mixer: 0 };
        //this.onCounterChange = this.onCounterChange.bind(this);
        //this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }

    onCounterChange = (goods, count) => {
        this.setState({[goods]: count});
    }

    render() {
        return (
            <dev className={style.main}>
                {data.map((cardData) => (
                    <Card
                        cardData={cardData} 
                        key={cardData.key}
                        counter={this.state[cardData.id]}
                        onCounterChange={this.onCounterChange} 
                    />
                ))}
            </dev>
        )
    }
}