import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

function Page() {
    return (
        <div
            className='d-flex justify-content-center mx-auto align-items-center p-5'
            style={{
                width: "100vw",
                height: "100vh",
                background: "wheat"
            }}
        >
            <div className='container d-flex justify-content-center'>
                <form className="form">
                    <p className="form-title">Sign in to your account</p>
                    <div className="input-container">
                        <FaUser className="input-icon" />
                        <input type="email" placeholder="Enter email" />
                    </div>
                    <div className="input-container">
                        <FaLock className="input-icon" />
                        <input type="password" placeholder="Enter password" />
                    </div>
                    <button type="submit" className="submit">
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Page;
