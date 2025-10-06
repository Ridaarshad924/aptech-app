import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { useMediaQuery } from "@uidotdev/usehooks";
import Header from "../Components/Header";

function Alumni() {
    const [activeTab, setActiveTab] = useState("cxo");
    const [activeItem, setActiveItem] = useState(null);
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    const [isactive, setActive] = useState(2022_23);

    useEffect(() => {
        const tabLoad = (n) => {
            const filterDetailsTab = document.querySelectorAll("#centreFilterDetails .filterItem");
            filterDetailsTab.forEach((tab) => {
                tab.classList.add("display-0");
            });
            if (filterDetailsTab[n]) {
                filterDetailsTab[n].classList.remove("display-0");
            }
        };
        tabLoad(0);

        const menu = document.querySelector(".menutab");
        const menuBorder = menu?.querySelector(".menu__border");
        const menuBorder2 = menu?.querySelector(".menu__border2");
        const menuItems = menu?.querySelectorAll(".menu__item");

        function clickItem(item, index) {
            menu?.style.removeProperty("--timeOut");
            if (activeItem === item) return;

            menuItems?.forEach((el) => {
                el.classList.remove("active");
            });
            item.classList.add("active");
            tabLoad(index);
            setActiveItem(item);
            offsetMenuBorder(item, menuBorder, menuBorder2);
        }

        function offsetMenuBorder(element, menuBorder, menuBorder2) {
            const offsetActiveItem = element.getBoundingClientRect();
            const left = Math.floor(
                offsetActiveItem.left -
                (menu?.offsetLeft || 0) -
                (menuBorder.offsetWidth - offsetActiveItem.width) / 2
            );
            menuBorder.style.transform = `scale(1) translate3d(${left}px, 0 , 0)`;
            menuBorder2.style.transform = `scale(1) scaleY(-1) translate3d(${left}px, 0 , 0)`;
        }

        if (menuItems) {
            menuItems.forEach((item, index) => {
                item.addEventListener("click", () => clickItem(item, index));
            });
        }

        tabLoad(0);
    }, [activeItem]);

    const cxo = [
        {
            id: 1,
            img: "assets/images/alumni/star/44.png",
            name: "Zahid Hussain Chihpa",
            companyLogo: "assets/images/ceo/islam360.png",
            description:
                '"Zahid Hussain Chihpa" are accomplished graduates who have excelled in their fields, serving as inspirations for current students and testaments to the institution squality.',
        },
        {
            id: 2,
            img: "assets/images/alumni/star/7.png",
            name: "Faizan Raza",
            companyLogo: "assets/images/ceo/1_.jpeg",
            description:
                '"Faizan Raza" are standout graduates who ve achieved prominence, motivating others with their success in diverse areas like business, science, and the arts.',
        },
        {
            id: 3,
            img: "assets/images/alumni/star/8.png",
            name: "UMER FAYYAZ",
            companyLogo: "assets/images/ceo/3_.jpg",
            description:
                ' "UMER FAYYAZ" epitomize success, showcasing the transformative power of education through their exceptional achievements and positive impact on society.',
        },
    ];

    const alumni = [
        {
            id: 1,
            year: 2019_20,
            img: "assets/images/alumni/convo/convo2019-20/1.jpg",
            link: null
        },
        {
            id: 2,
            year: 2019_20,
            img: "assets/images/alumni/convo/convo2019-20/2.jpg",
            link: null
        },
        {
            id: 3,
            year: 2019_20,
            img: "assets/images/alumni/convo/convo2019-20/3.jpg",
            link: null
        },
        {
            id: 4,
            year: 2019_20,
            img: "assets/images/alumni/convo/convo2019-20/4.jpg",
            link: null
        },
        {
            id: 5,
            year: 2019_20,
            img: "assets/images/alumni/convo/convo2019-20/5.jpg",
            link: null
        },
        {
            id: 6,
            year: 2019_20,
            img: "assets/images/alumni/convo/convo2019-20/6.jpg",
            link: null
        },
        {
            id: 7,
            year: 2019_20,
            img: "assets/images/alumni/convo/convo2019-20/7.jpg",
            link: null
        },
        {
            id: 8,
            year: 2019_20,
            img: "assets/images/alumni/convo/convo2019-20/8.jpg",
            link: 'https://www.facebook.com/media/set/?set=a.3434163599944159&type=3'
        },
        {
            id: 11,
            year: 2020_21,
            img: "assets/images/alumni/convo/convo2020-21/1.jpg",
            link: null
        },
        {
            id: 12,
            year: 2020_21,
            img: "assets/images/alumni/convo/convo2020-21/2.jpg",
            link: null
        },
        {
            id: 13,
            year: 2020_21,
            img: "assets/images/alumni/convo/convo2020-21/3.jpg",
            link: null
        },
        {
            id: 14,
            year: 2020_21,
            img: "assets/images/alumni/convo/convo2020-21/4.jpg",
            link: null
        },
        {
            id: 15,
            year: 2020_21,
            img: "assets/images/alumni/convo/convo2020-21/5.jpg",
            link: null
        },
        {
            id: 16,
            year: 2020_21,
            img: "assets/images/alumni/convo/convo2020-21/6.jpg",
            link: null
        },
        {
            id: 17,
            year: 2020_21,
            img: "assets/images/alumni/convo/convo2020-21/7.jpg",
            link: null
        },
        {
            id: 18,
            year: 2020_21,
            img: "assets/images/alumni/convo/convo2020-21/8.jpg",
            link: 'https://www.facebook.com/media/set/?set=a.5781423145218181&type=3'
        },
        {
            id: 31,
            year: 2022_23,
            img: "assets/images/alumni/convo/convo2022-23/1.jpg",
            link: null
        },
        {
            id: 32,
            year: 2022_23,
            img: "assets/images/alumni/convo/convo2022-23/2.jpg",
            link: null
        },
        {
            id: 33,
            year: 2022_23,
            img: "assets/images/alumni/convo/convo2022-23/3.jpg",
            link: null
        },
        {
            id: 34,
            year: 2022_23,
            img: "assets/images/alumni/convo/convo2022-23/4.jpg",
            link: null
        },
        {
            id: 35,
            year: 2022_23,
            img: "assets/images/alumni/convo/convo2022-23/5.jpg",
            link: null
        },
        {
            id: 36,
            year: 2022_23,
            img: "assets/images/alumni/convo/convo2022-23/6.jpg",
            link: null
        },
        {
            id: 37,
            year: 2022_23,
            img: "assets/images/alumni/convo/convo2022-23/7.jpg",
            link: null
        },
        {
            id: 38,
            year: 2022_23,
            img: "assets/images/alumni/convo/convo2022-23/8.jpg",
            link: 'https://www.facebook.com/media/set/?set=a.6882604611766690&type=3'
        },
        {
            id: 39,
            year: 2023_24,
            img: "assets/images/alumni/convo/convo2023-24/1.jpg",
            link: null
        },
        {
            id: 40,
            year: 2023_24,
            img: "assets/images/alumni/convo/convo2023-24/2.jpg",
            link: null
        },
        {
            id: 41,
            year: 2023_24,
            img: "assets/images/alumni/convo/convo2023-24/3.jpg",
            link: null
        },
        {
            id: 42,
            year: 2023_24,
            img: "assets/images/alumni/convo/convo2023-24/4.jpg",
            link: null
        },
        {
            id: 43,
            year: 2023_24,
            img: "assets/images/alumni/convo/convo2023-24/5.jpg",
            link: null
        },
        {
            id: 44,
            year: 2023_24,
            img: "assets/images/alumni/convo/convo2023-24/6.jpg",
            link: null
        },
        {
            id: 45,
            year: 2023_24,
            img: "assets/images/alumni/convo/convo2023-24/7.jpg",
            link: null
        },
        {
            id: 46,
            year: 2023_24,
            img: "assets/images/alumni/convo/convo2023-24/8.jpg",
            link: ''
        },
    ];

    const openInNewTab = (url) => {
        if (url) {
            window.open(url, "_blank", "noreferrer");
        }
    };
    return (
        <>
            <Header />
            <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
                {/* Background video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="assets/video/alumnivideeo.mp4"
                    poster="assets/images/COLLAGE-01.jpg"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                {/* Overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                        Welcome to <span className="text-yellow-500">Aptech Alumni</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                        Aptech Computer Education Pakistan helps companies find talented candidates.
                    </p>
                </div>
            </section>
            <ul className="breadcrumb left">
                <li>
                    <Link to="/">
                        <i className="fa-solid fa-house"></i>
                    </Link>
                </li>
                <li>Alumni</li>
            </ul>
            <section className="bg-white py-16">
                <div className="max-w-5xl mx-auto text-center px-4">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                        Aptech covers every major city in the world 🌍
                    </h2>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center bg-blue-50 rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="text-6xl font-extrabold text-yellow-500 mb-2">
                                10<span className="text-4xl text-gray-700">M</span>
                            </div>
                            <p className="text-lg text-gray-600">Worldwide Alumni</p>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-center bg-blue-50 rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="text-6xl font-extrabold text-yellow-500 mb-2">
                                125<span className="text-4xl text-gray-700">K</span>
                            </div>
                            <p className="text-lg text-gray-600">Pakistan Alumni</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-0 h-0">
                <svg viewBox="0 0 202.9 45.5">
                    <clipPath
                        id="menu"
                        clipPathUnits="objectBoundingBox"
                        transform="scale(0.0049285362247413 0.021978021978022)"
                    >
                        <path
                            d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
                              c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
                              c9.2,3.6,17.6,4.2,23.3,4H6.7z"
                        />
                    </clipPath>
                </svg>
            </div>
            <section
                className={`bg-light ${isSmallDevice
                    ? "py-20 px-0"
                    : "pt-20 pb-0 px-20"
                    }`}
            >
                <section className="citiesFilter">
                    {isSmallDevice ? (
                        <menu
                            className="menutab"
                            style={{ width: "100%", padding: 0, height: "60px" }}
                        >
                            <button
                                className={`menu__item ${activeTab === "cxo" ? "active" : ""}`}
                                style={{ height: "1px", width: "39px" }}
                                onClick={() => setActiveTab("cxo")}
                            >
                                <svg
                                    className="icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z" />
                                </svg>
                                <p style={{ fontSize: "8px" }}>CXO</p>
                            </button>

                            <button
                                className={`menu__item ${activeTab === "star" ? "active" : ""}`}
                                style={{ height: "1px", width: "39px" }}
                                onClick={() => setActiveTab("star")}
                            >
                                <svg
                                    className="icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                >
                                    <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                                </svg>
                                <p style={{ fontSize: "8px" }}>Star Alumni</p>
                            </button>

                            <button
                                className={`menu__item ${activeTab === "recent" ? "active" : ""}`}
                                style={{ height: "1px", width: "39px" }}
                                onClick={() => setActiveTab("recent")}
                            >
                                <svg
                                    className="icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                >
                                    <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
                                </svg>
                                <p style={{ fontSize: "8px" }}>Recent Alumni</p>
                            </button>
                        </menu>
                    ) : (
                        <menu className="menutab menutab2">
                            <button
                                className={`menu__item ${activeTab === "cxo" ? "active" : ""}`}
                                onClick={() => setActiveTab("cxo")}
                            >
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z" />
                                </svg>
                                <p>CXO</p>
                            </button>

                            <button
                                className={`menu__item ${activeTab === "star" ? "active" : ""}`}
                                onClick={() => setActiveTab("star")}
                            >
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                                </svg>
                                <p>Star Alumni</p>
                            </button>

                            <button
                                className={`menu__item ${activeTab === "recent" ? "active" : ""}`}
                                onClick={() => setActiveTab("recent")}
                            >
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
                                </svg>
                                <p>Recent Alumni</p>
                            </button>

                            <div className="menu__border" style={{ transform: "scale(1) translate3d(33px, 0px, 0px)" }}></div>
                            <div className="menu__border menu__border2" style={{ transform: "scale(1) scaleY(-1) translate3d(33px, 0px, 0px)" }}></div>
                        </menu>

                    )}
                    <div className="moreDetails">
                        <section
                            className="coursesPlan transparent-bg"
                            id="centreFilterDetails"
                            style={{ paddingTop: "2rem", paddingBlock: "0rem" }}
                        >
                            <div className="filterItem">
                                {isSmallDevice && activeTab === "cxo" ? (
                                    <div className="centerDetailsInner mt-8 grid gap-6">
                                        {cxo.map((e, idx) => (
                                            <div
                                                key={idx}
                                                className="cxoCard bg-white shadow-lg rounded-xl p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105"
                                            >
                                                {/* User Image */}
                                                <div className="userImg w-24 h-24 mb-4">
                                                    <img
                                                        src={e.img}
                                                        alt={e.name}
                                                        className="w-full h-full object-cover rounded-full border-2 border-yellow-400"
                                                    />
                                                </div>

                                                {/* Company Logo & Name */}
                                                <div className="userDetail flex flex-col items-center text-center space-y-2">
                                                    <img
                                                        src={e.companyLogo}
                                                        alt={`${e.name} Logo`}
                                                        className="w-16 h-16 object-contain mb-2"
                                                    />
                                                    <h4 className="font-semibold text-gray-800 text-lg">{e.name}</h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div
                                        className="centerDetailsInner"
                                        style={{ marginTop: "2rem" }}
                                    >
                                        {activeTab === "cxo" && cxo.map((e, idx) => (
                                            <div key={idx} className="relative w-[90%] max-w-[700px] mx-auto mb-8 z-10">
                                                <div className="flex items-start">
                                                    <div className="w-[240px] h-[340px] p-1.5 rounded-[20px] bg-transparent">
                                                        <img
                                                            src={e.img}
                                                            alt=""
                                                            className="w-full h-full rounded-[16px] object-cover"
                                                        />
                                                    </div>
                                                    <div className="w-[240px] h-[135px] rounded-[20px] flex flex-col items-center justify-center gap-2 ml-[-1rem] mt-8 bg-white shadow-md">
                                                        <img src={e.companyLogo} alt="" className="w-[180px]" />
                                                        <h4 className="text-center">{e.name}</h4>
                                                    </div>
                                                </div>
                                                <div className="absolute bottom-[-1rem] left-16 bg-black text-white text-lg rounded-[20px] pl-[200px] p-8 z-[-1]">
                                                    <p>{e.description}</p>
                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                {activeTab === "star" && (
                                    <>
                                        {/* Filter Section */}
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                                            <h2 className="text-2xl font-semibold">Star Alumni's</h2>
                                            <input
                                                type="month"
                                                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                            />
                                        </div>

                                        {/* Alumni Cards Grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                                            {[
                                                {
                                                    img: "assets/images/alumni/star/6.png",
                                                    name: "aon ali",
                                                    title1: "Country Lead Pakistan",
                                                    title2: "ASIA Market Salesforce",
                                                },
                                                {
                                                    img: "assets/images/alumni/star/5.png",
                                                    name: "Qurat Baloch",
                                                    title1: "Software Engineer",
                                                    title2: "Apple Inc",
                                                },
                                                {
                                                    img: "assets/images/alumni/star/10.jpg",
                                                    name: "RIZWAN SHAIKH",
                                                    title1: "Project Head",
                                                    title2: "Hamariweb.com",
                                                },
                                                {
                                                    img: "assets/images/alumni/star/1.png",
                                                    name: "S. M. Kashif Faraz Ali",
                                                    title1: "CTO AT RA Group &",
                                                    title2: "System Analyst Dawat E Islami",
                                                },
                                                {
                                                    img: "assets/images/alumni/star/2.png",
                                                    name: "Syed Shumail Mehdi",
                                                    title1: "Solution Architect",
                                                    title2: "4s Advisory",
                                                },
                                                {
                                                    img: "assets/images/alumni/star/3.png",
                                                    name: "Adil Kamal",
                                                    title1: "Senior .net developer",
                                                    title2: "Invision custom solutions",
                                                },
                                            ].map((alumni, idx) => (
                                                <div
                                                    key={idx}
                                                    className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                                                >
                                                    <div className="flex justify-center p-4">
                                                        <img
                                                            src={alumni.img}
                                                            alt={alumni.name}
                                                            className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400"
                                                        />
                                                    </div>
                                                    <div className="text-center px-4 pb-6">
                                                        <h5 className="text-lg font-semibold">{alumni.name}</h5>
                                                        <p className="text-gray-600">{alumni.title1}</p>
                                                        <p className="text-gray-600">{alumni.title2}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="p-6">
                                {activeTab === "recent" && (
                                    <>
                                        {/* Title */}
                                        <h2 className="text-2xl font-semibold mb-4">Recent Alumni</h2>

                                        {/* Year Filter Tabs */}
                                        <div className="flex flex-wrap gap-4 mb-6">
                                            {[
                                                { label: "2022-2023", value: 2023_24 },
                                                { label: "2021-2022", value: 2022_23 },
                                                { label: "2020-2021", value: 2020_21 },
                                                { label: "2019-2020", value: 2019_20 },
                                            ].map((year, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setActive(year.value)}
                                                    className={`px-4 py-2 rounded-md font-medium transition-colors ${isactive === year.value
                                                        ? "text-yellow-500 underline"
                                                        : "text-gray-700 hover:text-yellow-500"
                                                        }`}
                                                >
                                                    {year.label}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Alumni Cards */}
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                                            {alumni
                                                .filter((e) => e.year === isactive)
                                                .map((e) => (
                                                    <div
                                                        key={e.id}
                                                        onClick={() => openInNewTab(e.link)}
                                                        className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
                                                    >
                                                        <img
                                                            src={e.img}
                                                            alt={e.name}
                                                            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
                                                        />
                                                    </div>
                                                ))}
                                        </div>
                                    </>
                                )}
                            </div>

                        </section>
                    </div>
                </section >
            </section >
            <Footer />
        </>
    );
}

export default Alumni;
