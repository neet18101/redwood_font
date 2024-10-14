"use client";

import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation'

function Navbar() {
    const pathname = usePathname()
    return (
        <>
            <div className="pbmit-header-overlay">
                <div className="pbmit-main-header-area">
                    <div className="container-fluid">
                        <div className="pbmit-header-content d-flex justify-content-between align-items-center">
                            <div className="pbmit-logo-button-area d-flex justify-content-between align-items-center">
                                <div className="site-branding">
                                    <h1 className="site-title">
                                        <Link href="/">

                                            <h6 className='underline'>Red Wood Shop</h6>
                                        </Link>
                                    </h1>
                                    <div className="pbmit-sticky-corner  pbmit-top-right-corner">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M20 20V0C20 16 16 20 0 20H20Z" fill="red" />
                                        </svg>
                                    </div>
                                    <div className="pbmit-sticky-corner pbmit-bottom-left-corner">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M20 20V0C20 12 12 20 0 20H20Z" fill="red" />
                                        </svg>
                                    </div>
                                </div>
                                {/* <div className="pbmit-button-box">
                                    <div className="pbmit-header-button">
                                        <a href="tel:0738-011-11-66">
                                            <span className="pbmit-header-button-text-1">
                                                0738-011-11-66
                                            </span>
                                            <span className="pbmit-header-button-text-2">
                                                tel:0738-011-11-66
                                            </span>
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                            <div className="site-navigation">
                                <nav className="main-menu navbar-expand-xl navbar-light">
                                    <div className="navbar-header">
                                        {/* Toggle Button */}
                                        <button className="navbar-toggler" type="button">
                                            <i className="pbmit-base-icon-menu-1" />
                                        </button>
                                    </div>
                                    <div className="pbmit-mobile-menu-bg" />
                                    <div
                                        className="collapse navbar-collapse clearfix show"
                                        id="pbmit-menu"
                                    >
                                        <div className="pbmit-menu-wrap">
                                            <span className="closepanel">
                                                <svg
                                                    className="qodef-svg--close qodef-m"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20.163"
                                                    height="20.163"
                                                    viewBox="0 0 26.163 26.163"
                                                >
                                                    <rect
                                                        width={36}
                                                        height={1}
                                                        transform="translate(0.707) rotate(45)"
                                                    />
                                                    <rect
                                                        width={36}
                                                        height={1}
                                                        transform="translate(0 25.456) rotate(-45)"
                                                    />
                                                </svg>
                                            </span>
                                            <ul className="navigation clearfix">
                                                <li className={`dropdown ${pathname === "/" ? "active" : ""}`}>
                                                    <Link href="/">Home</Link>

                                                </li>
                                                <li className={`dropdown ${pathname === "/service" ? "active" : ""}`}>
                                                    <Link href="#">Service</Link>
                                                    {/* <ul>
                                                        <li>
                                                            <a href="about-us.html">Shop Fronts</a>
                                                        </li>
                                                        <li>
                                                            <a href="our-history.html">Shutters</a>
                                                        </li>
                                                        <li>
                                                            <a href="our-team.html">Windows</a>
                                                        </li>

                                                    </ul> */}
                                                </li>
                                                <li className={`dropdown ${pathname === "/blog" ? "active" : ""}`}>
                                                    <a href="#">Blog</a>
                                                    {/* <ul>
                                                        <li>
                                                            <a href="about-us.html">Shop Fronts</a>
                                                        </li>
                                                        <li>
                                                            <a href="our-history.html">Shutters</a>
                                                        </li>
                                                        <li>
                                                            <a href="our-team.html">Windows</a>
                                                        </li>

                                                    </ul> */}
                                                </li>
                                                <li className={`dropdown ${pathname === "/about" ? "active" : ""}`}>
                                                    <Link href="/about">About</Link>

                                                </li>
                                                <li className={`dropdown ${pathname === "/gallery" ? "active" : ""}`}>
                                                    <Link href="/gallery">Gallery</Link>

                                                </li>
                                                <li className={`dropdown ${pathname === "/contact" ? "active" : ""}`}>
                                                    <Link href="/contact">Contact</Link>
                                                </li>
                                                <li className={`dropdown ${pathname === "/f_a_q" ? "active" : ""}`}>
                                                    <Link href="/f_a_q">Faq's</Link>
                                                </li>
                                                {/* <li className="dropdown">
                                                    <a href="#">Faq's</a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="pbmit-right-box d-flex align-items-center">
                                <div className="pbmit-header-search-btn">

                                </div>
                                <div className="pbmit-button-box-second">
                                    <a className="pbmit-btn" href="contact-us.html">
                                        <span className="pbmit-button-content-wrapper">
                                            <span className="pbmit-button-text">
                                                Book Consult
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar