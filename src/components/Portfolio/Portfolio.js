import React from 'react';
import onelogo from '../../images/portfolioone.png';
import twologo from '../../images/portfoliotwo.png';
import threelogo from '../../images/portfoliothree.png';
import fourlogo from '../../images/portfoliofour.png';
import './Portfolio.css';

const images = [onelogo, twologo, threelogo, fourlogo];

const Portfolio = () => {
    return (
        <div className='port-container'>
        <div className='main-portfolio-box-col'>
            <div className="top-box">
                <span>PORTFOLIO</span>
                <h1>People Lie Work Don’t</h1>
            </div>
            <div className='explore-services'><a href='#'>Explore All Services</a></div>
            <div className='images-main-wrapper'>
                {images.map((image, index) => (
                    <img key={index} src={image} className="App-logo" alt={`portfolio-${index + 1}`} />
                ))}
            </div>
        </div>
        </div>
    );
};

export default Portfolio;
