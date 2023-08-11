import { useState } from 'react';
import logo from '../../assets/CareerHub.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
    <nav className="bg-[#F9F9FF] border-gray-200 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className='inline-block'>
                <img src={logo} alt="Flowbite Logo" />
            </Link>
            <div className="flex items-center lg:order-2">
                <button className="text-white py-2 px-4 rounded bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">Start Applying</button>
                <button onClick={() => setMenuOpen(!menuOpen)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <div className='text-gray-500 w-6 h-6'>
                    <FontAwesomeIcon icon={faBars} className='w-6 h-6'/>
                    </div>
                </button>
            </div>
            <div className={`${menuOpen ? 'block' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link to="/statistics" className="text-gray-400 block hover:text-gray-600" aria-current="page">Statistics</Link>
                    </li>
                    <li>
                        <Link to="/applied" className="text-gray-400 block hover:text-gray-600">Applied Job</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="text-gray-400 block hover:text-gray-600">Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Header;