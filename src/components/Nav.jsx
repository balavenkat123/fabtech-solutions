import { hamburger } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"


const Nav = () => {
  return (
    <header className='padding-x py-8 z-10 w-full absolute bg-sky-200 '> 
      
    <nav className='flex justify-between items-center max-container h-2 '>
        <a href="/">
            <img className='object-scale-down h-20 w-25 ' src={headerLogo} alt='logo'/>
            
        </a>
        <ul className='flex1 flex justify-center items-center gap-16 max-lg:hidden'>
        {navLinks.map((items)=>(
            <li key={items.label}>
                <a href={items.href} className='font-sans text-lg text-blue-900 hover:text-blue-400'>
                    {items.label}
                </a>
            </li>
        ))}
        </ul>
        <div className='hidden max-lg:block cursor-pointer'>
            <img src={hamburger} alt='hamberger' width={25} height={25}  />
        </div>
    </nav>
</header>
  )
}

export default Nav