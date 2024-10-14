'use client'
import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";


import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
} from "swiper/modules";


function HomeSlider() {
    const [isClient, setIsClient] = useState(false);

useEffect(() => {
    setIsClient(true);
}, []);

    return (
        <section className="pbmit-slider-area pbmit-slider-one">
            {isClient && (<div
                className="swiper-slider"
                data-autoplay="true"
                data-loop="true"
                data-dots="true"
                data-arrows="false"
                data-columns={1}
                data-margin={0}
                data-effect="fade"
            >

                <Swiper
                    modules={[Autoplay, EffectFade, Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    speed={1500}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                    }}
                    className="blog-slider"
                >
                    <SwiperSlide>
                        <div className="pbmit-slider-item">
                            <div
                                className="pbmit-slider-bg"
                                style={{
                                    backgroundImage:
                                        "url(images/banner-slider-img/demo1-slide-01.jpg)",
                                }}
                            />
                            <div className="container">
                                <div className="row text-center">
                                    <div className="col-md-12">
                                        <div className="pbmit-slider-content">
                                            <h5 className="pbmit-sub-title transform-top transform-delay-1">
                                                barcelona,spain
                                            </h5>
                                            <h2 className="pbmit-title transform-scale transform-delay-2">
                                                Clamp Guard 52 <br /> Luxurious Apartments
                                            </h2>
                                            <div className="pbmit-button transform-scale transform-delay-3">
                                                <a
                                                    className="pbmit-btn pbmit-btn-outline"
                                                    href="contact-us.html"
                                                >
                                                    <span className="pbmit-button-content-wrapper">
                                                        <span className="pbmit-button-text">
                                                            Appeal To
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pbmit-slider-item">
                            <div
                                className="pbmit-slider-bg"
                                style={{
                                    backgroundImage:
                                        "url(images/banner-slider-img/demo1-slide-02.jpg)",
                                }}
                            />
                            <div className="container">
                                <div className="row text-center">
                                    <div className="col-md-12">
                                        <div className="pbmit-slider-content">
                                            <h5 className="pbmit-sub-title transform-top transform-delay-1">
                                                Xinterio features
                                            </h5>
                                            <h2 className="pbmit-title transform-scale transform-delay-2">
                                                Design Spaces To <br /> Make Wonderful Living
                                            </h2>
                                            <div className="pbmit-button transform-scale transform-delay-3">
                                                <a
                                                    className="pbmit-btn pbmit-btn-outline"
                                                    href="contact-us.html"
                                                >
                                                    <span className="pbmit-button-content-wrapper">
                                                        <span className="pbmit-button-text">
                                                            Take Counsel
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pbmit-slider-item">
                            <div
                                className="pbmit-slider-bg"
                                style={{
                                    backgroundImage:
                                        "url(images/banner-slider-img/demo1-slide-03.jpg)",
                                }}
                            />
                            <div className="container">
                                <div className="row text-center">
                                    <div className="col-md-12">
                                        <div className="pbmit-slider-content">
                                            <h5 className="pbmit-sub-title transform-top transform-delay-1">
                                                Design Business
                                            </h5>
                                            <h2 className="pbmit-title transform-scale transform-delay-2">
                                                What are the steps <br /> to remodelling a
                                                house?
                                            </h2>
                                            <div className="pbmit-button transform-scale transform-delay-3">
                                                <a
                                                    className="pbmit-btn pbmit-btn-outline"
                                                    href="contact-us.html"
                                                >
                                                    <span className="pbmit-button-content-wrapper">
                                                        <span className="pbmit-button-text">
                                                            Take Counsel
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="pbmit-slider-dots-corner">
                    <div className="pbmit-sticky-corner pbmit-top-right-corner">
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill
                            xmlns="http://www.w3.org/2000/svg"
                            data-stylerecorder="true"
                        >
                            <path
                                d="M20 20V0C20 16 16 20 0 20H20Z"
                                fill="red"
                                data-stylerecorder="true"
                            />
                        </svg>
                    </div>
                    <div className="pbmit-sticky-corner pbmit-bottom-left-corner">
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill
                            xmlns="http://www.w3.org/2000/svg"
                            data-stylerecorder="true"
                        >
                            <path
                                d="M20 20V0C20 16 16 20 0 20H20Z"
                                fill="red"
                                data-stylerecorder="true"
                            />
                        </svg>
                    </div>
                </div>
            </div>)}

        </section>
    )
}

export default HomeSlider