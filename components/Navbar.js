import Link from 'next/link'
import { Fragment } from 'react'
import {Disclosure,Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import useRouter from 'next/router'



const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Create', href: '/createAndSell', current: false },
    {name: 'my NFTs', href: '/mynfts', current: false},
]

const Navbar = () => {
    return (
      <div>
        <h1> NAVBAR </h1>
        {navigation.map((item) => {
            const router = useRouter();
            const isActive = router.asPath === item.href;
        return (
            <Link key = {item.name} href = {item.href}> {item.name} </Link>
        )
    })
        }
      </div>
    )
  }
  
  export default Navbar