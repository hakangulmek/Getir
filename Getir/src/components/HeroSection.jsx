import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from "react-icons/fa6";
import { useState } from "react";

function HeroSection() {
  const [selected, setSelected] = useState("US");
  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="relative h-[500px] before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
            alt=""
          />
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2-translate-x-1/2 h-full">
        <div>
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <h3 className="text-4xl mt-8 font-semibold text-white">
            Dakikalar İçinde <br />
            Kapında
            <br />
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primnary-brand-color text-center font-semibold mb-4">
            Giriş Yap ve Kayıt Ol
          </h4>
          <div className="flex gap-x-2">
            <ReactFlagsSelect
              className="flag-select"
              countries={Object.keys(phones)}
              customLabels={phones}
              placeholder="Select Language"
              onSelect={(code) => setSelected(code)}
              selected={selected}
            />
            <label className="flex-1 relative block">
              <input
                required
                className="h-14 px-4 border-2 border-gray-200 rounded w-full hover:border-primnary-brand-color focus:border-primnary-brand-color peer text-sm focus:pt-2"
              />
              <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primnary-brand-color peer-valid:h-7 peer-valid:text-primnary-brand-color">
                Telefon Numarası
              </span>
            </label>
          </div>
          <button className="bg-brand-yellow h-12 flex items-center hover:bg-primnary-brand-color hover:text-brand-yellow justify-center rounded-md w-full text-sm font-semibold text-primnary-brand-color">
            Telefon Numarası İle Devam Et
          </button>
          <hr className="h-[1px] bg-gray-300 my-2" />
          <button className="bg-blue-700 bg-opacity-10 px-4 h-12 flex items-center hover:bg-blue-700 hover:text-white rounded-md w-full text-sm font-semibold text-blue-700 opacity-80">
            <FaFacebook size={24} className="" />
            <span className="mx-auto">FaceBook İle Devam Et</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
