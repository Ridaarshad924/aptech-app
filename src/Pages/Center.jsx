import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useMediaQuery } from "@uidotdev/usehooks";
import { BASE_URL, CONTENT_URL } from "../Utils/environment";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SVGnavbar from "../Components/SVGnavbar";

const Center = () => {
    // const [activeItem, setActiveItem] = useState(null);
    const [activeTab, setActiveTab] = useState("Batch");
    const [centre, setCentre] = useState(null);
    const [upcomingBatches, setUpcomingBatches] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [som, setSom] = useState([]);
    const [pom, setPom] = useState([]);
    const [placement, setPlacement] = useState([]);
    const [events, setEvents] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);

    const isSmallDevice = useMediaQuery("(max-width: 768px)");
    const location = useLocation();
    const queryParameters = new URLSearchParams(location.search);
    const centerId = queryParameters.get("id");

    // 📆 Date setup for placement API
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const [selectedDate, setSelectedDate] = useState(`${currentYear}-${currentMonth}`);

    // 📍 Fetch all data on mount or when ID changes
    useEffect(() => {
        if (!centerId) return;
        getCentreData(centerId);
        getEvents(centerId);
    }, [centerId]);

    // 📊 Handle pagination
    useEffect(() => {
        const endOffset = itemOffset + 10;
        setFiltered(upcomingBatches.slice(itemOffset, endOffset));
    }, [itemOffset, upcomingBatches]);

    const pageCount = Math.ceil(upcomingBatches.length / 10);

    const handlePage = (event) => {
        const newOffset = (event.selected * 10) % upcomingBatches.length;
        setItemOffset(newOffset);
    };

    // 🗓 Handle placement date filter
    const handleDateChange = (e) => {
        const [year, month] = e.target.value.split("-");
        setSelectedDate(e.target.value);
        getPlacement(centerId, `${year}-${month}`);
    };

    // 📡 API Calls
    const getCentreData = async (id) => {
        try {
            const { data } = await axios.get(`${BASE_URL}/Centres/GetById?Id=${id}`);
            setCentre(data);
            getUpcomingBatches(data.id);
            getSom(data.id);
            getPom(data.id);
            getPlacement(data.id, selectedDate);
        } catch (error) {
            console.error("Error fetching centre:", error);
        }
    };

    const getUpcomingBatches = async (id) => {
        try {
            const { data } = await axios.get(`${BASE_URL}/UpcomingBatch/GetByCenterId?Id=${id}`);
            const sortedData = [...data]
                .sort((a, b) => new Date(a.date) - new Date(b.date));
            setUpcomingBatches(sortedData);
        } catch (error) {
            console.error("Error fetching batches:", error);
        }
    };

    const getSom = async (id) => {
        try {
            const { data } = await axios.get(`${BASE_URL}/SOM/GetByCenterId?Id=${id}`);
            setSom(data.reverse());
        } catch (error) {
            console.error("Error fetching SOM:", error);
        }
    };

    const getPom = async (id) => {
        try {
            const { data } = await axios.get(`${BASE_URL}/POM/GetByCenterId?Id=${id}`);
            setPom(data.reverse());
        } catch (error) {
            console.error("Error fetching POM:", error);
        }
    };

    const getPlacement = async (id, date) => {
        try {
            const { data } = await axios.get(`${BASE_URL}/Placement/GetMonthWise?Id=${id}&date=${date}`);
            setPlacement(data);
        } catch (error) {
            console.error("Error fetching placement:", error);
        }
    };

    const getEvents = async (id) => {
        try {
            const { data } = await axios.get(`${BASE_URL}/Events/GetByCenterId?Id=${id}`);
            setEvents(data.reverse());
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    // 📅 Helper functions
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return `${date.getDate()}-${date.toLocaleString("default", { month: "short" })}-${date.getFullYear()}`;
    };

    const formatDate2 = (dateStr) => {
        const [year, month] = dateStr.split("-");
        const monthName = new Date(`${year}-${month}-01`).toLocaleString("en-us", { month: "short" });
        return `${monthName}-${year}`;
    };

    const centreTabs = [
        {
            id: "Batch",
            label: "Upcoming Batch",
            viewBox: "0 0 448 512",
            iconPath: "M384 96V320H64L64 96H384zM64 32C28.7 32 0 60.7 0 96V320c0 35.3 28.7 64 64 64H181.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H277.3l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H528zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",
        },
        {
            id: "Student",
            label: "Student of the Month",
            viewBox: "0 0 640 512",
            iconPath: "M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z",
        },
        {
            id: "Project",
            label: "Project of the Month",
            viewBox: "0 0 640 512",
            iconPath: "M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z",
        },
        {
            id: "Placement",
            label: "Placement",
            viewBox: "0 0 640 512",
            iconPath: "M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z",
        },
        {
            id: "Event",
            label: "Event",
            viewBox: "0 0 640 512",
            iconPath: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z",
        },
    ];

    const dummymap =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.708899353!2d66.49599811891532!3d25.192983763249334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1692285042414!5m2!1sen!2s";

    return (
        <>
            <Header />
            {isSmallDevice ? (
                <>
                    <section className="innerPage">
                        {/* Map Section */}
                        <div className="w-full">
                            <iframe
                                className="w-full h-[260px]"
                                src={
                                    centre?.maapLink !== "---" &&
                                        centre?.maapLink !== "" &&
                                        centre?.maapLink !== null
                                        ? centre?.maapLink
                                        : dummymap
                                }
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Video Section */}
                        <div className="w-full aspect-video">
                            <video
                                className="w-full h-full object-cover"
                                src={`${CONTENT_URL}${centre?.centreVideo}`}
                                poster="assets/images/videoalt.jpg"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        </div>

                        {/* Contact Section */}
                        <div className="w-full bg-[#FEBE10] flex flex-col justify-center items-center pl-2 py-4">
                            <p className="font-bold">
                                Aptech {centre?.centreName} Centre
                            </p>

                            {centre?.phne && (
                                <p className="font-bold">
                                    <span>
                                        <i className="fa-solid fa-phone mr-1.5"></i>
                                        {centre?.phne}
                                    </span>
                                </p>
                            )}

                            {centre?.phne3 && (
                                <p className="font-bold">
                                    <span>
                                        <i className="fa-solid fa-phone mr-1.5"></i>
                                        {centre?.phne3}
                                    </span>
                                </p>
                            )}

                            {centre?.phne2 && (
                                <p className="font-bold">
                                    <span>
                                        <i className="fa-brands fa-whatsapp text-[28px] text-black mr-1.5"></i>
                                        {centre?.phne2}
                                    </span>
                                </p>
                            )}
                        </div>
                    </section>
                </>
            ) : (
                <>
                    <section className="innerPage centerDetails flex flex-col md:flex-row">
                        {/* Left Section */}
                        <div className="leftSection flex flex-col w-full md:w-1/2">
                            <img
                                src={
                                    centre?.image != null &&
                                        centre?.image != "Microsoft.AspNetCore.Http.FormFile"
                                        ? CONTENT_URL + centre?.image
                                        : "assets/images/aptechMSG.jpg"
                                }
                                alt=""
                                className="w-full h-auto object-cover"
                            />
                            <iframe
                                src={
                                    centre?.maapLink !== "---" &&
                                        centre?.maapLink !== "" &&
                                        centre?.maapLink !== null
                                        ? centre?.maapLink
                                        : dummymap
                                }
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-[260px] border-0"
                            ></iframe>
                        </div>

                        {/* Video Section */}
                        <div className="w-full md:w-1/2 aspect-video overflow-hidden">
                            <video
                                src={CONTENT_URL + centre?.centreVideo}
                                poster="assets/images/videoalt.jpg"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            ></video>
                        </div>
                    </section>
                </>
            )}

            {/* Contact Bar */}
            <div className="h-[50px] w-full bg-[#FEBE10] flex items-center justify-start pl-2">
                <p className="font-bold text-base md:text-lg flex flex-wrap items-center">
                    Aptech {centre?.centreName} Centre &nbsp; | &nbsp;
                    {centre?.phne && (
                        <span className="flex items-center mr-2">
                            <i className="fa-solid fa-phone mr-1.5"></i>
                            {centre?.phne},
                        </span>
                    )}
                    {centre?.phne3 && (
                        <span className="flex items-center mr-2">
                            <i className="fa-solid fa-phone mr-1.5"></i>
                            {centre?.phne3},
                        </span>
                    )}
                    {centre?.phne2 && (
                        <span className="flex items-center mr-2">
                            <a
                                href={`https://wa.me/${centre?.phne2}`}
                                className="text-black flex items-center"
                            >
                                <i className="fa-brands fa-whatsapp text-[28px] text-black mr-1.5"></i>
                                {centre?.phne2},
                            </a>
                        </span>
                    )}
                </p>
            </div>

            {/* Social Links */}
            <div className="w-full flex justify-end items-center pr-5">
                <div className="mt-2 flex">
                    <a
                        href={centre?.fbLink}
                        className="w-10 h-10 flex items-center justify-center bg-[#1877f2] text-white rounded-full m-2 hover:scale-110 transition-transform duration-200"
                    >
                        <i className="fab fa-facebook-f text-[30px]"></i>
                    </a>
                    <a
                        href={centre?.ytLink}
                        className="w-10 h-10 flex items-center justify-center bg-[#CD201F] text-white rounded-full m-2 hover:scale-110 transition-transform duration-200"
                    >
                        <i className="fab fa-youtube text-[30px]"></i>
                    </a>
                    <a
                        href={centre?.inLink}
                        className="w-10 h-10 flex items-center justify-center bg-[#0A66C2] text-white rounded-full m-2 hover:scale-110 transition-transform duration-200"
                    >
                        <i className="fab fa-linkedin-in text-[30px]"></i>
                    </a>
                    <a
                        href={`https://wa.me/${centre?.phne2}`}
                        className="w-10 h-10 flex items-center justify-center bg-[#25D366] text-white rounded-full m-2 hover:scale-110 transition-transform duration-200"
                    >
                        <i className="fab fa-whatsapp text-[30px]"></i>
                    </a>
                </div>
            </div>
            {/* Breadcrumb */}
            <ul className="flex items-center gap-2 text-sm md:text-base font-medium text-gray-700 mb-4">
                <li>
                    <a
                        href="/"
                        className="text-[#febe10] hover:text-black transition-colors duration-200"
                    >
                        <i className="fa-solid fa-house"></i>
                    </a>
                </li>
                <li className="before:content-['/'] before:mx-2 before:text-gray-400">
                    Locations
                </li>
                <li className="before:content-['/'] before:mx-2 before:text-gray-400">
                    {centre?.centreName}
                </li>
            </ul>

            <section
                className={`bg-light ${isSmallDevice
                    ? "py-20 px-0"
                    : "pt-20 pb-0 px-20"
                    }`}
            >
                <section className="citiesFilter">
                    <SVGnavbar activeTab={activeTab} setActiveTab={setActiveTab} isSmallDevice={isSmallDevice} tabs={centreTabs} />
                    <div className="moreDetails">
                        <section
                            className="coursesPlan transparent-bg"
                            id="centreFilterDetails"
                            style={{ paddingBlock: 0, paddingTop: "4rem" }}
                        >
                            {activeTab === "Batch" && (
                                <>
                                    {isSmallDevice ? (
                                        <div className="filterItem overflow-x-auto">
                                            <table className="min-w-[150%] border-collapse">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                        <th className="text-center py-2"></th>
                                                        <th className="text-center py-2">Course</th>
                                                        <th className="text-center py-2">Tentative Start Date</th>
                                                        <th className="text-center py-2">Time Slot</th>
                                                        <th className="text-center py-2">Days</th>
                                                        <th className="text-center py-2">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {upcomingBatches.map((e) => (
                                                        <tr key={e.id} className="border-b hover:bg-gray-50">
                                                            {/* Course Icon */}
                                                            <td className="text-center py-2">
                                                                <img
                                                                    src={
                                                                        e?.courseName == "ACCP"
                                                                            ? "assets/images/ACCPAI/ACCP-AI-01.png"
                                                                            : e?.courseName === "DM"
                                                                                ? "assets/images/icons/bsricons/DM.png"
                                                                                : e?.courseName === "ENG"
                                                                                    ? "assets/images/icons/bsricons/English.png"
                                                                                    : e?.courseName === "Amazon"
                                                                                        ? "assets/images/icons/bsricons/Amazon.png"
                                                                                        : e?.courseName === "Android"
                                                                                            ? "assets/images/icons/bsricons/Android.png"
                                                                                            : e?.courseName === "AutoCAD"
                                                                                                ? "assets/images/icons/bsricons/AutoCAD.png"
                                                                                                : e?.courseName === "DAE"
                                                                                                    ? "assets/images/icons/bsricons/DAE.png"
                                                                                                    : e?.courseName === "DotNet"
                                                                                                        ? "assets/images/icons/bsricons/DotNet.png"
                                                                                                        : e?.courseName === "Java"
                                                                                                            ? "assets/images/icons/bsricons/Java.png"
                                                                                                            : e?.courseName === "MSOffice"
                                                                                                                ? "assets/images/icons/bsricons/MSOffice.png"
                                                                                                                : e?.courseName === "PHP"
                                                                                                                    ? "assets/images/icons/bsricons/PHP.png"
                                                                                                                    : e?.courseName === "Python"
                                                                                                                        ? "assets/images/icons/bsricons/Python.png"
                                                                                                                        : e?.courseName === "webdesigning"
                                                                                                                            ? "assets/images/icons/bsricons/webdesigning.png"
                                                                                                                            : e?.courseName === "WordPress"
                                                                                                                                ? "assets/images/icons/bsricons/WordPress.png"
                                                                                                                                : e?.courseName === "freelancing"
                                                                                                                                    ? "assets/images/icons/bsricons/freelancing.jpg"
                                                                                                                                    : e?.courseName === "uiux"
                                                                                                                                        ? "assets/images/icons/bsricons/uiux.jpg"
                                                                                                                                        : ""
                                                                    }
                                                                    width="60px"
                                                                    alt=""
                                                                />
                                                            </td>
                                                            <td className="text-center py-2 font-semibold">{e?.courseName}</td>
                                                            <td className="text-center py-2">{formatDate(e?.startDate)}</td>
                                                            <td className="text-center py-2">{e?.timeSlot}</td>
                                                            <td className="text-center py-2">
                                                                {e?.days === "mwf"
                                                                    ? "Monday | Wednesday | Friday"
                                                                    : "Tuesday | Thursday | Saturday"}
                                                            </td>
                                                            <td className="text-center py-2">
                                                                {e?.status === "1" && (
                                                                    <span className="text-[#fdc500] bg-[#fff2b2] px-3 py-1 rounded">
                                                                        Limited Seats
                                                                    </span>
                                                                )}
                                                                {e?.status === "2" && (
                                                                    <span className="text-[#25a244] bg-[#b7efc5] px-3 py-1 rounded">
                                                                        Admission Open
                                                                    </span>
                                                                )}
                                                                {e?.status === "3" && (
                                                                    <span className="text-[#d02224] bg-[#f1a7a9] px-3 py-1 rounded">
                                                                        Admission Closed
                                                                    </span>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <div className="filterItem w-full">
                                            <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
                                                <table className="w-full text-sm md:text-base text-gray-700 border-collapse">
                                                    <thead>
                                                        <tr className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-gray-800">
                                                            <th className="py-3 px-4 text-center w-[80px]"></th>
                                                            <th className="py-3 px-4 text-center">Course</th>
                                                            <th className="py-3 px-4 text-center">Tentative Start Date</th>
                                                            <th className="py-3 px-4 text-center">Time Slot</th>
                                                            <th className="py-3 px-4 text-center">Days</th>
                                                            <th className="py-3 px-4 text-center">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {filtered.map((e) => (
                                                            <tr
                                                                key={e.id}
                                                                className="border-b hover:bg-yellow-50 transition duration-200"
                                                            >
                                                                {/* Course Icon */}
                                                                <td className="text-center py-3 px-4">
                                                                    <div className="w-16 h-16 mx-auto rounded-full bg-yellow-50 flex items-center justify-center shadow-sm">
                                                                        <img
                                                                            src={
                                                                                e?.courseName == "ACCP"
                                                                                    ? "assets/images/ACCPAI/ACCP-AI-01.png"
                                                                                    : e?.courseName === "DM"
                                                                                        ? "assets/images/icons/bsricons/DM.png"
                                                                                        : e?.courseName === "ENG"
                                                                                            ? "assets/images/icons/bsricons/English.png"
                                                                                            : e?.courseName === "Amazon"
                                                                                                ? "assets/images/icons/bsricons/Amazon.png"
                                                                                                : e?.courseName === "Android"
                                                                                                    ? "assets/images/icons/bsricons/Android.png"
                                                                                                    : e?.courseName === "AutoCAD"
                                                                                                        ? "assets/images/icons/bsricons/AutoCAD.png"
                                                                                                        : e?.courseName === "DAE"
                                                                                                            ? "assets/images/icons/bsricons/DAE.png"
                                                                                                            : e?.courseName === "DotNet"
                                                                                                                ? "assets/images/icons/bsricons/DotNet.png"
                                                                                                                : e?.courseName === "Java"
                                                                                                                    ? "assets/images/icons/bsricons/Java.png"
                                                                                                                    : e?.courseName === "MSOffice"
                                                                                                                        ? "assets/images/icons/bsricons/MSOffice.png"
                                                                                                                        : e?.courseName === "PHP"
                                                                                                                            ? "assets/images/icons/bsricons/PHP.png"
                                                                                                                            : e?.courseName === "Python"
                                                                                                                                ? "assets/images/icons/bsricons/Python.png"
                                                                                                                                : e?.courseName === "webdesigning"
                                                                                                                                    ? "assets/images/icons/bsricons/webdesigning.png"
                                                                                                                                    : e?.courseName === "WordPress"
                                                                                                                                        ? "assets/images/icons/bsricons/WordPress.png"
                                                                                                                                        : e?.courseName === "freelancing"
                                                                                                                                            ? "assets/images/icons/bsricons/freelancing.jpg"
                                                                                                                                            : e?.courseName === "uiux"
                                                                                                                                                ? "assets/images/icons/bsricons/uiux.jpg"
                                                                                                                                                : ""
                                                                            }
                                                                            className="w-14 h-14 object-contain transition-transform duration-300 hover:scale-110"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td className="text-center py-3 px-4 font-semibold uppercase tracking-wide">
                                                                    {e?.courseName}
                                                                </td>
                                                                <td className="text-center py-3 px-4">{formatDate(e?.startDate)}</td>
                                                                <td className="text-center py-3 px-4">{e?.timeSlot}</td>
                                                                <td className="text-center py-3 px-4">
                                                                    {e?.days === "mwf" ? "Mon | Wed | Fri" : "Tue | Thu | Sat"}
                                                                </td>
                                                                <td className="text-center py-3 px-4">
                                                                    {e?.status === "1" && (
                                                                        <span className="text-yellow-700 bg-yellow-100 px-4 py-1.5 rounded-full text-sm font-medium">
                                                                            Limited Seats
                                                                        </span>
                                                                    )}
                                                                    {e?.status === "2" && (
                                                                        <span className="text-green-700 bg-green-100 px-4 py-1.5 rounded-full text-sm font-medium">
                                                                            Admission Open
                                                                        </span>
                                                                    )}
                                                                    {e?.status === "3" && (
                                                                        <span className="text-red-700 bg-red-100 px-4 py-1.5 rounded-full text-sm font-medium">
                                                                            Admission Closed
                                                                        </span>
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>

                                            {/* Pagination */}
                                            <div className="mt-6 flex justify-center">
                                                <ReactPaginate
                                                    breakLabel="..."
                                                    nextLabel="Next ›"
                                                    previousLabel="‹ Prev"
                                                    onPageChange={handlePage}
                                                    pageRangeDisplayed={5}
                                                    pageCount={pageCount}
                                                    renderOnZeroPageCount={null}
                                                    containerClassName="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base font-medium select-none"
                                                    pageClassName="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer transition-all duration-200 hover:bg-yellow-100 hover:text-yellow-800 shadow-sm"
                                                    previousClassName="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer transition-all duration-200 hover:bg-yellow-100 hover:text-yellow-800 shadow-sm"
                                                    nextClassName="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer transition-all duration-200 hover:bg-yellow-100 hover:text-yellow-800 shadow-sm"
                                                    breakClassName="px-4 py-2 text-gray-500"
                                                    activeClassName="!bg-yellow-500 !text-white !border-yellow-500 shadow-md"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}

                            <div className="space-y-10">

                                {/* Student of the Month */}
                                {activeTab === "Student" && (
                                    <div className="w-full">
                                        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                                            <h2 className="text-2xl font-bold text-gray-800">Student of the Month</h2>
                                        </div>
                                        <div className="flex flex-wrap gap-6">
                                            {som.map((s) => (
                                                <div
                                                    key={s.id}
                                                    className="bg-white shadow-md rounded-xl overflow-hidden max-w-xs w-full sm:w-[48%] md:w-[23%] transition hover:shadow-lg"
                                                >
                                                    <div className="w-full h-48 bg-gray-100">
                                                        <img
                                                            src={CONTENT_URL + s?.image}
                                                            alt={s?.studentName}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="p-4 text-center">
                                                        <h5 className="text-lg font-semibold">{s?.studentName}</h5>
                                                        <span className="block text-sm text-gray-500 mb-2">{formatDate2(s?.month)}</span>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>Semester: <span className="font-medium">{s?.semester}</span></li>
                                                            <li>Batch: <span className="font-medium">{s?.batchCode}</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Project of the Month */}
                                {activeTab === "Project" && (
                                    <div className="w-full">
                                        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                                            <h2 className="text-2xl font-bold text-gray-800">Project of the Month</h2>
                                            <input
                                                type="month"
                                                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-yellow-300"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                            {pom.map((p) => (
                                                <div
                                                    key={p.id}
                                                    className="bg-gray-100 shadow-md rounded-xl overflow-hidden flex flex-col items-center text-center transition hover:shadow-lg"
                                                >
                                                    <div className="w-full h-48 bg-gray-200">
                                                        <img
                                                            src={CONTENT_URL + p?.image}
                                                            alt={p?.projectName}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="p-4">
                                                        <h4 className="text-lg font-semibold mb-2">{p?.projectName}</h4>
                                                        <div className="flex flex-wrap gap-2 justify-center mb-2">
                                                            {p?.memberOne && <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-medium">{p?.memberOne}</span>}
                                                            {p?.memberTwo && <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-medium">{p?.memberTwo}</span>}
                                                            {p?.memberThree && <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-medium">{p?.memberThree}</span>}
                                                            {p?.memberFour && <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-medium">{p?.memberFour}</span>}
                                                        </div>
                                                        <p className="text-sm text-gray-600">{p?.semester}</p>
                                                        <p className="text-sm text-gray-600 mb-2">{p?.batchCode}</p>
                                                        <Link to="/" className="text-yellow-500 hover:underline text-sm">Detail</Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Placements */}
                                {activeTab === "Placement" && (
                                    <div className="w-full">
                                        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                                            <h4 className="text-2xl font-bold text-gray-800">This Month Placement</h4>
                                            <input
                                                type="month"
                                                id="monthYear"
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-yellow-300"
                                            />
                                        </div>
                                        <section className="bg-yellow-50 py-8 rounded-xl shadow-inner">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                                                {placement.map((p) => (
                                                    <div
                                                        key={p.id}
                                                        className="bg-white rounded-xl shadow-md flex flex-col items-center p-4 text-center hover:shadow-lg transition"
                                                    >
                                                        <div className="w-32 h-32 mb-4 rounded-full overflow-hidden bg-gray-100">
                                                            <img
                                                                src={p?.image ? CONTENT_URL + p?.image : "assets/images/professional.png"}
                                                                alt={p?.studentName}
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => { e.target.src = "assets/images/professional.png"; }}
                                                            />
                                                        </div>
                                                        <h4 className="text-lg font-semibold">{p?.studentName}</h4>
                                                        <p className="text-yellow-600 font-bold">{p?.designation}</p>
                                                        <p className="text-gray-600">{p?.company}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    </div>
                                )}

                                {/* Events */}
                                {activeTab === "Event" && (
                                    <div className="w-full">
                                        <h4 className="text-2xl font-bold text-gray-800 mb-6">Events</h4>
                                        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                            {events.length === 0 ? (
                                                <p className="text-gray-500 text-center">No Events</p>
                                            ) : (
                                                events.map((e) =>
                                                    e?.eventLinks?.map((x, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={x?.link}
                                                            target="_blank"
                                                            className="block relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
                                                        >
                                                            <img
                                                                src={CONTENT_URL + x?.imgUrl}
                                                                alt={e.name}
                                                                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                                                            />
                                                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 flex justify-between items-center">
                                                                <h4 className="text-lg font-semibold">{e.name}</h4>
                                                                <div className="w-6 h-6">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="white">
                                                                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    ))
                                                )
                                            )}
                                        </section>
                                    </div>
                                )}

                            </div>
                        </section>
                    </div>
                </section>
            </section >
            <Footer />
        </>
    );
};

export default Center;
