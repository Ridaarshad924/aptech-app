import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

function SmartProfessional() {
    const [courseOBJ, setCourseOBJ] = useState({
        id: 1,
        img: "assets/images/sp/PHP-Laravel-MySql.jpg",
        title: "PHP Laravel MySql",
        description:
            "PHP Laravel MySQL course is a comprehensive training program designed to equip learners with the skills and knowledge needed to develop robust web applications. Through hands-on exercises and real-world projects, participants will master the Laravel framework, PHP programming, and MySQL database management, enabling them to build dynamic and scalable websites efficiently.",
        classDuration: "2 hrs. / 3 days a week",
        courseDuration: "158 Hrs",
    });

    const data = [
        {
            id: 1,
            img: "assets/images/sp/PHP-Laravel-MySql.jpg",
            title: "PHP Laravel MySql",
            description:
                "PHP Laravel MySQL course is a comprehensive training program designed to equip learners with the skills and knowledge needed to develop robust web applications. Through hands-on exercises and real-world projects, participants will master the Laravel framework, PHP programming, and MySQL database management, enabling them to build dynamic and scalable websites efficiently.",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "158 Hrs",
        },
        {
            id: 2,
            img: "assets/images/sp/dotNet-Core-MSSql-Server-C.jpg",
            title: ".Net Core MSSql Server C#",
            description:
                ".NET Core MSSQL Server C# course is a comprehensive program designed to equip learners with the skills and knowledge needed to develop robust applications using Microsoft's .NET Core framework, coupled with the power of MSSQL Server. Participants will gain hands experience in C# programming, database management, and building scalable solutions.",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "124 Hrs",
        },
        {
            id: 3,
            img: "assets/images/sp/Mean-Stack-Developer.jpg",
            title: "Mean Stack Developer",
            description:
                "Mean Stack Developer course is a comprehensive program designed to equip aspiring developers with the skills and knowledge needed to build dynamic web applications. Participants will learn the fundamentals of MongoDB, Express.js, Angular, and Node.js, gaining hands-on experience in full-stack development and creating robust, scalable, and efficient applications.",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "140 Hrs",
        },
        {
            id: 4,
            img: "assets/images/sp/Mern-Stack-Developer.jpg",
            title: "Mern Stack Developer",
            description:
                "MERN Stack Developer course is a comprehensive program designed to equip aspiring developers with the skills and knowledge needed to build full-stack web applications using the MERN (MongoDB, Express.js, React.js, Node.js) technology stack. From front-end development with React to back-end server setup with Node.js, this course covers it all.",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "140 Hrs",
        },
        {
            id: 5,
            img: "assets/images/sp/Android-Application-Development.jpg",
            title: "Android Application Development",
            description:
                "Android Application Development course is a comprehensive program designed to equip aspiring developers with the skills and knowledge needed to create high-quality Android applications. Through hands-on projects, participants will learn essential concepts such as UI design, data storage, networking, and app deployment, ensuring they are well-prepared for a successful career in Android development.",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "158 Hrs",
        },
        {
            id: 6,
            img: "assets/images/sp/Cross-Platform-Development.jpg",
            title: "Cross Platform Development",
            description:
                "Cross Platform Development course is designed to equip students with the skills and knowledge needed to develop applications that can run seamlessly on multiple platforms, such as iOS, Android, and web. Through hands-on projects and practical exercises, students will learn to leverage frameworks like React Native and Flutter to create efficient and user-friendly cross-platform apps.",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "124 Hrs",
        },
        {
            id: 7,
            img: "assets/images/sp/Web-App-Development-Python.jpg",
            title: "Web App Development Python",
            description:
                "Web App Development Python course is a comprehensive program designed to equip learners with the skills and knowledge needed to build dynamic and interactive web applications using Python. From front-end development with HTML, CSS, and JavaScript to back-end programming with Django and Flask frameworks, this course covers all aspects of web app development.",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "140 Hrs",
        },
        {
            id: 8,
            img: "assets/images/sp/Digital-Marketing-&-SEO.jpg",
            title: "Digital Marketing & SEO",
            description:
                "Digital Marketing & SEO course is a comprehensive program designed to equip students with the knowledge and skills needed to excel in the dynamic world of online marketing. From understanding search engine optimization (SEO) techniques to mastering social media marketing strategies, this course offers practical insights and hands-on experience to drive digital success.",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "140 Hrs",
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
                        <li>Smart Professionals</li>
                    </ul>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Smart Professionals
                    </h1>
                    <p className="max-w-2xl text-sm md:text-base leading-relaxed">
                        Smart Professional course is a comprehensive program designed to
                        equip individuals with the essential skills and knowledge needed
                        to excel in today's competitive professional landscape.
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
                            <h5 className="font-semibold text-center text-sm md:text-base">
                                {e.title}
                            </h5>
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
                        <h2 className="text-2xl md:text-4xl font-bold mb-6">
                            {courseOBJ.title}
                        </h2>
                        <p className="text-gray-700 mb-6 text-justify leading-relaxed">
                            {courseOBJ.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
                            <div className="flex flex-col">
                                <small className="text-gray-500 mb-1">Class Duration</small>
                                <h6 className="font-medium text-gray-800">
                                    {courseOBJ.classDuration}
                                </h6>
                            </div>
                            <div className="flex flex-col">
                                <small className="text-gray-500 mb-1">Course Duration</small>
                                <h6 className="font-medium text-gray-800">
                                    {courseOBJ.courseDuration}
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default SmartProfessional