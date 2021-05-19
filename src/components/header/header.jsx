import React from 'react';
import './header.css';
import logoImg from './assets/logo.svg';


export class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <img src= {logoImg} alt="atom-picture" className="img-header"/>
                HEADER
            </header>
        )
    }
}