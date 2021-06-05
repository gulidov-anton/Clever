import React from 'react';
import style from './card.module.css';


export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }

    onCounter = ({ target: { value } }) => {
        this.props.onCounterChange(this.props.cardData.id, value); 
    }

    onDescriptionChange({ target: { value } }) {
        this.setState({
            description: value,
        });
    }
    render() {
        const {
            cardData: { title, description, srcImg, price },
          } = this.props;
        return (
            <dev className={style.card}>
                <h2>Карточка товара</h2>
                <p>{title}</p>
                <p>{price} рублей</p>
                <img src={srcImg} alt="goods" />
                <div>
                    <label>
                    Количество:
                    <input
                        type="number"
                        name="card-counter"
                        onChange={this.onCounter}
                        value={this.props.counter}
                    />
                    </label>
                </div>
                <div>
                    <label>
                    Описание:
                    <input
                        type="text"
                        onChange={this.onDescriptionChange}
                        value={description}
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