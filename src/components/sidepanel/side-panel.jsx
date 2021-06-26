import React from 'react';
import { Link } from 'react-router-dom';

import './side-panel.module.css';

export const SidePanel = () => {
    <div className="style.side-panel">
        <Link className="link" to='/main'>Главная</Link>
        <Link className="link" to='/todo'>Todo</Link>
        <Link className="link" to='/counter'>Счётчик</Link>
    </div>
}