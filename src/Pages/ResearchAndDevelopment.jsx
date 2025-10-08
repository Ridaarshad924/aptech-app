import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ResearchAndDevelopment() {
    const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");

    const sections = [
        {
            title: "Comprehensive Curriculum Development",
            text: `At Aptech, the curriculum development process begins with meticulous research into technology trends and job market demands. The R&D team collaborates closely with academic experts to identify the skills that are in high demand. This collaborative effort culminates in a six-month research phase, where insights are gathered and analyzed to create a curriculum that not only meets current industry standards but also anticipates future needs.

Once the foundational research is complete, the team dedicates an additional four months to designing the curriculum. This phase involves creating comprehensive course materials, including textbooks, online resources, and practical training modules. After thorough revisions and feedback from industry stakeholders, the finalized curriculum is launched, ensuring that it is both relevant and effective.`,
            image: "assets/images/ACCPAI/2.jpg",
        },
        {
            title: "Ongoing Training and Support",
            text: `Aptech recognizes that the education landscape is constantly changing, which is why they implement a 'Train the Trainer' program. This initiative ensures that instructors are well-equipped to deliver the latest content and teaching methodologies. The program is not a one-time event; it occurs every six months, allowing trainers to stay updated with the latest trends and technologies, thereby enhancing the learning experience for students.`,
            image: "assets/images/ACCPAI/3.jpg",
        },
        {
            title: "Commitment to Quality Education",
            text: `The commitment to quality is evident in Aptech’s approach to course design and delivery. With over three decades of experience, the R&D team continuously evaluates and updates course materials based on industry feedback and technological advancements. This ensures that students receive the most relevant and practical education possible, preparing them for successful careers in the IT industry and beyond.`,
            image: "assets/images/ACCPAI/4.jpg",
        },
        {
            title: "Global Reach and Local Impact",
            text: `With more than 810 training centers worldwide, Aptech has established a significant global presence while maintaining a strong local impact. Their franchise model empowers local entrepreneurs to provide high-quality training in their communities, backed by Aptech’s extensive resources and support systems. This model not only fosters local economic growth but also helps bridge the skills gap in various regions.`,
            image: "assets/images/ACCPAI/5.jpg",
        },
    ];

    return (
        <>
            <Header />
            {/* Intro Section */}
            <div className="max-w-[90%] mx-auto mt-12 px-5 flex flex-col md:flex-row items-center gap-12">
                {/* Text */}
                <div className="flex-1">
                    <h2 className="text-yellow-500 text-3xl md:text-4xl font-extrabold border-b-4 border-gray-200 pb-3 mb-6 tracking-wide">
                        Aptech Global Research and Development
                    </h2>
                    <p className="text-gray-800 mb-6 text-justify leading-relaxed">
                        Aptech is at the forefront of vocational and skill-development training, with a dedicated Research and Development (R&D) team that plays a crucial role in shaping the future of education in the rapidly evolving job market. Over the past 25 years, Aptech has established a robust process for developing cutting-edge curricula and training programs tailored to meet industry demands across various regions, including Pakistan, Vietnam, India, Africa, and the Middle East.
                        <br />
                        Aptech’s dedicated R&D team is a testament to their commitment to excellence in vocational training. By investing in comprehensive curriculum development and ongoing support for trainers, Aptech ensures that they remain a leader in the education sector. Their focus on delivering employment-driven education is not just about teaching skills; it’s about shaping the future workforce and empowering individuals to succeed in a competitive job market. With Aptech, students gain not only knowledge but also the confidence to thrive in their careers.
                    </p>
                </div>

                {/* Image */}
                <div className="flex-1 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <img
                        src="https://media.licdn.com/dms/image/C4E12AQFiTWht12NRDA/article-cover_image-shrink_600_2000/0/1645158158709?e=2147483647&v=beta&t=mQMrh4e-TXBi6pv1WpmMmVFoVKq1k0SegxE_dTDq0BU"
                        alt="R&D"
                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>


            {/* Sections */}
            <section className={`py-12 px-5 ${isSmallDevice ? "pt-12" : "pt-24"}`}>
                <div className="max-w-[90%] mx-auto space-y-12">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${isSmallDevice ? "gap-6" : "md:flex-row"
                                } items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                } gap-8`}
                        >
                            {/* Image */}
                            <div className="flex-1 border rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            {/* Text */}
                            <div className="flex-1">
                                <h2 className="text-yellow-500 text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4">
                                    {section.title}
                                </h2>
                                {section.text.split("\n\n").map((para, i) => (
                                    <p key={i} className="text-gray-800 mb-4 text-justify">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default ResearchAndDevelopment