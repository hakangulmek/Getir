import React from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";

function Campains() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="container mx-auto ">
      <h3 className="text-sm font-semibold mb-3">Kampanyalars</h3>
      <Slider className="-mx-2" {...settings}>
        {Banners.length &&
          Banners.map((banner, index) => (
            <div key={banner.id}>
              <picture className="block px-2">
                <img src={banner.image} className="rounded-lg" />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Campains;
