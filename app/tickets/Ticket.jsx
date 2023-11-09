'use client';

import Link from 'next/link';
import { Virtual, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/virtual';
// import { v4 as id } from 'uuid';
import './ticket.css'

const Ticket = ({ tickets }) => {

  SwiperCore.use([Virtual, Autoplay]);

  return (
    <>
      <Swiper
        modules={[Virtual]}
        spaceBetween={50}
        slidesPerView={3}
        virtual
        // autoplay={{ 
        //   delay: 1000,
        // }}
        loop={true}
      >
        {tickets.map((ticket, i) => (
          <SwiperSlide key={ticket} virtualIndex={i}>
            <Link href={`/tickets/${ticket.id}`} className="swiper-slide">
              <div className="card my-5">
                <h3>{ticket.title}</h3>
                <p>{ticket.body.slice(0, 200)}...</p>
                <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {tickets.length === 0 && <p className="text-center">There are no open tickets, yay!</p>}
    </>
  );
};

export default Ticket;
