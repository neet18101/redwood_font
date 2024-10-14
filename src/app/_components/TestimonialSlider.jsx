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

function TestimonialSlider() {
    return (
        <div className="col-md-12 col-lg-9 pbmit-testimonialbox-right">
            <div
                className="swiper-slider"
                data-autoplay="true"
                data-loop="true"
                data-dots="false"
                data-arrows="true"
                data-columns="2.6"
                data-margin={30}
                data-effect="slide"
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
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                    }}
                    className="blog-slider"
                >
                    <SwiperSlide>
                        {/* Slide1 */}
                        <article className="pbmit-testimonial-style-1 swiper-slide">
                            <div className="pbminfotech-post-item">
                                <div className="pbmit-box-content-wrap">
                                    <div className="pbminfotech-box-star-ratings">
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                    </div>
                                    <div className="pbminfotech-box-desc">
                                        <blockquote className="pbminfotech-testimonial-text">
                                            <p>
                                                Their team are easy to work with and helped
                                                me make amazing websites in a short amount
                                                of time. Thanks guys for all your hard work.
                                                Trust us we looked for a very long time.
                                            </p>
                                        </blockquote>
                                    </div>
                                    <div className="pbminfotech-box-author">
                                        <div className="pbmit-auther-content">
                                            <h3 className="pbminfotech-box-title">
                                                Olivia Cruz
                                            </h3>
                                            <div className="pbminfotech-testimonial-detail">
                                                Grorgia, USA
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="pbminfotech-box-img">
                                        <div className="pbmit-featured-img-wrapper">
                                            <div className="pbmit-featured-wrapper">
                                                <img
                                                    src="images/homepage-1/reviewer/reviewer-01.jpg"
                                                    className="img-fluid"
                                                    alt="reviewer-04"
                                                />
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </article>

                    </SwiperSlide>

                    <SwiperSlide>
                        {/* Slide2 */}
                        <article className="pbmit-testimonial-style-1 swiper-slide">
                            <div className="pbminfotech-post-item">
                                <div className="pbmit-box-content-wrap">
                                    <div className="pbminfotech-box-star-ratings">
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                    </div>
                                    <div className="pbminfotech-box-desc">
                                        <blockquote className="pbminfotech-testimonial-text">
                                            <p>
                                                Their team are easy to work with and helped
                                                me make amazing websites in a short amount
                                                of time. Thanks guys for all your hard work.
                                                Trust us we looked for a very long time.
                                            </p>
                                        </blockquote>
                                    </div>
                                    <div className="pbminfotech-box-author">
                                        <div className="pbmit-auther-content">
                                            <h3 className="pbminfotech-box-title">
                                                Martin Bailey
                                            </h3>
                                            <div className="pbminfotech-testimonial-detail">
                                                Grorgia, USA
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="pbminfotech-box-img">
                                        <div className="pbmit-featured-img-wrapper">
                                            <div className="pbmit-featured-wrapper">
                                                <img
                                                    src="images/homepage-1/reviewer/reviewer-02.jpg"
                                                    className="img-fluid"
                                                    alt="reviewer-04"
                                                />
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </article>

                    </SwiperSlide>

                    <SwiperSlide>
                        {/* Slide3 */}
                        <article className="pbmit-testimonial-style-1 swiper-slide">
                            <div className="pbminfotech-post-item">
                                <div className="pbmit-box-content-wrap">
                                    <div className="pbminfotech-box-star-ratings">
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                    </div>
                                    <div className="pbminfotech-box-desc">
                                        <blockquote className="pbminfotech-testimonial-text">
                                            <p>
                                                Their team are easy to work with and helped
                                                me make amazing websites in a short amount
                                                of time. Thanks guys for all your hard work.
                                                Trust us we looked for a very long time.
                                            </p>
                                        </blockquote>
                                    </div>
                                    <div className="pbminfotech-box-author">
                                        <div className="pbmit-auther-content">
                                            <h3 className="pbminfotech-box-title">
                                                Alex Zender
                                            </h3>
                                            <div className="pbminfotech-testimonial-detail">
                                                Grorgia, USA
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="pbminfotech-box-img">
                                        <div className="pbmit-featured-img-wrapper">
                                            <div className="pbmit-featured-wrapper">
                                                <img
                                                    src="images/homepage-1/reviewer/reviewer-03.jpg"
                                                    className="img-fluid"
                                                    alt="reviewer-04"
                                                />
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </article>

                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Slide4 */}
                        <article className="pbmit-testimonial-style-1 swiper-slide">
                            <div className="pbminfotech-post-item">
                                <div className="pbmit-box-content-wrap">
                                    <div className="pbminfotech-box-star-ratings">
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                        <i className="pbmit-base-icon-star-1 pbmit-active" />
                                    </div>
                                    <div className="pbminfotech-box-desc">
                                        <blockquote className="pbminfotech-testimonial-text">
                                            <p>
                                                Their team are easy to work with and helped
                                                me make amazing websites in a short amount
                                                of time. Thanks guys for all your hard work.
                                                Trust us we looked for a very long time.
                                            </p>
                                        </blockquote>
                                    </div>
                                    <div className="pbminfotech-box-author">
                                        <div className="pbmit-auther-content">
                                            <h3 className="pbminfotech-box-title">
                                                Robert Gold
                                            </h3>
                                            <div className="pbminfotech-testimonial-detail">
                                                Grorgia, USA
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="pbminfotech-box-img">
                                        <div className="pbmit-featured-img-wrapper">
                                            <div className="pbmit-featured-wrapper">
                                                <img
                                                    src="images/homepage-1/reviewer/reviewer-04.jpg"
                                                    className="img-fluid"
                                                    alt="reviewer-04"
                                                />
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>


                </Swiper>

            </div>
        </div>
    )
}

export default TestimonialSlider