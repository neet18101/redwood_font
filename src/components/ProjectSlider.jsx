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

function ProjectSlider() {
    return (
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
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                pagination={false} // Disable pagination dots
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
                    <article className="pbmit-ele-blog pbmit-blog-style-1 swiper-slide">
                        <div className="post-item">
                            <div className="pbminfotech-box-content">
                                <div className="pbmit-featured-container">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img
                                                src="images/redWoodImg/08.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <a
                                        className="pbmit-blog-btn"
                                        href="blog-single-details.html"
                                        title="How To Choose The Right  Furniture Of Your Home"
                                    >
                                        <span className="pbmit-button-icon">
                                            <i className="pbmit-base-icon-pbmit-up-arrow" />
                                        </span>
                                    </a>
                                    <a
                                        className="pbmit-link"
                                        href="blog-single-details.html"
                                    />
                                </div>

                            </div>
                        </div>
                    </article>

                </SwiperSlide>

                <SwiperSlide>
                    {/* Slide2 */}
                    <article className="pbmit-ele-blog pbmit-blog-style-1 swiper-slide">
                        <div className="post-item">
                            <div className="pbminfotech-box-content">
                                <div className="pbmit-featured-container">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img
                                                src="images/redWoodImg/03-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <a
                                        className="pbmit-blog-btn"
                                        href="blog-single-details.html"
                                        title="Frequently Utilized Metal Welding System"
                                    >
                                        <span className="pbmit-button-icon">
                                            <i className="pbmit-base-icon-pbmit-up-arrow" />
                                        </span>
                                    </a>
                                    <a
                                        className="pbmit-link"
                                        href="blog-single-details.html"
                                    />
                                </div>

                            </div>
                        </div>
                    </article>

                </SwiperSlide>

                <SwiperSlide>
                    {/* Slide3 */}
                    <article className="pbmit-ele-blog pbmit-blog-style-1 swiper-slide">
                        <div className="post-item">
                            <div className="pbminfotech-box-content">
                                <div className="pbmit-featured-container">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img
                                                src="images/redWoodImg/01.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <a
                                        className="pbmit-blog-btn"
                                        href="blog-single-details.html"
                                        title="How Does One Go About Buying Furniture?"
                                    >
                                        <span className="pbmit-button-icon">
                                            <i className="pbmit-base-icon-pbmit-up-arrow" />
                                        </span>
                                    </a>
                                    <a
                                        className="pbmit-link"
                                        href="blog-single-details.html"
                                    />
                                </div>

                            </div>
                        </div>
                    </article>

                </SwiperSlide>
                <SwiperSlide>
                    {/* Slide4 */}
                    <article className="pbmit-ele-blog pbmit-blog-style-1 swiper-slide">
                        <div className="post-item">
                            <div className="pbminfotech-box-content">
                                <div className="pbmit-featured-container">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img
                                                src="images/redWoodImg/1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <a
                                        className="pbmit-blog-btn"
                                        href="blog-single-details.html"
                                        title="Four Ways for Creating Extra Space in Small Homes"
                                    >
                                        <span className="pbmit-button-icon">
                                            <i className="pbmit-base-icon-pbmit-up-arrow" />
                                        </span>
                                    </a>
                                    <a
                                        className="pbmit-link"
                                        href="blog-single-details.html"
                                    />
                                </div>

                            </div>
                        </div>
                    </article>
                </SwiperSlide>

                <SwiperSlide>
                    {/* Slide5 */}
                    <article className="pbmit-ele-blog pbmit-blog-style-1 swiper-slide">
                        <div className="post-item">
                            <div className="pbminfotech-box-content">
                                <div className="pbmit-featured-container">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img
                                                src="images/redWoodImg/Roof2.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <a
                                        className="pbmit-blog-btn"
                                        href="blog-single-details.html"
                                        title="Four Ways for Creating Extra Space in Small Homes"
                                    >
                                        <span className="pbmit-button-icon">
                                            <i className="pbmit-base-icon-pbmit-up-arrow" />
                                        </span>
                                    </a>
                                    <a
                                        className="pbmit-link"
                                        href="blog-single-details.html"
                                    />
                                </div>

                            </div>
                        </div>
                    </article>
                </SwiperSlide>

            </Swiper>

        </div>
    )
}

export default ProjectSlider