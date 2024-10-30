'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from '../components_admin/Sidebar';
import AdminHeader from '../components_admin/AdminHeader';
import RootLayout from '../layout';

function Page() {
    const [greeting, setGreeting] = useState("");
    const [totalMenuContent, setTotalMenuContent] = useState(0);
    const [totalBlogs, setTotalBlogs] = useState(0);

    // Set greeting based on the current time
    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) {
            setGreeting("Good Morning");
        } else if (hour < 17) {
            setGreeting("Good Afternoon");
        } else if (hour < 21) {
            setGreeting("Good Evening");
        } else {
            setGreeting("At Night, What's up?");
        }
    }, []);
    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const menuResponse = await fetch('/api/contents-api', { method: 'GET' });
                const menuData = await menuResponse.json();
                setTotalMenuContent(menuData.length);
                const blogsResponse = await fetch('/api/all-blog', { method: 'GET' });
                const blogsData = await blogsResponse.json();
                setTotalBlogs(blogsData.length);
            } catch (error) {
                console.error("Error fetching counts:", error);
            }
        };
        fetchCounts();
    }, []);
    return (
        <RootLayout>
            <AdminHeader />
            <Sidebar />
            <div className="main-content">
                <div className="page-content">
                    <div className="h-100">
                        <div className="row mb-3 pb-1">
                            <div className="col-12">
                                <div className="card card-animate">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h4 className="fs-16 mb-1">{greeting}, Admin!</h4>
                                                <p className="text-muted mb-0">
                                                    Here's what's happening with your store today.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-3 col-md-6">
                                    <div className="card card-animate">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                        Total Menu Content
                                                    </p>
                                                    <h4 className="mb-0">{totalMenuContent}</h4>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card card-animate">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                        Total Blogs
                                                    </p>
                                                    <h4 className="mb-0">{totalBlogs}</h4>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RootLayout>
    );
}

export default Page;
