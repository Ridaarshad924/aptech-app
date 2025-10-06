import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Search as SearchIcon, Menu, X, Phone } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const [showCourses, setShowCourses] = useState(false); // 👈 NEW
    const [activeCity, setActiveCity] = useState("Karachi");
    const navigate = useNavigate();

    // 👇 Demo Courses list (tum apne real data se replace kar lena)
    const coursesList = [
        {
            category: "Career Program",
            items: [
                { name: "ADSE (3 Years)", url: "/courses-adse" },
                { name: "HDSE + SBTE (Intermediate equivalency)", url: "/courses-hdse" },
                { name: "ACN-Pro", url: "/courses" }
            ]
        },
        {
            category: "DATA ANALYTICS & AI",
            items: [
                { name: "ANALYTICS, AI & ML", url: "/courses" },
                { name: "DATA ANALYSIS", url: "/courses" },
                { name: "BUSINESS INTELLIGENCE ANALYSIS", url: "/courses" },
                { name: "Cybersecurity and Digital Forensics", url: "/courses" },
                { name: "Smart Pro", url: "/courses" }
            ]
        },
        {
            category: "Web & App Development",
            items: [
                { name: "PHP Laravel MySql", url: "/courses" },
                { name: ".Net Core MSSql Server C#", url: "/courses" },
                { name: "Mean Stack Developer", url: "/courses" },
                { name: "Mern Stack Developer", url: "/courses" },
                { name: "Android Application Development", url: "/courses" },
                { name: "Cross Platform Development", url: "/courses" },
                { name: "Web App Development Python", url: "/courses" }
            ]
        },
        {
            category: "Digital Marketing & Short Courses",
            items: [
                { name: "Digital Marketing & SEO", url: "/courses" },
                { name: "Office Automation", url: "/courses" },
                { name: "Social Media Marketing", url: "/courses" },
                { name: "AI for Everyone", url: "/courses" },
                { name: "Amazon FBA Virtual Assistant", url: "/courses" },
                { name: "Chat GPT for Developers", url: "/courses" },
                { name: "Advanced Excel", url: "/courses" },
                { name: "Web Development using PHP and Laravel", url: "/courses" },
                { name: "Data Visualization foundation with Tableau", url: "/courses" }
            ]
        },
        {
            category: "English Language",
            items: [
                { name: "Beginners", url: "/courses" },
                { name: "Pre-Intermediate", url: "/courses" },
                { name: "Intermediate", url: "/courses" },
                { name: "Upper-Intermediate", url: "/courses" }
            ]
        }
    ];

    const locations = [
        {
            city: "Karachi",
            centres: [
                { name: "Baldia Town", phone: "03337112055, 021-32378553-4", id: "91a906c8-9946-4cfb-8ff8-08dce92dc38f" },
                { name: "Clifton", phone: "(21) 35641162, (21) 35644340", id: "5d594c6c-c5e8-4a36-bfd7-08db9f09cf7c" },
                { name: "Defence", phone: "(21) 35396680, (21) 35396681", id: "36aa7e84-f308-4312-bfd8-08db9f09cf7c" },
                { name: "Federal B.Area", phone: "(21) 36344258, (21) 36344253", id: "5f81ea2e-5468-4c03-bfd9-08db9f09cf7c" },
                { name: "Garden", phone: "(21) 32237040, (21) 32237042", id: "40f169a5-bce7-45b2-bfda-08db9f09cf7c" },
                { name: "Gulistan-e-Johar", phone: "(21) 34662254, (21) 34662255", id: "113fc874-c3b7-48c4-bfdb-08db9f09cf7c" },
                { name: "Gulshan e Iqbal", phone: "21-34980576, 21-34980577", id: "2025f9c7-ab50-4a30-bfdc-08db9f09cf7c" },
                { name: "Gulshan e Iqbal II", phone: "0335-3498100", id: "280e7698-b4b0-4336-bfdd-08db9f09cf7c" },
                { name: "Gulshan e Maymar", phone: "0300-1316659, 21-36410541", id: "304a6ae2-d1e8-4d2a-bfde-08db9f09cf7c" },
                { name: "Gulshan-e-Hadeed", phone: "0335-0004563", id: "2f600f2a-54a9-45e1-fed7-08dc5fa28cd4" },
                { name: "I. I. Chundrigar", phone: "21-32277221, 21-32277222", id: "78c692e3-d595-4fbd-bfdf-08db9f09cf7c" },
                { name: "Korangi Road", phone: "21-35127361, 21-35127362", id: "ae448f91-151c-4bb6-bfe0-08db9f09cf7c" },
                { name: "Landhi", phone: "21-35020020, 21-35020021", id: "24e4c5b2-207e-404f-bfe1-08db9f09cf7c" },
                { name: "Metro Star Gate", phone: "(21) 34580415, (21) 34580425", id: "3318a38e-81e6-46cc-bfe2-08db9f09cf7c" },
                { name: "Malir", phone: "0330 0878001, (21) 34495859", id: "7778f09b-aa07-4ba6-64f7-08dc71799805" },
                { name: "North Karachi", phone: "(21) 36930102, (21) 36930103, (21) 36930104", id: "6d4bae1f-3b21-41cb-bfe3-08db9f09cf7c" },
                { name: "North Nazimabad", phone: "(21) 36630102, (21) 36630103", id: "04250060-ac36-44a5-bfe4-08db9f09cf7c" },
                { name: "North Nazimabad II", phone: "(21)36620102, (21)36620103", id: "6f9a7af6-e58f-4347-bfe5-08db9f09cf7c" },
                { name: "Orangi Town", phone: "21-36660041, 21-36660042, 21-36660044", id: "e8ffe1fe-cc87-4625-bfe6-08db9f09cf7c" },
                { name: "Shahrah e Faisal", phone: "(21) 34385418, (21) 34386167", id: "ca1d2cdb-eca0-4177-bfe7-08db9f09cf7c" },
                { name: "SITE", phone: "21-36611161, 21-36611162", id: "d048b620-2369-4cc7-bfe8-08db9f09cf7c" },
                { name: "Surjani", phone: "0332-2251458, 0332-2251459", id: "de459573-2f54-440a-bfe9-08db9f09cf7c" },
                { name: "Scheme 33", phone: "021-34693992-3, 0334-0621597", id: "b4321c2d-d461-458a-f5b8-08dc9286f053" },
                { name: "Tariq Road", phone: "21-34530828, 21-34530829", id: "9854ea24-24a1-4e56-bfea-08db9f09cf7c" },
                { name: "University Road", phone: "21-34664922, 21-34664923", id: "42ddc4d3-2936-44ec-bfeb-08db9f09cf7c" },
            ],
        },
        {
            city: "Hyderabad",
            centres: [
                { name: "Defence Hyderabad", phone: "(22) 2108318, (22) 2108319", id: "252c0e2c-9335-43f0-bfec-08db9f09cf7c" },
                { name: "Latifabad Hyderabad", phone: "(22) 3407718, (22) 3407719", id: "768decfa-2820-4814-bfed-08db9f09cf7c" },
            ],
        },
        {
            city: "Jamshoro",
            centres: [
                { name: "Jamshoro", phone: "22-2115449, 0333-9560154", id: "ff4d326e-2938-48cd-bfee-08db9f09cf7c" },
            ],
        },
        {
            city: "Larkana",
            centres: [
                { name: "Larkana", phone: "(92) 3111665594", id: "d84c8f6d-28f0-418d-bfef-08db9f09cf7c" },
            ],
        },
        {
            city: "Lahore",
            centres: [
                { name: "Johar Town Lahore", phone: "(42) 35172415, (42) 35172416", id: "603ab771-02d1-4dd3-bff0-08db9f09cf7c" },
            ],
        },
        {
            city: "Timergara",
            centres: [
                { name: "Timergara", phone: "(94) 5821702", id: "717a7e9d-3af4-4a44-bff8-08db9f09cf7c" },
            ],
        },
        {
            city: "Sindh",
            centres: [
                { name: "Sukkhur", phone: "(92)300 9315116", id: "8c21cbf0-ca3b-4d05-d998-08ddcdd08969" },
            ],
        },
    ];

    const navLinks = [
        { to: "/about", label: "About Aptech" },
        { to: "/news", label: "News & Events" },
        { to: "/affiliations", label: "Affiliations" },
        { to: "/partner", label: "Partner With Us" },
        { to: "/alumni", label: "Alumni" },
        { to: "/placement", label: "Placement" },
    ];

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20 relative">
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
                <nav className="hidden md:flex items-center space-x-8 header-nav relative">

                    {/* 👇 COURSES Mega Dropdown */}
                    <div
                        onMouseEnter={() => setShowCourses(true)}
                        onMouseLeave={() => setShowCourses(false)}
                        className=""
                    >
                        <span
                            className={`relative text-base font-semibold leading-[70px] cursor-pointer transition duration-300 ${showCourses ? "text-[#febe10]" : "text-black"
                                }`}
                        >
                            Courses
                            <span
                                className={`absolute left-0 bottom-0 h-[2px] bg-[#febe10] transition-all duration-300 ${showCourses ? "w-full" : "w-0"
                                    }`}
                            ></span>
                        </span>

                        {/* Mega Dropdown */}
                        <div
                            className={`absolute left-1/4 transform -translate-x-1/4 top-full mt-4 bg-white shadow-2xl rounded-2xl w-[900px] max-h-[80vh] overflow-y-auto border border-gray-200 transition-all duration-500 ease-out ${showCourses
                                ? "opacity-100 translate-y-0 visible"
                                : "opacity-0 translate-y-8 invisible"
                                }`}
                        >
                            <div className="p-6 grid grid-cols-5 gap-4">
                                {coursesList.map((group, i) => (
                                    <div key={i}>
                                        <h3 className="text-lg font-semibold text-[#febe10] mb-3">{group.category}</h3>
                                        <ul className="space-y-2">
                                            {group.items.map((course, idx) => (
                                                <li key={idx}>
                                                    <Link
                                                        to={course.url || `/courses/${course.name.toLowerCase().replace(/\s+/g, "-")}`}
                                                        className="hover:text-[#febe10] transition text-gray-700 text-sm"
                                                    >
                                                        {course.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ✅ Existing Nav Links */}
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `relative text-base font-semibold leading-[70px] transition duration-300 whitespace-nowrap 
                ${isActive ? "text-[#febe10] after:w-full" : "text-black after:w-0"}
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#febe10] after:transition-all hover:text-[#febe10] hover:after:w-full`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}

                    {/* ✅ LOCATION Mega Dropdown (unchanged) */}
                    <div
                        onMouseEnter={() => setShowLocation(true)}
                        onMouseLeave={() => setShowLocation(false)}
                        className=""
                    >
                        {/* Nav Text */}
                        <span
                            className={`relative text-base font-semibold leading-[70px] cursor-pointer transition duration-300 ${showLocation ? "text-[#febe10]" : "text-black"
                                }`}
                        >
                            Location
                            <span
                                className={`absolute left-0 bottom-0 h-[2px] bg-[#febe10] transition-all duration-300 ${showLocation ? "w-full" : "w-0"
                                    }`}
                            ></span>
                        </span>

                        {/* Animated Mega Dropdown */}
                        <div
                            className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-4 bg-white shadow-2xl rounded-2xl w-[900px] max-h-[80vh] overflow-y-auto border border-gray-200 transition-all duration-500 ease-out ${showLocation
                                ? "opacity-100 translate-y-0 visible"
                                : "opacity-0 translate-y-8 invisible"
                                }`}
                        >
                            <div className="p-6">
                                {/* Tabs */}
                                <div className="flex mb-6 border-b pb-3">
                                    {locations.map((city) => (
                                        <button
                                            key={city.city}
                                            onClick={() => setActiveCity(city.city)}
                                            className={`text-lg font-semibold pb-2 transition-all ${activeCity === city.city
                                                ? "bg-[#febe10] text-white rounded-lg border-b-2 border-[#febe10]"
                                                : "text-gray-700 hover:text-[#febe10]"
                                                }`}
                                        >
                                            {city.city}
                                        </button>
                                    ))}
                                </div>

                                {/* Centres Grid */}
                                <div className="grid grid-cols-4 gap-6 text-sm text-gray-800">
                                    {locations
                                        .find((loc) => loc.city === activeCity)
                                        ?.centres.map((centre, i) => (
                                            <Link
                                                key={i}
                                                to={`/centre?id=${centre.id}`}
                                                className="block space-y-1 mb-3 hover:text-[#febe10] transition"
                                            >
                                                <span className="block font-semibold">{centre.name}</span>
                                                <small className="text-gray-600 flex items-center gap-2">
                                                    <Phone size={14} className="text-[#febe10]" />
                                                    {centre.phone}
                                                </small>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => navigate("/search")}
                        className="p-2 rounded-full hover:bg-gray-100 transition duration-300"
                    >
                        <SearchIcon size={20} className="text-gray-600" />
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition duration-300"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;