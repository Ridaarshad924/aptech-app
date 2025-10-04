import React from "react";
import { Link } from "react-router-dom";
import VISION from "../../public/assets/images/footer/vision.jpg";

function Footer() {
    return (
        <footer
            className="bg-white w-full p-6">
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-4">
                {/* Logo + Text */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                    <a href="/" className="inline-block mx-auto md:mx-0">
                        <img
                            src="https://aptech-education.com.pk/images/logo-wide.png"
                            alt="Aptech Logo"
                            className="w-36 md:w-44"
                        />
                    </a>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
                        Empowering students to become skilled software developers and build
                        successful careers in technology.
                    </p>
                </div>

                {/* Partner Logos + Social Links */}
                <div className="flex flex-col items-center md:items-end space-y-6">
                    {/* Partner Logos */}
                    <div className="flex flex-wrap justify-center md:justify-end gap-5">
                        <a href="#">
                            <img
                                src="assets/images/convologo.jpg"
                                alt="Convologo"
                                className="w-20 h-20 object-contain hover:scale-105 transition-transform duration-200"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="assets/images/techwiz.png"
                                alt="Techwiz"
                                className="w-20 h-20 object-contain hover:scale-105 transition-transform duration-200"
                            />
                        </a>
                        <a href="#">
                            <img
                                src={VISION}
                                alt="Vision"
                                className="w-20 h-20 object-contain hover:scale-105 transition-transform duration-200"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="assets/images/apl.png"
                                alt="APL"
                                className="w-20 h-20 object-contain hover:scale-105 transition-transform duration-200"
                            />
                        </a>
                    </div>

                    {/* ✅ Social Links (fixed & spaced) */}
                    <ul className="flex justify-center md:justify-end gap-6">
                        <li>
                            <a
                                href="https://www.facebook.com/APTECH.Pakistan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 text-2xl transition"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/@aptechlearningpakistan-off3749"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-600 hover:text-red-800 text-2xl transition"
                            >
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/school/aptech-computer-education-pakistan-operatons/mycompany/?viewAsMember=true"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 hover:text-blue-900 text-2xl transition"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://wa.me/+923339560169"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-500 hover:text-green-700 text-2xl transition"
                            >
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Affiliations Section */}
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-600 text-center md:text-left">
                    © 2025{" "}
                    <a href="/" className="text-blue-600 hover:underline">
                        Aptech Learning Pakistan
                    </a>
                    . All rights reserved.
                </p>

                <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end">
                    <p className="text-sm font-semibold text-gray-700 mb-3">
                        Affiliations and Registrations
                    </p>
                    <Link to="/affiliations" className="flex space-x-8">
                        <img
                            src="assets/images/logo/SBTE-01.png"
                            alt="SBTE"
                            className="h-16 w-16 object-contain hover:scale-105 transition-transform duration-200"
                        />
                        <img
                            src="assets/images/logo/STEVTA-02.png"
                            alt="STEVTA"
                            className="h-16 w-16 object-contain hover:scale-105 transition-transform duration-200"
                        />
                    </Link>
                </div>
            </div>

            {/* Bottom Links */}
            <ul className="flex flex-wrap justify-center mt-6 gap-6 sm:gap-10 text-sm text-gray-600 text-center">
                <li>
                    <a href="#" className="hover:text-blue-600 transition underline-offset-4 hover:underline">
                        Disclaimer & Terms of Use
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-blue-600 transition underline-offset-4 hover:underline">
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-blue-600 transition underline-offset-4 hover:underline">
                        Profanity Policy
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-blue-600 transition underline-offset-4 hover:underline">
                        Sitemap
                    </a>
                </li>
                <li>
                    <a href="faq.html" className="hover:text-blue-600 transition underline-offset-4 hover:underline">
                        FAQs
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-blue-600 transition underline-offset-4 hover:underline">
                        Career
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
