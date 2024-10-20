'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
} from "swiper/modules";

function Home_Service() {
    return (
        <>
            {/* Service Start */}
            <section className="pbmit-extend-animation service-one pbmit-bg-color-secondary">
                <div className="container">
                    <div className="text-center position-relative">
                        <div className="pbmit-heading-subheading text-center animation-style2">
                            <h4 className="pbmit-subtitle">What we do</h4>
                            <h2 className="pbmit-title">What we offer for you</h2>
                        </div>
                        <div className="pbmit-service-highlight">
                            <h2>Services</h2>
                        </div>
                    </div>
                    <div
                        className="swiper-slider"
                        data-autoplay="false"
                        data-loop="true"
                        data-dots="false"
                        data-arrows="false"
                        data-columns={3}
                        data-margin={30}
                        data-effect="slide"
                    >
                        <div className="">
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
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                }}
                                className="blog-slider"
                            >
                                <SwiperSlide>
                                    {/* Slide1 */}
                                    <article className="pbmit-ele-service pbmit-service-style-2 swiper-slide">
                                        <div className="pbminfotech-post-item">
                                            <div className="pbminfotech-box-content">
                                                <div className="pbmit-service-image-wrapper">
                                                    <div className="pbmit-featured-img-wrapper">
                                                        <div className="pbmit-featured-wrapper">
                                                            <img
                                                                src="images/service/service.webp"
                                                                className="img-fluid"
                                                                alt="service-01"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbmit-service-icon elementor-icon">
                                                    <i className />
                                                </div>
                                                <div className="pbmit-content-box">

                                                    <h3 className="pbmit-service-title">
                                                        <a href="">
                                                            Aluminum Shop Fronts
                                                        </a>
                                                    </h3>
                                                    <div className="pbmit-service-description">
                                                        <p>
                                                            Shop fronts are designed to make the best possible utilization of the accessible space and light, and we might meet any.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <a
                                                className="pbmit-service-btn"
                                                href="service-details.html"
                                                title="Transforming Rooms"
                                            >
                                                <span className="pbmit-button-icon">
                                                    <i className="pbmit-base-icon-pbmit-up-arrow" />
                                                </span>
                                            </a>
                                        </div>
                                    </article>
                                </SwiperSlide>

                                <SwiperSlide>
                                    {/* Slide3 */}
                                    <article className="pbmit-ele-service pbmit-service-style-2">
                                        <div className="pbminfotech-post-item">
                                            <div className="pbminfotech-box-content">
                                                <div className="pbmit-service-image-wrapper">
                                                    <div className="pbmit-featured-img-wrapper">
                                                        <div className="pbmit-featured-wrapper">
                                                            <img
                                                                src="images/service/door.webp"
                                                                className="img-fluid"
                                                                alt="service-01"
                                                                height={433}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbmit-service-icon elementor-icon">
                                                    <i className="" />
                                                </div>
                                                <div className="pbmit-content-box">

                                                    <h3 className="pbmit-service-title">
                                                        <a href="#">
                                                        Automatic door 
                                                        </a>
                                                    </h3>
                                                    <div className="pbmit-service-description">
                                                        <p>
                                                            The automatic door systems from Redwood Shopfront open up an almost unlimited range of door design options.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <a
                                                className="pbmit-service-btn"
                                                href="service-details.html"
                                                title="Interior Decorator"
                                            >
                                                <span className="pbmit-button-icon">
                                                    <i className="pbmit-base-icon-pbmit-up-arrow" />
                                                </span>
                                            </a>
                                        </div>
                                    </article>
                                </SwiperSlide>

                                <SwiperSlide>
                                    {/* Slide4 */}
                                    <article className="pbmit-ele-service pbmit-service-style-2">
                                        <div className="pbminfotech-post-item">
                                            <div className="pbminfotech-box-content">
                                                <div className="pbmit-service-image-wrapper">
                                                    <div className="pbmit-featured-img-wrapper">
                                                        <div className="pbmit-featured-wrapper">
                                                            <img
                                                                src="images/service/service3.webp"
                                                                className="img-fluid"
                                                                alt="service-01"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbmit-service-icon elementor-icon">
                                                    <i className="" />
                                                </div>
                                                <div className="pbmit-content-box">
                                                    
                                                    <h3 className="pbmit-service-title">
                                                        <a href="">
                                                        BI-folding Entrance doors
                                                        </a>
                                                    </h3>
                                                    <div className="pbmit-service-description">
                                                        <p>
                                                        There are many sorts of doorways available on the marketplace for your house.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <a
                                                className="pbmit-service-btn"
                                                href="service-details.html"
                                                title="Professional Interior"
                                            >
                                                <span className="pbmit-button-icon">
                                                    <i className="pbmit-base-icon-pbmit-up-arrow" />
                                                </span>
                                            </a>
                                        </div>
                                    </article>
                                </SwiperSlide>


                            </Swiper>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="pbmit-service-text">
                            <p>
                                Need more services based on your demand?{" "}
                                <span className="pbmit-globalcolor">Contact us</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service End */}
        </>
    )
}

export default Home_Service