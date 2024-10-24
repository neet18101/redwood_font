'use client';
import React, { useEffect, useState } from 'react';
import RootLayout from '../../layout';
import AdminHeader from '../../components_admin/AdminHeader';
import Sidebar from '../../components_admin/Sidebar';
import toast, { Toaster } from 'react-hot-toast';

function Page() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Form Submission Handler
  const fetchData = async () => {
    try {
      const res = await fetch(`/api/all-blog`);
      const result = await res.json();
      setBlogs(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const deleteHandle = async (blogId) => {
    setErrorMessage('');
    setSuccessMessage('');

    if (!blogId) {
      setErrorMessage('Something went wrong. Please try again later!');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`/api/delete-blog?id=${blogId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: blogId }),
      });

      if (response.ok) {
        toast.success('Blog post deleted successfully.');
        fetchData();
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to delete blog post.');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    fetchData();
  }, []);


  return (
    <RootLayout>
      <AdminHeader />
      <Toaster />
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
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="live-preview">
                    <div className="table-responsive">
                      <table className="table table-striped table-nowrap align-middle mb-0">
                        <thead>
                          <tr>
                            <th scope="col">S.NO</th>
                            <th scope="col">Title</th>
                            <th scope="col">Image</th>
                            <th scope="col">Content</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {blogs.length > 0 ? (
                            blogs.map((blog, index) => (
                              <tr key={blog.id}>
                                <td className="fw-medium">{index + 1}</td>
                                <td>{blog.title}</td>
                                <td>
                                  <img
                                    src={blog.blog_image || '/default_image.jpg'}
                                    alt={blog.title}
                                    width="50"
                                    height="50"
                                    style={{ borderRadius: '50px' }}
                                  />
                                </td>
                                <td dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 100) + (blog.content.length > 100 ? '...' : '') }}></td>

                                <td>
                                  <span className={`badge ${blog.is_active == 1 ? 'bg-success' : 'bg-danger'}`}>
                                    {blog.is_active == 1 ? 'Active' : 'Inactive'}
                                  </span>
                                </td>
                                <td>
                                  <div className="hstack gap-3 flex-wrap">
                                    <a
                                      href={`/admin/edit-blog/${blog.id}`}
                                      className="link-success fs-15"
                                    >
                                      <i className="ri-edit-2-line"></i>
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      onClick={() => deleteHandle(blog.id)}
                                      className="link-danger fs-15"
                                    >
                                      <i className="ri-delete-bin-line"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="6" className="text-center">
                                No blogs available.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}

export default Page;
