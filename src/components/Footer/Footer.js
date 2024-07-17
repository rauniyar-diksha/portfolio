import React from 'react';
import footerLogo from '../../images/footerlogo.png';
import './Footer.css';

const Footer = () => {
    // Define menu items as arrays
    const exploreMenu = [
        { id: 1, text: 'SUPPORTS', link: '#' },
        { id: 2, text: 'ABOUT US', link: '#' },
        { id: 3, text: 'BLOG', link: '#' }
    ];

    const legalMenu = [
        { id: 1, text: 'TERMS OF USE', link: '#' },
        { id: 2, text: 'PRIVACY POLICY', link: '#' }
    ];

    const socialsMenu = [
        { id: 1, text: 'TWITTER', link: '#' },
        { id: 2, text: 'LINKEDIN', link: '#' },
        { id: 3, text: 'INSTAGRAM', link: '#' }
    ];

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-item">
                    <img src={footerLogo} className="footer-logo" alt="logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper hendrerit nam tempus potenti orci sem, ante sollicitudin sed habitasse purus dignissim fringilla.</p>
                </div>

                {/* Explore menu */}
                <div className="footer-item">
                    <h1>Explore</h1>
                    <ul className='footer-menu-box'>
                        {exploreMenu.map(item => (
                            <li key={item.id}><a href={item.link}>{item.text}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Legal menu */}
                <div className="footer-item">
                    <h1>Legal</h1>
                    <ul className='footer-menu-box'>
                        {legalMenu.map(item => (
                            <li key={item.id}><a href={item.link}>{item.text}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Socials menu */}
                <div className="footer-item">
                    <h1>Socials</h1>
                    <ul className='footer-menu-box'>
                        {socialsMenu.map(item => (
                            <li key={item.id}><a href={item.link}>{item.text}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
