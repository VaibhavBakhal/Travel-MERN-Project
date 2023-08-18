import React from "react";
import "./Clients.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
const Clients = () => {
  return (
    <div className="r-wrapper">
      <div className="r-container">
        <div className="r-head">
          <div className="orange">Promotion</div>
          <div className="blue">See What Our Clients Say </div>
          <div className="blue">About Us</div>
        </div>
        <div className="myswiper-container">
          <Swiper
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            speed={800}
          >
            {/* slider */}
            <SwiperSlide>
              <div className="clent">
                <img className="clientimg" src="clients1.jpeg" alt="" />
                <span className="clientdesc">
                  Vel officiis dolor ea illo aut eligendi ullam non laudantium
                  magnam et recusandae molestiae sit iure unde aut voluptate
                  quaerat. Id sunt provident quo possimus impedit vel doloremque
                  obcaecati qui ullam consectetur et ipsum omnis.
                  <strong>"</strong>
                </span>
                <span className="clientname">Christine Beckam - Designer</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clent">
                <img className="clientimg" src="clients1.jpeg" alt="" />
                <span className="clientdesc">
                  Vel officiis dolor ea illo aut eligendi ullam non laudantium
                  magnam et recusandae molestiae sit iure unde aut voluptate
                  quaerat. Id sunt provident quo possimus impedit vel doloremque
                  obcaecati qui ullam consectetur et ipsum omnis.
                  <strong>"</strong>
                </span>
                <span className="clientname">Christine Beckam - Gammer</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clent">
                <img className="clientimg" src="clients1.jpeg" alt="" />
                <span className="clientdesc">
                  Vel officiis dolor ea illo aut eligendi ullam non laudantium
                  magnam et recusandae molestiae sit iure unde aut voluptate
                  quaerat. Id sunt provident quo possimus impedit vel doloremque
                  obcaecati qui ullam consectetur et ipsum omnis.
                  <strong>"</strong>
                </span>
                <span className="clientname">Christine Beckam - cook</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <img className="clientcorner" src="clientcorner.png" alt="" />
    </div>
  );
};

export default Clients;
