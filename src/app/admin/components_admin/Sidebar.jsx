"use client";
import React, { useState } from "react";
import Link from "next/link";

function Sidebar() {
  // State to manage which menu item is open
  const [activeMenu, setActiveMenu] = useState("");

  // Function to handle menu toggle
  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? "" : menu); // Toggle menu on click
  };

  return (
    <div>
      <div className="app-menu navbar-menu">
        {/* LOGO */}
        <div className="navbar-brand-box">
          {/* Dark Logo*/}
          <a href="index.html" className="logo logo-dark">
            <span className="logo-lg">ReadWood Font Admin</span>
          </a>
          <button
            type="button"
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line" />
          </button>
        </div>
        <div id="scrollbar">
          <div className="container-fluid">
            <div id="two-column-menu"></div>
            <ul className="navbar-nav" id="navbar-nav">
              <li className="menu-title">
                <span data-key="t-menu">Dashboards</span>
              </li>
              <li className="nav-item cursor-pointer">
                <a className="nav-link menu-link" href="/admin/dashboard">
                  <i className="ri-dashboard-2-line" />{" "}
                  <span data-key="t-dashboards">Dashboards</span>
                </a>
              </li>
              {/* Menu Section */}
              <li className="menu-title">
                <span data-key="t-menu">Menu</span>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  role="button"
                  onClick={() => toggleMenu("menu")}
                >
                  <i className="ri-apps-2-line" />{" "}
                  <span data-key="t-apps">Menu</span>
                  <i
                    className={`menu-icon ${activeMenu === "menu"
                      ? "ri-arrow-down-s-line"
                      : "ri-arrow-right-s-line"
                      }`}
                    style={{ marginLeft: "auto" }}
                  />
                </a>
                <div
                  className={`collapse menu-dropdown ${activeMenu === "menu" ? "show" : ""}`}
                  id="sidebarApps"
                >
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <Link href="/admin/add-menu" className="nav-link" data-key="t-chat">
                        Add Menu
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a href="/admin/add-content-menu" className="nav-link" data-key="t-chat">
                        Add Content Menu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/admin/all-menus" className="nav-link" data-key="t-chat">
                        All Menu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/admin/all-contents" className="nav-link" data-key="t-chat">
                        All Contents
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* Blog Section */}
              <li className="menu-title">
                <i className="ri-more-fill" /> <span data-key="t-pages">Blog</span>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link"

                  role="button"
                  onClick={() => toggleMenu("blog")}
                >
                  <i className="ri-pages-line" />{" "}
                  <span data-key="t-pages">Blog</span>
                  <i
                    className={`menu-icon ${activeMenu === "blog"
                      ? "ri-arrow-down-s-line"
                      : "ri-arrow-right-s-line"
                      }`}
                    style={{ marginLeft: "auto" }}
                  />
                </a>
                <div
                  className={`collapse menu-dropdown ${activeMenu === "blog" ? "show" : ""}`}
                  id="sidebarPages"
                >
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a href="/admin/add-blog" className="nav-link" data-key="t-starter">
                        Add Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/admin/all-blog" className="nav-link" data-key="t-starter">
                        All Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          {/* Sidebar */}
        </div>
        <div className="sidebar-background" />
      </div>

      <style jsx>{`
        .menu-dropdown {
          transition: max-height 0.3s ease-out;
          overflow: hidden;
          max-height: 0;
        }
        .menu-dropdown.show {
          max-height: 500px; /* Adjust this value to allow enough space for the expanded menu */
          transition: max-height 0.5s ease-in;
        }
      `}</style>
    </div>
  );
}

export default Sidebar;
