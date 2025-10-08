import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import passTemplate from "/assets/pass-templates/Candidates_Visiitor.png";
import passTemplate1 from "/assets/pass-templates/Invite1.jpg";
import Select from "react-select";
import QRCode from "qrcode";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { BASE_URL } from "../Utils/environment";

const aptechCentres = [
    "Aptech Clifton",
    "Aptech Defence",
    "Aptech Federal B.Area",
    "Aptech Garden",
    "Aptech Gulistan-e-Johar",
    "Aptech Gulshan-e-iqbal",
    "Aptech Gulshan-e-iqbal II",
    "Aptech Gulshan-e-Maymar",
    "Aptech I.I Chundrigar Center",
    "Aptech Korangi Road Center",
    "Aptech Landhi Center",
    "Aptech Metro Star Gate",
    "Aptech North Karachi",
    "Aptech North Nazimabad",
    "Aptech North Nazimabad II",
    "Aptech Orangi Town",
    "Aptech Shahra-e-faisal",
    "Aptech SITE center",
    "Aptech Surjani",
    "Aptech Tariq Road",
    "Aptech University Road",
    "Aptech Gulshan-e-hadeed",
    "Aptech Malir",
    "Aptech Scheme 33",
    "Aptech Baldia Town",
    "Aptech Hyderabad Defence",
    "Aptech Latifabad",
    "Aptech Jamshoro",
    "Aptech Larkana",
    "Aptech Johar Town Lahore",
    "Aptech Faisalabad II",
    "Aptech Sargodha",
    "Aptech Gujranwala",
    "Aptech Timergara",
    "Aptech Sukkur",
    "Aptech Rahim Yar Khan",
];

const karachiUniversities = [
    "Aga Khan University",
    "Institute of Business Administration",
    "NED University of Engineering and Technology",
    "University of Karachi",
    "Iqra University",
    "Karachi Institute of Economics and Technology",
    "Shaheed Zulfiqar Ali Bhutto Institute of Science and Technology (SZABIST)",
    "Institute of Business Management (IoBM)",
    "Sir Syed University of Engineering and Technology",
    "Jinnah University for Women",
    "Ziauddin University",
    "Hamdard University",
    "Habib University",
    "DHA Suffa University",
    "Mohammad Ali Jinnah University (MAJU)",
    "ILMA University",
    "Sindh Institute of Medical Sciences",
    "Sindh Madressatul Islam University",
    "Indus University",
    "Jinnah Sindh Medical University",
    "Indus Valley School of Art and Architecture",
    "Baqai Medical University",
    "Greenwich University",
    "KASB Institute of Technology",
    "Textile Institute of Pakistan",
    "Dawood University of Engineering and Technology",
    "Dadabhoy Institute of Higher Education",
    "Newports Institute of Communications and Economics",
    "Salim Habib University",
    "Karachi School for Business and Leadership",
    "Al-Ghazali University",
    "Millennium Institute of Technology and Entrepreneurship",
    "Sohail University",
    "Benazir Bhutto Shaheed University Lyari",
    "Shaheed Zulfiqar Ali Bhutto University of Law",
    "UIT University, Karachi",
    "Nazeer Hussain University",
    "Shaheed Benazir Bhutto Dewan University",
    "Commecs Institute of Business and Emerging Sciences",
    "Karachi Institute of Technology and Entrepreneurship",
    "Shaheed Benazir Bhutto City University",
    "Sindh Institute of Management and Technology",
    "Malir University of Science and Technology",
    "Al-Kawthar University",
    "Emaan Institute of Management and Sciences",
    "Hands – Institute of Development Studies",
    "Saifee Burhani University",
    "Metropolitan University Karachi",
    "Federal Urdu University of Arts, Sciences & Technology",
    "Bahria University (Karachi Campus)",
    "Dow University of Health Sciences",
    "The Trillium Montessori Child Development Center",
    "FG Boys Inter College, Karachi Cantt",
    "FG Girls Inter College, Karachi Cantt",
    "FG Public School, Karachi Cantt",
    "FG Minwala Girls Public School, Karachi Cantt",
    "FG Boys Secondary School, Abbysinia Lines, Karachi Cantt",
    "FG Public School, Manora Cantt",
    "FG Public School, Malir Cantt",
    "FG Middle School, Drig Road",
    "FG Model Middle School, Model Colony",
    "FG Girls Middle School, Malir Cantt",
    "FG Boys Middle School, Malir Cantt",
    "FG Junior Public School, Karachi Cantt",
    "Base Montessori, PAF Faisal, Shara-e-Faisal",
    "MIDasia Foundation Academy, North Karachi",
    "The Seeds School",
    "Paradise College of Commerce & Business Management",
    "Kingston English Grammar School and College",
    "Chiniot Islamia School and College",
    "RS Model Secondary School, Landhi No. 1",
    "Falconhouse Grammar School",
    "CAT Montessori School",
    "Clifton Montessori Grade School",
    "White Rose Grammar School",
    "Seedling Grammar School",
    "The Harvards House Of Education",
    "Bright Star Academy (A/O Level)",
    "MA Tutor Academy",
    "SK Grammar School",
    "New Model High School",
    "Westminster Pre School",
    "Karachi Public School",
    "The Educators (Shadman Town Campus)",
    "The Elegant Educational Foundation",
    "Unique Grammar Secondary School",
    "Convent of Jesus and Mary (Karachi)",
    "Mama Parsi Girls Secondary School",
    "St Joseph's Convent School (Karachi)",
    "DHA Model High School",
    "Royal City Public School",
    "Be Prince Kids School",
    "The C.A.S. School, DHA VIII",
    "Habib Public School",
    "Karachi Grammar School",
    "St. Patrick's High School",
    "The City School",
    "The Lyceum School, Clifton",
    "AMI School, P.E.C.H.S.",
    "Beaconhouse School System (Karachi branches)",
    "Dawood Public School",
    "Froebel Education Center",
    "Bay View Academy",
    "Falconhouse Grammar School",
    "The OASYS School",
    "Westminster School & College",
    "The Aureole School",
    "Aga Khan Higher Secondary School",
    "Aisha Bawany Academy",
    "Aitchison Model School",
    "Al Hamd Grammar School",
    "Al-Hameed School",
    "Al-Aira Group of School System",
    "Al-Bakka Islamic Foundation School",
    "Al-Khair Education Foundation (Montessori Campus)",
    "Al-Khaleej Islamic Education System",
    "Al-Saad Public High School",
    "Al-Saad Public Secondary School",
    "Albatross Grammar School",
    "Ali Public School",
    "Alia Elementary School",
    "Jaffar Public School",
    "The Socrates School",
    "K N Academy (Bahadurabad Campus)",
    "Ladybird Grammar School",
    "The Hampton School",
];

const optionsUni = karachiUniversities.map((uni) => ({ value: uni, label: uni }));
const optionsCentre = aptechCentres.map((uni) => ({ value: uni, label: uni }));

/* ---------- validation schema (Formik + Yup) ---------- */
const validationSchema = Yup.object({
    firstName: Yup.string().min(2, "First name must be at least 2 characters").required("First name is required"),
    lastName: Yup.string().min(2, "Last name must be at least 2 characters").required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string()
        .matches(/^[0-9+\-\s()]+$/, "Invalid phone number")
        .min(10, "Phone number must be at least 10 digits")
        .required("Phone number is required"),
    profileImage: Yup.mixed()
        .required("Profile image is required")
        .test("fileSize", "Image cannot be larger than 5MB", (value) => {
            return value && value.size <= 5 * 1024 * 1024;
        })
        .test("fileType", "Only JPG/PNG images are allowed", (value) => {
            return value && ["image/jpeg", "image/png"].includes(value.type);
        })
        .test("fileDimensions", "Image must be at least 200x200 pixels", (value) => {
            if (!value) return false;
            return new Promise((resolve) => {
                const img = new Image();
                img.src = URL.createObjectURL(value);
                img.onload = () => {
                    const valid = img.width >= 200 && img.height >= 200;
                    resolve(valid);
                };
                img.onerror = () => resolve(false);
            });
        }),
    userType: Yup.string().oneOf(["Professional", "Student"], "Please select a valid option").required("Please select who you are"),
    organization: Yup.string().when("userType", {
        is: "Professional",
        then: (schema) => schema.required("Organization is required"),
        otherwise: (schema) => schema.notRequired(),
    }).max(50, "Max 50 characters"),
    designation: Yup.string().when("userType", {
        is: "Professional",
        then: (schema) => schema.required("Designation is required"),
        otherwise: (schema) => schema.notRequired(),
    }).max(50, "Max 50 characters"),
    studentType: Yup.string().when("userType", {
        is: "Student",
        then: (schema) => schema.oneOf(["Outsider", "Aptech Student"], "Please select a valid option").required("Please select student type"),
        otherwise: (schema) => schema.notRequired(),
    }),
    university: Yup.string().when(["userType", "studentType"], {
        is: (userType, studentType) => userType === "Student" && studentType === "Outsider",
        then: (schema) => schema.required("University/School is required"),
        otherwise: (schema) => schema.notRequired(),
    }),
    studentId: Yup.string().when(["userType", "studentType"], {
        is: (userType, studentType) => userType === "Student" && studentType === "Aptech Student",
        then: (schema) => schema.required("Student ID is required"),
        otherwise: (schema) => schema.notRequired(),
    }),
    centreName: Yup.string().when(["userType", "studentType"], {
        is: (userType, studentType) => userType === "Student" && studentType === "Aptech Student",
        then: (schema) => schema.required("Centre name is required"),
        otherwise: (schema) => schema.notRequired(),
    }),
});

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(" ");
    let line = "";
    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + " ";
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, y);
    return y + lineHeight;
}

function VisionVisitor() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            profileImage: null,
            userType: "",
            organization: "",
            designation: "",
            studentType: "",
            university: "",
            studentId: "",
            centreName: "",
            attendeeType: "VISITOR",
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setIsSubmitting(true);
            try {
                // 1. Save Attendee in Database
                const formData = new FormData();
                Object.entries(values).forEach(([key, value]) => {
                    if (value !== null && value !== undefined) formData.append(key, value);
                });

                const response = await fetch(`${BASE_URL}/Attendee/Add`, {
                    method: "POST",
                    body: formData,
                });

                if (!response.ok) throw new Error("Failed to submit form");
                const result = await response.json();
                const attendeeGuid = result.id;
                if (!attendeeGuid) throw new Error("GUID missing in API response");

                // 2. Generate Main Pass
                const mainPassFile = await generatePassImage(values, attendeeGuid);

                // 3. Generate Additional Image (pass1)
                const pass1File = await generateNameImage(values);

                // 4. Send Email with Both Passes
                const emailForm = new FormData();
                emailForm.append("Email", values.email);
                emailForm.append("Subject", "Your Aptech Vision 2025 Entry Pass");
                emailForm.append(
                    "Body",
                    `<p>Dear ${values.firstName},</p>
           <p>We would like to welcome you at <strong>Aptech Vision 2025</strong><br>
           on <strong>Saturday, 11<sup>th</sup> October 2025</strong><br>
           at PC Hotel, Karachi.<br><br>
           Please find your pass attached.</p>
           <p>Best Regards,<br>Aptech Pakistan Team</p>`
                );
                emailForm.append("Pass", mainPassFile);
                emailForm.append("Pass1", pass1File);

                await fetch(`${BASE_URL}/Attendee/SendEmail`, {
                    method: "POST",
                    body: emailForm,
                });

                // 5. Download both images locally
                downloadFile(mainPassFile, "Aptech-Vision-Pass.png");
                downloadFile(pass1File, "Poster.png");

                setSubmitMessage("Registration successful! Pass has been emailed and downloaded.");
                resetForm();
            } catch (error) {
                console.error("Error:", error);
                setSubmitMessage("Registration failed. Please try again.");
            } finally {
                setIsSubmitting(false);
            }
        },
    });

    /* ---------- generatePassImage: draws template + profile + qr ---------- */
    async function generatePassImage(values, attendeeGuid) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = passTemplate;

            img.onload = async () => {
                const canvas = document.createElement("canvas");
                const scale = 2;
                canvas.width = 420 * scale;
                canvas.height = 686 * scale;
                const ctx = canvas.getContext("2d");
                if (!ctx) return reject("Failed to get canvas context");

                // Draw template
                ctx.drawImage(img, 0, 0, 420 * scale, 686 * scale);

                // Profile Image (circular clip)
                if (values.profileImage) {
                    try {
                        await new Promise((res, rej) => {
                            const profileImg = new Image();
                            profileImg.src = URL.createObjectURL(values.profileImage);
                            profileImg.onload = () => {
                                const profileSize = 200;
                                const profileX = (520 - profileSize) / 1;
                                const profileY = 363;
                                ctx.save();
                                ctx.beginPath();
                                ctx.arc(profileX + profileSize / 2, profileY + profileSize / 2, profileSize / 2, 0, Math.PI * 2, true);
                                ctx.closePath();
                                ctx.clip();
                                ctx.drawImage(profileImg, profileX, profileY, profileSize, profileSize);
                                ctx.restore();
                                res(true);
                            };
                            profileImg.onerror = rej;
                        });
                    } catch (err) {
                        console.warn("Failed to draw profile image on pass:", err);
                    }
                }

                // Add text
                ctx.fillStyle = "#000";
                ctx.textAlign = "center";
                ctx.font = "bold 28px Helvetica";
                ctx.fillText(`${values.firstName} ${values.lastName}`, 415, 600);

                // User-specific info
                let y = 640;
                if (values.userType === "Professional") {
                    y = wrapText(ctx, `Organization: ${values.organization}`, 415, y, 650, 40);
                    y = wrapText(ctx, `Designation: ${values.designation}`, 415, y, 650, 40);
                } else if (values.userType === "Student") {
                    if (values.studentType === "Outsider") {
                        ctx.fillText(`Institute: ${values.university}`, 415, y);
                    } else {
                        ctx.fillText(`Enrollment ID: ${values.studentId}`, 415, y);
                        ctx.fillText(`Institute: ${values.centreName}`, 415, y + 40);
                    }
                }

                // QR code
                try {
                    const qrDataUrl = await QRCode.toDataURL(attendeeGuid.toString(), { width: 100, margin: 1 });
                    const qrImg = new Image();
                    qrImg.src = qrDataUrl;
                    qrImg.onload = () => {
                        ctx.drawImage(qrImg, 315, 800, 200, 200);
                        canvas.toBlob((blob) => {
                            if (!blob) return reject("Failed to create blob");
                            resolve(new File([blob], "Poster.png", { type: "image/png" }));
                        });
                    };
                    qrImg.onerror = (e) => {
                        console.warn("QR render failed", e);
                        canvas.toBlob((blob) => {
                            if (!blob) return reject("Failed to create blob (no QR)");
                            resolve(new File([blob], "Poster.png", { type: "image/png" }));
                        });
                    };
                } catch (err) {
                    console.warn("QR generation failed", err);
                    canvas.toBlob((blob) => {
                        if (!blob) return reject("Failed to create blob (qr error)");
                        resolve(new File([blob], "Poster.png", { type: "image/png" }));
                    });
                }
            };

            img.onerror = (e) => reject(e);
        });
    }

    /* ---------- generateNameImage: large poster-style pass ---------- */
    async function generateNameImage(values, options = {}) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = passTemplate1;

            img.onload = async () => {
                const targetWidth = 1600;
                const targetHeight = Math.round((img.height / img.width) * targetWidth);
                const canvas = document.createElement("canvas");
                canvas.width = targetWidth;
                canvas.height = targetHeight;
                const ctx = canvas.getContext("2d");
                if (!ctx) return reject("Failed to get canvas context");

                ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

                if (values.profileImage) {
                    try {
                        await new Promise((res, rej) => {
                            const profileImg = new Image();
                            profileImg.src = URL.createObjectURL(values.profileImage);
                            profileImg.onload = () => {
                                const profileSize = 350;
                                const profileX = 1230;
                                const profileY = 290;
                                ctx.save();
                                ctx.beginPath();
                                ctx.arc(profileX + profileSize / 2, profileY + profileSize / 2, profileSize / 2, 0, Math.PI * 2, true);
                                ctx.closePath();
                                ctx.clip();
                                ctx.drawImage(profileImg, profileX, profileY, profileSize, profileSize);
                                ctx.restore();
                                res(true);
                            };
                            profileImg.onerror = rej;
                        });
                    } catch (err) {
                        console.warn("Failed to draw profile image on pass1:", err);
                    }
                }

                ctx.fillStyle = options.color || "#ffffff";
                ctx.font = `bold ${options.fontSize || 38}px Helvetica`;
                ctx.textAlign = options.align || "left";

                ctx.fillText(`${(values.firstName || "").toUpperCase()} ${(values.lastName || "").toUpperCase()}`, 717, 120);

                if (values.userType === "Professional") {
                    wrapText(ctx, `${(values.organization || "").toUpperCase()}`, 717, 160, 800, 45);
                    wrapText(ctx, `${(values.designation || "").toUpperCase()}`, 717, 200, 800, 45);
                } else if (values.userType === "Student") {
                    if (values.studentType === "Outsider") {
                        wrapText(ctx, `${(values.university || "").toUpperCase()}`, 717, 160, 800, 45);
                    } else {
                        wrapText(ctx, `${(values.centreName || "").toUpperCase()}`, 717, 160, 800, 45);
                    }
                }

                canvas.toBlob(
                    (blob) => {
                        if (!blob) return reject("Failed to create blob for pass1");
                        resolve(new File([blob], "Aptech-Vision-Pass.png", { type: "image/jpeg" }));
                    },
                    "image/jpeg",
                    0.7
                );
            };

            img.onerror = (e) => reject(e);
        });
    }

    /* ---------- helper: download file ---------- */
    function downloadFile(file, filename) {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(file);
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        <>
            <Header />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Header */}
                    <div
                        className="w-full bg-cover bg-center relative flex flex-col items-center justify-center py-6"
                        style={{
                            backgroundImage: `url(/assets/pass-templates/header.jpg)`,
                        }}
                    >
                        <img
                            src="/assets/pass-templates/VisionLogo.png"
                            alt="Aptech Vision Logo"
                            className="w-56 h-24 object-contain mb-3"
                        />
                        <h1 className="text-white text-center text-lg sm:text-xl font-semibold" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
                            Saturday, 11 October 2025 <br /> PC Hotel, Karachi
                        </h1>
                    </div>

                    {/* Form */}
                    <form onSubmit={formik.handleSubmit} className="p-6">
                        {/* Personal Information */}
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Enter your first name"
                                        className={`w-full rounded-lg border px-4 py-2.5 text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 
    hover:border-amber-400 ${formik.touched.firstName && formik.errors.firstName
                                                ? "border-red-500 focus:ring-red-500"
                                                : "border-gray-300"
                                            }`}
                                    />
                                    {formik.touched.firstName && formik.errors.firstName && (
                                        <p className="text-sm text-red-600 mt-1">{formik.errors.firstName}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`w-full rounded-lg border px-4 py-2.5 text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 
    hover:border-amber-400 ${formik.touched.lastName && formik.errors.lastName
                                                ? "border-red-500 focus:ring-red-500"
                                                : "border-gray-300"
                                            }`}
                                    />
                                    {formik.touched.lastName && formik.errors.lastName && (
                                        <p className="text-sm text-red-600 mt-1">{formik.errors.lastName}</p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`w-full rounded-lg border px-4 py-2.5 text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 
    hover:border-amber-400 ${formik.touched.email && formik.errors.email
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300"
                                        }`}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <p className="text-sm text-red-600 mt-1">{formik.errors.email}</p>
                                )}
                            </div>

                            <div className="mt-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`w-full rounded-lg border px-4 py-2.5 text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 
    hover:border-amber-400 ${formik.touched.phone && formik.errors.phone
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300"
                                        }`}
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <p className="text-sm text-red-600 mt-1">{formik.errors.phone}</p>
                                )}
                            </div>

                            <div className="mt-4">
                                <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700 mb-1">Profile Image (max 5MB) <span className="text-red-500">*</span></label>
                                <input
                                    type="file"
                                    id="profileImage"
                                    name="profileImage"
                                    accept="image/*"
                                    onChange={(event) => {
                                        formik.setFieldValue("profileImage", event.currentTarget.files ? event.currentTarget.files[0] : null);
                                    }}
                                    onBlur={formik.handleBlur}
                                    className={`w-full rounded-lg border px-4 py-2.5 text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 
    hover:border-amber-400 ${formik.touched.profileImage && formik.errors.profileImage
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300"
                                        }`}
                                />
                                {formik.touched.profileImage && formik.errors.profileImage && (
                                    <p className="text-sm text-red-600 mt-1">{formik.errors.profileImage}</p>
                                )}
                            </div>
                        </div>

                        {/* Who are you? */}
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-3">Who are you? <span className="text-red-500">*</span></h2>
                            <div className="flex gap-6 items-center">
                                <label className="inline-flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="Professional"
                                        checked={formik.values.userType === "Professional"}
                                        onChange={formik.handleChange}
                                        className="form-radio h-4 w-4 text-amber-500"
                                    />
                                    <span className="ml-2 text-gray-700">Professional</span>
                                </label>

                                <label className="inline-flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="Student"
                                        checked={formik.values.userType === "Student"}
                                        onChange={formik.handleChange}
                                        className="form-radio h-4 w-4 text-amber-500"
                                    />
                                    <span className="ml-2 text-gray-700">Student</span>
                                </label>
                            </div>
                            {formik.touched.userType && formik.errors.userType && (
                                <p className="text-sm text-red-600 mt-2">{formik.errors.userType}</p>
                            )}
                        </div>

                        {/* Professional Fields */}
                        {formik.values.userType === "Professional" && (
                            <div className="mb-6">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Professional Details</h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            id="organization"
                                            name="organization"
                                            value={formik.values.organization}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`w-full rounded-lg border px-4 py-2.5 text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 
    hover:border-amber-400 ${formik.touched.organization && formik.errors.organization
                                                    ? "border-red-500 focus:ring-red-500"
                                                    : "border-gray-300"
                                                }`}
                                        />
                                        {formik.touched.organization && formik.errors.organization && (
                                            <p className="text-sm text-red-600 mt-1">{formik.errors.organization}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">Designation <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            id="designation"
                                            name="designation"
                                            value={formik.values.designation}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`w-full rounded-lg border px-4 py-2.5 text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 
    hover:border-amber-400 ${formik.touched.designation && formik.errors.designation
                                                    ? "border-red-500 focus:ring-red-500"
                                                    : "border-gray-300"
                                                }`}
                                        />
                                        {formik.touched.designation && formik.errors.designation && (
                                            <p className="text-sm text-red-600 mt-1">{formik.errors.designation}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Student Fields */}
                        {formik.values.userType === "Student" && (
                            <div className="mb-6">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Student Details</h2>

                                <div className="flex gap-6 mb-4">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name="studentType"
                                            value="Outsider"
                                            checked={formik.values.studentType === "Outsider"}
                                            onChange={formik.handleChange}
                                            className="form-radio h-4 w-4 text-amber-500"
                                        />
                                        <span className="ml-2 text-gray-700">Outsider</span>
                                    </label>

                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name="studentType"
                                            value="Aptech Student"
                                            checked={formik.values.studentType === "Aptech Student"}
                                            onChange={formik.handleChange}
                                            className="form-radio h-4 w-4 text-amber-500"
                                        />
                                        <span className="ml-2 text-gray-700">Aptech Student</span>
                                    </label>
                                </div>

                                {formik.touched.studentType && formik.errors.studentType && (
                                    <p className="text-sm text-red-600 mt-1">{formik.errors.studentType}</p>
                                )}

                                {/* Outsider */}
                                {formik.values.studentType === "Outsider" && (
                                    <div className="mb-4">
                                        <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
                                            University/School Name *
                                        </label>
                                        <Select
                                            id="university"
                                            name="university"
                                            options={[{ value: "", label: "Select University" }, ...optionsUni, { value: "Other", label: "Other" }]}
                                            value={
                                                optionsUni.find((option) => option.value === formik.values.university) ||
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
                                        {formik.touched.university && formik.errors.university && (
                                            <p className="text-sm text-red-600 mt-1">{formik.errors.university}</p>
                                        )}
                                    </div>
                                )}

                                {/* Aptech Student */}
                                {formik.values.studentType === "Aptech Student" && (
                                    <>
                                        <div className="mb-4">
                                            <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">Student ID <span className="text-red-500">*</span></label>
                                            <input
                                                type="text"
                                                id="studentId"
                                                name="studentId"
                                                value={formik.values.studentId}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className={`w-full rounded-lg border px-4 py-2.5 text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 
    hover:border-amber-400 ${formik.touched.studentId && formik.errors.studentId
                                                        ? "border-red-500 focus:ring-red-500"
                                                        : "border-gray-300"
                                                    }`}
                                            />
                                            {formik.touched.studentId && formik.errors.studentId && (
                                                <p className="text-sm text-red-600 mt-1">{formik.errors.studentId}</p>
                                            )}
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="centreName" className="block text-sm font-medium text-gray-700 mb-1">Centre Name <span className="text-red-500">*</span></label>
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
                                                <p className="text-sm text-red-600 mt-1">{formik.errors.centreName}</p>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        )}

                        {/* Submit */}
                        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-white font-semibold ${isSubmitting ? "bg-amber-300 cursor-not-allowed" : "bg-amber-500 hover:bg-amber-600"}`}
                            >
                                {isSubmitting ? "Registering..." : "Register for Aptech Vision 2025"}
                            </button>

                            {/* submission message */}
                            {submitMessage && (
                                <div className={`mt-2 sm:mt-0 text-sm ${submitMessage.includes("successful") ? "text-green-600" : "text-red-600"}`}>
                                    {submitMessage}
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default VisionVisitor;
