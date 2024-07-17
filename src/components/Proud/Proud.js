import React from 'react';
import './proud.css';
import slackLogo from '../../images/slack-logo.png';
import dropboxLogo from '../../images/dropbox-logo.png';
import googleLogo from '../../images/google-logo.png';
import teslaLogo from '../../images/tesla-logo.png';

const logos = [
    { id: 1, src: slackLogo, alt: 'slack logo' },
    { id: 2, src: dropboxLogo, alt: 'dropbox logo' },
    { id: 3, src: googleLogo, alt: 'google logo' },
    { id: 4, src: teslaLogo, alt: 'tesla logo' }
];

const Proud = () => {
    return (
        <div className='proud-box'>
            <div className='top-topic'>
                <span>OUR CLIENTS</span>
                <h1>Who Makes Me Proud</h1>
            </div>
            <div className='bottom-images'>
                {logos.map((logo) => (
                    <img key={logo.id} src={logo.src} className="App-logo" alt={logo.alt} />
                ))}
            </div>
        </div>
    );
};

export default Proud;
