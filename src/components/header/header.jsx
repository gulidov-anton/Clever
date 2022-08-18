import React from 'react';
import logo from './assets/logo.svg';
import style from './header.module.css';

const bool = true;

export class Header extends React.Component {
    render() {
        return (
            <header className={style.header}>
                <img src={logo} alt="atom" className={style.logo}/>
                <div style={{backgroundColor: bool ? "yellow" : "green"}}>HEADER</div>
            </header>
        )
    }
}