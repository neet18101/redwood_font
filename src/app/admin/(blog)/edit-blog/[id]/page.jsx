'use client';
import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import toast, { Toaster } from 'react-hot-toast';
import RootLayout from '@/app/admin/layout';
import AdminHeader from '@/app/admin/components_admin/AdminHeader';
import Sidebar from '@/app/admin/components_admin/Sidebar';

function Page({ params }) {
    const { id } = params;  // Extract the blog ID from URL parameters
    console.log('edit-blog-id', id);
    const [blogCategory, setBlogCategory] = useState([]);
    const [blogTitle, setBlogTitle] = useState('');
    const [blogSlug, setBlogSlug] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [blogImage, setBlogImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null); // State for image preview
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Fetch blog categories from API
    useEffect(() => {
        const fetchBlogCategory = async () => {
            try {
                const response = await fetch('/api/menu');
                const data = await response.json();
                setBlogCategory(data);
            } catch (error) {
                console.error('Error fetching blog category:', error);
                setErrorMessage('Failed to load blog categories.');
            }
        };
        fetchBlogCategory();
    }, []);

    // Fetch existing blog data for editing
    const fetchBlogData = async () => {
        try {
            console.log('edit-blog-id', id);
            const response = await fetch(`/api/update-blog/${id}`);
            const data = await response.json();
            if (response.ok) {
                setBlogTitle(data.title);
                setBlogSlug(data.slug);
                setBlogContent(data.content);
                setSelectedCategory(data.categoryId);
                // Set the image preview if an image URL is available
                setImagePreview(data.blog_image); // Assuming you have this field

            } else {
                setErrorMessage(data.message);
            }
        } catch (error) {
            console.error('Error fetching blog data:', error);
            setErrorMessage('Failed to load blog data.');
        }
    };
    useEffect(() => {

        fetchBlogData();
    }, [id]);

    // Slug Generation from Title
    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-');
    };

    // Handle title change and auto-generate slug
    const handleTitleChange = (e) => {
        const title = e.target.value;
        setBlogTitle(title);
        setBlogSlug(generateSlug(title));
    };

    // Handle image input change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBlogImage(file); // Set selected image file
            setImagePreview(URL.createObjectURL(file)); // Create a preview URL
        }
    };

    const renderMenuOptions = (items) => {
        return items.map((item) => (
            <option key={item.id} value={item.id}>
                {item.name}
            </option>
        ));
    };

    // Form Submission Handler for Updating Blog
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
        if (!blogTitle || !blogContent || !blogSlug) {
            setErrorMessage('Please fill out all required fields.');
            return;
        }
        const formData = new FormData();
        formData.append('title', blogTitle);
        formData.append('slug', blogSlug);
        formData.append('categoryId', selectedCategory || null);
        formData.append('content', blogContent);
        formData.append('id', id);
        if (blogImage) {
            formData.append('blog_image', blogImage);
        }

        try {
            setLoading(true);
            const response = await fetch(`/api/update-blog/${id}`, {
                method: 'PATCH',
                body: formData,
            });
            if (response.ok) {
                toast.success('Blog post loaded successfully');
                fetchBlogData();
                // window.location.reload();

            } else {
                const errorData = await response.json();
                toast.error(errorData.message || 'Failed to update blog post.');
                setErrorMessage(errorData.message || 'Failed to update blog post.');
            }
        } catch (error) {
            console.error('Error updating blog:', error);
            setErrorMessage('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    };
    // delete the blog 

    const deleteHandle = async (blogId) => {
        const response = await fetch(`/api/delete-blog?id=${blogId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: blogId }),

        })
    }


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
                                    <h4 className="mb-sm-0">Edit Blog</h4>
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item">
                                                <a href="javascript:void(0);">Blog</a>
                                            </li>
                                            <li className="breadcrumb-item active">Edit Blog</li>
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
                                            <form onSubmit={handleFormSubmit}>
                                                <div className="row gy-4">
                                                    <div className="col-xxl-6 col-md-6">
                                                        <div>
                                                            <label htmlFor="blogTitle" className="form-label">
                                                                Blog Title
                                                            </label>
                                                            <input type="hidden" value={id} name="id" />
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="blogTitle"
                                                                value={blogTitle}
                                                                onChange={handleTitleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-xxl-6 col-md-6">
                                                        <div>
                                                            <label htmlFor="blogSlug" className="form-label">
                                                                Slug (Auto-generated)
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="blogSlug"
                                                                value={blogSlug}
                                                                onChange={(e) => setBlogSlug(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* Blog Image Input */}
                                                    <div className="col-xxl-5 col-md-5">
                                                        <label htmlFor="blogImage" className="form-label">
                                                            Blog Image
                                                        </label>
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            id="blogImage"
                                                            onChange={handleImageChange}
                                                            accept="image/*"
                                                        />


                                                    </div>
                                                    <div className='col-xxl-1 col-md-1'>
                                                        <label className='form-label'>

                                                        </label>
                                                        {imagePreview && (
                                                            <div className="mt-2">
                                                                <img
                                                                    src={imagePreview}
                                                                    alt="Image Preview"
                                                                    style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%' }}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="col-xxl-6 col-md-6">
                                                        <div>
                                                            <label htmlFor="blogCategory" className="form-label">
                                                                Select Blog Category
                                                            </label>
                                                            <select
                                                                className="form-select"
                                                                id="blogCategory"
                                                                value={selectedCategory}
                                                                onChange={(e) => setSelectedCategory(e.target.value)}
                                                            >
                                                                <option value="">
                                                                    None (Top-level Category)
                                                                </option>
                                                                {renderMenuOptions(blogCategory)}
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <label className="form-label">Blog Content</label>
                                                        <Editor
                                                            apiKey="jlqflymaebol9e74rur3de0y4sj3ful2l1781wdrktbpzkpw"
                                                            init={{
                                                                plugins: "powerpaste casechange searchreplace autolink visualblocks visualchars image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount fullscreen code",
                                                                toolbar: "undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | link image media",
                                                            }}
                                                            value={blogContent}
                                                            onEditorChange={(content) => setBlogContent(content)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="row gy-4 mt-3">
                                                    <div className="col-xxl-3 col-md-6">
                                                        <button type="submit" className="btn btn-primary" disabled={loading}>
                                                            {loading ? 'Updating...' : 'Update Blog'}
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
