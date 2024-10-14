import Navbar from "@/components/Navbar";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6"
import Footer from "@/components/Footer";
function Contact() {
    return (
        <>
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
                                        <h1 className="pbmit-tbar-title"> Contact Us</h1>
                                    </div>
                                </div>
                                <div className="pbmit-breadcrumb">
                                    <div className="pbmit-breadcrumb-inner">
                                        <span>
                                            <a title href="#" className="home">
                                                <span>Xinterio</span>
                                            </a>
                                        </span>
                                        <span className="sep">
                                            <i className="pbmit-base-icon-angle-right" />
                                        </span>
                                        <span>
                                            <span className="post-root post post-post current-item">
                                                {" "}
                                                Contact Us
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Title Bar End*/}
                {/* Contact Us Content */}
                <div className="page-content">
                    {/* Ihbox */}
                    <section className="ihbox-section-two">
                        <div className="container-fluid p-0">
                            <div
                                className="swiper-slider"
                                data-autoplay="false"
                                data-loop="true"
                                data-dots="false"
                                data-arrows="false"
                                data-columns={4}
                                data-margin={30}
                                data-effect="slide"
                            >
                                <div className="container">
                                    <div className="row">
                                        {/* Slide1 */}
                                        <div className="col-md-3">
                                            <article className="pbmit-miconheading-style-7">
                                                <div className="pbmit-ihbox-style-7">
                                                    <div className="pbmit-ihbox-box">
                                                        <div className="pbmit-icon-wrapper d-flex align-items-center">
                                                            <div className="pbmit-ihbox-icon">
                                                                <div className="pbmit-ihbox-icon-wrapper">
                                                                    <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                                                        <i className="pbmit-xinterio-icon pbmit-xinterio-icon-living-room" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-title-wrap">
                                                                <h2 className="pbmit-element-title">Address</h2>
                                                            </div>
                                                        </div>
                                                        <div className="pbmit-content-wrapper">
                                                            <div className="pbmit-heading-desc">
                                                                12 Creek Rd,
                                                                Barking IG11 0JH,
                                                                London
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-ihbox-btn">
                                                        <a className="pbmit-button-inner" href="about-us.html">
                                                            <span className="pbmit-button-wrapper">
                                                                <span className="pbmit-button-text">Read More</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>

                                        {/* Repeat for other slides */}
                                        {/* Slide2 */}
                                        <div className="col-md-3">
                                            <article className="pbmit-miconheading-style-7">
                                                <div className="pbmit-ihbox-style-7">
                                                    <div className="pbmit-ihbox-box">
                                                        <div className="pbmit-icon-wrapper d-flex align-items-center">
                                                            <div className="pbmit-ihbox-icon">
                                                                <div className="pbmit-ihbox-icon-wrapper">
                                                                    <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                                                        <i className="pbmit-xinterio-icon pbmit-xinterio-icon-house" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-title-wrap">
                                                                <h2 className="pbmit-element-title">Email Us</h2>
                                                            </div>
                                                        </div>
                                                        <div className="pbmit-content-wrapper">
                                                            <div className="pbmit-heading-desc">
                                                                info@redwoodshopfront.co.uk
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-ihbox-btn">
                                                        <a className="pbmit-button-inner" href="about-us.html">
                                                            <span className="pbmit-button-wrapper">
                                                                <span className="pbmit-button-text">Read More</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>

                                        {/* Slide3 */}
                                        <div className="col-md-3">
                                            <article className="pbmit-miconheading-style-7">
                                                <div className="pbmit-ihbox-style-7">
                                                    <div className="pbmit-ihbox-box">
                                                        <div className="pbmit-icon-wrapper d-flex align-items-center">
                                                            <div className="pbmit-ihbox-icon">
                                                                <div className="pbmit-ihbox-icon-wrapper">
                                                                    <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                                                        <i className="pbmit-xinterio-icon pbmit-xinterio-icon-3d" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-title-wrap">
                                                                <h2 className="pbmit-element-title">
                                                                    Call Us</h2>
                                                            </div>
                                                        </div>
                                                        <div className="pbmit-content-wrapper">
                                                            <div className="pbmit-heading-desc">
                                                                0738-011-11-66 <br />
                                                                02085992939
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-ihbox-btn">
                                                        <a className="pbmit-button-inner" href="about-us.html">
                                                            <span className="pbmit-button-wrapper">
                                                                <span className="pbmit-button-text">Read More</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>

                                        {/* Slide4 */}
                                        <div className="col-md-3">
                                            <article className="pbmit-miconheading-style-7">
                                                <div className="pbmit-ihbox-style-7">
                                                    <div className="pbmit-ihbox-box">
                                                        <div className="pbmit-icon-wrapper d-flex align-items-center">
                                                            <div className="pbmit-ihbox-icon">
                                                                <div className="pbmit-ihbox-icon-wrapper">
                                                                    <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                                                        <i className="pbmit-xinterio-icon pbmit-xinterio-icon-brickwall-1" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-title-wrap">
                                                                <h2 className="pbmit-element-title">Our Socials</h2>
                                                            </div>
                                                        </div>
                                                        <div className="pbmit-content-wrapper">
                                                            <div className="pbmit-heading-desc">
                                                                <FaSquareInstagram className="fa-2x " />
                                                                <AiFillTwitterCircle className="fa-2x" />
                                                                <FaFacebook className="fa-2x" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-ihbox-btn">
                                                        <a className="pbmit-button-inner" href="about-us.html">
                                                            <span className="pbmit-button-wrapper">
                                                                <span className="pbmit-button-text">Read More</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    {/* Ihbox End */}
                    {/* Contact Form */}
                    <section className="pbmit-sticky-section">
                        <div className="container">
                            <div className="contact-us-bg">
                                <div className="row">
                                    <div className="col-md-12 col-xl-5">
                                        <div className="pbmit-sticky-col">
                                            <div className="contact-us-left-area">
                                                <div className="pbmit-heading-subheading animation-style2">
                                                    <h4 className="pbmit-subtitle">Contact Us</h4>
                                                    <h2 className="pbmit-title">
                                                        Let's Discuss About Your Spaces!
                                                    </h2>
                                                    <div className="pbmit-heading-desc">
                                                        If you have any questions, please contact us using the following details or by completing the Enquiry Form.
                                                    </div>
                                                    <ul className="list-unstyled m-2">
                                                        <li className="d-flex align-items-center mb-2">
                                                            <a href="#shopfronts" className="text-decoration-none">Shop Fronts</a>
                                                        </li>
                                                        <li className="d-flex align-items-center mb-2">
                                                            <a href="#shutters" className="text-decoration-none">Shutters</a>
                                                        </li>
                                                        <li className="d-flex align-items-center mb-2">
                                                            <a href="#windows" className="text-decoration-none">Windows</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-xl-7">
                                        <div className="contact-form-area">
                                            <div className="pbmit-heading animation-style2">
                                                <h2 className="pbmit-title">Send a Message</h2>
                                            </div>
                                            <form
                                                className="contact-form"
                                                method="post"
                                                id="contact-form"
                                                action="https://xinterio-demo.pbminfotech.com/html-demo/send-dummy.php"
                                            >
                                                <div className="row">

                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Your Name *"
                                                            name="name"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <input
                                                            type="tel"
                                                            className="form-control"
                                                            placeholder="Your Phone *"
                                                            name="phone"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Subject"
                                                            name="subject"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <textarea
                                                            name="message"
                                                            cols={40}
                                                            rows={10}
                                                            className="form-control"
                                                            placeholder="Message"
                                                            required
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                            />
                                                            <label className="form-check-label">
                                                                Save my name, email, and website in this browser
                                                                for the next time I comment.
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button className="pbmit-btn pbmit-btn-outline">
                                                            <i className="form-btn-loader fa fa-circle-o-notch fa-spin fa-fw margin-bottom d-none" />
                                                            <span className="pbmit-button-content-wrapper">
                                                                <span className="pbmit-button-text">
                                                                    Submit Now
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div className="col-md-12 col-lg-12 message-status" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Form */}

                    {/* Iframe */}
                    <section className="section-xl">
                        <div className="container-fluid">
                            <div className="iframe-area">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4964.827787521366!2d0.100685!3d51.523968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a5fb68f36b37%3A0x13d441baae306941!2s12%20Creek%20Rd%2C%20Barking%20IG11%200JH%2C%20UK!5e0!3m2!1sen!2sus!4v1725301987957!5m2!1sen!2sus"
                                    title="London Eye, London, United Kingdom"
                                    aria-label="London Eye, London, United Kingdom"
                                />
                            </div>
                        </div>
                    </section>
                    {/* Iframe End*/}
                </div>
                {/* Contact Us Content End */}

            </div>
            <Footer />
        </>
    );
}

export default Contact;
