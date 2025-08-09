import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/1707223430097.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
     // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        {id: 1, text: "Home"},
        {id: 2, text: "About"},
        {id: 3, text: "Contact"},
        {id: 4, text: "Past Events"}
    ];

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
                    <a href="#" className='cursor-pointer'>
                        <img src={logo} alt="logo" className='w-20' />
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse pt-3 pb-3 pr-5 pl-5 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm">
                        <a href="#" className="text-sm  text-white"><FontAwesomeIcon icon={faCalendar} /> Save the December 1st Event</a>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        {/* Desktop Navigation */}
                        <ul className='list-none flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm'>
                            {navItems.map(item => (
                                // console.log(item);
                                <li 
                                    key={item.id}
                                    className='p-2 cursor-pointer text-white'
                                >
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar