import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import TestimonialLeftIcon from '../../images/test-left.png';
import TestimonialRightIcon from '../../images/test-right.png';
import TestimonialMainImage from '../../images/testimonials.png';

const testimonialsData = [
    {
        id: 1,
        text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        author: "Karmani",
        role: "FOUNDER AND CEO OF KARMANI"
    },
    {
        id: 2,
        text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        author: "Karmani",
        role: "FOUNDER AND CEO OF KARMANI"
    },
    {
        id: 3,
        text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        author: "Karmani",
        role: "FOUNDER AND CEO OF KARMANI"
    },
    {
        id: 4,
        text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        author: "Karmani",
        role: "FOUNDER AND CEO OF KARMANI"
    }
];

const TestimonialCard = ({ text, author, role }) => (
    <div className='card-item'>
        <div className='card-content'>
            <div className='quote-icons'>
                <img src={TestimonialRightIcon} className="testimonial-icon" alt="testimonial-right" />
                <img src={TestimonialLeftIcon} className="testimonial-icon" alt="testimonial-left" />
            </div>
            <img src={TestimonialMainImage} className="testimonial-main" alt="testimonial-main" />
            <p>{text}</p>
            <strong>{author}</strong>
            <p>{role}</p>
        </div>'     '
    </div>
);
const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <div className="slick-arrow slick-next">→</div>,
        prevArrow: <div className="slick-arrow slick-prev">←</div>
    };

    return (
        <div className='testi-wrapper'>
            <div className='middle-wrap-box'>
                <div className='top-box'>
                    <span>TESTIMONIALS</span>
                    <h1>What People Says</h1>
                </div>
                <Slider {...settings}>
                    {testimonialsData.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            text={testimonial.text}
                            author={testimonial.author}
                            role={testimonial.role}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
