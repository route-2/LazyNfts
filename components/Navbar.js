import Link from 'next/link'
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Menu,MenuIcon, XIcon } from '@heroicons/react/outline'
import useRouter from 'next/router'
import { Disclosure } from '@headlessui/react'



const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Create', href: '/createAndSell', current: false },
    {name: 'my NFTs', href: '/mynfts', current: false},
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const Navbar = () => {
    return (
      <Disclosure as = "nav" className = "bg-gray-800">
          {({ open }) => (
            

              <div className = "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                  <div className = "relative flex items-center justify-between h-16">
                      <div className = "absolute inset-y-0 left-0 flex items-center sm:hidden">
                          <Disclosure.Button className = "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                              <span className = "sr-only">Open main menu</span>
                              {open ? (
                                  <XIcon className = "block h-6 w-6" aria-hidden = "true" />
                              ) : (
                                  <MenuIcon className = "block h-6 w-6" aria-hidden = "true" />
                              )}
                          </Disclosure.Button>
                      </div>
                      <div className = "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                          <div className = "flex-shrink-0 flex items-center">


     
      
        {navigation.map((item) => {
          const router = useRouter()
          const isActive = router.pathname === item.href
           
        return (
            <Link key = {item.name} href = {item.href}> 
            <a 
            className = {classNames(
              isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'px-3 py-2 rounded-md text-sm font-medium'
            )}
            aria-current = {item.current ? 'page' : undefined}
            />

            
            
            {item.name} </Link> 
        ) 
    })
        }
      </div>
      </div>
      </div>
   
    )
  }
  
  export default Navbar