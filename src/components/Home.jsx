import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const Home = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="fixed bottom-4 right-4 z-10">
            <button onClick={scrollToTop} className="text-white bg-primary-color rounded-full p-3 hover:bg-opacity-70 focus:outline-none">
                <FaArrowCircleUp size={24} />
            </button>
        </div>
    );
};

export default Home;
