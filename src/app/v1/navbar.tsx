import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Assuming you are using react-feather for icons
import Link from 'next/link'; // Assuming you are using Next.js for routing

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 left-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950">
            <div className="container mx-auto flex items-center justify-between px-4 py-5 md:px-6">
                <h1 className="text-2xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
                    TakeOffer
                </h1>
                <button onClick={toggleMenu} className="md:hidden focus:outline-none z-50">
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                <nav
                    className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        } md:static md:w-auto md:h-auto md:bg-transparent md:flex-row md:translate-x-0 md:space-y-0 md:space-x-6`}
                >
                    <Link onClick={handleLinkClick} href="#services">
                        Services
                    </Link>
                    <Link onClick={handleLinkClick} href="#testimonials">
                        Testimonials
                    </Link>
                    <Link onClick={handleLinkClick} href="#contact">
                        Get Started
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;