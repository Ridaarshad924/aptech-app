import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import Select from "react-select";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { BASE_URL } from "../Utils/environment";


const aptechCentres = [
    "Aptech Clifton", "Aptech Defence", "Aptech Federal B.Area",
    "Aptech Garden", "Aptech Gulistan-e-Johar", "Aptech Gulshan-e-iqbal",
    "Aptech Gulshan-e-iqbal II", "Aptech Gulshan-e-Maymar", "Aptech I.I Chundrigar Center",
    "Aptech Korangi Road Center", "Aptech Landhi Center", "Aptech Metro Star Gate",
    "Aptech North Karachi", "Aptech North Nazimabad", "Aptech North Nazimabad II",
    "Aptech Orangi Town", "Aptech Shahra-e-faisal", "Aptech SITE center",
    "Aptech Surjani", "Aptech Tariq Road", "Aptech University Road",
    "Aptech Gulshan-e-hadeed", "Aptech Malir", "Aptech Scheme 33",
    "Aptech Baldia Town", "Aptech Hyderabad Defence", "Aptech Latifabad",
    "Aptech Jamshoro", "Aptech Larkana", "Aptech Johar Town Lahore",
    "Aptech Faisalabad II", "Aptech Sargodha", "Aptech Gujranwala",
    "Aptech Timergara", "Aptech Sukkur", "Aptech Rahim Yar Khan",
];

const optionsCentre = aptechCentres.map((uni) => ({ value: uni, label: uni }));

function VisionVIPPass() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const validationSchema = Yup.object({
        firstName: Yup.string().min(2, "First name must be at least 2 characters").required("First name is required"),
        lastName: Yup.string().min(2, "Last name must be at least 2 characters").required("Last name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        phone: Yup.string().matches(/^[0-9+\-\s()]+$/, "Invalid phone number").min(10, "Phone number must be at least 10 digits").required("Phone number is required"),
        organization: Yup.string().required("Organization is required"),
        designation: Yup.string().required("Designation is required"),
        centreName: Yup.string().required("Centre name is required"),
    });

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            organization: "",
            designation: "",
            centreName: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            setIsSubmitting(true);
            try {
                const formData = new FormData();
                Object.entries(values).forEach(([key, value]) => formData.append(key, value));

                const response = await fetch(`${BASE_URL}/Attendee/Add`, { method: "POST", body: formData });
                if (!response.ok) throw new Error("Failed to submit form");

                setSubmitMessage("Thank you for your registration. Your submission has been successfully received.");
                formik.resetForm();
            } catch (error) {
                console.error(error);
                setSubmitMessage("Registration failed. Please try again.");
            } finally {
                setIsSubmitting(false);
            }
        },
    });

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
                <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
                    <div
                        className="w-full h-40 rounded-lg mb-6 flex items-center justify-center bg-cover bg-center relative"
                        style={{ backgroundImage: "url(/assets/pass-templates/header.jpg)" }}
                    >
                        <img src="/assets/pass-templates/VisionLogo.png" alt="Logo" className="h-24 object-contain" />
                    </div>

                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 ${formik.touched.firstName && formik.errors.firstName ? "border-red-500" : "border-gray-300"}`}
                                />
                                {formik.touched.firstName && formik.errors.firstName && (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.firstName}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 ${formik.touched.lastName && formik.errors.lastName ? "border-red-500" : "border-gray-300"}`}
                                />
                                {formik.touched.lastName && formik.errors.lastName && (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.lastName}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"}`}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 ${formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-gray-300"}`}
                            />
                            {formik.touched.phone && formik.errors.phone && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
                            )}
                        </div>

                        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Professional Details</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                                    Organization <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="organization"
                                    name="organization"
                                    value={formik.values.organization}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 ${formik.touched.organization && formik.errors.organization ? "border-red-500" : "border-gray-300"}`}
                                />
                                {formik.touched.organization && formik.errors.organization && (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.organization}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">
                                    Designation <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="designation"
                                    name="designation"
                                    value={formik.values.designation}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 ${formik.touched.designation && formik.errors.designation ? "border-red-500" : "border-gray-300"}`}
                                />
                                {formik.touched.designation && formik.errors.designation && (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.designation}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="centreName" className="block text-sm font-medium text-gray-700 mb-1">
                                Centre Name <span className="text-red-500">*</span>
                            </label>
                            <Select
                                id="centreName"
                                name="centreName"
                                options={[{ value: "", label: "Select Centre" }, ...optionsCentre, { value: "Other", label: "Other" }]}
                                value={
                                    optionsCentre.find((option) => option.value === formik.values.university) ||
                                    (formik.values.university ? { value: formik.values.university, label: formik.values.university } : null)
                                }
                                onChange={(selectedOption) =>
                                    formik.setFieldValue("university", selectedOption ? selectedOption.value : "")
                                }
                                onBlur={() => formik.setFieldTouched("university", true)}
                                isSearchable
                                styles={{
                                    control: (base, state) => ({
                                        ...base,
                                        borderColor:
                                            formik.touched.university && formik.errors.university
                                                ? "#f87171" // red for error
                                                : state.isFocused
                                                    ? "#f59e0b" // amber/yellow on focus
                                                    : "#d1d5db", // default gray
                                        boxShadow: state.isFocused ? "0 0 0 1px #f59e0b" : base.boxShadow,
                                        "&:hover": {
                                            borderColor: state.isFocused ? "#f59e0b" : "#d1d5db",
                                        },
                                        borderRadius: "0.5rem", // matches rounded-lg
                                        minHeight: "2.5rem",
                                    }),
                                    placeholder: (base) => ({
                                        ...base,
                                        color: "#9ca3af", // gray placeholder
                                    }),
                                    singleValue: (base) => ({
                                        ...base,
                                        color: "#111827", // text color
                                    }),
                                    menu: (base) => ({
                                        ...base,
                                        borderRadius: "0.5rem",
                                        overflow: "hidden",
                                    }),
                                }}
                            />
                            {formik.touched.centreName && formik.errors.centreName && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.centreName}</p>
                            )}
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-md font-semibold transition-colors"
                            >
                                {isSubmitting ? "Registering..." : "Register for Aptech Vision 2025"}
                            </button>
                        </div>

                        {submitMessage && (
                            <p className={`mt-4 text-center text-sm ${submitMessage.includes("successfully") ? "text-green-600" : "text-red-500"}`}>
                                {submitMessage}
                            </p>
                        )}
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default VisionVIPPass;