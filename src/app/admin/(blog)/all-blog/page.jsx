'use client';
import React, { useEffect, useState } from 'react';
import RootLayout from '../../layout';
import AdminHeader from '../../components_admin/AdminHeader';
import Sidebar from '../../components_admin/Sidebar';
import Modal from 'react-modal';

function page() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);


  const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

  const openModal = () => {
    setIsOpen(true);
  }


  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/get-blogs`);
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



  const blogsPerPage = 5;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handleDeleteClick = (blog) => {
    setBlogToDelete(blog);
    setModalIsOpen(true);
  };

  const confirmDelete = () => {
    // Perform delete action here (e.g., call an API to delete the blog)
    console.log(`Deleting blog: ${blogToDelete.title}`);
    setModalIsOpen(false);
    setBlogToDelete(null);
  };

  const renderBlogs = () => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const selectedBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);
    return selectedBlogs.map((blog) => (
      <tr key={blog.id}>
        <td>{blog.title}</td>
        <td>{blog.author}</td>
        <td>
          <button onClick={() => console.log(`Editing blog: ${blog.id}`)}>Edit</button>
          <button onClick={() => handleDeleteClick(blog)}>Delete</button>
        </td>
      </tr>
    ));
  };


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

            <div className="row">
              <div className="col-lg-12">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Title
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Content
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Created Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>

                      {blogs.map((item) => (
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.title}
                          </th>
                          <td class="px-6 py-4">
                            {item.categoryId}
                          </td>
                          <td class="px-6 py-4">
                            {item.content}
                          </td>
                          <td class="px-6 py-4">
                            {item.createdAt}
                          </td>
                          <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={handleDeleteClick} >Delete</a>
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                </div>




                <div>
                  <button onClick={openModal}>Open Modal</button>
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                      <input />
                      <button>tab navigation</button>
                      <button>stays</button>
                      <button>inside</button>
                      <button>the modal</button>
                    </form>
                  </Modal>
                </div>




              </div>
            </div>

          </div>
        </div>
      </div>

    </RootLayout>
  )
}

export default page