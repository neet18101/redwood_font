import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

 function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* CSS
   ============================================ */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        {/* Fontawesome */}
        <link rel="stylesheet" href="css/fontawesome.css" />
        {/* Flaticon */}
        <link rel="stylesheet" href="css/flaticon.css" />
        {/* Base Icons */}
        <link rel="stylesheet" href="css/pbminfotech-base-icons.css" />
        {/* Themify Icons */}
        <link rel="stylesheet" href="css/themify-icons.css" />
        {/* Slick */}
        <link rel="stylesheet" href="css/swiper.min.css" />
        {/* Magnific */}
        <link rel="stylesheet" href="css/magnific-popup.css" />
        {/* AOS */}
        <link rel="stylesheet" href="css/aos.css" />
        {/* Shortcode CSS */}
        <link rel="stylesheet" href="css/shortcode.css" />
        {/* Base CSS */}
        <link rel="stylesheet" href="css/base.css" />
        {/* Style CSS */}
        <link rel="stylesheet" href="css/style.css" />
        {/* Responsive CSS */}
        <link rel="stylesheet" href="css/responsive.css" />
      </head>
      <body className={inter.className}>
        {children}

        

        {/* JS
		============================================ */}

        {/* jQuery JS */}

        <script src="js/jquery.min.js"></script>
        {/* Popper JS */}

        

        <script src="js/popper.min.js"></script>
        {/* Bootstrap JS */}

        <script src="js/bootstrap.min.js"></script>
        {/* jquery Waypoints JS */}

        <script src="js/jquery.waypoints.min.js"></script>
        {/* jquery Appear JS */}

        <script src="js/jquery.appear.js"></script>
        {/* Numinate JS */}

        <script src="js/numinate.min.js"></script>
        {/* Slick JS */}

        {/* <script src="js/swiper.min.js"></script> */}
        {/* Magnific JS */}

        <script src="js/jquery.magnific-popup.min.js"></script>
        {/* Circle Progress JS */}

        <script src="js/circle-progress.js"></script>
        {/* countdown JS */}

        <script src="js/jquery.countdown.min.js"></script>
        {/* AOS */}

        <script src="js/aos.js"></script>
        {/* GSAP */}

        <script src="js/gsap.js"></script>
        {/* Scroll Trigger */}

        <script src="js/ScrollTrigger.js"></script>
        {/* Split Text */}

        <script src="js/SplitText.js"></script>
        {/* Magnetic */}

        <script src="js/magnetic.js"></script>
        {/* Morphext JS */}

        <script src="js/morphext.min.js"></script>
        <script src="js/popper.min.js"></script>
        {/* GSAP Animation */}

        <script src="js/gsap-animation.js"></script>
        {/* Isotope JS */}

        <script src="js/isotope.pkgd.min.js"></script>
        {/* Scripts JS */}

        <script src="js/scripts.js"></script>
      </body>
    </html>
  );
}
export default RootLayout