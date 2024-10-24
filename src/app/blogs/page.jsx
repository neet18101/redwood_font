"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import "./shutters.css"
import Footer from "@/components/Footer";

function page() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/all-blog`);
                const result = await res.json();
                setBlogs(result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);




    return (
        <div>
            <div className="page-wrapper" id="page">
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
                                        <h1 className="pbmit-tbar-title"> Blogs</h1>
                                    </div>
                                </div>
                                <div className="pbmit-breadcrumb">
                                    <div className="pbmit-breadcrumb-inner">
                                        <span>
                                            <a title="" href="#" className="home">
                                                <span>Red Wood Shop Front</span>
                                            </a>
                                        </span>
                                        <span className="sep">
                                            <i className="pbmit-base-icon-angle-right" />
                                        </span>
                                        <span>
                                            <span className="post-root post post-post current-item">
                                                {" "}
                                                Blogs
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Title Bar End*/}
                {/* Page Content */}
                <div className="page-content about-us">
                    {/* About Us Start */}

                    <section className="section-md">
                        <div className="container-fluid px-4">
                            <div className="row pbmit-element-posts-wrapper">

                                {!loading && blogs.length > 0 && blogs.map((item) => (

                                    <article className="pbmit-ele-blog pbmit-blog-style-1 col-md-6 col-lg-3">
                                        <div className="post-item">
                                            <div className="pbminfotech-box-content">
                                                <div className="pbmit-featured-container">
                                                    <div className="pbmit-featured-img-wrapper">
                                                        <div className="pbmit-featured-wrapper">
                                                            <img
                                                                src={item.blog_image}
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <a
                                                        className="pbmit-blog-btn"
                                                        href={`blogs/${item.slug}`}
                                                        title="How To Choose The Right  Furniture Of Your Home"
                                                    >
                                                        <span className="pbmit-button-icon">
                                                            <i className="pbmit-base-icon-pbmit-up-arrow" />
                                                        </span>
                                                    </a>
                                                    <a className="pbmit-link" href={`blogs/${item.slug}`} />
                                                </div>
                                                <div className="pbmit-content-wrapper">
                                                    <div className="pbmit-date-wraper d-flex align-items-center">
                                                        <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                                                            <div className="pbmit-meta-date">
                                                                <span className="pbmit-post-date">
                                                                    <i className="pbmit-base-icon-calendar-3" />
                                                                   {item.display_updated_date}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="pbmit-meta-author pbmit-meta-line">
                                                            <span className="pbmit-post-author">
                                                                <i className="pbmit-base-icon-user-3" />
                                                                <span>By</span>admin
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <h3 className="pbmit-post-title">
                                                        <a href={`blogs/${item.slug}`} dangerouslySetInnerHTML={{ __html: item.title.substring(0, 100) + (item.title.length > 100 ? '...' : '') }}>

                                                        </a>
                                                    </h3>
                                                    <div className="pbminfotech-box-desc" dangerouslySetInnerHTML={{ __html: item.content.substring(0, 110) + (item.content.length > 110 ? '...' : '') }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                ))}



                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default page;
