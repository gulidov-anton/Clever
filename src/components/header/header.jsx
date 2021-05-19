import React from 'react';
import './header.css';
import Logo from './assets/logo.svg';


export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src= { Logo } alt="atom-picture" />
                <br/>
                HEADER
            </div>
        )
    }
}