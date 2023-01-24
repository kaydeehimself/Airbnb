import React from 'react';
import Heroimg from '../images/grp77.png';

export default function Hero() {
    return (
        <div className='hero'>
            <img src={Heroimg} className='heroimg' />
            <h2 className='title'>Online Experiences</h2>
            <p className='content'>
                Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
            </p>
        </div>

    )
}