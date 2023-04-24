import Icon from './Icon'

export default function Navbar ({ direct }) {
  const links = [
    { name: 'Home', link: '/', id: 1 },
    { name: 'Settings', link: '/', id: 2 },
    { name: 'User', link: '/', id: 3 }
  ]

  return (
    <nav className='bg-light-nav bg-opacity-75 h-12 grid grid-cols-2 px-20'>
      <div className='m-3'><Icon /> </div>
      <ul className='grid grid-cols-3 gap-4 px-2 py-2 '>
        {links.map((link) => (
          <li className='hover:text-light-selec' key={link.id}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
