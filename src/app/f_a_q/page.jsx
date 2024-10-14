"use client"

import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const data = [
    {
        "question": "What types of shop front doors do you offer?",
        "answer": "We offer a variety of shop front doors, including aluminum, glass, and steel doors. Our doors can be customized to fit your shop's specific dimensions and aesthetic preferences."
    },
    {
        "question": "Are your shutters suitable for security purposes?",
        "answer": "Yes, our shutters are designed with security in mind. They are made from high-grade materials and come with features like locking mechanisms and reinforced slats to ensure maximum protection."
    },
    {
        "question": "Can I customize the design of my shop front window?",
        "answer": "Absolutely! We offer custom design services for shop front windows. You can choose from a range of glass types, frame colors, and sizes to create the perfect look for your shop."
    },
    {
        "question": "Do you provide installation services for doors, shutters, and windows?",
        "answer": "Yes, we provide professional installation services for all our products. Our experienced technicians will ensure that your doors, shutters, and windows are installed safely and efficiently."
    },
  
    
]


function page() {
    return (
        <div>
            <div className="page-wrapper">
                {/* Header Main Area */}
                <header className="site-header header-style-1">
                    <Navbar />
                </header>
                {/* Header Main Area End Here */}
                {/* Title Bar */}
                <div className="pbmit-title-bar-wrapper">
                    <div className="container">
                        <div className="pbmit-title-bar-content">
                            <div className="pbmit-title-bar-content-inner">
                                <div className="pbmit-tbar">
                                    <div className="pbmit-tbar-inner container">
                                        <h1 className="pbmit-tbar-title"> FAQ</h1>
                                    </div>
                                </div>
                                <div className="pbmit-breadcrumb">
                                    <div className="pbmit-breadcrumb-inner">
                                        <span>
                                            <a title href="#" className="home"><span>Xinterio</span></a>
                                        </span>
                                        <span className="sep">
                                            <i className="pbmit-base-icon-angle-right" />
                                        </span>
                                        <span><span className="post-root post post-post current-item"> FAQ</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Title Bar End*/}
                {/* Page Content */}
                <div className="page-content">
                    {/* Faq Start */}
                    <section className="section-xl">
                        <div className="container">
                            <div className="pbmit-heading-subheading text-center animation-style2">
                                <h4 className="pbmit-subtitle">About</h4>
                                <h2 className="pbmit-title">General Questions</h2>
                                <div className="pbmit-heading-desc">
                                    You will find answers to about our various construction work and constructor's  service and more. Please feel <br />  free to contact us if you don't get your question's answer in below.
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-xl-6">
                                    <div className="pe-xl-3">
                                        <div className="accordion" id="accordionExample">
                                            <FAQ />
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                                            <span className="pbmit-accordion-icon-closed">
                                                                <svg className="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                                </svg>
                                                            </span>
                                                            <span className="pbmit-accordion-icon-opened">
                                                                <svg className="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="pbmit-accordion-title">
                                                            2. OUR MISSION
                                                        </span>
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        “Our mission is to provide the safest and most efficient Shop Front services and support in European Market.”
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                                            <span className="pbmit-accordion-icon-closed">
                                                                <svg className="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                                </svg>
                                                            </span>
                                                            <span className="pbmit-accordion-icon-opened">
                                                                <svg className="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="pbmit-accordion-title">
                                                            3. INTEGRITY
                                                        </span>
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        We must demonstrate integrity in all our business conduct, including dealings with fellow employees, clients, intermediaries, suppliers, governments, financial record keeping and treatment of company property.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFour">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                                            <span className="pbmit-accordion-icon-closed">
                                                                <svg className="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                                </svg>
                                                            </span>
                                                            <span className="pbmit-accordion-icon-opened">
                                                                <svg className="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="pbmit-accordion-title">
                                                            4. How we do?
                                                        </span>
                                                    </button>
                                                </h2>
                                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-xl-6">
                                    <div className="ps-xl-3">
                                        <div className="accordion" id="accordionExample1">
                                            <div className="accordion-item active">
                                                <h2 className="accordion-header" id="heading1">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                                        <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                                            <span className="pbmit-accordion-icon-closed">
                                                                <svg className="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                                </svg>
                                                            </span>
                                                            <span className="pbmit-accordion-icon-opened">
                                                                <svg className="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="pbmit-accordion-title">
                                                            5. What are the charges of renovation?
                                                        </span>
                                                    </button>
                                                </h2>
                                                <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample1">
                                                    <div className="accordion-body">
                                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading2">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                        <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                                            <span className="pbmit-accordion-icon-closed">
                                                                <svg className="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                                </svg>
                                                            </span>
                                                            <span className="pbmit-accordion-icon-opened">
                                                                <svg className="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="pbmit-accordion-title">
                                                            6. How to process your house for interior?
                                                        </span>
                                                    </button>
                                                </h2>
                                                <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample1">
                                                    <div className="accordion-body">
                                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading3">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                        <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                                            <span className="pbmit-accordion-icon-closed">
                                                                <svg className="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                                </svg>
                                                            </span>
                                                            <span className="pbmit-accordion-icon-opened">
                                                                <svg className="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="pbmit-accordion-title">
                                                            7. How to do Interior step by step?
                                                        </span>
                                                    </button>
                                                </h2>
                                                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample1">
                                                    <div className="accordion-body">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.We meet with you to learn about your team, your needs, and your goals. If you have a job profile available, we will use it. If not, we will help you write the job profile.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading4">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                        <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                                            <span className="pbmit-accordion-icon-closed">
                                                                <svg className="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                                </svg>
                                                            </span>
                                                            <span className="pbmit-accordion-icon-opened">
                                                                <svg className="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="pbmit-accordion-title">
                                                            8. What is foundation in Interior?
                                                        </span>
                                                    </button>
                                                </h2>
                                                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample1">
                                                    <div className="accordion-body">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.We meet with you to learn about your team, your needs, and your goals. If you have a job profile available, we will use it. If not, we will help you write the job profile.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Faq End */}
                    {/* Faq Start */}
                    <section className="section-lgb">
                        <div className="container">
                            <div className="pbmit-heading-subheading text-center animation-style2">
                                <h4 className="pbmit-subtitle">Information</h4>
                                <h2 className="pbmit-title">Frequently Asked Questions</h2>
                                <div className="pbmit-heading-desc">
                                    You will find answers to about our various construction work and constructor's  service and more. Please feel <br />  free to contact us if you don't get your question's answer in below.
                                </div>
                            </div>
                            <div className="accordion" id="accordionExample2">
                                <div className="accordion-item active">
                                    <h2 className="accordion-header" id="heading01">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse01" aria-expanded="false" aria-controls="collapse01">
                                            <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                                <span className="pbmit-accordion-icon-closed">
                                                    <svg className="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                    </svg>
                                                </span>
                                                <span className="pbmit-accordion-icon-opened">
                                                    <svg className="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                    </svg>
                                                </span>
                                            </span>
                                            <span className="pbmit-accordion-title">
                                                1. What is the AI Interior Design Service?
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="collapse01" className="accordion-collapse collapse show" aria-labelledby="heading01" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading02">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse02" aria-expanded="false" aria-controls="collapse02">
                                            <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                                <span className="pbmit-accordion-icon-closed">
                                                    <svg className="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                    </svg>
                                                </span>
                                                <span className="pbmit-accordion-icon-opened">
                                                    <svg className="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                    </svg>
                                                </span>
                                            </span>
                                            <span className="pbmit-accordion-title">
                                                2. So, exactly does this process work?
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="collapse02" className="accordion-collapse collapse" aria-labelledby="heading02" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading03">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse03" aria-expanded="false" aria-controls="collapse03">
                                            <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                                <span className="pbmit-accordion-icon-closed">
                                                    <svg className="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                    </svg>
                                                </span>
                                                <span className="pbmit-accordion-icon-opened">
                                                    <svg className="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                    </svg>
                                                </span>
                                            </span>
                                            <span className="pbmit-accordion-title">
                                                3. Which cities do you work in right now?
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="collapse03" className="accordion-collapse collapse" aria-labelledby="heading03" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading04">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse04" aria-expanded="false" aria-controls="collapse04">
                                            <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                                <span className="pbmit-accordion-icon-closed">
                                                    <svg className="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                    </svg>
                                                </span>
                                                <span className="pbmit-accordion-icon-opened">
                                                    <svg className="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                    </svg>
                                                </span>
                                            </span>
                                            <span className="pbmit-accordion-title">
                                                4. Which kind of designers do you have for interiors?
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="collapse04" className="accordion-collapse collapse" aria-labelledby="heading04" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Faq End */}
                </div>
                
            </div>
            <Footer />
        </div>

    )
}

export default page