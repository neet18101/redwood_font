'use client';
import React, { useEffect, useState } from 'react';
import RootLayout from '../../layout';
import AdminHeader from '../../components_admin/AdminHeader';
import Sidebar from '../../components_admin/Sidebar';

function Page() {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/contents-api`);
      const result = await res.json();
      setListData(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  // Form Submission Handler
  const deleteHandle = async (itemId) => {
    setErrorMessage('');
    setSuccessMessage('');

    if (!itemId) {
      setErrorMessage('Something went wrong. Please try again later!');
      return;
    }

    try {
      const response = await fetch(`/api/contents-api?id=${itemId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: itemId }),
      });

      if (response.ok) {
        // Remove the deleted blog from the UI
        setListData(listData.filter((item) => item.id !== itemId));
        setSuccessMessage('Service content deleted successfully.');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to delete service content.');
      }
    } catch (error) {
      console.error('Error deleting service content:', error);
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
    }
  };

  useEffect(() => {
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
                  <h4 className="mb-sm-0">All Contents</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0);">Menu</a>
                      </li>
                      <li className="breadcrumb-item active">All Contents</li>
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
                          {!loading && listData.length > 0 && (
                            listData.map((listItem, index) => (
                              <tr key={listItem.id}>
                                <td className="fw-medium">{index + 1}</td>
                                <td>{listItem.title}</td>
                                <td>
                                  <img
                                    src={listItem.service_wallpaper || '/default_image.jpg'}
                                    alt={listItem.title}
                                    width="50"
                                    height="50"
                                    style={{ borderRadius: '50px' }}
                                  />
                                </td>
                                <td dangerouslySetInnerHTML={{ __html: listItem.content.substring(0, 100) + (listItem.content.length > 100 ? '...' : '') }}></td>

                                <td>
                                  <span className={`badge ${listItem.is_active == 1 ? 'bg-success' : 'bg-danger'}`}>
                                    {listItem.is_active == 1 ? 'Active' : 'Inactive'}
                                  </span>
                                </td>
                                <td>
                                  <div className="hstack gap-3 flex-wrap">
                                    <a
                                      href={`/admin/edit-menu-content/${listItem.id}`}
                                      className="link-success fs-15"
                                    >
                                      <i className="ri-edit-2-line"></i>
                                    </a>
                                    <a
                                      href="javascript:void(0);"
                                      onClick={() => deleteHandle(listItem.id)}
                                      className="link-danger fs-15"
                                    >
                                      <i className="ri-delete-bin-line"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            ))
                          )}
                          {listData?.length == 0 && (
                            <tr>
                              <td colSpan="6" className="text-center">
                                {loading ? 'Loading...' : 'No content available.'}
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
