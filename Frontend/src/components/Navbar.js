import React from 'react'
import '../index.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex  flex-row w-full justify-around p-5 bg-[#293241] text-white text-xl items-center' >
        <NavLink to="/">
            <div className='text-3xl font-bold '>
                skillTrade
            </div>
        </NavLink>

        <div>
            <ul className='flex gap-6'>
                <NavLink to="/"><li className=''>Home</li></NavLink>
                <NavLink to="/profilePerson"><li >Dashbord</li></NavLink>
                <NavLink to="/profile"><li>About</li></NavLink>
                <NavLink to="/userprofile"><li>user</li></NavLink>
            </ul>
        </div>
        <div className='flex gap-5 font-semibold '>
            <NavLink to="/signup"><button className='text-black pl-4 pr-4 p-1 rounded-xl bg-[#99C0D9]'>Sign-Up</button></NavLink>
            <NavLink to="/login"><button className='text-black pl-4 pr-4 p-1 rounded-xl bg-[#EE6D4C]'>Login</button></NavLink>
        </div>
    </div>
  )
}

export default Navbar