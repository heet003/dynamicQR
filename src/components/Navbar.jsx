/*eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="p-2 bg-gray-100">
                <ul className='flex items-center gap-2'>
                    <li className='text-xl font-semibold bg-gray-500 text-white rounded-lg px-2 py-1'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='text-xl font-semibold bg-gray-500 text-white rounded-lg px-2 py-1'>
                        <Link to="/qrCode">QR Code</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;