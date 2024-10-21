'use client';
import React, { useEffect, useState } from 'react';
import RootLayout from '../../layout';
import AdminHeader from '../../components_admin/AdminHeader';
import Sidebar from '../../components_admin/Sidebar';


function page(param) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  console.log('blog id', param);
  // Form Submission Handler
  const deleteHandle = async (blogId) => {
    console.log('blogId:>', blogId);
    setErrorMessage('');
    setSuccessMessage('');

    // Basic Validation
    if (!blogId) {
      setErrorMessage('Something went wrong. Please try again leater!');
      return;
    }

    const apiParam = {
      id: blogId
    };

    try {
      setLoading(true);
      const response = await fetch('/api/blogs-api', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiParam),
      });

      if (response.ok) {
        const blogIndex = blogs.findIndex(item => item.id === blogId);
        console.log('blogIndex:>', blogIndex);
        blogs.splice(blogIndex, 1);
        setSuccessMessage('Blog post deleted successfully.');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to delete blog post.');
      }
    } catch (error) {
      console.error('Error adding blog:', error);
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };




  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/blogs-api`);
        const result = await res.json();
        console.log('res-:>', result);
        setBlogs(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        console.log('inside finally');
      }
    };
    fetchData();
  }, []);



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
                  <h4 className="mb-sm-0">All Blogs</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0);">Blog</a>
                      </li>
                      <li className="breadcrumb-item active">All Blogs</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-lg-12">
                {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                {/* <!-- Tables Without Borders --> */}
                <table class="table table-borderless table-nowrap">
                  <thead>
                    <tr>
                      <th scope="col">Sr No</th>
                      <th scope="col">Title</th>
                      <th scope="col">Category</th>
                      <th scope="col">Content</th>
                      <th scope="col">Created Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((item, index) => (
                      <tr>
                        <th scope="row">{++index}</th>
                        <td>{item.title}</td>
                        <td>{item?.category}</td>
                        <td dangerouslySetInnerHTML={{ __html: item.content }} ></td>
                        <td>{item.formattedDate}</td>
                        <td>
                          <div class="hstack gap-3 fs-15">
                            <a href={`add-blog/${item.id}`} class="link-success fs-15"><i class="ri-edit-2-line"></i></a>
                            <a href="javascript:void(0);" class="link-danger" onClick={() => { deleteHandle(item.id) }} ><i class="ri-delete-bin-5-line"></i></a>
                          </div>
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </table>


              </div>
            </div>

          </div>
        </div>
      </div>

    </RootLayout>
  )
}

export default page