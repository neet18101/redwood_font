"use client";
import { Inter } from "next/font/google";
import Navbar from "./components_admin/Navbar";
import Sidebar from "./components_admin/Sidebar";
// import "../globals.css";
const inter = Inter({ subsets: ["latin"] });


function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* jsvectormap css */}
        <link
          href="/adminassets/assets/libs/jsvectormap/css/jsvectormap.min.css"
          rel="stylesheet"
          type="text/css"
        />
        {/*Swiper slider css*/}
        <link
          href="/adminassets/assets/libs/swiper/swiper-bundle.min.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* Layout config Js */}
        {/* Bootstrap Css */}
        <link
          href="/adminassets/assets/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* Icons Css */}
        <link
          href="/adminassets/assets/css/icons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* App Css*/}
        <link
          href="/adminassets/assets/css/app.min.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* custom Css*/}
        <link
          href="/adminassets/assets/css/custom.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>

      <body className={inter.className}>
        <div id="layout-wrapper">
          {/* <Navbar />
                    <Sidebar /> */}

          {children}

          {/* End Page-content */}
          {/* <footer className="footer">
                            <div className="container-fluid">
                                <div className="row">
                        ./            <div className="col-sm-6">
                                        @Brand ME
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="text-sm-end d-none d-sm-block">
                                            Design &amp; Develop by BRAND ME Technologies pvt ltd
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer> */}
        </div>
        <div>
          {/*start back-to-top*/}
          <button
            onclick="topFunction()"
            className="btn btn-danger btn-icon"
            id="back-to-top"
          >
            <i className="ri-arrow-up-line" />
          </button>
          {/*end back-to-top*/}
          {/*preloader*/}
          {/* <div id="preloader">
                        <div id="status">
                            <div className="spinner-border text-primary avatar-sm" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div> */}
        </div>

        <script src="/adminassets/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/adminassets/assets/libs/simplebar/simplebar.min.js"></script>
        <script src="/adminassets/assets/libs/node-waves/waves.min.js"></script>
        <script src="/adminassets/assets/libs/feather-icons/feather.min.js"></script>
        <script src="/adminassets/assets/js/pages/plugins/lord-icon-2.1.0.js"></script>
        <script src="/adminassets/assets/js/plugins.js"></script>

        <script src="/adminassets/assets/libs/jsvectormap/js/jsvectormap.min.js"></script>
        <script src="/adminassets/assets/libs/jsvectormap/maps/world-merc.js"></script>

        <script src="/adminassets/assets/libs/swiper/swiper-bundle.min.js"></script>

        <script src="/adminassets/assets/js/pages/dashboard-ecommerce.init.js"></script>

        <script src="/adminassets/assets/js/app.js"></script>
      </body>
    </html>
  );
}

export default RootLayout;
