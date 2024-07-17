import React from 'react';
import './aboutme.css';
import abtmg from '../../images/aboutme.png';
import downlaod from '../../images/download.png';
import experience from '../../images/experience.png';
import projects from '../../images/projects.png';
import support from '../../images/customer-support.png';

const Aboutme = () => {
    return (
        <div className='about-me-wrap'>
            <div className='abt-us'>
                <div className='abt-img'>
                    <img src={abtmg} className="App-logo" alt="logo" />
                </div>
                <div className='content-box-abt'>
                    <span>A BIT</span>
                    <h1>About Me</h1>
                    <p>I’m a top online marketer and branding expert, I started my career
                        by lauching the popular metaverse design, in just a few short
                        years, I built the brand to millions of social media followers and websites visitors. I also created award-winning online products with millions of dolloars in online sales you want, you never get personalized experiences and they can be upwards of $1000 on hour. </p>
                       <div className='hired-bx'>
                        <div className='support-box'>
                            <div className='exprnc'>
                            <img src={experience} className="App-logo" alt="logo" />
                            <div className='exper-con'>
                                <span>5 years+</span>
                                <p>Experience</p>
                            </div>
                            </div>
                        </div>
                        <div className='support-box'>
                            <div className='exprnc'>
                            <img src={projects} className="App-logo" alt="logo" />
                            <div className='exper-con'>
                                <span>700+</span>
                                <p>Projects</p>
                            </div>
                            </div>
                        </div>
                        <div className='support-box'>
                            <div className='exprnc'>
                            <img src={support} className="App-logo" alt="logo" />
                            <div className='exper-con'>
                                <span>24/7</span>
                                <p>Customer Support</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className='dwnld'>
                            <button>Hire me</button>
                            <a className='cv' href='#'>Download CV <img src={downlaod} className="App-logo" alt="logo" /></a>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default Aboutme
