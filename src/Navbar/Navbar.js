import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar(props) {
    return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><input type="search" id="search" placeholder="Search" onKeyUp={(event)=>props.whatIs(event)}/></li>
            </ul>
    );
}
