import React from 'react';
import PropTypes from "prop-types";
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
        console.log("props:", this.props);
        const {
            cardData: { title, description, srcImg, price, counter },
          } = this.props;
        return (
            <div className={style.card}>
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
                        value={counter}
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
                <p> counter: {this.props.counter}</p>
                <p> description: {this.props.description}</p>
                </div>
                
            </div>
        )
    }
}

Card.defaultProps = {
    cardData: {},
    counter: null,
    onCounterChange: () => {},
}

Card.propTypes = {
    cardData: PropTypes.objectOf(PropTypes.any),
    counter: PropTypes.number,
    onCounterChange: PropTypes.func,
}