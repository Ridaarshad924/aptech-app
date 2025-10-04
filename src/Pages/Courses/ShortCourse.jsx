import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

function ShortCourse() {
    const [courseOBJ, setCourseOBJ] = useState({
        id: 1,
        img: "assets/images/stc/office.jpg",
        title: "Office Automation",
        description:
            "Office automation refers to the implementation of technology and software solutions to streamline and simplify various administrative tasks within an office environment. It encompasses processes such as document management, data entry, scheduling, communication, and workflow automation. By reducing manual effort, improving efficiency.",
        classDuration: "2 hrs. / 3 days a week",
        courseDuration: "40 Hrs",
    });

    const data = [
        {
            id: 1,
            img: "assets/images/stc/office.jpg",
            title: "Office Automation",
            description:
                "Office automation refers to the implementation of technology and software solutions to streamline and simplify various administrative tasks within an office environment. It encompasses processes such as document management, data entry, scheduling, communication, and workflow automation. By reducing manual effort, improving efficiency.",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "40 Hrs",
        },
        {
            id: 2,
            img: "assets/images/stc/dm.jpg",
            title: "Social Media Marketing",
            description:
                "Social Media Marketing course is a comprehensive program designed to equip you with the skills and knowledge needed to excel in the dynamic world of social media. Learn how to create effective strategies, engage your target audience, optimize campaigns, and measure success. Gain practical experience through hands-on projects and case studies.",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "40 Hrs",
        },
        {
            id: 3,
            img: "assets/images/stc/ai.jpg",
            title: "AI for Everyone",
            description:
                "Artificial Intelligence (AI) is a groundbreaking technology that is revolutionizing the way we live, work, and interact with the world. It encompasses the development of machines and systems that can perform tasks that typically require human intelligence, such as speech recognition, problem-solving, and decision-making. AI has become accessible to everyone.",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "40 Hrs",
        },
        {
            id: 4,
            img: "assets/images/stc/amazon.jpg",
            title: "Amazon FBA Virtual Assistant",
            description:
                "Unlock the secrets to Amazon FBA success with our comprehensive course. Learn step-by-step strategies to start and grow a profitable e-commerce business. From product research and sourcing to listing optimization and marketing, we cover it all. Gain insider knowledge and practical skills to dominate the world of Amazon FBA.",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "40 Hrs",
        },
        {
            id: 5,
            img: "assets/images/stc/chatgpt.jpg",
            title: "Chat GPT for Developers",
            description:
                "The Chat GPT course is a comprehensive training program designed to equip learners with the skills and knowledge needed to build and deploy chatbots using OpenAI's GPT technology. Through hands-on exercises, practical examples, and expert guidance, participants will learn how to create interactive conversational agents that can engage users effectively.",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "40 Hrs",
        },
        {
            id: 6,
            img: "assets/images/stc/excel.jpg",
            title: "Advanced Excel",
            description:
                "Advanced Excel course is designed to take your spreadsheet skills to the next level. Learn advanced functions, data analysis techniques, and data visualization methods. Dive into complex formulas, pivot tables, and macros to streamline your work and increase efficiency. Gain a competitive edge in the workplace with our comprehensive training program.",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "40 Hrs",
        },
        {
            id: 7,
            img: "assets/images/stc/phplaravel.jpg",
            title: "Web Development using PHP and Laravel",
            description:
                "PHP and Laravel course is a comprehensive program designed to equip learners with the skills to create dynamic and robust web applications. Through hands-on exercises and real-world projects, participants will gain proficiency in PHP programming and harness the power of Laravel framework for efficient development.",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "40 Hrs",
        },
        {
            id: 8,
            img: "assets/images/stc/tableou.jpg",
            title: "Data Visualization foundation with Tableau",
            description:
                "Join our comprehensive Tableau course and unlock the power of data visualization. Learn hands-on techniques for creating interactive dashboards, analyzing data, and sharing insights with Tableau's intuitive interface. Enhance your analytical skills, make data-driven decisions, and gain a competitive edge in today's data-driven world.",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "40 Hrs",
        },
    ];

    function smoothScrollTo(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }

    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="relative w-full h-96 md:h-[500px]">
                <video
                    src="assets/video/olddummy.mp4"
                    poster="assets/images/placementbg.jpg"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start p-6 md:p-16 text-white">
                    <ul className="flex gap-2 text-sm mb-3">
                        <li>
                            <Link to="/" className="hover:underline">
                                <i className="fa-solid fa-house"></i>
                            </Link>
                            <span className="mx-1">/</span>
                        </li>
                        <li>
                            <Link to="/courses" className="hover:underline">
                                Courses
                            </Link>
                            <span className="mx-1">/</span>
                        </li>
                        <li>Short Courses</li>
                    </ul>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Short Courses</h1>
                    <p className="max-w-2xl text-sm md:text-base leading-relaxed">
                        Discover the power of effective communication in our dynamic short course. Enhance your verbal and written skills through interactive exercises, practical examples, and personalized feedback.
                    </p>
                </div>
            </section>

            {/* Course Cards */}
            <section className="bg-gray-50 py-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center px-4 md:px-16">
                    {data.map((e) => (
                        <div
                            key={e.id}
                            onClick={() => {
                                setCourseOBJ(e);
                                setTimeout(() => smoothScrollTo(e.id), 50);
                            }}
                            className="cursor-pointer bg-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 rounded-xl p-5 flex flex-col items-center text-center"
                        >
                            <img
                                src={e.img}
                                alt={e.title}
                                className="w-28 h-28 md:w-32 md:h-32 object-contain mb-3"
                            />
                            <h5 className="font-semibold text-center text-sm md:text-base">{e.title}</h5>
                        </div>
                    ))}
                </div>
            </section>

            {/* Course Details */}
            <section id={courseOBJ.id} className="py-12 px-4 md:px-16">
                <div className="bg-white shadow-lg rounded-2xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <img
                        src={courseOBJ.img}
                        alt={courseOBJ.title}
                        className="w-40 h-40 md:w-48 md:h-48 object-contain rounded-lg"
                    />
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-4xl font-bold mb-6">{courseOBJ.title}</h2>
                        <p className="text-gray-700 mb-6 text-justify leading-relaxed">{courseOBJ.description}</p>
                        <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
                            <div className="flex flex-col">
                                <small className="text-gray-500 mb-1">Class Duration</small>
                                <h6 className="font-medium text-gray-800">{courseOBJ.classDuration}</h6>
                            </div>
                            <div className="flex flex-col">
                                <small className="text-gray-500 mb-1">Course Duration</small>
                                <h6 className="font-medium text-gray-800">{courseOBJ.courseDuration}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default ShortCourse