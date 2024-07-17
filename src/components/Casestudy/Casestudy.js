import React from 'react';
import './Casestudy.css';
import caseone from '../../images/caseone.png';
import casetwo from '../../images/casetwo.png';
import casethree from '../../images/casethree.png';

const caseStudies = [
    {
        id: 1,
        image: caseone,
        title: 'Bakery Landing Page Design',
        description: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
        id: 2,
        image: casetwo,
        title: 'Shoe Store Ecommerce Landing Page',
        description: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
        id: 3,
        image: casethree,
        title: 'ClearMix Landing page',
        description: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    }
];

const CaseStudyItem = ({ id, image, title, description }) => (
    <div className='case-content'>
        <div className='case-img'>
            <img src={image} className="App-logo" alt="logo" />
        </div>
        <div className='case-details'>
            <span>{`0${id}`}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            <button>Details</button>
        </div>
    </div>
);

const Casestudy = () => {
    return (
        <div className='study-mat-conatiner'>
            <div className='case-study-box'>
                <div className="top-box">
                    <span>CASE STUDY</span>
                    <h1>My Case Studies</h1>
                </div>
                <div className='leftd-bx'>
                    {caseStudies.map((study) => (
                        <CaseStudyItem
                            key={study.id}
                            id={study.id} // Pass the id prop here
                            image={study.image}
                            title={study.title}
                            description={study.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Casestudy;
