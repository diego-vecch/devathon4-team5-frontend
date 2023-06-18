'use-client'

import Icon from './componetImage/Icon'
import Link from 'next/link'
import useUser from '@/hooks/useUser'
import dynamic from 'next/dynamic'
import { useContext, useState } from 'react'
import InfoUser from '@/context/infoUserContext'
import IconMenu from './componetImage/IconMenu'
import IconUser from './componetImage/IconUser'

function Navbar ({ direct }) {
  const { infoUser } = useContext(InfoUser)
  const links = [
    { name: 'Home', link: '/', id: 1 },
    { name: 'About us', link: '/about', id: 2 },
    { name: 'Contact us', link: '/formContact', id: 3 }
  ]
  const { isLogged, logout } = useUser()
  const [optionProfile, setOptionProfile] = useState(null)
  const [navClass, setnavClass] = useState(false)

  const handleMenu = () => {
    setnavClass(!navClass)
  }
  const handleClick = e => {
    e.preventDefault()
    logout()
  }
  const toggleOptionProfile = (e) => {
    setOptionProfile(!optionProfile)
  }

  return (
    <nav className='relative bg-opacity-75 w-full h-12 grid grid-cols-2 md:px-4 md:grid-cols-5 gap-1 lg:grid-cols-3 pt-4'>
      <div className=' pb-2'><Icon /> </div>
      <div className='md:hidden flex w-full justify-center'>
        <button className='flex hover:text-light-selec z-30' onClick={handleMenu}>
          <div className='pl-2 pt-2'>
            <IconMenu />
          </div>
        </button>
      </div>
      <ul className='hidden md:grid md:visible col-span-3 lg:col-span-1 grid-cols-3 gap-4 pr-2 py-1 '>
        {links.map((link) => (
          <li className='hover:text-light-selec text-center' key={link.id}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
      <ul className='hidden md:grid md:visible pt-1 pr:2 lg:pr-16 justify-end lg:justify-center'>
        <li>
          {isLogged &&
            (
              <div className='z-10'>
                <button className='flex hover:text-light-selec px-3 mr-2 ml-2' onClick={toggleOptionProfile}>
                  {infoUser} <div className='ml-2'>{optionProfile ? '▴' : '▾'}</div>
                </button>
                {optionProfile &&
                  (
                    <div className='bg-light-bg1 grid grid-cols-1 z-20 rounded text-center'>
                      <Link className='z-20  hover:text-light-selec pt-2' href='/profile'>My Profile</Link>
                      <Link className='hover:text-light-selec z-20 py-1' href='#' onClick={handleClick}>Logout</Link>
                    </div>
                  )}
              </div>
            )}
          {!isLogged &&
            (<Link className='hover:text-light-selec px-2 ml-3' href='/login'>Login</Link>
            )}
        </li>
      </ul>
      <div className='container flex right-0 top-0'>
        {
        navClass &&
        (
          <div className='bg-light-bg1 rounded-lg right-0 w-1/4 h-18 absolute top-0  md:hidden'>
            <div className='mt-11 lg:hidden md:mt-auto md:min-w-full text-center'>
              <ul>
                {links.map((link) => (
                  <li className='rounded-lg hover:text-light-selec items-center bg-light-bg1 pb-2 px-1' key={link.id}>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
                <li className='rounded-lg hover:text-light-selec items-center bg-light-bg1 pb-2 px-1'>
                  {!isLogged && (<Link href='/login'>Login</Link>)}
                </li>
                <li />
              </ul>
              {isLogged && (
                <ul>
                  <li className='border-t-[1.4px] border-t-light-nav pt-3 pb-1 w-full bg-light-bg1 pr-4'>
                    <div className='inline-flex'>
                      <IconUser />
                      {infoUser}
                    </div>
                  </li>
                  <li className='rounded-lg hover:text-light-selec items-center bg-light-bg1 pb-2 px-1'>
                    <Link href='/profile'>My profile</Link>
                  </li>
                  <li className='rounded-lg hover:text-light-selec items-center bg-light-bg1 pb-3 px-1'><Link href='#' onClick={handleClick}>Logout</Link></li>
                </ul>
              )}
            </div>
          </div>
        )
      }
      </div>
    </nav>
  )
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })
