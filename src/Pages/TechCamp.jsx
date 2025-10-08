import React from 'react'
import { useMediaQuery } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function TechCamp() {

    const data = [
        {
            id: 1,
            img: "assets/images/ATC/Asset 1.png",
            title: "Digital Marketing With SEO",
            list: [
                "SEO Fundamentals and Best Practices",
                "Content Marketing Strategy",
                "Social Media Marketing Integration",
                "Analytics and Reporting",
                "Emerging SEO Trends and Practices",
            ],
            courseDuration: "4 Months",
        },
        {
            id: 2,
            img: "assets/images/ATC/Asset 2.png",
            title: "Power BI",
            description: "",
            list: [
                "Data Preparation and Modeling",
                "Creating Interactive Dashboards",
                "Implementing Advanced Visualizations",
            ],
            courseDuration: "2 Months",
        },
        {
            id: 2,
            img: "assets/images/ATC/Asset 3.png",
            title: "Tableau",
            description: "",
            list: [
                "Tableau Interface and Data Connectivity",
                "Creating Interactive Dashboards",
                "Visual Best Practices",
                "Sharing Insights and Collaborative Analytics",
            ],
            courseDuration: "2 Months",
        },
        {
            id: 3,
            img: "assets/images/ATC/Asset 4.png",
            title: "Prompt Enginnering for Generation AI",
            description: "",
            list: [
                "Advanced Prompt Crafting",
                "Model Fine-Tuning",
                "Creative Problem-Solving",
                "Real-World Application",
            ],
            courseDuration: "1 Months",
        },
        {
            id: 4,
            img: "assets/images/ATC/Asset 5.png",
            description: "",
            title: "Data Analysis",
            list: [
                "Advanced Excel Functions and Formulas",
                "Data Cleaning and Preparation",
                "PivotTables and PivotCharts",
                "Data Visualization Techniques",
                "Forecasting and Analysis",
            ],
            courseDuration: "2 Months",
        },
        {
            id: 5,
            img: "assets/images/ATC/Asset 6.png",
            description: "",
            title: "VUE.JS",
            list: [
                "Understanding Vue.js Fundamentals",
                "Building Single Page Applications (SPAs)",
                "State Management with Vuex",
            ],
            courseDuration: "1 Month",
        },
        {
            id: 6,
            img: "assets/images/ATC/Asset 7.png",
            description: "",
            title: "Spoken English",
            list: [
                "Interactive Learning",
                "Engaging Activities",
                "Practical Exercises",
            ],
            courseDuration: "2 Month",
        },
        {
            id: 7,
            img: "assets/images/ATC/Asset 8.png",
            title: "Web Development Using ASP.Net",
            description: "",
            list: [
                "Understanding MVC Architecture",
                "Building Models, Views, and Controllers",
                "Working with Entity Framework",
                "Implementing Security and Authentication",
            ],
            courseDuration: "2 Months",
        },
        {
            id: 8,
            img: "assets/images/ATC/Asset 9.png",
            description: "",
            title: "Shopify",
            list: [
                "Setting Up Shopify Stores",
                "Customizing Themes and Layouts",
                "Managing Orders and Payments",
                "Optimizing for Conversion and SEO",
            ],
            courseDuration: "1 Month",
        },

        {
            id: 8,
            img: "assets/images/ATC/Asset 10.png",
            title: "Responsive Web Design",
            description: "",
            list: [
                "HTML5 Syntax and Semantics",
                "Responsive Design Principles",
                "Enhanced Web Features",
                "Accessibility and SEO Best Practices",
                "Cross-Browser Compatibility",
            ],
            courseDuration: "3 Month",
        },

        {
            id: 8,
            img: "assets/images/ATC/Asset 11.png",
            title: "Office Automation",
            description: "",
            list: [
                "Advanced Document Formatting (Word)",
                "Complex Spreadsheet Management (Excel)",
                "Dynamic Presentations (PowerPoint)",
            ],
            courseDuration: "1 Month",
        },

        {
            id: 8,
            img: "assets/images/ATC/Asset 12.png",
            title: "Web Development Using PHP & Laravel",
            description: "",
            list: [
                "PHP Programming Fundamentals",
                "Laravel Framework Mastery",
                "Database Integration",
                "Authentication and Security",
                "API Development and RESTful Practices",
            ],
            courseDuration: "3 Month",
        },

        {
            id: 8,
            img: "assets/images/ATC/Asset 13.png",
            title: "Amazon FBA Virtual Assistant",
            description: "",
            list: [
                "FBA Fundamentals and Operations",
                "Product Sourcing and Listing",
                "Order Management and Customer Service",
                "Advertising and Marketing on Amazon",
                "Analytics and Performance Monitoring",
            ],
            courseDuration: "2 Month",
        },

        {
            id: 8,
            img: "assets/images/ATC/Asset 14.png",
            title: "Agile & DevOps",
            description: "",
            list: [
                "Understanding Agile Principles",
                "Implementing DevOps Practices",
                "Utilizing Agile Tools",
            ],
            courseDuration: "1 Month",
        },

        {
            id: 8,
            img: "assets/images/ATC/Asset 15.png",
            title: "Autocad",
            description: "",
            list: [
                "Understanding AutoCAD Interface and Commands",
                "Precision Drawing",
                "2D Drafting and Annotation",
                "3D Modeling",
                "Preparation and Plotting of Drawings",
            ],
            courseDuration: "2 Month",
        },

        {
            id: 8,
            img: "assets/images/ATC/Asset 16.png",
            title: "Content Management System",
            description: "",
            list: [
                "WordPress Fundamentals",
                "Theme Selection and Customization",
                "Plugin Management",
                "Content Creation and Management",
                "Website Maintenance and Security",
            ],
            courseDuration: "1 Month",
        },
    ];

    const navigate = useNavigate();
    const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");

    const handleNavigate = () => {
        navigate("/");
    };

    return (
        <>
            <Header />
            <main>
                {/* Page Title / Banner */}
                <section
                    className={`relative overflow-hidden`}
                    style={{ height: isSmallDevice ? "150px" : "510px", }}
                >
                    <video
                        src=""
                        poster="assets/images/ATC/b2.jpg"
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    />
                </section>

                {/* Courses Grid */}
                <section className="bg-white py-8">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                            {data.map((course) => (
                                <div
                                    key={course.id}
                                    className="relative bg-white shadow-lg rounded-lg p-4 w-72 hover:shadow-xl transition cursor-pointer flex flex-col items-center"
                                >
                                    {/* Image */}
                                    <div className="h-24 flex justify-center items-center mb-4">
                                        <img
                                            src={course.img}
                                            alt={course.title}
                                            className="h-full object-contain"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h6 className="text-center font-semibold mb-2">{course.title}</h6>

                                    {/* List */}
                                    <ul className="mb-4 list-disc list-inside text-sm space-y-1">
                                        {course.list.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>

                                    {/* Apply Now Button */}
                                    <button
                                        onClick={handleNavigate}
                                        className="mt-auto w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md text-sm transition"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default TechCamp;
