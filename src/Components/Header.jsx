import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Search as SearchIcon, Menu, X } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

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

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src="/assets/images/logo.png"
                        alt="Logo"
                        className="h-14 w-auto cursor-pointer"
                        onClick={() => navigate("/")}
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 header-nav">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `relative text-base font-semibold leading-[70px] transition duration-300 
                ${isActive ? "text-[#febe10] after:w-full" : "text-black after:w-0"}
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#febe10] after:transition-all hover:text-[#febe10] hover:after:w-full`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Icons (Search + Hamburger) */}
                <div className="flex items-center space-x-4">
                    {/* Search Button */}
                    <button
                        onClick={() => navigate("/search")}
                        className="p-2 rounded-full hover:bg-gray-100 transition duration-300"
                    >
                        <SearchIcon size={20} className="text-gray-600" />
                    </button>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition duration-300"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white shadow-md transition-all duration-500 overflow-hidden ${isOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
                    }`}
            >
                <nav className="flex flex-col items-center space-y-3">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `w-full text-center py-2 text-lg font-semibold transition-colors 
                ${isActive
                                    ? "text-[#febe10] border-b-2 border-[#febe10]"
                                    : "text-gray-800"
                                } hover:bg-[#febe10] hover:text-white whitespace-nowrap`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
