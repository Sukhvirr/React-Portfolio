import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const[nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false);
    };

  return (
        <div className = ' bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>

            <h1 className='text-3xl font-bold primary-color ml-4'>Sukhvir</h1>
            <ul className='hidden md:flex list-none'>
                <li className='p-5'><a href='#home' onClick={closeNav}>Home</a></li>
                <li className='p-5'><a href='#about' onClick={closeNav}>About</a></li>
                <li className='p-5'><a href='#projects' onClick={closeNav}>Projects</a></li>
                <li className='p-5'><a href='#contact' onClick={closeNav}>Contact</a></li>
            </ul>

            <div onClick={handleNav} className='block md:hidden mr-6'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>

            <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500'
                                    : 'fixed left-[-100%]'}>
                <h1 className='text-3xl primary-color m-4'>Sukhvir</h1>
                <u1 className='p-8 text-2xl list-none'>
                    <li className='p-2'><a href='#home' onClick={closeNav}>Home</a></li>
                    <li className='p-2'><a href='#about' onClick={closeNav}>About</a></li>
                    <li className='p-2'><a href='#projects' onClick={closeNav}>Projects</a></li>
                    <li className='p-2'><a href='#contact' onClick={closeNav}>Contact</a></li>
                </u1>
            </div>


        </div>
  )
}

export default Navbar
