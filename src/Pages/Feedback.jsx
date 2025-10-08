import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Select from "react-select";
import { BASE_URL } from "../Utils/environment";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const validationSchema = Yup.object().shape({
    centresId: Yup.string().required("This field is required..."),
    studentName: Yup.string().required("This field is required..."),
    enrollmentNo: Yup.string().required("This field is required..."),
    faculty: Yup.string().required("This field is required..."),
    batchCode: Yup.string().required("This field is required..."),
    q1: Yup.number().notOneOf([0], "Please select a value..."),
    q2: Yup.number().notOneOf([0], "Please select a value..."),
    q3: Yup.number().notOneOf([0], "Please select a value..."),
    q4: Yup.number().notOneOf([0], "Please select a value..."),
    q5: Yup.number().notOneOf([0], "Please select a value..."),
    q6: Yup.number().notOneOf([0], "Please select a value..."),
    q7: Yup.number().notOneOf([0], "Please select a value..."),
    q8: Yup.number().notOneOf([0], "Please select a value..."),
});

function Feedback() {
    const [centers, setCenters] = useState([]);

    const getAllCenters = () => {
        axios
            .get(`${BASE_URL}/Centres/GetAll`)
            .then((res) => setCenters(res.data))
            .catch((err) => console.warn(err));
    };

    const formik = useFormik({
        initialValues: {
            centresId: "",
            studentName: "",
            enrollmentNo: "",
            faculty: "",
            batchCode: "",
            q1: "",
            q2: "",
            q3: "",
            q4: "",
            q5: "",
            q6: "",
            q7: "",
            q8: "",
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    useEffect(() => {
        getAllCenters();
    }, []);

    const questions = [
        {
            id: "q1",
            label: "1. (Punctuality) Do Classes start and end on time?",
            options: [
                { value: 1, label: "Every Class" },
                { value: 2, label: "Most of the classes" },
                { value: 3, label: "Rarely" },
                { value: 4, label: "Never" },
            ],
        },
        {
            id: "q2",
            label: "2. (Course Coverage) Has the faculty covered all topics?",
            options: [
                { value: 1, label: "Yes" },
                { value: 2, label: "No" },
            ],
        },
        {
            id: "q3",
            label: "3. (Technical Support) Does faculty guide you during your lab exercise?",
            options: [
                { value: 1, label: "Excellent" },
                { value: 2, label: "Good" },
                { value: 3, label: "Average" },
                { value: 4, label: "Fair" },
            ],
        },
        {
            id: "q4",
            label: "4. (Clearing doubt) Faculty teaches concepts clearly?",
            options: [
                { value: 1, label: "Excellent" },
                { value: 2, label: "Good" },
                { value: 3, label: "Average" },
                { value: 4, label: "Fair" },
            ],
        },
        {
            id: "q5",
            label: "5. Exams & assignments timely feedback?",
            options: [
                { value: 1, label: "Yes" },
                { value: 2, label: "No" },
            ],
        },
        {
            id: "q6",
            label: "6. Are Books utilized during class?",
            options: [
                { value: 1, label: "Every Class" },
                { value: 2, label: "Most of the classes" },
                { value: 3, label: "Rarely" },
                { value: 4, label: "Never" },
            ],
        },
        {
            id: "q7",
            label: "7. Student Appraisal Reports delivered monthly via SMS?",
            options: [
                { value: 1, label: "Yes" },
                { value: 2, label: "No" },
            ],
        },
        {
            id: "q8",
            label: "8. Computer System/Software complaints handled timely?",
            options: [
                { value: 1, label: "No Issues" },
                { value: 2, label: "Resolved in reasonable time" },
                { value: 3, label: "Delayed resolution" },
                { value: 4, label: "Not resolved" },
            ],
        },
    ];

    const selectStyles = {
        control: (base, state) => ({
            ...base,
            borderColor:
                state.selectProps.error ? "#f87171" : state.isFocused ? "#f59e0b" : "#d1d5db",
            boxShadow: state.isFocused ? "0 0 0 1px #f59e0b" : base.boxShadow,
            "&:hover": {
                borderColor: state.isFocused ? "#f59e0b" : "#d1d5db",
            },
            borderRadius: "0.5rem",
            minHeight: "2.5rem",
        }),
        placeholder: (base) => ({ ...base, color: "#9ca3af" }),
        singleValue: (base) => ({ ...base, color: "#111827" }),
        menu: (base) => ({ ...base, borderRadius: "0.5rem", overflow: "hidden" }),
    };

    const centerOptions = centers.map((c) => ({ value: c.id, label: c.centreName }));

    return (
        <>
            <Header />
            <section className="bg-gray-100 py-4">
                <div className="container mx-auto">
                    <ul className="flex gap-2 text-gray-600">
                        <li>
                            <Link to="/" className="hover:text-gray-900">
                                <i className="fa-solid fa-house"></i>
                            </Link>
                        </li>
                        <li>&gt;</li>
                        <li className="font-semibold">Feedback</li>
                    </ul>
                </div>
            </section>

            <div className="container mx-auto py-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="bg-yellow-500 px-6 py-4">
                        <h2 className="text-2xl font-bold text-white">Feedback Form</h2>
                    </div>
                    <div className="p-6">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={formik.handleSubmit}>
                            {/* Text Inputs */}
                            {["studentName", "enrollmentNo", "faculty", "batchCode"].map((field) => (
                                <div key={field}>
                                    <input
                                        type="text"
                                        placeholder={field === "enrollmentNo" ? "Enrollment No." : field.charAt(0).toUpperCase() + field.slice(1)}
                                        id={field}
                                        name={field}
                                        value={formik.values[field]}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 ${formik.touched[field] && formik.errors[field] ? "border-red-500" : "border-gray-300"
                                            }`}
                                    />
                                    {formik.touched[field] && formik.errors[field] && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors[field]}</p>
                                    )}
                                </div>
                            ))}

                            {/* Centre Select */}
                            <div className="md:col-span-2">
                                <label className="block mb-1 font-medium">Select your centre</label>
                                <Select
                                    options={centerOptions}
                                    value={centerOptions.find((c) => c.value === formik.values.centresId) || null}
                                    onChange={(selected) => formik.setFieldValue("centresId", selected?.value || "")}
                                    onBlur={() => formik.setFieldTouched("centresId", true)}
                                    placeholder="Select Centre"
                                    isSearchable
                                    error={formik.touched.centresId && formik.errors.centresId}
                                    styles={selectStyles}
                                />
                                {formik.touched.centresId && formik.errors.centresId && (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.centresId}</p>
                                )}
                            </div>

                            {/* Questions */}
                            {questions.map((q) => (
                                <div key={q.id} className="md:col-span-2">
                                    <label className="block mb-1 font-medium">{q.label}</label>
                                    <Select
                                        options={q.options}
                                        value={q.options.find((opt) => opt.value === formik.values[q.id]) || null}
                                        onChange={(selected) => formik.setFieldValue(q.id, selected?.value || "")}
                                        onBlur={() => formik.setFieldTouched(q.id, true)}
                                        placeholder="Select an option"
                                        isSearchable
                                        error={formik.touched[q.id] && formik.errors[q.id]}
                                        styles={selectStyles}
                                    />
                                    {formik.touched[q.id] && formik.errors[q.id] && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors[q.id]}</p>
                                    )}
                                </div>
                            ))}

                            {/* Submit */}
                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition"
                                >
                                    Submit Feedback
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Feedback;
