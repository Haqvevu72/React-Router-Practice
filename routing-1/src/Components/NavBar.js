import React from 'react';
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className='primary-nav'>
            <NavLink to = '/'>Home</NavLink>
            <NavLink to = '/about'>About</NavLink>
            <NavLink to = '/products'>Products</NavLink>
            {/* <a href = 'https://www.geeksforgeeks.org/reactjs-router/'>Geeks</a> */}
        </nav>
    );
}