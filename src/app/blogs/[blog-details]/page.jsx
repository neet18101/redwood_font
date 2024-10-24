"use client";
import Navbar from '@/components/Navbar'
import React, { useState, useEffect } from 'react'
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';


function Page({ params }) {
    const { 'blog-details': slug } = params; 

    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(segment => segment); // Split and filter empty segments
    let catIndx = 0;
    let title = pathSegments[catIndx]?.charAt(0)?.toUpperCase() + pathSegments[catIndx]?.slice(1);
    const [blogData, setBlogData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/blog-by-slug?slug=${slug}`);
                const result = await res.json();
                setBlogData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
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
                {/* {console.log(sliderArray)} */}
                {/* Title Bar */}
                <div className="pbmit-title-bar-wrapper" style={{ backgroundImage: `url(${blogData && blogData?.blog_image})` }}>

                    <div className="container">
                        <div className="pbmit-title-bar-content">
                            <div className="pbmit-title-bar-content-inner">
                                <div className="pbmit-tbar">
                                    <div className="pbmit-tbar-inner container">
                                        <h1 className="pbmit-tbar-title">{title}</h1>
                                    </div>
                                </div>
                                <div className="pbmit-breadcrumb">
                                    <div className="pbmit-breadcrumb-inner">

                                        <span>
                                            <a title href="#" className="home">
                                                <span>Red Wood Shop Front</span>
                                            </a>
                                        </span>
                                        <span className="sep">
                                            <i className="pbmit-base-icon-angle-right" />
                                        </span>

                                        {pathSegments.map((segment, index) => (
                                            <React.Fragment key={index}>
                                                <span>
                                                    <a title href="#" className="home">
                                                        <span>{segment.charAt(0).toUpperCase() + segment.slice(1)}</span>
                                                    </a>
                                                </span>

                                                <span className="sep">
                                                    <i className="pbmit-base-icon-angle-right" />
                                                </span>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Title Bar End*/}
                {/* Page Content */}
                <div className="page-content">
                    {/* Portfolio Detail Style 1 */}
                    <section className="site-content">
                        <div className="container">
                            <article className="portfolio-single">
                                {blogData && (
                                    <>
                                        <div className="pbmit-short-description">
                                            <h3>{blogData?.title}</h3>
                                            <div key={blogData.id} dangerouslySetInnerHTML={{ __html: blogData?.content }} />
                                        </div>
                                     
                                    </>
                                )}
                            </article>
                        </div>
                    </section>
                    {/* Portfolio Detail Style 1 End */}
                </div>
                {/* Page Content End */}
            </div>
            <Footer />
        </div>
    )
}

export default Page