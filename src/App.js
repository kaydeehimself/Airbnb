import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import CardData from './components/CardData.js';

export default function App() {    
    const cardElements = CardData.map(cUnit => {
        return <Card 
                     key={cUnit.id}
                     cUnit={cUnit}
                    //  img={cUnit.img}
                    //  rating={cUnit.rating}
                    //  reviewCount={cUnit.reviewCount}
                    //  title={cUnit.title}
                    //  price={cUnit.price}
                    //  openSpots={cUnit.info.openSpots}
                    //  location={cUnit.info.location}
                    //  country={cUnit.country}              
                />
    }) 
    return (
        <div className='container'>
            <div className='main'>          
                <Navbar />
                <Hero />
                <div className='cardcontainer'>
                  {cardElements}  
                </div>                       
            </div>
        </div>
    )
}