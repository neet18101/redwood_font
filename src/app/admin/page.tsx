    'use client'
    import { signIn } from 'next-auth/react';
    import Link from 'next/link';
    import { useRouter } from 'next/navigation';
    import React, { useState } from 'react'
    import toast, { Toaster } from 'react-hot-toast';

    function page() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [errors, setErrors] = useState({});
        const router = useRouter();

        const handleSubmit = async () => {
            event.preventDefault();
            // Validate input data
            // Attempt to sign in
            const signInesult = await signIn("credentials", {
                redirect: false,
                email,
                password,
                // callbackUrl: "/admin/dashboard"  // Redirect to this URL on successful login
            });
            console.log(signInesult, "neetx");
            if (signInesult?.ok) {
                router.push("/admin/dashboard");
            } else {
                setErrors({ general: signInesult?.error });
                toast.error("Error during login");

            }
        };
        return (
            <>
                <Toaster />
                <div className="auth-page-wrapper pt-5">
                    {/* auth page bg */}
                    <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
                        <div className="bg-overlay" />
                        <div className="shape">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 1440 120"
                            >
                                <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z" />
                            </svg>
                        </div>
                    </div>
                    {/* auth page content */}
                    <div className="auth-page-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-center mt-sm-5 mb-4 text-white-50">
                                        <div>
                                            <a href="/admin" className="d-inline-block auth-logo">
                                                <h1 className='text-white'>RedWoodFont Admin</h1>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* end row */}
                            <div className="row justify-content-center">
                                <div className="col-md-8 col-lg-6 col-xl-5">
                                    <div className="card mt-4">
                                        <div className="card-body p-4">
                                            <div className="text-center mt-2">
                                                <h5 className="text-primary">Welcome Back !</h5>

                                            </div>
                                            <div className="p-2 mt-4">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="mb-3">
                                                        <label htmlFor="username" className="form-label">
                                                            Email
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="email"
                                                            placeholder="Enter email address"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        {/* <div className="float-end">
                                                            <a
                                                                href="auth-pass-reset-basic.html"
                                                                className="text-muted"
                                                            >
                                                                Forgot password?
                                                            </a>
                                                        </div> */}
                                                        <label className="form-label" htmlFor="password-input">
                                                            Password
                                                        </label>
                                                        <div className="position-relative auth-pass-inputgroup mb-3">
                                                            <input
                                                                type="password"
                                                                className="form-control pe-5 password-input"
                                                                placeholder="Enter password"
                                                                id="password-input"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                            <button
                                                                className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                                type="button"
                                                                id="password-addon"
                                                            >
                                                                <i className="ri-eye-fill align-middle" />
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="mt-4">
                                                        <button className="btn btn-success w-100" type="submit">
                                                            Sign In
                                                        </button>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                        {/* end card body */}
                                    </div>


                                </div>
                            </div>
                            {/* end row */}
                        </div>
                        {/* end container */}
                    </div>
                    {/* end auth page content */}
                    {/* footer */}

                    {/* end Footer */}
                </div>

            </>
        )
    }

    export default page