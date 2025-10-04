import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Affiliations = () => {
    const [selectedTab, setSelectedTab] = useState("T1");

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const LocalBodies = () => (
        <>
            {/* SBTE */}
            <div className="flex flex-col lg:flex-row items-start justify-center mt-5 gap-6">
                <div className="lg:w-7/12 mt-3">
                    <h4 className="text-xl font-semibold">Sindh Board of Technical Education (SBTE)</h4>
                    <p className="font-bold mt-2">
                        Aptech's HDSE-SBTE program is affiliated with SBTE.
                    </p>
                    <p className="mt-4 text-gray-600 text-base">
                        With the Aptech & SBTE Qualification, students can get best of both worlds; They can get the latest in I.T. education and at the same time get Intermediate equivalency.
                    </p>
                    <Link to="/courses-hdse" className="block mt-4 text-blue-700 hover:underline">
                        Learn more about HDSE-SBTE and Intermediate equivalency.
                    </Link>
                    <p className="mt-4 text-gray-600 text-base">
                        Sindh Board of Technical Education (SBTE) was established under Sindh Ordinance No. XVI of 1970 to replace the defunct West Pakistan Board of Technical Education. The Board is responsible to organize, regulate, develop and control technical, vocational, industrial and commercial education in the province of Sindh.
                    </p>
                </div>
                <div className="lg:w-96 h-72">
                    <img src="assets/images/logo/SBTE-01.png" className="h-full w-full object-contain" alt="SBTE Logo" />
                </div>
            </div>

            {/* STEVTA */}
            <div className="flex flex-col lg:flex-row items-start justify-center mt-10 gap-6">
                <div className="lg:w-7/12 mt-3">
                    <h4 className="text-xl font-semibold">Sindh Technical Education & Vocational Training Authority (STEVTA)</h4>
                    <p className="font-bold mt-2">Aptech is registered with STEVTA.</p>
                    <p className="mt-4 text-gray-600 text-base">
                        Government established STEVTA to undertake & manage STEVTA Institutions in the province. In order to extend complete autonomy & effective management, the policy making task has been entrusted to the STEVTA Board consisting of eminent professionals, from Public & Private Sector, Representatives from leading industries, universities etc. Sindh Cabinet in its meeting held on 28th February 2009 entrusted, the administrative control of all STEVTA Institutions of the Province to STEVTA.
                    </p>
                    <p className="mt-4 text-gray-600 text-base">
                        The mission of STEVTA is to develop qualitative workforce meeting local and international labor market needs by ensuring excellence in training through research & development, effective management and regulation of STEVTA setup in the Province.
                    </p>
                </div>
                <div className="lg:w-96 h-72">
                    <img src="assets/images/logo/STEVTA-02.png" className="h-full w-full object-contain" alt="STEVTA Logo" />
                </div>
            </div>
        </>
    );

    const InternationalUniversity = () => (
        <>
            {/* Study Abroad */}
            <div className="flex flex-col lg:flex-row items-start justify-between mt-5 gap-6">
                <div className="lg:w-7/12 mt-3">
                    <h4 className="text-xl font-semibold">Study Abroad & Degree Pathway</h4>
                    <p className="mt-4 text-gray-600 text-base">
                        Aptech has collaborated with many education institutes and universities in the world for the benefit of our students.
                        <br /><br />
                        Aptech enables students to gain an International degree via Credit Transfer Facility (CTF).
                        <br /><br />
                        Our Education Alliances:
                    </p>
                    <div className="flex gap-4 mt-4">
                        <div className="h-36 w-36"><img src="assets/images/logo/Picture2.png" alt="" className="h-full w-full object-contain" /></div>
                        <div className="h-36 w-36"><img src="assets/images/logo/Picture3.png" alt="" className="h-full w-full object-contain" /></div>
                        <div className="h-36 w-36"><img src="assets/images/logo/Picture4.png" alt="" className="h-full w-full object-contain" /></div>
                    </div>
                </div>
                <div className="lg:w-96 h-100">
                    <img src="assets/images/logo/Picture1.png" className="h-full w-full object-contain" alt="" />
                </div>
            </div>

            {/* NCC Education */}
            <div className="flex flex-col lg:flex-row items-start justify-between mt-10 gap-6">
                <div className="lg:w-7/12 mt-3">
                    <h4 className="text-xl font-semibold">Collaboration with NCC Education</h4>
                    <p className="mt-4 text-gray-600 text-base">
                        Aptech is now an NCC Education Accredited Partner Centre enabling candidates to study in their home countries and obtain a Dual Diploma (ADSE and Level 5 Diploma in Computing from NCC Education).
                        <br /><br />
                        With Dual Diploma students can opt for higher education in UK, Australia or Ireland for a Degree program at NCC Education partnered universities.
                    </p>
                </div>
                <div className="lg:w-72 h-64">
                    <img src="assets/images/logo/Picture3.png" className="h-full w-full object-contain" alt="" />
                </div>
            </div>

            {/* Lincoln University */}
            <div className="flex flex-col lg:flex-row items-start justify-between mt-10 gap-6">
                <div className="lg:w-7/12 mt-3">
                    <h4 className="text-xl font-semibold">Collaboration with Lincoln University College</h4>
                    <p className="mt-4 text-gray-600 text-base">
                        Aptech aims to promote International Degree via Credit Transfer Facility.
                        <br /><br />
                        We have now collaborated with Lincoln University College, Malaysia enabling candidates to study Advanced Diploma in Software Engineering (ADSE) Program from Aptech for 3 years and get entry into final year of degree program at Lincoln University College, Malaysia.
                        <br /><br />
                        Students can obtain Bachelor of Information Technology (Hons).
                    </p>
                </div>
                <div className="lg:w-72 h-64">
                    <img src="assets/images/logo/Picture4.png" className="h-full w-full object-contain" alt="" />
                </div>
            </div>

            {/* Middlesex University */}
            <div className="flex flex-col lg:flex-row items-start justify-between mt-10 gap-6 mb-10">
                <div className="lg:w-7/12 mt-3">
                    <h4 className="text-xl font-semibold">Collaboration with Middlesex University</h4>
                    <p className="mt-4 text-gray-600 text-base">
                        Aptech’s partnership with Middlesex University, London offers students an opportunity to earn an international I.T. degree with Credit Transfer Facility, at any of Middlesex University’s 3 international campuses in London, Malta, or Dubai.
                        <br /><br />
                        Post completing Advanced Diploma in Software Engineering (ADSE) Program from Aptech for 3 years students get entry into final year of degree program at Middlesex University.
                    </p>
                    <div className="flex mt-4">
                        <div className="h-36 w-96"><img src="assets/images/logo/Picture6.png" alt="" className="h-full w-full object-contain" /></div>
                    </div>
                </div>
                <div className="lg:w-72 h-64">
                    <img src="assets/images/logo/Picture2.png" className="h-full w-full object-contain" alt="" />
                </div>
            </div>
        </>
    );

    return (
        <>
            <Header />

            {/* Page Title */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-500 py-5 px-8 rounded-lg shadow-lg text-black text-2xl font-extrabold tracking-wide relative flex items-center justify-center">
                Affiliations and Registrations
                {/* <span className="absolute bottom-1 w-24 h-1 bg-yellow-600 rounded-full"></span> */}
            </div>

            {/* Main Section */}
            <section className="min-h-screen flex justify-center items-start w-full bg-gray-50 py-12">
                <div className="w-full max-w-6xl px-4">

                    {/* Tabs */}
                    <div className="flex gap-4 justify-center mb-6">
                        <button
                            className={`px-6 py-2 font-semibold rounded-lg transition-colors duration-300 shadow-md ${selectedTab === "T1"
                                ? "bg-yellow-500 text-white shadow-yellow-500/50"
                                : "bg-white text-gray-700 hover:bg-yellow-100 hover:text-black"
                                }`}
                            onClick={() => handleTabChange("T1")}
                        >
                            Local Bodies
                        </button>
                        <button
                            className={`px-6 py-2 font-semibold rounded-lg transition-colors duration-300 shadow-md ${selectedTab === "T2"
                                ? "bg-yellow-500 text-white shadow-yellow-500/50"
                                : "bg-white text-gray-700 hover:bg-yellow-100 hover:text-black"
                                }`}
                            onClick={() => handleTabChange("T2")}
                        >
                            International University
                        </button>
                    </div>

                    <hr className="border-gray-300 mb-8" />

                    {/* Tab Content */}
                    <div className="space-y-12">
                        {selectedTab === "T1" ? <LocalBodies /> : <InternationalUniversity />}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Affiliations;
