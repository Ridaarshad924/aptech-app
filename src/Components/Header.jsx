import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search as SearchIcon, Menu, X } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // Mobile menu
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { to: "/courses", label: "Courses" },
        { to: "/about", label: "About Aptech" },
        { to: "/news", label: "News & Events" },
        { to: "/affiliations", label: "Affiliations" },
        { to: "/partner", label: "Partner With Us" },
        { to: "/alumni", label: "Alumni" },
        { to: "/placement", label: "Placement" },
        { to: "/location", label: "Location" },
    ];

    const goToSearchPage = () => {
        navigate("/search"); // Redirect to Search component
    };

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-8xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src="assets/images/logo.png"
                        alt="Logo"
                        className="h-14 w-auto mr-8"
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden sm:flex items-center space-x-8 header-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="relative text-black font-semibold text-base leading-[70px] transition duration-300 hover:text-custom-yellow after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#febe10] after:transition-all hover:after:w-full focus:after:w-full"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Search Icon */}
                <div className="flex items-center ml-4 sm:ml-6">
                    <button
                        onClick={goToSearchPage}
                        className="bg-white p-2 rounded-full hover:bg-gray-100 transition duration-300"
                    >
                        <SearchIcon size={20} className="text-gray-600" />
                    </button>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="sm:hidden ml-4 relative">
                    <button
                        onClick={toggleMenu}
                        className="relative z-10 p-2 rounded-md hover:bg-gray-100 overflow-hidden"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`sm:hidden bg-white shadow-lg overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[1000px] py-4" : "max-h-0 py-0"
                    }`}
            >
                <nav className="flex flex-col items-center space-y-4">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`text-black font-semibold py-2 px-6 rounded-md transition-all duration-500 transform ${isOpen
                                    ? "opacity-100 translate-x-0 delay-" + index * 75
                                    : "opacity-0 -translate-x-4"
                                } hover:bg-yellow-400 hover:text-white`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
