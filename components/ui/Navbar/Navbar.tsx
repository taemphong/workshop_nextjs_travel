import React from 'react'
import Logo from './Logo'
import Search from './Search'
import { Darkmode } from './Darkmode'


const Navbar = () => {
  return (
    <nav>
        <div className='container flex flex-col justify-between py-8 sm:flex-row sm:items-center gap-4'>
            {/* { Logo } */}
            <Logo/>
            
            {/* { Search } */}
            <Search/>

            {/* { Darkmode } */}
            <div className='flex gap-4'>
                <Darkmode/>
                <h1>Profile</h1>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
