import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

function HDSE() {
    const [activeIndex, setActiveIndex] = useState(0);

    const timelineTabs = [
        "CPISM",
        "DISM",
        "HDSE I",
        "HDSE II",
        "HDSE III",
        "HDSE IV",
    ];

    const ntimeline = (n) => setActiveIndex(n);

    const semesters = [
        {
            title: "CPISM - Certificate of Proficiency in Information Systems Management",
            objectives: [
                "Learn to work faster and smarter with MS Office applications.",
                "Use HTML5 / CSS3 / JavaScript to implement well-structured websites.",
                "Learn Bootstrap-Free and open-source front-end web framework for designing websites and web applications.",
                "Learn the basic principles of effective web UX/UI design.",
                "Learn SEO to rank websites organically.",
                "Develop an interactive website using latest Web technologies.",
            ],
            modules: [
                "Office Automation",
                "Building Modern Websites",
                "Bootstrap and JQuery",
                "UI/UX for Responsive Web Design",
                "Optimize Web for Search Engines",
                "Semester eProject",
            ],
            workshops: ["Adobe XD"],
            jobProfile: ["Website Developer"],
            icons: [
                "office",
                "html",
                "css",
                "js",
                "bootstrap",
                "figma",
                "seo",
            ],
        },
        {
            title: "DISM - Diploma in Information Systems Management",
            objectives: [
                "Learn the basics of Git for tracking, branching, merging, and managing code revisions",
                "Use XML & JSON to store and exchange data",
                "Understand JavaScript basics for dynamic web pages",
                "Use MySQL database",
                "Design and develop Web applications using PHP",
                "Learn Laravel Framework",
                "Design and develop a Web application using PHP",
                "Gain knowledge, skills, and attitude for successful product development",
            ],
            modules: [
                "Distributed Version Control",
                "Markup Language & JSON",
                "Programming with JavaScript",
                "Working with MySQL",
                "Dynamic Website Development using PHP",
                "Laravel Framework for Web Applications",
                "Fundamentals of Millennial Entrepreneurship",
                "Semester eProject",
            ],
            workshops: ["Adobe XD"],
            jobProfile: ["PHP Web Application Developer"],
            icons: [
                "git",
                "json",
                "XML",
                "MySQL",
                "php",
                "laravel",
            ],
        },
        {
            title: "HDSE I - Higher Diploma in Software Engineering",
            objectives: [
                "Normalize raw data into well-organized database tables in SQL Server",
                "Develop basic and advanced object-oriented applications using C#",
                "Use TypeScript for creating Angular applications.",
                "Develop Web applications implementing server-side programming using ASP.NET MVC.",
                "Develop a real-world application using .NET technologies",
            ],
            modules: [
                "Data Management with SQL Server",
                "Programming in C#",
                "Angular Applications with TypeScript",
                "Developing ASP.NET CORE MVC Web Applications",
                "Semester eProject",
            ],
            workshops: ["Rest API", "CRUD with Angular"],
            jobProfile: ["Full Stack Web Developer", "ASP .NET Core Developer"],
            icons: ["sql", "Cshaarp", "angular", "mvc", "core"],
        },
        {
            title: "HDSE II - Higher Diploma in Software Engineering II",
            objectives: [
                "Develop enterprise applications and Web services using .NET technologies on Azure",
                "Implement software development process using Agile methodology",
                "Learn to code Flutter apps using Dart",
                "Use Flutter framework for cross-platform apps",
                "Develop an App using Dart and Flutter",
            ],
            modules: [
                "Developing Microsoft Azure and Web Services",
                "Agile and DevOps",
                "Introduction to Dart Programming",
                "Application Development Using Flutter and Dart",
                "Semester eProject",
            ],
            workshops: ["React Native"],
            jobProfile: [".NET Web & Enterprise Application Developer", "Cross Platform App Developer"],
            icons: ["azure", "agile", "devops", "dart", "fluter"],
        },
        {
            title: "HDSE III - Higher Diploma in Software Engineering III",
            objectives: [
                "English: Improve reading, writing & comprehension skills",
                "Business Communication: Develop communication skills in commerce/business",
                "Technical Report Writing: Write readable technical reports",
                "Management: Learn economics, business management, and organization",
                "ERP: Develop solutions for enterprises using Oracle ERP",
            ],
            modules: [
                "Occupational Health, Safety & Environment",
                "Technical Report Writing",
                "Management",
                "Oracle ERP Essentials",
                "Oracle ERP Financials",
                "Oracle ERP Supply Chain",
                "English",
                "Business Communication",
            ],
            workshops: ["Oracle ERP Developer"],
            jobProfile: ["ERP Developer"],
            icons: ["orcacle", "cumminication", "writing", "management", "supply"],
        },
        {
            title: "HDSE IV - Higher Diploma in Software Engineering IV",
            objectives: [],
            modules: [],
            workshops: [],
            jobProfile: [],
            icons: [],
            bridgeModules: ["Islamiat & Pakistan Studies", "Applied Mathematics", "Applied Physics", "Applied Chemistry"],
        },
    ];

    return (
        <>
            <Header />
            {/* Banner Section */}
            <section className="relative w-full h-64 md:h-96">
                <video
                    poster="assets/images/ACCPAI/Banner-img.jpg"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
            </section>

            {/* Course Overview Section */}
            <section className="flex flex-col md:flex-row items-start gap-10 px-6 md:px-20 mt-10">
                <div className="md:w-1/2">
                    <img
                        src="assets/images/ACCPAI/04-600×280-01.jpg"
                        className="w-full h-full object-cover rounded-2xl shadow-lg min-h-[400px]"
                        alt="HDSE"
                    />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center space-y-4 text-gray-700">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        HIGHER DIPLOMA IN SOFTWARE ENGINEERING WITH{" "}
                        <span className="text-purple-700">INTERMEDIATE EQUIVALENCY</span>
                    </h2>
                    <p className="text-base md:text-lg">
                        ACCP is a career program designed to make you an industry-ready
                        professional, and train you in technologies shaping the future.
                    </p>
                    <p className="text-base md:text-lg">
                        Keeping in mind the latest industry requirements, the course has
                        been designed to take you on the path of Full Stack Development.
                    </p>
                    <p className="text-base md:text-lg">
                        Aptech’s HDSE program helps students learn full stack development in
                        multiple fields including Web Designing, Application development & Mobile App development.
                    </p>
                    <p className="text-purple-700 font-semibold mt-2 md:mt-4 text-lg">
                        "Now with Aptech & SBTE Qualification, students get the best of both worlds."
                    </p>
                </div>
            </section>

            {/* Timeline / Tabs Section */}
            <section className="mt-10 px-6 md:px-20">
                <p className="font-semibold text-lg mb-4">Semester</p>
                <div className="flex flex-col md:flex-row md:gap-10">
                    {/* Tab Buttons / Timeline */}
                    <div className="relative flex flex-col gap-8 md:w-1/5 items-start">
                        {/* Vertical line spanning only the buttons */}
                        <div
                            className="absolute left-7 w-[3px] bg-black"
                            style={{
                                top: '28px',
                                height: `${(timelineTabs.length) * 74 + 0}px`
                            }}
                        ></div>

                        {timelineTabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => ntimeline(index)}
                                className={`
        relative z-10 w-[60px] h-[60px] rounded-full flex items-center justify-center text-sm
        ${activeIndex === index
                                        ? "bg-[#31184D] text-white font-semibold shadow-lg"
                                        : "bg-[#444] text-white hover:bg-[#444]"}
        cursor-pointer transition
      `}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div>
                        {semesters.map((semester, idx) => (
                            <div
                                key={idx}
                                className={`${activeIndex === idx ? "block" : "hidden"} space-y-10 mt-10 md:mt-0`}
                            >
                                {/* Course Title */}
                                <div className="bg-[#31184D] text-white p-5 rounded-lg shadow-md text-xl font-bold">
                                    {semester.title}
                                </div>

                                {/* Objectives & Modules */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    {semester.objectives && semester.objectives.length > 0 && (
                                        <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
                                            <h4 className="font-semibold mb-4 text-gray-900 text-lg border-b pb-2">
                                                Objectives
                                            </h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                {semester.objectives.map((item, i) => (
                                                    <li key={i} className="hover:text-purple-800 transition">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {semester.modules && semester.modules.length > 0 && (
                                        <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
                                            <h4 className="font-semibold mb-4 text-gray-900 text-lg border-b pb-2">
                                                Modules
                                            </h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                {semester.modules.map((item, i) => (
                                                    <li key={i} className="hover:text-purple-800 transition">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Workshops */}
                                {semester.workshops && semester.workshops.length > 0 && (
                                    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
                                        <h4 className="font-semibold mb-4 text-gray-900 text-lg border-b pb-2">
                                            Workshops
                                        </h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            {semester.workshops.map((w, i) => (
                                                <li key={i} className="hover:text-purple-800 transition">
                                                    {w}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Job Profile */}
                                {semester.jobProfile && semester.jobProfile.length > 0 && (
                                    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
                                        <h4 className="font-semibold mb-4 text-gray-900 text-lg border-b pb-2">
                                            Job Profile
                                        </h4>
                                        <ul className="flex flex-wrap gap-3 mt-2">
                                            {semester.jobProfile.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full shadow-sm font-medium hover:bg-purple-200 transition"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Icons / Skills */}
                                {semester.icons && semester.icons.length > 0 && (
                                    <div className="flex flex-wrap gap-4 items-center mt-6">
                                        {semester.icons.map((icon, i) => (
                                            <div
                                                key={i}
                                                className="w-14 h-14 p-2 bg-white rounded-xl shadow-md flex items-center justify-center hover:scale-110 transition-transform"
                                            >
                                                <img
                                                    src={`assets/images/icons/s${idx + 1}/${icon}.png`}
                                                    className="w-full h-full object-contain"
                                                    alt={icon}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Bridge Modules */}
                                {semester.bridgeModules && semester.bridgeModules.length > 0 && (
                                    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
                                        <h4 className="font-semibold mb-4 text-gray-900 text-lg border-b pb-2">
                                            Bridge Modules
                                        </h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            {semester.bridgeModules.map((b, i) => (
                                                <li key={i} className="hover:text-purple-800 transition">
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default HDSE;
