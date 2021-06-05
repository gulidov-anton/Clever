import React from 'react';
import style from './card.module.css';


export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.onCounterChange = this.onCounterChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }

    onCounterChange({ target: { value } }) {
        this.setState({
            counter: value,
        });
    }

    onDescriptionChange({ target: { value } }) {
        this.setState({
            description: value,
        });
    }
    render() {
        return (
            <dev className={style.card}>
                <h2>Карточка товара</h2>
                <p>{this.props.title}</p>
                <p>{this.props.price} рублей</p>
                <img src={this.props.srcImg} alt="goods" />
                <div>
                    <label>
                    Количество:
                    <input
                        type="number"
                        name="card-counter"
                        onChange={this.onCounterChange}
                        value={this.state.counter}
                    />
                    </label>
                </div>
                <div>
                    <label>
                    Описание:
                    <input
                        type="text"
                        onChange={this.onDescriptionChange}
                        value={this.state.description}
                    />
                    </label>
                </div>
                <div>
                <h4>В стейте записано: </h4>
                <p> counter: {this.state.counter}</p>
                <p> description: {this.state.description}</p>
                </div>
            </dev>
        )
    }
}