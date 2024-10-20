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

function BlogSlider() {
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
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false,
                // }}
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
                                            <img height={500}

                                                src="images/redWoodImg/01-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <a
                                        className="pbmit-blog-btn"
                                        href="blog-single-details.html"
                                        title="Transform Your Shop Fronts And Home With London Redwood"
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
                                <div className="pbmit-content-wrapper">
                                    <div className="pbmit-date-wraper d-flex align-items-center">
                                        <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                                            <div className="pbmit-meta-date">
                                                <span className="pbmit-post-date">
                                                    <i className="pbmit-base-icon-calendar-3" />
                                                    June 7, 2024
                                                </span>
                                            </div>
                                        </div>
                                        <div className="pbmit-meta-author pbmit-meta-line">
                                            <span className="pbmit-post-author">
                                                <i className="pbmit-base-icon-user-3" />

                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="pbmit-post-title">
                                        <a href="blog-single-details.html">
                                            Transform Your Shop Fronts And Home With London Redwood
                                        </a>
                                    </h3>
                                    <div className="pbminfotech-box-desc">
                                        Discover the Elegance and Durability of London Redwood....
                                    </div>
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
                                            <img height={500}
                                                src="images/redWoodImg/06-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <a
                                        className="pbmit-blog-btn"
                                        href="blog-single-details.html"
                                        title="The Future of Architecture in the UK: Trends Shaping the Built Environmen"
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
                                <div className="pbmit-content-wrapper">
                                    <div className="pbmit-date-wraper d-flex align-items-center">
                                        <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                                            <div className="pbmit-meta-date">
                                                <span className="pbmit-post-date">
                                                    <i className="pbmit-base-icon-calendar-3" />
                                                    May 26, 2024
                                                </span>
                                            </div>
                                        </div>
                                        <div className="pbmit-meta-author pbmit-meta-line">
                                            <span className="pbmit-post-author">
                                                <i className="pbmit-base-icon-user-3" />

                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="pbmit-post-title">
                                        <a href="blog-single-details.html">
                                            The Future of Architecture in the UK: Trends Shaping the Built Environmen
                                        </a>
                                    </h3>
                                    <div className="pbminfotech-box-desc">
                                        The architectural landscape in the UK is undergoing a remarkable transformation....
                                    </div>
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
                                            <img height={500}
                                                src="images/redWoodImg/timber.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <a
                                        className="pbmit-blog-btn"
                                        href="blog-single-details.html"
                                        title="Timber Shop Fronts UK: Elevate Your Business with Redwood’s Craftsmanship"
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
                                <div className="pbmit-content-wrapper">
                                    <div className="pbmit-date-wraper d-flex align-items-center">
                                        <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                                            <div className="pbmit-meta-date">
                                                <span className="pbmit-post-date">
                                                    <i className="pbmit-base-icon-calendar-3" />
                                                    May 6, 2024
                                                </span>
                                            </div>
                                        </div>
                                        <div className="pbmit-meta-author pbmit-meta-line">
                                            <span className="pbmit-post-author">
                                                <i className="pbmit-base-icon-user-3" />

                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="pbmit-post-title">
                                        <a href="blog-single-details.html">
                                            Timber Shop Fronts UK: Elevate Your Business with Redwood’s Craftsmanship
                                        </a>
                                    </h3>
                                    <div className="pbminfotech-box-desc">
                                        In the bustling streets of the UK, where businesses strive to stand out, your shop front plays a pivotal role....
                                    </div>
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
                                            <img height={500}
                                                src="images/redWoodImg/architech.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <a
                                        className="pbmit-blog-btn"
                                        href="blog-single-details.html"
                                        title="Reviving London’s Architectural Heritage: The Rise of Adaptive Reuse"
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
                                <div className="pbmit-content-wrapper">
                                    <div className="pbmit-date-wraper d-flex align-items-center">
                                        <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                                            <div className="pbmit-meta-date">
                                                <span className="pbmit-post-date">
                                                    <i className="pbmit-base-icon-calendar-3" />
                                                    April 28, 2024
                                                </span>
                                            </div>
                                        </div>
                                        <div className="pbmit-meta-author pbmit-meta-line">
                                            <span className="pbmit-post-author">
                                                <i className="pbmit-base-icon-user-3" />

                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="pbmit-post-title">
                                        <a href="blog-single-details.html">
                                            Reviving London’s Architectural Heritage: The Rise of Adaptive Reuse
                                        </a>
                                    </h3>
                                    <div className="pbminfotech-box-desc">
                                        Breathing New Life into London’s Architectural Heritage: The Adaptive Reuse Revolution....
                                    </div>
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
                                            <img height={500}
                                                src="images/redWoodImg/skyline.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <a
                                        className="pbmit-blog-btn"
                                        href="blog-single-details.html"
                                        title="London’s Skyline: Marvels & Regeneration"
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
                                <div className="pbmit-content-wrapper">
                                    <div className="pbmit-date-wraper d-flex align-items-center">
                                        <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                                            <div className="pbmit-meta-date">
                                                <span className="pbmit-post-date">
                                                    <i className="pbmit-base-icon-calendar-3" />
                                                    April 17, 2024
                                                </span>
                                            </div>
                                        </div>
                                        <div className="pbmit-meta-author pbmit-meta-line">
                                            <span className="pbmit-post-author">
                                                <i className="pbmit-base-icon-user-3" />

                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="pbmit-post-title">
                                        <a href="blog-single-details.html">
                                            London’s Skyline: Marvels & Regeneration
                                        </a>
                                    </h3>
                                    <div className="pbminfotech-box-desc">
                                        London’s skyline narrates a tale of perpetual transformation and innovation....
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </SwiperSlide>

                <SwiperSlide>
                    {/* Slide6 */}
                    <article className="pbmit-ele-blog pbmit-blog-style-1 swiper-slide">
                        <div className="post-item">
                            <div className="pbminfotech-box-content">
                                <div className="pbmit-featured-container">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img height={500}
                                                src="images/redWoodImg/blue.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <a
                                        className="pbmit-blog-btn"
                                        href="blog-single-details.html"
                                        title="Secure Your Home with Versatile Shutter Solutions from Redwood Shop Front"
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
                                <div className="pbmit-content-wrapper">
                                    <div className="pbmit-date-wraper d-flex align-items-center">
                                        <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                                            <div className="pbmit-meta-date">
                                                <span className="pbmit-post-date">
                                                    <i className="pbmit-base-icon-calendar-3" />
                                                    April 5, 2024
                                                </span>
                                            </div>
                                        </div>
                                        <div className="pbmit-meta-author pbmit-meta-line">
                                            <span className="pbmit-post-author">
                                                <i className="pbmit-base-icon-user-3" />

                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="pbmit-post-title">
                                        <a href="blog-single-details.html">
                                            Secure Your Home with Versatile Shutter Solutions from Redwood Shop Front
                                        </a>
                                    </h3>
                                    <div className="pbminfotech-box-desc">
                                        Enhancing Home Security and Aesthetics with Versatile Shutter Solutions....
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </SwiperSlide>

                <SwiperSlide>
                    {/* Slide7 */}
                    <article className="pbmit-ele-blog pbmit-blog-style-1 swiper-slide">
                        <div className="post-item">
                            <div className="pbminfotech-box-content">
                                <div className="pbmit-featured-container">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img height={500}
                                                src="images/redWoodImg/House_Door.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <a
                                        className="pbmit-blog-btn"
                                        href="blog-single-details.html"
                                        title="Enhance Your Home’s Charm and Functionality with Professional Door Installation and Repair Services"
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
                                <div className="pbmit-content-wrapper">
                                    <div className="pbmit-date-wraper d-flex align-items-center">
                                        <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                                            <div className="pbmit-meta-date">
                                                <span className="pbmit-post-date">
                                                    <i className="pbmit-base-icon-calendar-3" />
                                                    March 30, 2024
                                                </span>
                                            </div>
                                        </div>
                                        <div className="pbmit-meta-author pbmit-meta-line">
                                            <span className="pbmit-post-author">
                                                <i className="pbmit-base-icon-user-3" />

                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="pbmit-post-title">
                                        <a href="blog-single-details.html">
                                            Enhance Your Home’s Charm and Functionality with Professional Door Installation and Repair Services
                                        </a>
                                    </h3>
                                    <div className="pbminfotech-box-desc">
                                        Your home’s doors are more than just entryways; they’re essential components that contribute to both functionality and aesthetic appeal.....
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </SwiperSlide>

                <SwiperSlide>
                    {/* Slide8 */}
                    <article className="pbmit-ele-blog pbmit-blog-style-1 swiper-slide">
                        <div className="post-item">
                            <div className="pbminfotech-box-content">
                                <div className="pbmit-featured-container">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img height={500}
                                               
                                                src="images/redWoodImg/wall.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <a
                                        className="pbmit-blog-btn"
                                        href="blog-single-details.html"
                                        title="Sleek Aluminium Windows: Elevate Your Space with Redwood Shop Fronts"
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
                                <div className="pbmit-content-wrapper">
                                    <div className="pbmit-date-wraper d-flex align-items-center">
                                        <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                                            <div className="pbmit-meta-date">
                                                <span className="pbmit-post-date">
                                                    <i className="pbmit-base-icon-calendar-3" />
                                                    March 19, 2024
                                                </span>
                                            </div>
                                        </div>
                                        <div className="pbmit-meta-author pbmit-meta-line">
                                            <span className="pbmit-post-author">
                                                <i className="pbmit-base-icon-user-3" />

                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="pbmit-post-title">
                                        <a href="blog-single-details.html">
                                            Sleek Aluminium Windows: Elevate Your Space with Redwood Shop Fronts
                                        </a>
                                    </h3>
                                    <div className="pbminfotech-box-desc">
                                        Enhancing Commercial Spaces with Sleek Aluminium Windows: Redwood Shop Fronts....
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </SwiperSlide>

            </Swiper>

        </div>
    )
}

export default BlogSlider