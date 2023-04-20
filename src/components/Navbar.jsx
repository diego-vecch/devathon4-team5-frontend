import Icon from './Icon'

export default function Navbar () {
  return (
    <nav className='bg-light-nav bg-opacity-75 h-12 grid grid-cols-2 px-4'>
      <image className='m-3'><Icon /> </image>
      <ul className='grid grid-cols-3 gap-4 px-14 py-2'>
        <li className='text-light-selec'><a>Home</a></li>
        <li>Settings</li>
        <li>User</li>
      </ul>
    </nav>
  )
}
