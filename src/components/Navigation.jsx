import React from 'react'
// import { CgMenuRightAlt } from "react-icons/cg"
// import logo from '../assets/images/logo.png'

export const Navigation = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 bg-green-800 x-data="{ mobileMenu: false, notificationMenu: false, userDropdown: false}" shadow-lg z-50'>
      <div className='mx-auto px-2 sm:px-4 lg:px-8'>
        <div className="relative flex items-center justify-between h-16">
        <div className="flex items-center px-2 lg:px-0">
          <div className="flex-shrink-0 text-white">
            <a href="/" className="block lg:hidden h-8 w-auto text-lg">
              Gr
            </a>
            <a href="#" className="hidden lg:block h-8 w-auto text-lg">
              Growiden
            </a>
          </div>
          <div className="hidden lg:block lg:ml-6">
            <div className="flex space-x-4">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-green-900">Home</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-green-700">About Us</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-green-700">Our Services</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-green-700">Clients</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-green-700">Plans</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-green-700">Testimonials</a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center px-2 lg: ml-6 lg:justify-end">
          <div className="max-w-lg w-full lg:max-w-xs">
            <label htmlFor="search" className='sr-only'>Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">

                {/* Heroicons name: search --> */}

                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
              </div>
              <input id="search" name="search" class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-green-700 text-gray-300 placeholder-green-300 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-green-900 sm:text-sm" placeholder="Search" type="search" />
            </div>
          </div>
        </div>
        <div className="flex lg:hidden">

          {/* Mobile menu button */}

          <button className='inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white aria' aria-expanded="false" >

            {/* Create an onClick function to open menu */}

            <span className='sr-only'>Open main menu</span>
            {/* Icon when menu is closed.

            Heroicon name: menu

            Menu open: hidden, Menu closed: block */}

            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" x-show="mobileMenu == false">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>

          {/* Icon when menu is open. --> 

          Heroicon name: xmlns

          Menu open: "block", Menu closed: "hidden" */}

          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" x-show="mobileMenu == true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          </button>
        </div>
        <div className="hidden lg:block lg:ml-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/register" className="text-gray-300 hover:text-white p-2">Register</a>
            </div>
            <div className="flex-shrink-0">
              <a href="/login" className="text-gray-300 hover:text-white p-2">Login</a>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Mobile menu, toggle classes based on menu state.

      Menu open: "block", Menu closed: "hidden"

      Come back to this soon */}



        {/* <img src={logo} alt="growiden"  className= '.logo h-12 w-100 left-1 top-1'/>

      <button className='menuButton flex justify-end'>
        <CgMenuRightAlt size='30px'/>
      </button> */}
    </nav>

    
  )
}
