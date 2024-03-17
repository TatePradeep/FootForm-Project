import headerLogo from '../../assets/header-logo.png'
import profile from '../../assets/profile.svg'
import { IoMdSearch } from "react-icons/io";
import './navbar.css';

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#shop", label: "Shop" },
    { href: "#cart", label: "Cart" },
    { href: "#contact", label: "Contact" },
];

const Nav = () => {
    return (
        <header className='top-0 left-0 right-0'>
            <nav className='container flex justify-between mx-auto px-4'>
                <div>
                    <div className='bg-[#24221F] rotate-45 h-80 w-80 z-0 absolute left-0 transform -translate-x-1/2 -translate-y-1/2'>
                    </div>
                    <div className='absolute'>
                        <a href='/'>
                            <img
                                src={headerLogo}
                                alt='logo'
                                width={127}
                                height={127}
                                className='m-0 w-32 h-32 z-10'
                            />
                        </a>
                    </div>
                </div>
                <div className='flex mt-5 w-64 h-8 border-2 border-solid rounded-xl border-[#B6B5C2]'>
                    <input type="text" placeholder=" Search" className="w-56 rounded-xl" />
                    <button>
                        <IoMdSearch />
                    </button>
                </div>
                <div className='flex gap-16 mt-5'>
                    <ul className='flex justify-center gap-16 menu menu--adsila'>
                        {navLinks.map((item) => (
                            <li key={item.label} className='menu__item'>
                                <a
                                    href={item.href}
                                    className='menu__item-name font-sans hover:text-[#C7CFF5]'
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href='/' className='flex justify-start'>
                        <img
                            src={profile}
                            alt='profile'
                            width={46}
                            height={46}
                            className='w-10 h-10 rounded-full'
                        />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Nav;