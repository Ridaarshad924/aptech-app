import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

function Languages() {
    const [courseOBJ, setCourseOBJ] = useState({
        id: 1,
        img: "https://aptech-education.com.pk/images/english/beginner.png",
        title: "Beginners",
        description:
            "Beginners English Language Course is designed to provide a solid foundation for learners starting their English language journey. Through interactive lessons, engaging activities, and practical exercises, students will develop essential skills in speaking, listening, reading, and writing. Join us and embark on an exciting learning adventure today!",
        classDuration: "2 hrs. / 3 days a week",
        courseDuration: "60 Hrs",
    });

    const data = [
        {
            id: 1,
            img: "https://aptech-education.com.pk/images/english/beginner.png",
            title: "Beginners",
            description:
                "Beginners English Language Course is designed to provide a solid foundation for learners starting their English language journey. Through interactive lessons, engaging activities, and practical exercises, students will develop essential skills in speaking, listening, reading, and writing. Join us and embark on an exciting learning adventure today!",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "60 Hrs",
        },
        {
            id: 2,
            img: "https://aptech-education.com.pk/images/english/preintermediate.png",
            title: "Pre-Intermediate",
            description:
                "Pre-Intermediate English language course is designed for learners who have a basic understanding of English and want to further develop their skills. This comprehensive course focuses on improving grammar, vocabulary, reading, writing, listening, and speaking abilities. Through interactive lessons and engaging activities, students will gain confidence in using English in everyday situations.",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "48 Hrs",
        },
        {
            id: 3,
            img: "https://aptech-education.com.pk/images/english/intermediate.png",
            title: "Intermediate",
            description:
                "Intermediate English Language Course is designed to take your language skills to the next level. Through engaging lessons and interactive activities, you will enhance your vocabulary, grammar, and conversational abilities. Build confidence in expressing yourself fluently and accurately while exploring a wide range of topics. Join us on this exciting linguistic journey!",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "48 Hrs",
        },
        {
            id: 4,
            img: "https://aptech-education.com.pk/images/english/upperintermediate.png",
            title: "Upper Intermediate",
            description:
                "Take your English language proficiency to new heights with our Upper Intermediate English Language Course. Designed for learners seeking advanced fluency, this course focuses on refining grammar, expanding vocabulary, and honing communication skills. Engage in stimulating discussions, debates, and presentations while exploring complex topics. Elevate your language abilities and unlock endless opportunities!",
            classDuration: "2 hrs. / 3 days a week",
            courseDuration: "48 Hrs",
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
            <>
                <Header />
                {/* Page Title / Banner */}
                {/* Hero Section */}
                <section className="relative w-full h-96 md:h-[28rem]">
                    <video
                        src="assets/video/olddummy.mp4"
                        poster="assets/images/placementbg.jpg"
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 flex flex-col justify-center items-start p-6 md:p-16 text-white">
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
                            <li>Languages</li>
                        </ul>
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                            Languages
                        </h1>
                        <p className="max-w-2xl text-bold text-white">
                            Discover the art of effective communication with our dynamic English language course.
                            From mastering grammar rules to expanding vocabulary, this immersive program equips you with
                            essential language skills. Engage in interactive sessions, role plays, and practical exercises
                            to enhance fluency and confidence.
                        </p>
                    </div>
                </section>

                {/* Course Cards */}
                <section className="bg-gray-50 py-12">
                    <div className="flex flex-wrap justify-center gap-6">
                        {data.map((e) => (
                            <div
                                key={e.id}
                                onClick={() => {
                                    setCourseOBJ(e);
                                    setTimeout(() => smoothScrollTo(e.id), 50);
                                }}
                                className="cursor-pointer bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 rounded-xl p-6 w-64 flex flex-col items-center text-center"
                            >
                                <div className="w-32 h-32 mb-4">
                                    <img
                                        src={e.img}
                                        alt={e.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h5 className="font-semibold text-lg mb-2 text-gray-800">{e.title}</h5>
                                <p className="text-gray-500 text-sm">{e.description.slice(0, 80)}...</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Course Details */}
                <section id={courseOBJ.id} className="py-12 px-4 md:px-16">
                    <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 hover:shadow-2xl transition-shadow duration-300">
                        <img
                            src={courseOBJ.img}
                            alt={courseOBJ.title}
                            className="w-40 h-40 md:w-48 md:h-48 object-contain rounded-lg"
                        />
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
                                {courseOBJ.title}
                            </h2>
                            <p className="text-gray-700 mb-6 text-justify leading-relaxed">
                                {courseOBJ.description}
                            </p>
                            <div className="flex flex-col md:flex-row gap-8">
                                <div>
                                    <small className="text-gray-500">Class Duration</small>
                                    <h6 className="font-medium text-gray-800">{courseOBJ.classDuration}</h6>
                                </div>
                                <div>
                                    <small className="text-gray-500">Course Duration</small>
                                    <h6 className="font-medium text-gray-800">{courseOBJ.courseDuration}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </>
        </>
    );
}

export default Languages;
