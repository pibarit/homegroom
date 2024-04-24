import React from 'react';
import { serviceCardData } from '../data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceCards = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <Slider {...settings}>
        {serviceCardData.map((card) => {
          const { id, img, title } = card;
          return (
            <div className='serviceCard' key={id}>
              <img
                src={img}
                style={{
                  boxShadow: '8px 8px 2px 0px rgb(255, 195, 31)',
                  height: '200px',
                  width: '300px',
                  borderRadius: '20px',
                  margin:'10px',
                }}
                alt=""
              />
              <h3>{title}</h3>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ServiceCards;
