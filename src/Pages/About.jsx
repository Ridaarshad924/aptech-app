import { Link } from "react-router-dom";
import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function About() {
    return (
        <>
            <Header />
            {/* Top Section */}
            <section className="relative flex flex-col md:flex-row items-start justify-between py-24 px-8 md:px-20 bg-white">
                {/* ✅ Text */}
                <div className="order-2 md:order-1 w-full md:w-3/5 text-left mb-10 md:mb-0 md:pr-10">
                    <ul className="flex items-center gap-2 mb-6">
                        <li>
                            <Link to="/" className="text-gray-600 hover:text-green-600">
                                <i className="fa-solid fa-house"></i>
                            </Link>
                        </li>
                        <li className="text-gray-500">About Aptech</li>
                    </ul>

                    <p className="text-black text-lg leading-8 mt-6">
                        Aptech Pakistan is a premier institute for technical education, dedicated to providing students with the knowledge and skills they need to succeed in the ever-evolving world of technology. With over 30 years of experience in designing courses and providing top-notch education to students, Aptech Pakistan is the go-to choice for students who want to excel in their careers.
                    </p>

                    <p className="text-black text-lg leading-8 mt-6">
                        At Aptech Pakistan, we offer a wide range of technical education courses, including Information Technology, Multimedia & Animation, Hardware & Networking, and Aviation & Hospitality. Our courses are designed to provide students with a rigorous and challenging learning experience that prepares them for the real-world challenges they will face in their careers.
                    </p>
                </div>

                {/* ✅ Image with marquee-like animation */}
                <div className="order-1 md:order-2 w-full md:w-2/5 flex justify-center md:justify-end mb-10 md:mb-0">
                    <div className="relative w-full max-w-[450px] aspect-square rounded-full shadow-[inset_-20px_-20px_50px_2px_rgba(0,0,0,0.1)] overflow-hidden flex items-center justify-start">

                        {/* ✅ Map marquee background */}
                        <div
                            className="absolute top-0 left-0 w-[200%] h-full animate-marquee"
                            style={{
                                backgroundImage: `url('/assets/images/about/map.png')`,
                                backgroundRepeat: 'repeat-x',
                                backgroundSize: 'cover',
                            }}
                        ></div>

                        {/* ✅ Optional overlay for white shade or circular mask */}
                        <div className="absolute top-0 left-0 w-full h-full bg-white/0 rounded-full"></div>

                    </div>
                </div>
            </section>


            {/* Aptech Pakistan Section */}
            <section className="aboutPage bg-gray-100 py-8 px-8 flex flex-col md:flex-row items-center gap-8">
                <div className="aboutFigure aboutFigure2 w-full md:w-1/2 flex justify-start">
                    <img
                        src="assets/images/pakistan.png"
                        alt=""
                        className="w-4/5 mx-auto object-contain"
                    />
                </div>
                <div className="aboutText max-w-2xl text-left">
                    <h2 className="title2 title3 text-3xl font-semibold mb-4">
                        Aptech Pakistan
                    </h2>
                    <p className="text-black text-lg leading-7 font-normal mb-4">
                        Welcome to Aptech Pakistan, the premier institute for technical
                        education in the country. We are dedicated to providing students
                        with the knowledge and skills they need to succeed in the
                        ever-evolving world of technology. Whether you are just starting
                        your career or looking to enhance your skills, we have a program
                        that is right for you.
                    </p>
                    <p className="text-black text-lg leading-7 font-normal">
                        Our programs are designed to provide students with a rigorous and
                        challenging learning experience that prepares them for the
                        real-world challenges they will face in their careers. Our
                        instructors are highly experienced and knowledgeable in their
                        respective fields, and they use the latest teaching methods and
                        technologies to ensure that students get the best possible learning
                        experience.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="aboutSection py-20 px-6 md:px-16 bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <div className="aboutText flex-1 min-w-[300px] text-left">
                    <h2 className="text-4xl font-bold text-yellow-500 mb-6">🎯 Our Mission</h2>

                    <p className="text-gray-700 text-lg leading-8 mb-5">
                        Our mission is to <span className="font-semibold text-yellow-500">empower Pakistan through technology.</span>
                        I.T., when rightly employed, leads to productivity improvements and prosperity at individual, organizational, societal, national, and global levels.
                    </p>

                    <p className="text-gray-700 text-lg leading-8 mb-5">
                        Aptech has embarked on a <span className="font-semibold">business excellence initiative</span> and is
                        investing in developing competencies to deliver superior quality with total customer orientation.
                    </p>

                    <p className="text-gray-700 text-lg leading-8">
                        We are committed to creating impactful change through knowledge, skills, and innovation — building a
                        future-ready workforce for tomorrow's challenges.
                    </p>
                </div>

                {/* Mission Image */}
                <div className="aboutImage flex-1 min-w-[280px] text-center">
                    <img
                        src="assets\images\siriqbal.jpg"
                        alt="Sir Iqbal"
                        className="w-80 h-80 md:w-96 md:h-96 rounded-2xl shadow-lg object-cover mx-auto transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                    />
                    <p className="mt-4 text-gray-600 text-lg font-medium">Sir Iqbal — Visionary Leader</p>
                </div>
            </section>

            {/* Global Presence Section */}
            <section className="aptechCounts py-16 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    {/* Main Heading */}
                    <h2 className="text-3xl font-bold mb-12 text-gray-800">
                        Aptech covers every major city in the world.
                    </h2>

                    {/* Counts Row */}
                    <div className="flex flex-wrap justify-center gap-12">
                        {/* Item */}
                        <div className="countItems text-center min-w-[120px] transform transition duration-300 hover:scale-110">
                            <div className="num text-5xl font-extrabold text-green-700">05</div>
                            <p className="mt-2 text-lg text-gray-700">Continents</p>
                        </div>

                        <div className="countItems text-center min-w-[120px] transform transition duration-300 hover:scale-110">
                            <div className="num text-5xl font-extrabold text-green-700">40</div>
                            <p className="mt-2 text-lg text-gray-700">Countries</p>
                        </div>

                        <div className="countItems text-center min-w-[120px] transform transition duration-300 hover:scale-110">
                            <div className="num text-5xl font-extrabold text-green-700">2500</div>
                            <p className="mt-2 text-lg text-gray-700">Centers</p>
                        </div>
                    </div>

                    {/* Pakistan Centers Info */}
                    <h2 className="mt-16 text-2xl font-semibold flex items-center justify-center gap-2 flex-wrap">
                        <span>
                            <span className="text-green-700 font-extrabold">36</span> centers across
                        </span>
                        <span className="flex items-center gap-2">
                            <img
                                src="assets/images/pakistan-icon.png"
                                alt="Pakistan"
                                className="w-6 h-6 animate-bounce"
                            />
                            <span className="text-green-700 font-semibold">Pakistan</span>
                        </span>
                    </h2>
                </div>
            </section>

            {/* Achievement Section */}
            <section className="placementSection bg-gray-50 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                        🏆 Achievement
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 leading-8 mb-16">
                        Aptech brings to the table over 25 years of experience in training, specializing in solving business challenges in a competitive market. Our rapid growth has led the company to achieve several milestones worldwide.
                    </p>

                    <div className="space-y-24">

                        {/* 1st Achievement */}
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 text-center md:text-left">
                                <h4 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                                    International Star for Leadership In Quality Award (ISLQ)
                                </h4>
                                <p className="text-gray-700 leading-7 md:leading-8 text-lg">
                                    9th April, 2017 was a historic day for Aptech Computer Education Pakistan, receiving the first International “International Star for Leadership in Quality” award at the BID convention in Paris. Delegates from 5 continents, 27 countries, and over 50 companies celebrated this remarkable achievement.
                                </p>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <img
                                    src="https://aptech-education.com.pk/images/award.jpg"
                                    alt="ISLQ Award"
                                    className="w-full max-w-sm rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* 2nd Achievement */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                            <div className="flex-1 text-center md:text-left">
                                <h4 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                                    Pioneer in Technical Training
                                </h4>
                                <p className="text-gray-700 leading-7 md:leading-8 text-lg">
                                    With more than 2 decades of experience since 1986, Aptech has trained over 6.4 million students, making it a global leader in technical education.
                                </p>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <img
                                    src="https://aptech-education.com.pk/images/aboutimg.jpg"
                                    alt="Aptech Students"
                                    className="w-full max-w-sm rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Awards List */}
                        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h4 className="text-2xl font-semibold mb-6 text-gray-800">🏆 Awards Won by Aptech Pakistan</h4>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li><span className="font-semibold">(2018)</span> - Brands of the Year</li>
                                <li><span className="font-semibold">(2017)</span> - International Star for Leadership in Quality</li>
                                <li><span className="font-semibold">(2016)</span> - Who's Who Award</li>
                                <li><span className="font-semibold">(2014)</span> - Brand Scientist Award</li>
                                <li><span className="font-semibold">(2013)</span> - Best Achievement at APTECH World Leadership Summit, Thailand</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default About;
