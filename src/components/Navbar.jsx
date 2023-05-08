'use-client'

import Icon from './Icon'
import Link from 'next/link'
import useUser from '@/hooks/useUser'
import dynamic from 'next/dynamic'

function Navbar ({ direct }) {
  const links = [
    { name: 'Home', link: '/', id: 1 },
    { name: 'Settings', link: '/', id: 2 }
  ]
  const { isLogged, logout } = useUser()

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  return (
    <nav className='bg-light-nav bg-opacity-75 h-12 grid grid-cols-2 px-20'>
      <div className='m-3'><Icon /> </div>
      <ul className='grid grid-cols-3 gap-4 px-2 py-2 '>
        {links.map((link) => (
          <li className='hover:text-light-selec' key={link.id}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
        <li>
          {isLogged
            ? <Link href='#' onClick={handleClick}>Logout</Link>
            : <Link href='/Login'>Login</Link>}
        </li>
      </ul>
    </nav>
  )
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })
