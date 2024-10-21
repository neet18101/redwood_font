'use client';
import React, { useEffect, useState } from 'react';
import RootLayout from '../../layout';
import AdminHeader from '../../components_admin/AdminHeader';
import Sidebar from '../../components_admin/Sidebar';
import { Editor } from '@tinymce/tinymce-react';
import toast from 'react-hot-toast';

function Page() {
    const [blogCategory, setBlogCategory] = useState([]);
    const [blogTitle, setBlogTitle] = useState('');
    const [blogSlug, setBlogSlug] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [blogImage, setBlogImage] = useState(null); // Add state for blog_image
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

    // Slug Generation from Title
    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/--+/g, '-'); // Replace multiple hyphens with a single one
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
        setBlogImage(file); // Set selected image file
    };

    const renderMenuOptions = (items) => {
        return items.map((item) => (
            <option key={item.id} value={item.id}>
                {item.name}
            </option>
        ));
    };

    // Form Submission Handler
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        // Basic Validation
        if (!blogTitle || !blogContent || !blogSlug) {
            setErrorMessage('Please fill out all required fields.');
            return;
        }

        const formData = new FormData();
        formData.append('title', blogTitle);
        formData.append('slug', blogSlug);
        formData.append('categoryId', selectedCategory || null);
        formData.append('content', blogContent);
        if (blogImage) {
            formData.append('blog_image', blogImage); // Append the image file if it exists
        }

        try {
            setLoading(true);
            const response = await fetch('/api/add-blog', {
                method: 'POST',
                body: formData, // Use formData for sending files
            });

            if (response.ok) {
                toast.success('Blog post added successfully.');
                setBlogTitle('');
                setBlogSlug('');
                setSelectedCategory('');
                setBlogContent('');
                setBlogImage(null); // Clear the image input after submission
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || 'Failed to add blog post.');
                setErrorMessage(errorData.message || 'Failed to add blog post.');
            }
        } catch (error) {
            console.error('Error adding blog:', error);
            setErrorMessage('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
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
                                    <h4 className="mb-sm-0">Add Blog</h4>
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item">
                                                <a href="javascript:void(0);">Blog</a>
                                            </li>
                                            <li className="breadcrumb-item active">Add Blog</li>
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
                                                    <div className="col-xxl-6 col-md-6">
                                                        <label htmlFor="blogImage" className="form-label">
                                                            Blog Image
                                                        </label>
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            id="blogImage"
                                                            onChange={handleImageChange}
                                                            accept="image/*" // Optional: accept only image files
                                                        />
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
                                                            {loading ? 'Submitting...' : 'Add Blog'}
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
        </RootLayout >
    );
}

export default Page;
