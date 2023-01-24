import React from 'react';
import star from '../images/Star.png';


export default function Card(props) {
 let badgeinfo  
 if (props.cUnit.info.openSpots ===0) {
    badgeinfo='SOLD-OUT'
 }
 else if (props.cUnit.info.openSpots <=10) {
    badgeinfo='LIMITED OFFER'
 }
 else if (props.cUnit.info.location==='online') {
    badgeinfo='ONLINE'
 }
 
    return (
        <div className='card'>
            <div className='item'>
                <div className='imgcontain'>
                    <img src={props.cUnit.img} className='img1'/>
                    {badgeinfo && <p className='inset'>{badgeinfo}</p>}
                </div>
                <div className='subtitle'>
                    <div className='sub'>
                        <img src ={star} className='star'/>
                        <p>{props.cUnit.rating}<span className='light'>{props.cUnit.reviewCount}{props.cUnit.country}</span></p>
                    </div>
                    <p className='sub-title'>{props.cUnit.title}</p>
                    <p><span className='bold'>from ${props.cUnit.price}</span>&nbsp;/person</p>
                </div>
            </div>                    
        </div>

    )
}