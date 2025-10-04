import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import IMG1 from '/assets/images/placement/icons/1.png'
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Placement() {

    const data = [
        {
            id: 1,
            name: 'Aashir Irfan',
            comapnyName: 'Systems Limited',
            designation: 'Dot Net Developer',
            image: 'assets/images/placement/Ashir.png'
        },
        {
            id: 2,
            name: 'Adil Kamal',
            comapnyName: 'Invision custom solutions',
            designation: 'Senior Dot Net Developer & Team Lead',
            image: 'assets/images/placement/Asset_2.png'
        },
        {
            id: 3,
            name: 'Syed Shumail Mehdi',
            comapnyName: '4S Advisory',
            designation: 'Salesforce consultant',
            image: 'assets/images/placement/Asset_3.png'
        },
        {
            id: 4,
            name: 'Muhammad Asim',
            comapnyName: 'Code Four Client',
            designation: 'Full Stack Dot Net Developer',
            image: 'assets/images/placement/Muhammad_Asim.jpg'
        },
        {
            id: 5,
            name: 'Syed Muhammad Kashif Faraz Ali',
            comapnyName: 'RA Group',
            designation: 'CTO & System Analyst',
            image: 'assets/images/placement/Asset_4.png'
        },
        {
            id: 6,
            name: 'Muhammad Ali Quddus',
            comapnyName: 'Abtach LTD',
            designation: 'React Native Developer',
            image: 'assets/images/placement/Muhammad Ali Quddus (2).png'
        },
        {
            id: 7,
            name: 'Waleed Ul Haque',
            comapnyName: 'Utopia Industries Pvt Ltd',
            designation: 'SQA and Project Coordinator',
            image: 'assets/images/placement/Waleed ul Haque.jpg'
        },

        {
            id: 8,
            name: 'Sheikh Huzaifa Ali',
            comapnyName: 'Softologics',
            designation: 'PHP Developer',
            image: 'assets/images/placement/Sheikh_Huzaifa_Ali.jpg'
        },
        {
            id: 9,
            name: 'Zainuddin Mughal',
            comapnyName: 'TAQWA Apps',
            designation: 'Front-End Developer',
            image: 'assets/images/placement/Zainuddin.jpg'
        },
        {
            id: 10,
            name: 'Zohaib Khan',
            comapnyName: '360 Tech Solution',
            designation: 'Senior PHP Developer',
            image: 'assets/images/placement/Zohaib_khan.jpg'
        },
    ];

    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="relative h-[90vh] overflow-hidden">
                <video
                    src="assets/video/Placement.mp4"
                    poster="assets/images/placementthumbnail1.jpg"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/40 p-4">
                    <h1 className="text-4xl font-bold mb-4">Aptech Placement</h1>
                    <p className="max-w-xl">Aptech Computer Education's Pakistan helps companies find talented candidates.</p>
                </div>
            </section>

            {/* Breadcrumb */}
            <ul className="flex gap-2 text-gray-600 mt-4 ml-4">
                <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                        <i className="fa-solid fa-house"></i>
                    </Link>
                </li>
                <li>/ Placement</li>
            </ul>

            {/* Placement Assistance Section */}
            <section className="bg-gray-50 py-12 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-800">
                        Placement Assistance
                    </h2>
                    <p className="text-gray-600 text-lg sm:text-xl mb-12 max-w-3xl mx-auto">
                        Our active Placements Cell ensures students meet industry expectations
                        while collaborating with leading IT companies to provide high-quality
                        placement support.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center hover:scale-105 transform transition duration-300">
                            <div className="w-28 h-28 flex items-center justify-center bg-white shadow-lg rounded-full mb-4">
                                <img
                                    src="https://www.acte.in/wp-content/uploads/2022/12/Software-Placement-Training.png"
                                    alt="Placement Workshops"
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                            <p className="text-md font-semibold text-gray-700 text-center">
                                Placement Workshops
                            </p>
                        </div>

                        <div className="flex flex-col items-center hover:scale-105 transform transition duration-300">
                            <div className="w-28 h-28 flex items-center justify-center bg-white shadow-lg rounded-full mb-4">
                                <img src={IMG1} alt="Soft Skills Sessions" className="w-16 h-16 object-contain" />
                            </div>
                            <p className="text-md font-semibold text-gray-700 text-center">
                                Soft Skills Sessions
                            </p>
                        </div>

                        <div className="flex flex-col items-center hover:scale-105 transform transition duration-300">
                            <div className="w-28 h-28 flex items-center justify-center bg-white shadow-lg rounded-full mb-4">
                                <img
                                    src="https://repository-images.githubusercontent.com/350654988/57b97800-8ef0-11eb-849b-f4ff2b49dda1"
                                    alt="Interview Sessions"
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                            <p className="text-md font-semibold text-gray-700 text-center">
                                Interview Sessions
                            </p>
                        </div>

                        <div className="flex flex-col items-center hover:scale-105 transform transition duration-300">
                            <div className="w-28 h-28 flex items-center justify-center bg-white shadow-lg rounded-full mb-4">
                                <img
                                    src="https://www.abhyaz.com/Undergraduate-1--1.png"
                                    alt="Semester Projects"
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                            <p className="text-md font-semibold text-gray-700 text-center">
                                Semester Projects
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recruiters Section */}
            <section className="py-12 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold mb-4 text-gray-800">Our Recruiters</h2>
                    <p className="mb-10 text-gray-600 text-lg max-w-3xl mx-auto">
                        Aptech Computer Education's Placements Team helps companies find talented candidates
                        for their IT & software requirements.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6">
                        {[...Array(13)].map((_, i) => (
                            <div
                                key={i}
                                className="flex justify-center items-center p-3 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
                            >
                                <img
                                    src={`assets/images/partners/partner${i + 1}.jpg`}
                                    alt={`Partner ${i + 1}`}
                                    className="h-16 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Counts Section */}
            <section className="text-center py-12 bg-gray-50">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-gray-800">
                    Aptech covers every major city in the world
                </h2>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-10">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 w-60">
                        <div className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-2">87K+</div>
                        <p className="text-gray-600 font-medium">Placements</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 w-60">
                        <div className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-2">1400+</div>
                        <p className="text-gray-600 font-medium">Recruitment Partners</p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-3 text-lg sm:text-xl font-semibold text-gray-700">
                    <span>
                        <span className="text-green-500">36</span> centers across
                    </span>
                    <img src="assets/images/pakistan-icon.png" alt="Pakistan" className="h-6 sm:h-8" />
                    <span>Pakistan</span>
                </div>
            </section>

            {/* Top Placements */}
            <section className="bg-yellow-50 py-12 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-gray-800">
                        Top Placements
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {data.map((e) => (
                            <div
                                key={e.id}
                                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
                            >
                                <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-yellow-400">
                                    <img
                                        src={e.image}
                                        alt={e.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h4 className="font-semibold text-lg sm:text-xl text-gray-800 mb-1">{e.name}</h4>
                                <p className="text-sm sm:text-base text-gray-600 mb-1">{e.comapnyName}</p>
                                <p className="text-sm sm:text-base text-gray-500">{e.designation}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-12 px-4 bg-gray-50">
                <div className="text-center mb-10">
                    <span className="text-gray-500 uppercase text-sm tracking-widest">Testimonials</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-gray-800">
                        Aptech creates values across the world.
                    </h2>
                </div>

                <Swiper
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination]}
                    className="max-w-4xl mx-auto py-8"
                >
                    {[
                        {
                            img: "assets/images/test/aonali.jpg",
                            name: "AON ALI SIDDIQUI",
                            title: "Application Business Manager",
                            text: "I feel proud to mention that I am graduate of first batch of Aptech in Pakistan. When I joined Aptech, I was never clear about my career but during three years of Aptech program, I got enough hands-on experience and training..."
                        },
                        {
                            img: "assets/images/test/ALISHAN.jpg",
                            name: "ALISHAN",
                            title: "Chief Information Officer GSE Solutions, Pakistan",
                            text: "I have been able to pursue my dream of launching a career in software development. With a team of great mentors and a promising faculty, I became confident that specialization in ASP.NET was just the right initiative for me..."
                        },
                        {
                            img: "assets/images/test/TAYYAB.jpg",
                            name: "TAYYAB FAYYAZ",
                            title: "Software Developer 10 Pearls",
                            text: "I have done ACCP Program from Aptech Pakistan. During the study I was doing practice on different projects in the supervision of faculty members. This practical and course outline kept me up-to-date with industry relevant technologies..."
                        },
                    ].map((testimonial, i) => (
                        <SwiperSlide key={i}>
                            <div className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-lg p-8 rounded-2xl max-w-3xl mx-auto text-center md:text-left border border-gray-200">
                                <img
                                    src={testimonial.img}
                                    alt={testimonial.name}
                                    className="w-28 h-28 object-cover rounded-full shadow-md border-4 border-yellow-500"
                                />
                                <div>
                                    <p className="text-gray-700 italic mb-4 text-lg">
                                        <span className="text-yellow-400">“</span>
                                        {testimonial.text}
                                        <span className="text-yellow-400">”</span>
                                    </p>
                                    <h6 className="font-semibold text-xl">{testimonial.name}</h6>
                                    <span className="text-sm text-gray-500">{testimonial.title}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>

            <Footer />
        </>
    );
}

export default Placement;
