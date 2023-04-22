import React from 'react'
import './Header.css'
import {BiSearch}from "react-icons/bi"

const Header = () => {
  return (
    <header className='header'>
       <div className=" left-section">
        <a href="/">
            <img className='logo' src="https://netflix-clone-2oq5dqfi1-khxif.vercel.app/Netflix-Logo.wine.png" alt="" />
        </a>
        <a className='text-white' href="">My List</a>
        <a className='text-white' href="">Movies</a>
        <a className='text-white' href="">TV Series</a>
       </div>
       <div className="right-section">
        <BiSearch className='search'/>
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
       </div>
    </header>
  )
}

export default Header