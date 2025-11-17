"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { certificatesData } from "@/assets/assets";

const Certificates = () => {
  return (
    <div id="certificates" className="w-full px-[12%] py-20 scroll-mt-20">
      <h2 className="text-center text-4xl md:text-5xl font-semibold mb-12 font-Ovo">
        Certificates
      </h2>

      <div className="w-full md:w-[80%] mx-auto">
        <Swiper
          effect={"coverflow"}
          color="transparent"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
          }}
          // pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="certificates-swiper"
        >
          {certificatesData.map((cert, index) => (
            <SwiperSlide
              key={index}
              className="rounded-xl overflow-hidden shadow-xl w-[350px] md:w-[500px] h-[300px]"
            >
              <a href={cert.certificateLink} target="_blank" rel="noopener noreferrer">
              <div className="relative w-full h-full">
                <div className="relative w-full h-full transition-transform duration-300 hover:scale-105">
                  <Image
                    src={cert.img}
                    alt={`Digital Marketing Expert in Malappuram | Web Developer ${cert.title} certificate`}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-contain"
                  />
                </div>

                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <h2 className="text-lg font-semibold">{cert.title}</h2>
                  <p className="text-sm">{cert.certificateIssuer}</p>
                </div>
              </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Certificates;
