'use-client'

import Link from 'next/link'
import useUser from '@/hooks/useUser'
import dynamic from 'next/dynamic'
import { useContext, useState } from 'react'
import InfoUser from '@/context/infoUserContext'
import { IconMenu, IconMenuClose } from './componetImage/IconMenu'
import IconUser from './componetImage/IconUser'
import { ButtonLink } from '../components/ButtonLink'

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

    <nav className='absolute top-2 left-0 right-0 z-50 bg-opacity-75 w-full h-16 grid grid-cols-2 lg:px-4 gap-1 lg:grid-cols-3 xl:gap-14 pt-2'>
      <div className=' pb-2' />
      <div className='lg:hidden flex w-full justify-end pr-3  '>
        {!navClass && (
          <button className='flex hover:text-light-selec absolute z-50 bg-light-bg1 rounded-lg border-[1.3px] border-light-selec border-opacity-20' onClick={handleMenu}>
            <div className='p-3 '>
              <IconMenu />
            </div>
          </button>)}

      </div>
      <ul className='hidden lg:grid lg:visible col-span-3 lg:col-span-1 grid-cols-3 gap-1 px-14 lg:px-2 lg:gap-2 py-1 '>
        {links.map((link) => (
          <ButtonLink
            name={link.name} key={link.id}
            url={link.link}
          >
            {link.name}
          </ButtonLink>
        ))}
      </ul>
      <ul className='hidden lg:grid lg:visible pt-1 pr:2 lg:pr-16 justify-end 2xl:justify-center'>
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
            (
              <div className='flex gap-2'>
                <ButtonLink
                  name='Login'
                  url='/login'
                  padding='px-4'
                />
                <ButtonLink
                  name='Register'
                  url='/register'
                  padding='px-4'
                />
              </div>
            )}
        </li>
      </ul>
      <div className=' flex right-0 top-2'>
        {
        navClass &&
        (
          <div className='flex gap-8 right-0  h-18 absolute top-2 pt-0 px-10  lg:hidden'>
            <div className='lg:hidden flex w-full justify-start pr-4  '>
              <button className='flex hover:text-light-selec absolute z-50 bg-light-bg2 rounded-lg' onClick={handleMenu}>
                <div className='p-3 '>
                  <IconMenuClose />
                </div>
              </button>
            </div>
            <div className='lg:hidden min-w-full text-center from-light-bg2 to-light-nav  bg-gradient-to-br px-4 py-2 rounded-md'>
              <ul>
                {links.map((link) => (
                  <li
                    className='my-2'
                    key={link.id}
                  >
                    <ButtonLink
                      name={link.name}
                      url={link.link}
                    >
                      {link.name}
                    </ButtonLink>
                  </li>
                ))}
                <li className='rounded-lg  items-center pt-4 pb-2 px-1'>
                  {!isLogged && (
                    <div className='flex flex-col gap-2'>
                      <ButtonLink
                        name='Login'
                        url='/login'
                      />
                      <ButtonLink
                        name='Register'
                        url='/register'
                      />
                    </div>
                  )}
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
