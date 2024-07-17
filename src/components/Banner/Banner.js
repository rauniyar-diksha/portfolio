import React from 'react'
import rightlogo from '../../images/main-banner-image.png';
import downlaods from '../../images/download.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='main-banner-sec'>
            <div className='banner-content-box-sec'>
                <div className='left-banner-box'>
                <div className='text-box-sec'>
                    <span>Hello, I am</span>
                    <h1>CALEB NYONG</h1>
                    <em>UI/UX & Product Designer</em>
                    <p>I’m a top online marketer and branding expert, I started my career
                        by lauching the popular metaverse design, in just a few short
                        years, I built the brand to millions of social media followers and websites visitors.</p>
                </div>

                <div className='dwnld'>
                    <button>Hire me</button>
                    <a className='cv' href='#'>Download CV <img src={downlaods} className="App-logo" alt="logo" /></a>
                </div>
                </div>
                <div className='right-banner-box'>
                <img src={rightlogo} className="App-logo" alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Banner
