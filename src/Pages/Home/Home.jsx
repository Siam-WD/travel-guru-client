import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide,  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
//
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";


import { useLoaderData } from "react-router-dom";

const Home = () => {
  const places = useLoaderData();

  return (
    <div className="flex mt-20 gap-10">
      <div className=" ml-10 text-white w-5/12">
        <h1 className="text-7xl font-bold ">COX'S BAZAR</h1>
        <p className="my-10">
          Cox's Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach, and it ...
        </p>
        <button className="btn btn-warning">Booking</button>
      </div>
      <div className="w-7/12 flex gap-5 ">
        
        
      <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      
      {places.map((place) => (
          <SwiperSlide>
            <Card key={place.id} place={place}></Card>
          </SwiperSlide>
        ))}
    </Swiper>
        
        
        
        
        
        
       
      </div>
    </div>
  );
};

export default Home;
