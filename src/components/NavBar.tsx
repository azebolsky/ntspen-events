import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/1707223430097.jpeg';

const NavBar = () => {
     // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        {id: 1, text: "About"},
        {id: 2, text: "Contact"},
        {id: 3, text: "Events"}
    ];

    return (
        <div className='bg-black flex flex-row justify-between items-center h-24 w-100 max-w-[1400px] mx-auto px-4 text-white'>
            <div className='cursor-pointer'>
                <img src={logo} alt="logo" className='w-20' />
            </div>
            {/* Desktop Navigation */}
            <ul className='list-none flex flex-row hidden md:flex'>
                {navItems.map(item => (
                    // console.log(item);
                    <li 
                        key={item.id}
                        className='p-4 cursor-pointer hover:bg-[#FFE4B5]'
                    >
                        {item.text}
                    </li>
                ))}
            </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
            className={
            nav
                ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
            }
        >
        {/* Mobile Logo */}
        <div className='cursor-pointer'>
            <img src={logo} alt="logo" className='w-20' />
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#FFE4B5] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
        </div>
    );
}

export default NavBar