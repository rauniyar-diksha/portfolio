import React from 'react';
import './Services.css';
import serviceone from '../../images/serviceone.png';
import servicetwo from '../../images/servicetwo.png';
import servicethree from '../../images/servicethree.png';

const services = [
  {
    image: serviceone,
    title: 'Landing Page Design',
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
  },
  {
    image: servicetwo,
    title: 'Mobile App Design',
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
  },
  {
    image: servicethree,
    title: 'Branding',
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
  }
];

const Services = () => {
  return (
    <div className='service-box-main'>
      <div className='service-box-small'>
        <div className="top-box">
          <span>SERVICES</span>
          <h1>Check My Services</h1>
        </div>
        <div className='explore-services'>
          <a href='#'>Explore All Services</a>
        </div>
        <div className='sricing'>
          {services.map((service, index) => (
            <div className='develop' key={index}>
              <div className='dev-image'>
                <img src={service.image} className="App-logo" alt="logo" />
              </div>
              <div className='dev-contnt'>
                <h1>{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
