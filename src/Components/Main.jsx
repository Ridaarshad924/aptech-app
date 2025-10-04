import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link, useNavigate } from "react-router-dom";
import AnimatedCounter from "./AnimatedCounter";

const Main = () => {
    const statsRef = useRef(null);
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCount(true);
                    observer.disconnect(); // Ek hi baar chale
                }
            },
            { threshold: 0.3 } // 30% visible hone par trigger kare
        );

        if (statsRef.current) observer.observe(statsRef.current);

        return () => observer.disconnect();
    }, []);
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    const navigate = useNavigate();

    const banners = [
        {
            id: 1,
            img: "/assets/images/home/aptech-vision-banner.jpg",
            link: "/aptech-vision-vistor",
        },
        {
            id: 2,
            img: "/assets/pass-templates/Banner.jpg",
            link: "/FreeLancersAward",
        },
        {
            id: 3,
            img: "/assets/pass-templates/VisionaryAwardsBanner.png",
            link: "/VisionaryAwards",
        },
    ];

    const navigateTo = (path) => navigate(path);

    return (
        <main className="max-w-full mx-auto md:w-full">
            {/* Hero Banner Swiper */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 2000 }}
                loop
                className={`cursor-pointer ${isSmallDevice ? "min-h-[30vh] h-[30vh]" : "min-h-[50vh] h-[75vh]"
                    } relative`}
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id} className="relative">
                        <img
                            src={banner.img}
                            alt="banner"
                            className={`w-full object-contain ${banner.id === 1 ? "cursor-pointer" : "cursor-default"
                                }`}
                            onClick={banner.id === 1 ? () => navigateTo(banner.link) : undefined}
                        />

                        {(banner.id === 2 || banner.id === 3) && (
                            <button
                                onClick={() => navigateTo(banner.link)}
                                className={`absolute ${isSmallDevice ? "bottom-[5%] left-1/2 -translate-x-1/2" : "bottom-[33%] left-[3%]"
                                    } bg-[#D79C42] text-white px-5 py-3 rounded-md text-[clamp(14px,4vw,18px)]`}
                            >
                                Nominate Yourself
                            </button>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Career Courses */}
            <section className="py-4">
                <h2 className="text-center text-3xl font-bold mb-6">
                    Career Courses For Matric & Intermediate Students
                </h2>

                {/* ACCP / HDSE */}
                <div className="flex flex-row items-center justify-center gap-4 px-4 mb-4">
                    <Link to="/courses-adse" className="rounded-xl w-full overflow-hidden">
                        <img
                            src="assets/images/ACCPAI/accp.png"
                            alt="ACN Pro"
                            className="w-full h-full object-contain rounded-xl"
                        />
                    </Link>
                    <Link to="/courses-hdse" className="rounded-xl w-full overflow-hidden">
                        <img
                            src="assets/images/ACCPAI/hdse.png"
                            alt="HDSE"
                            className="w-[97%] h-full object-contain rounded-xl"
                        />
                    </Link>
                </div>

                {/* Other Courses */}
                <div className="flex flex-col items-center gap-6 p-4">
                    <div className="rounded-xl w-full overflow-hidden">
                        <img
                            src="assets/images/home/ACN-Pro.jpg"
                            alt="ACN Pro"
                            className="w-full h-full object-contain rounded-xl"
                        />
                    </div>
                    <Link to="/courses-sp" className="rounded-xl w-full overflow-hidden">
                        <img
                            src="assets/images/home/Smart-Pro.png"
                            alt="Smart Pro"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </Link>
                    <Link to="/courses-sc" className="rounded-xl w-full overflow-hidden">
                        <img
                            src="assets/images/home/Short Course.png"
                            alt="Short Course"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </Link>
                    <Link to="/courses-lg" className="rounded-xl w-full overflow-hidden">
                        <img
                            src="assets/images/home/English LANGUAGES.png"
                            alt="English Languages"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </Link>
                    <Link to="/" className="rounded-xl w-full overflow-hidden">
                        <img
                            src="assets/images/home/ACCi-Aibanner.jpg"
                            alt="ACCi AI Banner"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </Link>
                </div>
            </section>

            {/* Aptech Stats */}
            <section
                ref={statsRef}
                className="py-16 px-4 bg-[#001236] text-white text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Aptech is recognized in major cities across the globe.
                </h2>

                <div className="flex flex-wrap justify-center gap-12">
                    {/* Card 1 */}
                    <div className="bg-[#00184d] shadow-lg rounded-2xl px-10 py-8 min-w-[180px] transition-transform hover:scale-105">
                        <AnimatedCounter
                            target={5}
                            startAnimation={startCount}
                        />
                        <h3 className="text-xl md:text-2xl font-semibold mt-3">Continents</h3>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#00184d] shadow-lg rounded-2xl px-10 py-8 min-w-[180px] transition-transform hover:scale-105">
                        <AnimatedCounter
                            target={40}
                            startAnimation={startCount}
                        />
                        <h3 className="text-xl md:text-2xl font-semibold mt-3">Countries</h3>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#00184d] shadow-lg rounded-2xl px-10 py-8 min-w-[180px] transition-transform hover:scale-105">
                        <AnimatedCounter
                            target={2500}
                            startAnimation={startCount}
                        />
                        <h3 className="text-xl md:text-2xl font-semibold mt-3">Centers</h3>
                    </div>
                </div>
            </section>

            {/* YouTube Video */}
            <section className="px-4 py-6">
                <iframe
                    className="w-full h-[500px] rounded-lg"
                    src="https://www.youtube.com/embed/5VgJCjRPMm0?si=U505UBTM2swScn8W"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </section>

            {/* Testimonials */}
            <section className="px-4 py-16 bg-gray-50">
                <div className="text-center mb-12">
                    <span className="block text-lg text-[#D79C42] font-medium">
                        Testimonials
                    </span>
                    <h2 className="text-2xl font-semibold">
                        Aptech creates values across the world.
                    </h2>
                </div>

                <Swiper
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination]}
                    className="max-w-4xl mx-auto"
                >
                    {[
                        {
                            text: "Aptech played an important role in my career development...",
                            name: "Abdul Haseeb Shaikh",
                            role: "CEO at Cloud Mesh Solutions Pvt. Ltd.",
                            img: "assets/images/alumni/new/new.jpeg",
                        },
                        {
                            text: "Aptech Learning laid the foundation for my success...",
                            name: "Ammar Akhter",
                            role: "CEO - Final Rentals",
                            img: "assets/images/alumni/new/AMMAR-AKHTER.png",
                        },
                        {
                            text: "Aptech Learning played a crucial role in my professional development...",
                            name: "Farooq Rathod",
                            role: "Founder of Technology Yours",
                            img: "assets/images/alumni/new/FAROOQ-RATHOD.png",
                        },
                        {
                            text: "Aptech Learning provided the technical expertise I needed...",
                            name: "Omar Admin",
                            role: "CEO - Empire Technologies",
                            img: "assets/images/alumni/new/Omar-admani.png",
                        },
                        {
                            text: "Aptech Learning was the catalyst for my career in technology...",
                            name: "Sidra Batool",
                            role: "The Tech Creators",
                            img: "assets/images/alumni/new/Sidra-Batool.png",
                        },
                    ].map((testimonial, i) => (
                        <SwiperSlide key={i}>
                            <div className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-md p-8 rounded-2xl max-w-3xl mx-auto text-center md:text-left border-black border-1">
                                <img
                                    src={testimonial.img}
                                    alt={testimonial.name}
                                    className="w-28 h-28 object-cover rounded-full shadow-md"
                                />
                                <div>
                                    <p className="text-gray-700 italic mb-4 text-lg">
                                        “{testimonial.text}”
                                    </p>
                                    <h6 className="font-semibold text-xl">{testimonial.name}</h6>
                                    <span className="text-sm text-gray-500">{testimonial.role}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </main>
    );
};

export default Main;
