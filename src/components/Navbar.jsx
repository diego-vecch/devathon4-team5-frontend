'use-client'

import Icon from './Icon'
import Link from 'next/link'
import useUser from '@/hooks/useUser'
import dynamic from 'next/dynamic'
import { useState } from 'react'

function Navbar ({ direct }) {
  const links = [
    { name: 'Home', link: '/', id: 1 },
    { name: 'About us', link: '/', id: 2 },
    { name: 'Contact us', link: '/formContact', id: 3 }
  ]
  const { isLogged, logout } = useUser()
  const [optionProfile, setOptionProfile] = useState(null)

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  return (
    <nav className='bg-light-lth bg-opacity-75 h-12 grid grid-cols-3 px-16 pt-4'>
      <div className='pb-4'><Icon /> </div>
      <ul className='grid grid-cols-3 gap-4 pr-2 py-1 '>
        {links.map((link) => (
          <li className='hover:text-light-selec text-center' key={link.id}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
      <ul className='grid pt-1 pr-16 justify-end'>
        <li><ul>
          {isLogged &&
          (
            <div className='z-10'>
              <button className='hover:text-light-selec px-2' onClick={() => { setOptionProfile(!optionProfile) }}>
                name user ▾
              </button>
              {optionProfile &&
                (
                  <div className='bg-light-lth grid grid-cols-1 z-20 rounded'>
                    <Link className='hover:text-light-selec px-2 pt-2' href='/profile'>My profile</Link>
                    <Link className='hover:text-light-selec z-20 bg-light-lth px-2 py-1' href='#' onClick={handleClick}>Logout</Link>
                  </div>
                )}
            </div>
          )}
          {!isLogged &&
          (<Link className='hover:text-light-selec' href='/login'>Login</Link>
          )}</ul>
        </li>
      </ul>
    </nav>
  )
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })
