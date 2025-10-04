import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

function ADSE() {
    const [activeIndex, setActiveIndex] = useState(0);

    const ntimeline = (n) => {
        setActiveIndex(n);
    };

    useEffect(() => {
        ntimeline(0);
    }, []);

    const semesters = [
        [
            "office.png",
            "html.png",
            "css.png",
            "js.png",
            "bootstrap.png",
            "figma.png",
            "seo.jpg",
        ],
        ["git.png", "json.png", "XML.png", "MySQL.png", "php.png", "laravel.png"],
        ["sql.png", "Cshaarp.png", "angular.png", "mvc.png", "core.png"],
        ["azure.png", "agile.png", "devops.png", "dart.png", "fluter.png"],
        ["materialui.png", "mongodb.png", "expressjs.webp", "react.png", "node.png"],
        ["r.png", "Cshaarp.png", "angular.png", "core.png"],
    ];

    const timelineData = [
        {
            title: "Term-1 CPISM",
            subtitle:
                "Certificate of Proficiency in Information Systems Management",
            objectives: [
                "Create documents, spreadsheets and presentations efficiently for analyzing and presenting data",
                "Use HTML5 /CSS3 /JavaScript to develop interactive Websites and apps",
                "Learn to build dynamic and responsive sites with Bootstrap and jQuery",
                "Learn the basics of Git for tracking, branching, merging, and managing code revisions",
                "Apply SEO principles and techniques to improve ranking of Websites",
                "Build a responsive Website based on a real-world case study",
            ],
            module: [
                "Effective Productivity through Office Automation",
                "Progressive Website Development",
                "Bootstrap and jQuery for Responsive Web-pages",
                "Distributed Version Control",
                "Optimize Web for Search Engines",
                "eProject-Responsive Website Development",
            ],
            jobProfile: ["RESPONSIVE WEB DEVELOPER"],
            icons: semesters[0],
        },
        {
            title: "Term-2 DISM",
            subtitle: "Diploma in Information Systems Management",
            objectives: [
                "Gain the skills to develop a Content Management System with WordPress",
                "Use XML and JSON to store and exchange data",
                "Use MySQL, the world’s most popular open-source database",
                "Create dynamic Web applications using PHP",
                "Learn to work with Laravel Framework to build PHP-based Web applications",
                "Understand the basic functionality of JavaScript to build dynamic Web pages and Web applications",
                "Develop a real-world Web application using PHP and Laravel Framework",
                "Gain the foundational skills to become a millennial entrepreneur",
            ],
            module: [
                "Build and Manage Websites with CMS",
                "Data Processing with XML and JSON",
                "Working with MySQL",
                "Navigating Dynamic Web Development with PHP",
                "Leveraging Laravel Framework for Web Development",
                "Programming with JavaScript",
                "eProject-PHP Web Application Development",
                "A Millennials Guide to Entrepreneurship",
            ],
            jobProfile: ["PHP DEVELOPER"],
            icons: semesters[1],
        },
        // Add the remaining terms (HDSE I, HDSE II, ADSE I, ADSE II) similarly
    ];

    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="relative h-96 w-full overflow-hidden">
                <video
                    poster="assets/images/ACCPAI/Banner-img.jpg"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
            </section>

            {/* Course Details */}
            <section className="px-6 sm:px-20 mt-8">
                <img
                    src="assets/images/ACCPAI/814×450.png"
                    alt=""
                    className="w-full rounded-xl object-cover mt-8"
                />

                <div className="mt-16 space-y-4 text-gray-800">
                    <h2 className="text-2xl font-bold">
                        ADSE - Advance Diploma in Software Engineering
                    </h2>
                    <p className="text-sm">
                        Aptech Certified Computer Professional is the best career path for
                        anyone looking to make a career in the I.T. industry. A one of a
                        kind curriculum in Pakistan, designed to turn any willing student
                        into a market-ready I.T. Professional. “The new ACCP AI is a
                        career program for the latest jobs
                    </p>
                    <p>
                        ACCP AI is designed to produce developers of the future. Enabling
                        students to develop applications from start to finish on many
                        different platforms. From the very first semester student is primed
                        to take on job roles just as, Full Stack Web Designer & Front End
                        Developer.
                    </p>
                    <p>
                        Develop mobile ready Websites, create enterprise-ready Cloud
                        Applications or solution delivering smart Web Applications; Develop
                        Mobile Applications for both IOS & Android or connect devices,
                        sensors with IOT to create smart ecosystems.
                    </p>
                    <p className="text-center font-semibold">
                        "ACCP AI is a complete I.T. career path."
                    </p>
                </div>
            </section>

            {/* Semester Tabs */}
            <section className="px-6 sm:px-20 mt-16">
                <p className="mb-4 font-semibold">Semester</p>
                <div className="flex flex-col sm:flex-row">
                    {/* Tabs */}
                    <div className="flex sm:flex-col gap-2 sm:w-1/5 mb-4 sm:mb-0">
                        {["CPISM", "DISM", "HDSE I", "HDSE II", "ADSE I", "ADSE II"].map(
                            (item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => ntimeline(idx)}
                                    className={`py-2 px-4 rounded-md font-semibold transition-colors duration-300 ${activeIndex === idx
                                        ? "bg-purple-900 text-white"
                                        : "bg-gray-200 text-gray-800 hover:bg-purple-700 hover:text-white"
                                        }`}
                                >
                                    {item}
                                </button>
                            )
                        )}
                    </div>

                    {/* Tab Details */}
                    <div className="sm:w-4/5">
                        {timelineData.map((term, idx) => (
                            <div
                                key={idx}
                                className={`space-y-4 transition-all duration-500 ${activeIndex === idx ? "block" : "hidden"
                                    }`}
                            >
                                <div className="bg-purple-900 text-white p-4 rounded-md font-semibold text-lg">
                                    {term.title} - ({term.subtitle})
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">Objectives</h4>
                                        <ul className="list-disc list-inside text-gray-700">
                                            {term.objectives.map((obj, i) => (
                                                <li key={i}>{obj}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Module</h4>
                                        <ul className="list-disc list-inside text-gray-700">
                                            {term.module.map((mod, i) => (
                                                <li key={i}>{mod}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Job Profile</h4>
                                        <ul className="list-disc list-inside text-gray-700">
                                            {term.jobProfile.map((job, i) => (
                                                <li key={i}>{job}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        {term.icons.map((icon, i) => (
                                            <img
                                                key={i}
                                                src={`assets/images/icons/s${idx + 1}/${icon}`}
                                                alt={icon}
                                                className="w-12 sm:w-16 h-auto"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default ADSE;
