'use client'
import React, { useState } from 'react';
import { signOut } from 'next-auth/react'
function AdminHeader() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = async () => {
        await signOut({ callbackUrl: '/admin' }); // Sign out and redirect to the admin login page
    };
    return (
        <>
            <header id="page-topbar">
                <div className="layout-width">
                    <div className="navbar-header">
                        <div className="d-flex">


                        </div>
                        <div className="d-flex align-items-center">

                            <div className="dropdown ms-sm-3 header-item topbar-user" onClick={toggleDropdown}>
                                <button
                                    type="button"
                                    className="btn"
                                    id="page-header-user-dropdown"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"

                                >
                                    <span className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle header-profile-user"
                                            src="/adminassets/assets/images/users/user-dummy-img.jpg"
                                            alt="Header Avatar"
                                        />
                                        <span className="text-start ms-xl-2">
                                            <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                                                RedWood
                                            </span>
                                            <span className="d-none d-xl-block ms-1 fs-12 user-name-sub-text">
                                                Admin
                                            </span>
                                        </span>
                                    </span>
                                </button>
                                <div
                                    className={`dropdown-menu dropdown-menu-end show`} // Dynamically add class
                                    style={{ display: dropdownOpen ? "block" : "none" }} // Add inline CSS for display
                                >
                                    {/* item*/}
                                    <h6 className="dropdown-header">Welcome Admin!</h6>
                                    <button className="dropdown-item" onClick={handleLogout}>
                                        <i className="mdi mdi-logout text-muted fs-16 align-middle me-1" />
                                        <span className="align-middle" data-key="t-logout">
                                            Logout
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default AdminHeader