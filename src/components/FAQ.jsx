"use client"
import React, { useState } from 'react'
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";

function FAQ() {
    // State to manage whether the accordion is open or closed
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the accordion state
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div className="accordion-item active">
                <h2 className="accordion-header" id="headingOne">
                    <button onClick={toggleAccordion} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                            {isOpen ? (
                                <FaPlus />
                            ) : (
                                <TiMinus />
                            )}
                        </span>
                        <span className="pbmit-accordion-title">
                            1.OUR VISION
                        </span>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        “One team setting the standard for excellence, growing and succeeding together, soaring above the competition.”
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ