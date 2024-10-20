"use client";
import React, { useEffect, useState } from "react";
import RootLayout from "../../layout";
import AdminHeader from "../../components_admin/AdminHeader";
import Sidebar from "../../components_admin/Sidebar";
import toast, { Toaster } from "react-hot-toast";

// Utility function to generate slug from the menu name
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
};

function Page() {
  const [menuItems, setMenuItems] = useState([]); // Fetch existing menu items for the dropdown
  const [menuName, setMenuName] = useState(""); // Store new menu name
  const [menuUrl, setMenuUrl] = useState(""); // URL for the menu item
  const [selectedParent, setSelectedParent] = useState(""); // Parent menu id for subcategory

  // Define the function to fetch existing menu items for the Parent Menu dropdown
  const fetchMenuItems = async () => {
    try {
      const response = await fetch("/api/menu", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMenuItems(data); // Populate menu items for dropdown
    } catch (error) {
      console.error("Error fetching menu items:", error);
      toast.error("Error fetching menu items");
    }
  };

  // Fetch menu items once when the component mounts
  useEffect(() => {
    fetchMenuItems();
  }, []);

  // Reflect slugified URL when menu name changes
  const handleMenuNameChange = (event) => {
    const name = event.target.value;
    setMenuName(name);
    // Auto-generate the URL slug
    setMenuUrl(slugify(name));
  };

  // Handle form submission for adding a new menu item
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      menuName, // New menu item name
      menuUrl, // Use the slugified or manually provided URL
      parentMenuId: selectedParent || null, // If no parent is selected, it becomes a top-level category
    };

    try {
      const response = await fetch("/api/menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Menu item added successfully");
        setMenuName("");
        setMenuUrl("");
        setSelectedParent("");
        // Fetch the updated list of menu items after successful addition
        fetchMenuItems();
      } else {
        toast.error("Error adding menu item");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("An error occurred while adding the menu item");
    }
  };

  // Render options for the Parent Menu dropdown
  const renderMenuOptions = (items) => {
    return items.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  return (
    <RootLayout>
      <Toaster />
      <AdminHeader />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Add Menu</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">Menu</a>
                      </li>
                      <li className="breadcrumb-item active">Add Menu</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="live-preview">
                      <form onSubmit={handleSubmit}>
                        <div className="row gy-4">
                          {/* Menu Name Input */}
                          <div className="col-xxl-6 col-md-6">
                            <div>
                              <label htmlFor="menuName" className="form-label">
                                Menu Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="menuName"
                                value={menuName}
                                onChange={handleMenuNameChange} // Reflect slug on menu name change
                                required
                              />
                            </div>
                          </div>

                          {/* Menu URL Input */}
                          <div className="col-xxl-6 col-md-6">
                            <div>
                              <label htmlFor="menuUrl" className="form-label">
                                Menu URL (auto-generated from name, editable)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="menuUrl"
                                value={menuUrl}
                                onChange={(e) => setMenuUrl(e.target.value)} // Allow manual editing of URL
                              />
                            </div>
                          </div>

                          {/* Parent Menu Dropdown */}
                          <div className="col-xxl-6 col-md-6">
                            <div>
                              <label
                                htmlFor="parentMenu"
                                className="form-label"
                              >
                                Select Parent Menu
                              </label>
                              <select
                                className="form-select"
                                id="parentMenu"
                                value={selectedParent}
                                onChange={(e) =>
                                  setSelectedParent(e.target.value)
                                }
                              >
                                <option value="">
                                  None (Top-level Category)
                                </option>
                                {renderMenuOptions(menuItems)}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="row gy-4 mt-3">
                          <div className="col-xxl-3 col-md-6">
                            <button
                              type="submit"
                              className="btn btn-primary"
                            >
                              Add Menu Item
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/*end col*/}
            </div>
          </div>
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">© YourCompany.</div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Design &amp; Develop by YourCompany
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </RootLayout>
  );
}

export default Page;
