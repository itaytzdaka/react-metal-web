import React from 'react';
import './nav.css';
import FullScreenButton from './full-screen-button';

const Nav = () => {


    return (
        <nav className="Nav">
            <ul className="options-menu">
                <li><FullScreenButton></FullScreenButton></li>
                <li>גיבוי</li>
                <li>צבע</li>
                <li>מערכת</li>
                <li>טכני</li>
                <li>גופן</li>
                <li>יומן</li>
                <li>עזרה</li>
            </ul>
        </nav>
    );
};

export default Nav;