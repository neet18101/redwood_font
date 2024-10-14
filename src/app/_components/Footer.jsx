import React from 'react'

const Footer = () => {
    return (
        <footer className="site-footer footer-style-1 pbmit-bg-color-secondary">
            <div className="footer-wrap pbmit-footer-widget-area">
                <div className="container">

                    <div className="row">
                        <div className="col-md-4">
                            <div className='text-center'>
                                <h6 style={{
                                    color: "white "
                                }}>Our Company</h6>
                            </div>
                            <aside className="widget footer-contact">
                                <ul>
                                    <li>
                                        <a href="about-us.html">About Us</a>
                                    </li>

                                    <li>
                                        <a href="faq.html">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="our-team.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="our-history.html">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="contact-us.html">Contact Us</a>
                                    </li>

                                </ul>
                            </aside>
                        </div>
                        <div className="col-md-4">
                            <aside className="widget">
                                <div className="textwidget">
                                    <div className="pbmit-footer-logo">
                                        {/* <img src="images/favicon.svg" alt /> */}
                                        <h1 className="site-title justify-content-center">
                                            <Link href="/">

                                                <h4 style={{
                                                    color: "white",
                                                    textAlign: "center"
                                                }}>Red Wood Shop</h4>
                                            </Link>
                                        </h1>
                                    </div>
                                    <p className='text-center'>RedWood ShopFront is now one of the UK’s leading installers of commercial retail shopfronts and thrive to provide highest specification to our client’s requirements.</p>

                                </div>
                            </aside>
                        </div>
                        <div className="col-md-4">
                            <div className='text-center'>
                                <h6 style={{
                                    color: "white "
                                }}>Contact Info</h6>
                            </div>
                            <aside className="widget footer-contact">

                                <ul>
                                    <li>
                                        <a href="faq.html">Shop Fronts</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">Shutters</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">Windows</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">Reviews</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">Book Consult</a>
                                    </li>

                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pbmit-footer-big-area-wrapper">
                <div className="footer-wrap pbmit-footer-big-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4 pbmit-footer-left">
                                <span className="pbmit-email-text"> info@redwoodshopfront.co.uk</span>
                                <span className="pbmit-phone-number">  0738-011-11-66</span>
                            </div>
                            <div className="col-md-4 pbmit-footer-right">
                                <span className="pbmit-address">
                                    {" "}12 Creek Rd, Barking IG11 0JH,
                                    <br />
                                    London
                                </span>
                            </div>
                            <div className="col-md-4 pbmit-footer-right-social">
                                <ul className="pbmit-social-links">
                                    <li className="pbmit-social-li pbmit-social-facebook">
                                        <a title="Facebook" href="#" target="_blank">
                                            <span>
                                                <i className="pbmit-base-icon-facebook-f" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="pbmit-social-li pbmit-social-twitter">
                                        <a title="Twitter" href="#" target="_blank">
                                            <span>
                                                <i className="pbmit-base-icon-twitter-2" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="pbmit-social-li pbmit-social-linkedin">
                                        <a title="LinkedIn" href="#" target="_blank">
                                            <span>
                                                <i className="pbmit-base-icon-linkedin-in" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="pbmit-social-li pbmit-social-instagram">
                                        <a title="Instagram" href="#" target="_blank">
                                            <span>
                                                <i className="pbmit-base-icon-instagram" />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pbmit-footer-text-area">
                <div className="container">
                    <div className="pbmit-footer-text-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="pbmit-footer-copyright-text-area">
                                    {" "}
                                    Copyright © {new Date().getFullYear()} <a href="#">Red Wood Shop</a>
                                    , All Rights Reserved. Designed by Web-Fluxx
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer