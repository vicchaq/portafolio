import React from 'react';
import "./Slider.css";
import images from '../images/dog.jpg';
import asset from '../asset/Food.jpg';


const slidesInfo = [
    {
        title:
        "Proyecto N1 Api Dogs",
        img:images,
        link:"https://pi-dog.herokuapp.com/",
        
    },

    {
        title:
        "Proyecto N2 Api Food",
        img:asset,
        link:"https://pi-food-main.herokuapp.com/",
    },


]

const slides = slidesInfo.map(slide => (
    <div className = "slide-container">
        <img src={slide.img} title={slide.title} alt={slide.img} />
        <div className="slide-desc">
            <a href={slide.link} target="_blank" rel="noreferrer noopener">{slide.title}</a>
        </div>
    </div>
))

export default slides;