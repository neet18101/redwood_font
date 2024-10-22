"use client";
import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import RootLayout from "../../layout";
import AdminHeader from "../../components_admin/AdminHeader";
import Sidebar from "../../components_admin/Sidebar";
import toast, { Toaster } from "react-hot-toast";

export default function Page() {
  const [singleFile, setSingleFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [menuOptions, setMenuOptions] = useState([]); // Ensure it's an array
  const [subMenuOptions, setSubMenuOptions] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedSubMenu, setSelectedSubMenu] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [title, setTitle] = useState(""); // State for the title input

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch("/api/menu");
        const data = await response.json();
        if (Array.isArray(data)) {
          setMenuOptions(data);
        } else {
          console.error("Unexpected data format:", data);
          setMenuOptions([]);
        }
        console.log(data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
        setMenuOptions([]);
      }
    };
    fetchMenuData();
  }, []);

  useEffect(() => {
    if (selectedMenu) {
      const subMenus = menuOptions.filter(
        (item) => item.parent_id == selectedMenu
      );
      setSubMenuOptions(subMenus);
    } else {
      setSubMenuOptions([]);
    }
  }, [selectedMenu, menuOptions]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (singleFile) {
      formData.append("singleFile", singleFile);
    }
    multipleFiles.forEach((file, index) => {
      formData.append(`multipleFile${index}`, file);
    });
    formData.append("selectedMenu", selectedMenu);
    formData.append("selectedSubMenu", selectedSubMenu);
    formData.append("textAreaValue", textAreaValue);
    formData.append("title", title); // Include title in form data

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      toast.success("File uploaded successfully");
      setSingleFile(null);
      setMultipleFiles([]);
      setSelectedMenu(null);
      setSelectedSubMenu("");
      setTextAreaValue("");
      setTitle(""); // Reset title after successful upload
      window.location.reload();
    } else {
      toast.error("Error uploading file");
    }
  };

  return (
    <RootLayout>
      <Toaster />
      <AdminHeader />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Add Menu Content</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">Menu</a>
                      </li>
                      <li className="breadcrumb-item active">Add Menu Content</li>
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
                      <form onSubmit={onSubmit}>
                        <div className="row gy-4">
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
                                value={selectedMenu}
                                name="parentMenu"
                                onChange={(e) =>
                                  setSelectedMenu(e.target.value)
                                } // This captures the menu_id correctly
                              >
                                <option value="">None</option>
                                {menuOptions?.filter((menu) => !menu.parent_id)?.map((menu) => (
                                  <option key={menu.id} value={menu.id}>
                                    {menu.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-xxl-6 col-md-6">
                            <div>
                              <label htmlFor="subMenu" className="form-label">
                                Select Sub-category
                              </label>

                              <div>
                                <select
                                  className="form-select"
                                  id="subMenu"
                                  name="subMenu"
                                  value={selectedSubMenu}
                                  onChange={(e) =>
                                    setSelectedSubMenu(e.target.value)
                                  }
                                >
                                  <option value="">Select a sub-menu</option>
                                  {subMenuOptions.map((subMenu) => (
                                    <option key={subMenu.id} value={subMenu.id}>
                                      {subMenu.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="section-block">
                          <div className="row gy-4 mt-3">
                            {/* Title Input Field */}
                            <div className="col-xxl-6 col-md-6">
                              <label className="form-label">Title</label>
                              <input
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter title here"
                                required // Optional: make it a required field
                              />
                            </div>
                            {/* Slider Image Input */}
                            <div className="col-xxl-6 col-md-6">
                              <label className="form-label">Service Image</label>
                              <input
                                className="form-control"
                                type="file"
                                onChange={(e) => {
                                  setSingleFile(e.target.files[0]);
                                }}
                              />
                            </div>

                            {/* Service Content Editor */}
                            <div className="col-xxl-12 col-md-12">
                              <label className="form-label">
                                Service Content
                              </label>
                              <Editor
                                apiKey="jlqflymaebol9e74rur3de0y4sj3ful2l1781wdrktbpzkpw"
                                init={{
                                  plugins:
                                    "powerpaste casechange searchreplace autolink directionality visualblocks visualchars image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker editimage help formatpainter permanentpen charmap linkchecker emoticons advtable export autosave advcode fullscreen advcode code",
                                  toolbar:
                                    "undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | link image media",
                                }}
                                value={textAreaValue}
                                onEditorChange={(content) =>
                                  setTextAreaValue(content)
                                } // Directly use the content parameter
                              />
                            </div>

                            {/* Multiple Image Upload */}
                            <div className="col-xxl-12 col-md-12">
                              <label className="form-label">
                                Slider Images (Multiple)
                              </label>
                              <input
                                className="form-control"
                                type="file"
                                multiple
                                onChange={(e) => {
                                  setMultipleFiles(Array.from(e.target.files));
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row gy-4 mt-3">
                          <div className="col-xxl-3 col-md-6">
                            <button type="submit" className="btn btn-primary">
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
