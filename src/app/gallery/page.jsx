import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
    return (
        <div className="page-wrapper">
            {/* Header Main Area */}
            <header className="site-header header-style-1">
                <Navbar />
            </header>
            {/* Header Main Area End Here */}
            {/* Title Bar */}
            <div className="pbmit-title-bar-wrapper">
                <div className="container">
                    <div className="pbmit-title-bar-content">
                        <div className="pbmit-title-bar-content-inner">
                            <div className="pbmit-tbar">
                                <div className="pbmit-tbar-inner container">
                                    <h1 className="pbmit-tbar-title"> Gallery</h1>
                                </div>
                            </div>
                            <div className="pbmit-breadcrumb">
                                <div className="pbmit-breadcrumb-inner">
                                    <span>
                                        <a title href="#" className="home"><span>RED Wood Shop</span></a>
                                    </span>
                                    <span className="sep">
                                        <i className="pbmit-base-icon-angle-right" />
                                    </span>
                                    <span><span className="post-root post post-post current-item"> Gallery</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Title Bar End*/}
            <div className="page-content">
                {/* Portfolio Grid col 4 */}
                <section className="section-md">
                    <div className="container-fluid px-4">
                        <div className="row pbmit-element-posts-wrapper">
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/redWoodImg/House_Door.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">House Door</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html"> Installation & Repair</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/redWoodImg/05-1.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Doors</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Aluminum Shop Fronts</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/redWoodImg/01-1.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Windows</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Aluminum Windows</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="/images/redWoodImg/06-1.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Doors</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">BI-folding Entrance doors</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/redWoodImg/skyline.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Wall</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Curtain Wall Mirror</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/redWoodImg/timber.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Doors</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Timber Doors</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/redWoodImg/blue.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Shutters</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Perforated Shutters</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/redWoodImg/IMG-1.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Shutters</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Solid Roller Shutters</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/redWoodImg/Timber_Shopfront2.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Shorfront</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Timber Shopfront</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/redWoodImg/architech.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Shutters</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Roller Grill Shutter</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/redWoodimg/architech.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Wall</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Aluminum Curtain Wall</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/redWoodImg/02-3.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Doors</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Automatic Door</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
                {/* Portfolio Grid col 4 End */}
            </div>
            <Footer />
        </div>



    )
}

export default page