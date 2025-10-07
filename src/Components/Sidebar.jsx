import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../Utils/environment";
import { FiPhone, FiMail, FiUser, FiMapPin, FiMonitor } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const validationSchema = Yup.object().shape({
    uphne: Yup.number().required("Mobile number is required"),
    uname: Yup.string().required("Name is required"),
    uemail: Yup.string().email("Invalid email").required("Email is required"),
    course: Yup.string().notOneOf(["0"], "Please select a program"),
    cityId: Yup.string().notOneOf(["0"], "Please select your city"),
    centresId: Yup.string().notOneOf(["0"], "Please select the nearest center"),
});

function Sidebar() {
    const initialValues = {
        uphne: "",
        uname: "",
        uemail: "",
        course: "0",
        cityId: "0",
        centresId: "0",
        others: "",
    };

    const [formValues, setFormValues] = useState([]);
    const [name, setName] = useState("User!");
    const [centers, setCenters] = useState([]);
    const [cities, setCities] = useState([]);
    const [cityName, setCityName] = useState("---");
    const [tab, setTab] = useState(1);

    useEffect(() => {
        getCities();
    }, []);

    const getCities = () => {
        axios
            .get(`${BASE_URL}/City/GetAll`)
            .then((res) => setCities(res.data))
            .catch((err) => console.log(err));
    };

    const handleCenterById = (id) => {
        axios
            .get(`${BASE_URL}/Centres/GrtBycityId?Id=${id}`)
            .then((res) => setCenters(res.data))
            .catch((err) => console.log(err));
    };

    const handleCityByCenter = (id) => {
        let x = centers.find((c) => c.id === id);
        setCityName(x?.city);
    };

    const handleSubmit = async (values) => {
        try {
            const obj = Object.assign(values, { currentCity: "---" });
            const response = await fetch(`${BASE_URL}/Inquiries/Add`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(obj),
            });

            if (response.ok) {
                const data = await response.json();
                setFormValues([...formValues, data]);
                tabButtonHandler();
                setName(data.uname);
            } else {
                const errorData = await response.json();
                console.log("Error:", errorData);
                setTab(1);
            }
        } catch (error) {
            console.error("Error:", error);
            setTab(1);
        }
    };

    const tabButtonHandler = () => setTab((prev) => prev + 1);

    return (
        <aside
            className="
    w-full lg:w-72 
    bg-gray-100 
    relative lg:fixed 
    lg:left-0 
    lg:top-20 
    lg:bottom-0 
    shadow-[6px_0_12px_-2px_rgba(0,0,0,0.15)] 
    overflow-hidden
    pb-5
  "
        >
            <div className="max-h-[calc(100vh-3.5rem)] overflow-y-auto custom-scroll p-5">
                {/* 🔹 Sidebar Title */}
                <div className="hidden lg:flex items-center gap-2 text-lg font-semibold mb-4">
                    <span>Menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-5 h-5">
                        <path d="M178.3 5.7L40.3 143.7C35 149 32 156.2 32 163.7C32 179.3 44.7 192 60.3 192H144V400c0 8.8-7.2 16-16 16H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96c61.9 0 112-50.1 112-112V192h83.7c15.6 0 28.3-12.7 28.3-28.3c0-7.5-3-14.7-8.3-20L205.7 5.7C202 2 197.1 0 192 0s-10 2-13.7 5.7z" />
                    </svg>
                </div>

                {/* 📄 Career Guidance Form */}
                <p className="mb-3 text-gray-700">Find the perfect career guidance</p>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ setFieldValue }) => (
                        <Form>
                            {/* Tab 1 */}
                            <div className={`${tab === 1 ? "block" : "hidden"} space-y-4`}>
                                <div className="flex items-center gap-2 bg-white p-2 rounded-lg">
                                    <FiPhone className="text-xl" />
                                    <Field type="text" placeholder="Enter your mobile number" name="uphne" className="w-full outline-none" />
                                </div>
                                <ErrorMessage name="uphne" component="div" className="text-red-500 text-sm" />

                                <div className="flex items-center gap-2 bg-white p-2 rounded-lg">
                                    <FiUser className="text-xl" />
                                    <Field type="text" placeholder="Enter your Name" name="uname" className="w-full outline-none" />
                                </div>
                                <ErrorMessage name="uname" component="div" className="text-red-500 text-sm" />

                                <div className="text-right">
                                    <button type="button" className="bg-black text-white px-4 py-2 rounded" onClick={tabButtonHandler}>
                                        Go
                                    </button>
                                </div>
                            </div>

                            {/* Tab 2 */}
                            <div className={`${tab === 2 ? "block" : "hidden"} space-y-4`}>
                                <div className="flex items-center gap-2 bg-white p-2 rounded-lg">
                                    <FiMail className="text-xl" />
                                    <Field type="text" placeholder="Enter your Email" name="uemail" className="w-full outline-none" />
                                </div>
                                <ErrorMessage name="uemail" component="div" className="text-red-500 text-sm" />

                                <div className="flex items-center gap-2 bg-white p-2 rounded-lg">
                                    <FiMonitor className="text-xl" />
                                    <Field as="select" name="course" className="w-full outline-none">
                                        <option value="0">What program interests you?</option>
                                        <option value="ACCP-AI">ACCP AI</option>
                                        <option value="HDSE">HDSE (Intermediate Equivalent)</option>
                                        <option value="STC">STC (Short Term Course)</option>
                                        <option value="ACNS">ACNS Hardware & Networking</option>
                                        <option value="ENGLISH">English Language</option>
                                    </Field>
                                </div>
                                <ErrorMessage name="course" component="div" className="text-red-500 text-sm" />

                                <div className="text-right">
                                    <button type="button" className="bg-black text-white px-4 py-2 rounded" onClick={tabButtonHandler}>
                                        Go
                                    </button>
                                </div>
                            </div>

                            {/* Tab 3 */}
                            <div className={`${tab === 3 ? "block" : "hidden"} space-y-4`}>
                                <div className="flex items-center gap-2 bg-white p-2 rounded-lg">
                                    <FiMapPin className="text-xl" />
                                    <Field
                                        as="select"
                                        name="cityId"
                                        className="w-full outline-none"
                                        onChange={(e) => {
                                            const selectedcityId = e.target.value;
                                            setFieldValue("cityId", selectedcityId);
                                            handleCenterById(selectedcityId);
                                        }}
                                    >
                                        <option value="">Select City</option>
                                        {cities.map((e) => (
                                            <option key={e.id} value={e.id}>
                                                {e.name}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                <ErrorMessage name="cityId" component="div" className="text-red-500 text-sm" />

                                <div className="flex items-center gap-2 bg-white p-2 rounded-lg">
                                    <FiMonitor className="text-xl" />
                                    <Field
                                        as="select"
                                        name="centresId"
                                        className="w-full outline-none"
                                        onChange={(e) => {
                                            const selectedcenterId = e.target.value;
                                            setFieldValue("centresId", selectedcenterId);
                                            handleCityByCenter(selectedcenterId);
                                        }}
                                    >
                                        <option value="">Select Near Centre</option>
                                        {centers.sort((a, b) => a.centreName.localeCompare(b.centreName)).map((e) => (
                                            <option key={e.id} value={e.id}>
                                                {e.centreName}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                <ErrorMessage name="centresId" component="div" className="text-red-500 text-sm" />

                                <textarea
                                    placeholder="Message Box"
                                    name="others"
                                    maxLength={50}
                                    className="w-full border p-2 rounded h-24 resize-none"
                                    onChange={(e) => setFieldValue("others", e.target.value)}
                                />
                                <small className="text-red-500 text-xs">max: 50 Characters</small>

                                <div className="text-right">
                                    <button type="submit" className="bg-black text-white px-4 py-2 rounded">
                                        Done
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>

                {/* Tab 4 */}
                <div className={`${tab === 4 ? "block" : "hidden"} mt-4`}>
                    <h2 className="text-2xl font-bold mb-2">
                        Great <span id="userNamePrint">{name}</span>!
                    </h2>
                    <p className="mb-4">We'll get in touch with you soon.</p>
                    <Link to="/courses" className="bg-blue-600 text-white px-4 py-2 rounded inline-block">
                        Explore courses
                    </Link>
                </div>

                {/* 📌 Most searched topics - only visible on lg */}
                <div className="flex flex-col gap-2 mt-8">
                    <h4 className="font-semibold">Most searched topics</h4>
                    <ul className="space-y-1">
                        <li>
                            <Link to="/courses-adse" className="text-blue-600 hover:underline">
                                ACCP-AI
                            </Link>
                        </li>
                        <li>
                            <Link to="/placement" className="text-blue-600 hover:underline">
                                Placement
                            </Link>
                        </li>
                        <li>
                            <Link to="/courses-adse" className="text-blue-600 hover:underline">
                                Locations
                            </Link>
                        </li>
                        <li className="text-base">ACN Pro</li>
                    </ul>
                </div>
                {/* 📌 Footer - only visible on lg */}
                <div className="hidden lg:block my-6 space-y-2 text-sm">
                    <p>
                        <a href="https://wa.me/+923339560169" className="flex items-center gap-2 hover:text-green-600">
                            <FaWhatsapp className="text-lg" />
                            <span>(+92)3-339 560 169</span>
                        </a>
                    </p>
                    <p>
                        <a href="tel:+9221111278324" className="flex items-center gap-2 hover:text-blue-600">
                            <FiPhone className="text-lg" />
                            <span>(+92) 21-111 278 324</span>
                        </a>
                    </p>
                    <h5 className="font-semibold">Aptech Learning Pakistan, Franchise Support Pakistan.</h5>
                    <p>
                        Suite # 213, 2nd Floor, Progressive Center, PECHS Block 6, Main Shahrah-e-Faisal,
                        Karachi, Pakistan. PO-Box: 75400
                    </p>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
