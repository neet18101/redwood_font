'use client';
import React, { useEffect, useState } from 'react';
import RootLayout from '../../layout';
import AdminHeader from '../../components_admin/AdminHeader';
import Sidebar from '../../components_admin/Sidebar';


function page() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const fetchMenus = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/menus-api`);
      const result = await res.json();
      console.log('res-:>', result);
      setMenus(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    } finally {
      console.log('inside finally');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);


  // Form Submission Handler
  const deleteHandle = async (menuId) => {
    console.log('blogId:>', menuId);
    setErrorMessage('');
    setSuccessMessage('');

    // Basic Validation
    if (!menuId) {
      setErrorMessage('Something went wrong. Please try again leater!');
      return;
    }

    const apiParam = {
      id: menuId
    };

    try {
      const response = await fetch('/api/menus-api', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiParam),
      });

      if (response.ok) {
        // const menuIndex = menus.findIndex(item => item.id === menuId);
        // console.log('menuIndex:>', menuIndex);
        // menus.splice(menuIndex, 1);
        fetchMenus();
        setSuccessMessage('Menu deleted successfully.');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to delete blog post.');
      }
    } catch (error) {
      console.error('Error adding blog:', error);
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
    }
  };




  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(`/api/menus-api`);
  //       const result = await res.json();
  //       console.log('res-:>', result);
  //       setMenus(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     } finally {
  //       console.log('inside finally');
  //     }
  //   };
  //   fetchData();
  // }, []);



  return (
    <RootLayout>
      <AdminHeader />
      <Sidebar />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">All Menus</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0);">Menus</a>
                      </li>
                      <li className="breadcrumb-item active">All Menus</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}

            <div className="col-xl-12">

              {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
              {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}


              {loading && <p style={{ textAlign: 'center' }}>Loading....</p>}
              {!loading && menus.length === 0 && <p style={{ textAlign: 'center' }}>No data available.</p>}


              {!loading && menus.length > 0 && (
                <div className="card">
                  <div className="card-body">
                    <div className="live-preview">
                      <div className="table-responsive">
                        <table className="table table-striped table-nowrap align-middle mb-0">
                          <thead>
                            <tr>
                              <th scope="col">S.NO</th>
                              <th scope="col">Parent Menu</th>
                              <th scope="col">Menu</th>
                              <th scope="col">Date</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {menus.map((item, index) => (
                              <tr>
                                <td className="fw-medium">{++index}</td>
                                <td>{item.parent_name ? item.parent_name : item.name}</td>
                                <td>{item.parent_name ? item.name : 'N/A'}</td>
                                <td>{item.formattedDate}</td>

                                <td>
                                  {item.parent_id && (
                                    <div className="hstack gap-3 flex-wrap">
                                      {/* <a
                                        href={`/admin/edit-blog/${item.id}`}
                                        className="link-success fs-15"
                                      >
                                        <i className="ri-edit-2-line"></i>
                                      </a> */}
                                      <a
                                        href="javascript:void(0);"
                                        onClick={() => deleteHandle(item.id)}
                                        className="link-danger fs-15"
                                      >
                                        <i className="ri-delete-bin-line"></i>
                                      </a>
                                    </div>
                                  )}
                                </td>


                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* <div className="code-view d-none">
                    <pre className="language-markup" style={{ height: 275 }} tabIndex={0}>
                      <code className="language-markup">
                        <span className="token comment">&lt;!-- Striped Rows --&gt;</span>
                        {"\n"}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>table
                          </span>{" "}
                          <span className="token attr-name">class</span>
                          <span className="token attr-value">
                            <span className="token punctuation attr-equals">=</span>
                            <span className="token punctuation">"</span>table table-striped
                            <span className="token punctuation">"</span>
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"    "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>thead
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"        "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>tr
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>th
                          </span>{" "}
                          <span className="token attr-name">scope</span>
                          <span className="token attr-value">
                            <span className="token punctuation attr-equals">=</span>
                            <span className="token punctuation">"</span>col
                            <span className="token punctuation">"</span>
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        Id
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>th
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>th
                          </span>{" "}
                          <span className="token attr-name">scope</span>
                          <span className="token attr-value">
                            <span className="token punctuation attr-equals">=</span>
                            <span className="token punctuation">"</span>col
                            <span className="token punctuation">"</span>
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        Customer
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>th
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>th
                          </span>{" "}
                          <span className="token attr-name">scope</span>
                          <span className="token attr-value">
                            <span className="token punctuation attr-equals">=</span>
                            <span className="token punctuation">"</span>col
                            <span className="token punctuation">"</span>
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        Date
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>th
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>th
                          </span>{" "}
                          <span className="token attr-name">scope</span>
                          <span className="token attr-value">
                            <span className="token punctuation attr-equals">=</span>
                            <span className="token punctuation">"</span>col
                            <span className="token punctuation">"</span>
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        Invoice
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>th
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>th
                          </span>{" "}
                          <span className="token attr-name">scope</span>
                          <span className="token attr-value">
                            <span className="token punctuation attr-equals">=</span>
                            <span className="token punctuation">"</span>col
                            <span className="token punctuation">"</span>
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        Action
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>th
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"        "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>tr
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"    "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>thead
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"    "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>tbody
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"        "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>tr
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>th
                          </span>{" "}
                          <span className="token attr-name">scope</span>
                          <span className="token attr-value">
                            <span className="token punctuation attr-equals">=</span>
                            <span className="token punctuation">"</span>row
                            <span className="token punctuation">"</span>
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        1
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>th
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        Bobby Davis
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        Nov 14, 2021
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        $2,410
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>span
                          </span>{" "}
                          <span className="token attr-name">class</span>
                          <span className="token attr-value">
                            <span className="token punctuation attr-equals">=</span>
                            <span className="token punctuation">"</span>badge bg-success
                            <span className="token punctuation">"</span>
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        Confirmed
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>span
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"        "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>tr
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"        "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>tr
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>th
                          </span>{" "}
                          <span className="token attr-name">scope</span>
                          <span className="token attr-value">
                            <span className="token punctuation attr-equals">=</span>
                            <span className="token punctuation">"</span>row
                            <span className="token punctuation">"</span>
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        2
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>th
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        Christopher Neal
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        Nov 21, 2021
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        $1,450
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>span
                          </span>{" "}
                          <span className="token attr-name">class</span>
                          <span className="token attr-value">
                            <span className="token punctuation attr-equals">=</span>
                            <span className="token punctuation">"</span>badge bg-warning
                            <span className="token punctuation">"</span>
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        Waiting
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>span
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"        "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>tr
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"        "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>tr
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>th
                          </span>{" "}
                          <span className="token attr-name">scope</span>
                          <span className="token attr-value">
                            <span className="token punctuation attr-equals">=</span>
                            <span className="token punctuation">"</span>row
                            <span className="token punctuation">"</span>
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        3
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>th
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        Monkey Karry
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        Nov 24, 2021
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        $3,500
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>span
                          </span>{" "}
                          <span className="token attr-name">class</span>
                          <span className="token attr-value">
                            <span className="token punctuation attr-equals">=</span>
                            <span className="token punctuation">"</span>badge bg-success
                            <span className="token punctuation">"</span>
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        Confirmed
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>span
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"        "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>tr
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"        "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>tr
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>th
                          </span>{" "}
                          <span className="token attr-name">scope</span>
                          <span className="token attr-value">
                            <span className="token punctuation attr-equals">=</span>
                            <span className="token punctuation">"</span>row
                            <span className="token punctuation">"</span>
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        4
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>th
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        Aaron James
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        Nov 25, 2021
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        $6,875
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>span
                          </span>{" "}
                          <span className="token attr-name">class</span>
                          <span className="token attr-value">
                            <span className="token punctuation attr-equals">=</span>
                            <span className="token punctuation">"</span>badge bg-danger
                            <span className="token punctuation">"</span>
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        Cancelled
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>span
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>td
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"        "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>tr
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        {"    "}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>tbody
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                        {"\n"}
                        <span className="token tag">
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>table
                          </span>
                          <span className="token punctuation">&gt;</span>
                        </span>
                      </code>
                    </pre>
                  </div> */}
                  </div>



                  {/* end card-body */}
                </div>

              )}
              {/* end card */}
            </div>

          </div>
        </div>
      </div>

    </RootLayout>
  )
}

export default page