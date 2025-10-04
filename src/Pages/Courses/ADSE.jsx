import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

function ADSE() {
    const [activeIndex, setActiveIndex] = useState(0);

    const ntimeline = (n) => {
        setActiveIndex(n);
    };

    const semesters = [
        [
            "office",
            "html",
            "css",
            "js",
            "bootstrap",
            "git",
            "seo"
        ],
        [
            "WordPress",
            "json",
            "MySQL",
            "php",
            "laravel",
            "js"
        ],
        ["sql", "Cshaarp", "ts", "mui", "core"],
        ["azure", "react", "mongodb", "node"],
        ["devops", "dart", "fluter", "python"],
        ["primer", "nlp", "python", "ml", "dl"]
    ];

    const courseTabs = [
        {
            title: "CPISM",
            fullTitle: "Term-1 CPISM - (Certificate of Proficiency in Information Systems Management)",
            objectives: [
                "Create documents, spreadsheets and presentations efficiently for analyzing and presenting data",
                "Use HTML5 /CSS3 /JavaScript to develop interactive Websites and apps",
                "Learn to build dynamic and responsive sites with Bootstrap and jQuery",
                "Learn the basics of Git for tracking, branching, merging, and managing code revisions",
                "Apply SEO principles and techniques to improve ranking of Websites",
                "Build a responsive Website based on a real-world case study"
            ],
            modules: [
                "Effective Productivity through Office Automation",
                "Progressive Website Development",
                "Bootstrap and jQuery for Responsive Web-pages",
                "Distributed Version Control",
                "Optimize Web for Search Engines",
                "eProject-Responsive Website Development"
            ],
            jobProfile: ["RESPONSIVE WEB DEVELOPER"],
            icons: semesters[0]
        },
        {
            title: "DISM",
            fullTitle: "Term-2 DISM - (Diploma in Information Systems Management)",
            objectives: [
                "Gain the skills to develop a Content Management System with WordPress",
                "Use XML and JSON to store and exchange data",
                "Use MySQL, the world’s most popular open-source database",
                "Create dynamic Web applications using PHP",
                "Learn to work with Laravel Framework to build PHP-based Web applications",
                "Understand the basic functionality of JavaScript to build dynamic Web pages and Web applications",
                "Develop a real-world Web application using PHP and Laravel Framework",
                "Gain the foundational skills to become a millennial entrepreneur"
            ],
            modules: [
                "Build and Manage Websites with CMS",
                "Data Processing with XML and JSON",
                "Working with MySQL",
                "Navigating Dynamic Web Development with PHP",
                "Leveraging Laravel Framework for Web Development",
                "Programming with JavaScript",
                "eProject-PHP Web Application Development",
                "A Millennials Guide to Entrepreneurship"
            ],
            jobProfile: ["PHP DEVELOPER"],
            icons: semesters[1]
        },
        {
            title: "HDSE I",
            fullTitle: "Term-3 HDSE I - (Higher Diploma in Software Engineering)",
            objectives: [
                "Normalize raw data into well organized database tables in SQL Server",
                "Develop basic and advanced object-oriented applications using C#",
                "Leverage the functionality of TypeScript to build Web applications",
                "Take your project to the next level with Material UI",
                "Develop advanced ASP NET MVC applications using NET Framework tools and technologies",
                "Develop a real-world Web application using latest .NET technologies"
            ],
            modules: [
                "Effective Data Solutions with SQL Server",
                "Proficient Programming with C#",
                "Building Applications with TypeScript",
                "Material UI",
                "Building Robust Web Applications with ASP.NET CORE MVC",
                "eProject-.NET Web Application Development"
            ],
            jobProfile: ["FULL STACK WEB DEVELOPER", "ASP .NET CORE DEVELOPER"],
            icons: semesters[2]
        },
        {
            title: "HDSE II",
            fullTitle: "Term-4 HDSE II - (Higher Diploma in Software Engineering II)",
            objectives: [
                "Learn to build enterprise Web applications with Microsoft Azure",
                "Gain expert frontend development skills with ReactJs",
                "Understand MongoDB concepts, features, architecture and data model and learn to work with open-source NoSQL databases",
                "Write server-side applications using Node.Js",
                "Learn to build real world full stack apps",
                "Develop a full stack Web application using MERN"
            ],
            modules: [
                "Developing Microsoft Azure Applications",
                "Frontend Web Development with ReactJS",
                "Managing Large DataSets with MongoDB",
                "Server-side Programming with NodeJS",
                "Building Full Stack Applications",
                "eProject-Full Stack MERN Applications"
            ],
            jobProfile: ["WEB APPLICATION DEVELOPER", "FULL STACK MERN DEVELOPER"],
            icons: semesters[3]
        },
        {
            title: "ADSE I",
            fullTitle: "Term-5 ADSE I - (Advance Diploma in Software Engineering)",
            objectives: [
                "Implement software development process using Agile & DevOps methodologies",
                "Develop web and mobile apps as well as server and desktop applications using Dart programming language",
                "Build cross platform apps using Flutter Framework and Dart language",
                "Develop applications using Python language",
                "Gain an introduction to Anaconda, Jupyter Notebook, and Google Collab for data science coding and data visualization",
                "Develop a Cross Platform App using Dart and Flutter"
            ],
            modules: [
                "Agile and DevOps",
                "Dart Programming",
                "Cross-Platform App Development with Flutter and Dart",
                "Application Based Programming in Python",
                "Data Science with Python",
                "eProject-Cross Platform App Development"
            ],
            jobProfile: ["CROSS-PLATFORM APP DEVELOPER"],
            icons: semesters[4]
        },
        {
            title: "ADSE II",
            fullTitle: "Term-6 ADSE II - (Advance Diploma in Software Engineering)",
            objectives: [
                "Gain an understanding of AI",
                "Gain knowledge in NLP and learn the use of AI in NLP",
                "Use important building blocks of AI & ML with Python, make data modelling decisions, interpret output of the algorithms, and validate results",
                "Master ML concepts and techniques including supervised and unsupervised learning mathematical and heuristic aspects, and hands on modeling to develop AI algorithms",
                "Master deep learning concepts and TensorFlow open-source framework, implement deep learning algorithms, and build ANN (Artificial Neural Networks)",
                "Develop a real-world Capstone project on recommendation engine and perform customer churn prediction"
            ],
            modules: [
                "AI Primer",
                "AI Applications of NLP",
                "AI and ML Mastery with Python",
                "Applied Machine Learning using Python",
                "Deep Learning using Neural Networks",
                "Capstone Project-Recommendation Engine and Customer Churn Prediction"
            ],
            jobProfile: ["DATA ANALYST", "AI DEVELOPER", "ML DEVELOPER"],
            icons: semesters[5]
        }
    ];

    return (
        <>
            <Header />
            {/* Video Section */}
            <section className="relative w-full h-64 md:h-96">
                <video
                    poster="/assets/images/ACCPAI/Banner-img.jpg"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
            </section>

            {/* Course Intro */}
            <section className="px-6 md:px-20 mt-16">
                <div className="flex flex-col md:flex-row items-start gap-10">

                    {/* Image */}
                    <div className="md:w-1/2 flex-shrink-0">
                        <img
                            src="/assets/images/ACCPAI/814×450.png"
                            className="w-full h-full object-cover rounded-2xl shadow-lg min-h-[400px]"
                            alt="ADSE"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
                        <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                            ADSE - Advance Diploma in Software Engineering
                        </h2>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            Aptech Certified Computer Professional is the best career path for anyone looking to make a career in the I.T. industry. A one-of-a-kind curriculum in Pakistan, designed to turn any willing student into a market-ready I.T. Professional.
                            <br />
                            ACCP AI is designed to produce developers of the future. Enabling students to develop applications from start to finish on many different platforms. From the very first semester, students are primed to take on job roles such as Full Stack Web Designer & Front End Developer.
                            <br />
                            Develop mobile-ready websites, create enterprise-ready Cloud Applications, or deliver smart Web Applications; Develop Mobile Applications for both iOS & Android, or connect devices and sensors with IoT to create smart ecosystems.
                        </p>
                        <p className="text-purple-700 font-semibold text-lg md:text-xl">
                            "ACCP AI is a complete I.T. career path."
                        </p>
                    </div>

                </div>
            </section>

            {/* Tabs */}
            <section className="px-6 md:px-20 mt-10">
                <p className="font-semibold text-lg mb-6">Semester</p>

                <div className="flex flex-col md:flex-row md:gap-10">
                    {/* Tab Buttons / Timeline */}
                    <div className="relative flex flex-col gap-8 md:w-1/5 items-start">
                        {/* Vertical line spanning only the buttons */}
                        <div
                            className="absolute left-7 w-[3px] bg-black"
                            style={{
                                top: '28px',
                                height: `${(courseTabs.length) * 74 + 0}px`
                            }}
                        ></div>

                        {courseTabs.map((tab, index) => (
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
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    {/* Tab Details */}
                    <div className="md:w-3/3 space-y-10 mt-10 md:mt-0">
                        {/* Course Title */}
                        <div className="bg-[#31184D] text-white p-5 rounded-lg shadow-md text-xl font-bold">
                            {courseTabs[activeIndex].fullTitle}
                        </div>

                        {/* Objectives & Modules */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
                                <h4 className="font-semibold mb-4 text-gray-900 text-lg border-b pb-2">Objectives</h4>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    {courseTabs[activeIndex].objectives.map((item, i) => (
                                        <li key={i} className="hover:text-purple-800 transition">{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
                                <h4 className="font-semibold mb-4 text-gray-900 text-lg border-b pb-2">Modules</h4>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    {courseTabs[activeIndex].modules.map((item, i) => (
                                        <li key={i} className="hover:text-purple-800 transition">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Job Profile */}
                        <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
                            <h4 className="font-semibold mb-4 text-gray-900 text-lg border-b pb-2">Job Profile</h4>
                            <ul className="flex flex-wrap gap-3 mt-2">
                                {courseTabs[activeIndex].jobProfile.map((item, i) => (
                                    <li
                                        key={i}
                                        className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full shadow-sm font-medium hover:bg-purple-200 transition"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Icons / Skills */}
                        <div className="flex flex-wrap gap-4 items-center mt-6">
                            {courseTabs[activeIndex].icons.map((icon, i) => (
                                <div key={i} className="w-14 h-14 p-2 bg-white rounded-xl shadow-md flex items-center justify-center hover:scale-110 transition-transform">
                                    <img
                                        src={`/assets/images/icons/s${activeIndex + 1}/${icon}.png`}
                                        className="w-full h-full object-contain"
                                        alt={icon}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}

export default ADSE;
