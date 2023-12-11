import React, { useState } from 'react';
import { FiAlignRight, FiX } from "react-icons/fi";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">CHECKERS.</h1>
            <ul className="hidden md:flex">
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleShow} className="block md:hidden">
                {!show ? <FiAlignRight size={20} /> : <FiX size={20} />}
            </div>
            <div className={`md:hidden ${show ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}`}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">CHECKERS.</h1>
                <ul className="uppercase p-4">
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
