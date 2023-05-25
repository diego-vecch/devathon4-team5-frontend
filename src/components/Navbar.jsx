'use-client'

import Icon from './Icon'
import Link from 'next/link'
import useUser from '@/hooks/useUser'
import dynamic from 'next/dynamic'

function Navbar ({ direct }) {
  const links = [
    { name: 'Home', link: '/', id: 1 },
    { name: 'About us', link: '/', id: 2 },
    { name: 'Contact us', link: '/formContact', id: 3 }
  ]
  const { isLogged, logout } = useUser()

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  return (
    <nav className='bg-light-lth bg-opacity-75 h-12 grid grid-cols-3 px-16 pt-2'>
      <div className='my-3'><Icon /> </div>
      <ul className='grid grid-cols-3 gap-4 pr-2 py-2 '>
        {links.map((link) => (
          <li className='hover:text-light-selec text-center' key={link.id}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
      <ul className='grid py-2 pr-16 justify-end'>
        <li>
          {isLogged
            ? <Link className='hover:text-light-selec' href='#' onClick={handleClick}>Logout</Link>
            : <Link className='hover:text-light-selec' href='/Login'>Login</Link>}
        </li>
      </ul>
    </nav>
  )
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })
