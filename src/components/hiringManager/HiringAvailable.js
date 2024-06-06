import react from 'react';
import { Link } from 'react-router-dom';
// import "./styles/HiringAvailable.css";

import NavBar from '../NavBar';
import HiringManagerNavBar from './HiringMangerNavBar';

function HiringAvailable(){
    return(
        <div>
            <NavBar />
            <HiringManagerNavBar />
            <p>Available hiring</p>
        </div>
    )
}

export default HiringAvailable;