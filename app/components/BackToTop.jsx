"use client";
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            <button
                type="button"
                onClick={scrollToTop}
                className="bg-brandColor hover:bg-[#008FCC] text-white p-3 rounded-full shadow-lg transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brandColor focus:ring-offset-2"
                aria-label="Back to top"
            >
                <ChevronUp className="w-6 h-6" strokeWidth={2.5} />
            </button>
        </div>
    );
};

export default BackToTop;
