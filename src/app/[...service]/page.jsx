"use client";
import Navbar from '@/components/Navbar'
import React, { useState, useEffect } from 'react'
import "./windows.css"
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';


function page() {
    const pathname = usePathname();

    const pathSegments = pathname.split('/').filter(segment => segment); // Split and filter empty segments
    let catIndx = 0;
    let title = pathSegments[catIndx]?.charAt(0)?.toUpperCase() + pathSegments[catIndx]?.slice(1);
    const [catData, setCatData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/get-menu-by-slug?slug=${pathname.replace(/^\//, '')}`);
                const result = await res.json();
                result.map((item) => (
                    item.service_slider = typeof item.service_slider === 'string'
                        ? JSON.parse(item.service_slider)
                        : item.service_slider
                ))
                setCatData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    const cleanedString = catData && catData[0]?.service_slider.replace(/^"|"$/g, '').replace(/\\"/g, '"');
    const sliderArray = JSON.parse(cleanedString);
    return (
        <div>
            <div className="page-wrapper" id="page">
                {/* Header Main Area */}
                <header className="site-header header-style-1">
                    <Navbar />
                </header>
                {/* Header Main Area End Here */}
                {console.log(sliderArray)}
                {/* Title Bar */}
                <div className="pbmit-title-bar-wrapper" style={{ backgroundImage: `url(${catData && catData[0]?.service_wallpaper})` }}>

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

                                        <span>
                                            <a title href="#" className="home">
                                                <span>Service</span>
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
                                {Array.isArray(catData) && catData.map((item) => (
                                    <>

                                        <div className="pbmit-short-description">
                                            <h3>{item?.title}</h3>
                                            <div key={item.id} dangerouslySetInnerHTML={{ __html: item?.content }} />
                                        </div>
                                        <div className="pbmit-featured-img-wrapper">
                                            <div className="pf-img-box">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="d-flex image-container">
                                                            {Array.isArray(sliderArray) && sliderArray.map((imgUrl) => (
                                                                <div className="image-box left" key={imgUrl}>
                                                                    <img
                                                                        src={imgUrl}
                                                                        className="img-fluid"
                                                                        alt="Portfolio Detail 01"
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {console.log('item', item)}


                                        <div className="pbmit-entry-content">
                                        </div>
                                    </>
                                ))}
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

export default page