import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import HomeAbout from "@/components/HomeAbout";
import Counter from "@/components/Counter";
import Home_Service from "@/components/Home_Service";
import WhyChoose from "@/components/WhyChoose";
import TestimonialSlider from "./_components/TestimonialSlider";
import BlogSlider from "./_components/BlogSlider";
import Footer from "@/components/Footer";

export const metadata = {
  title: "London Shopfronts, Shutters, Entrance Doors, Awnings",
  description:
    "Redwood Shopfront Provide All type of Shutter , Shopfronts, Windows, Security Shutter And many More...",
};
function Home() {
  return (
    <>
      <div className="page-wrapper">
        {/* Header Main Area */}
        <header className="site-header header-style-1">
          <Navbar />
          <Hero />
        </header>
        {/* <Button>Click me</Button> */}
        {/* Header Main Area End Here */}
        {/* Page Content */}
        <div className="page-content">
          <HomeAbout />
          <Counter />
          <Home_Service />
          <WhyChoose/>
          {/* Marquee Start */}
          <section className="marquee-one">
            <div className="container-fluid p-0">
              <div className="swiper-slider marquee">
                <div className="swiper-wrapper">
                  <article className="pbmit-marquee-effect-style-1 swiper-slide">
                    <div className="pbmit-tag-wrapper">
                      <h2
                        className="pbmit-element-title"
                        data-text="Master Bedroom "
                      >
                        Master Bedroom
                      </h2>
                    </div>
                  </article>
                  <article className="pbmit-marquee-effect-style-1 swiper-slide">
                    <div className="pbmit-tag-wrapper">
                      <h2
                        className="pbmit-element-title"
                        data-text="Living Room"
                      >
                        Living Room
                      </h2>
                    </div>
                  </article>
                  <article className="pbmit-marquee-effect-style-1 swiper-slide">
                    <div className="pbmit-tag-wrapper">
                      <h2 className="pbmit-element-title" data-text="Kitchen">
                        Kitchen
                      </h2>
                    </div>
                  </article>
                  <article className="pbmit-marquee-effect-style-1 swiper-slide">
                    <div className="pbmit-tag-wrapper">
                      <h2
                        className="pbmit-element-title"
                        data-text="Best Gallery"
                      >
                        Best Gallery
                      </h2>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
          {/* Marquee End */}
          {/* Pricing End */}
          {/* Testimonial Start */}
          <section className="pbmit-bg-color-light testimonial-one">
            <div className="container pbmit-col-stretched-yes pbmit-col-right">
              <div className="pbmit-col-stretched-right">
                <div className="row g-0">
                  <div className="col-md-12 col-lg-3">
                    <div className="pbmit-testimonialbox-left">
                      <div className="pbmit-heading-subheading animation-style2">
                        <h4 className="pbmit-subtitle">Client feedback</h4>
                        <h2 className="pbmit-title">Hear from clients.</h2>
                      </div>
                    </div>
                  </div>
                  <TestimonialSlider />
                </div>
              </div>
            </div>
          </section>
          {/* Testimonial End */}
          {/* Video Start */}
          <section className="pbmit-bg-color-secondary video-section-one fadeIn animated animated-slow">
            <div className="pbmit-bg-overlay" style={{
              backgroundImage:
                "url(images/bg/bg3.webp)",
            }} />
            <div className="container">
              <div className="text-center">
                <div className="pbmit-heading-subheading-style-1 animation-style4">
                  <h4 className="pbmit-subtitle">
                    Emergency call 0738-011-11-66
                  </h4>
                  <h2 className="pbmit-title">
                    We make the creative fronts <br />
                    solutions for{" "}
                    <span id="js-rotating">
                      leading retail clients.
                    </span>
                  </h2>
                </div>
                <div className="play-button">
                  <a
                    className="pbmit-icon pbmin-lightbox-video"
                    href="https://www.youtube.com/watch?v=EKWprEex9u8&t=3s"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Video Start */}
          {/* Blog Start */}
          <section className="section-md">
            <div className="container">
              <div className="pbmit-heading-subheading text-center animation-style3">
                <h4 className="pbmit-subtitle">since 1986</h4>
                <h2 className="pbmit-title">Read Our Articles and News</h2>
              </div>
            <BlogSlider/>
            </div>
          </section>

          {/* Blog End */}
        </div>
        {/* Page Content End */}

      </div>
      <Footer />
    </>
  );
}

export default Home;
