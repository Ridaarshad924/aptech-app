import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainBanner from "../../../public/assets/images/courses/mainBanner.jpg";
import career1 from "../../../public/assets/images/ACCPAI/03-600×280.jpg";
import career2 from "../../../public/assets/images/ACCPAI/HDSE.jpg";
import acnpro1 from "../../../public/assets/images/courses/acn-pro (1).png";
import acnpro2 from "../../../public/assets/images/courses/acn-pro (2).png";
import acnpro3 from "../../../public/assets/images/courses/acn-pro (3).png";
import acnpro4 from "../../../public/assets/images/courses/acn-pro (4).png";
import acnpro5 from "../../../public/assets/images/courses/acn-pro (5).png";
import smartpro1 from "../../../public/assets/images/sp/PHP-Laravel-MySql.jpg";
import smartpro2 from "../../../public/assets/images/sp/dotNet-Core-MSSql-Server-C.jpg";
import smartpro3 from "../../../public/assets/images/sp/Mean-Stack-Developer.jpg";
import smartpro4 from "../../../public/assets/images/sp/Mern-Stack-Developer.jpg";
import smartpro5 from "../../../public/assets/images/sp/Android-Application-Development.jpg";
import smartpro6 from "../../../public/assets/images/sp/Cross-Platform-Development.jpg";
import smartpro7 from "../../../public/assets/images/sp/Web-App-Development-Python.jpg";
import smartpro8 from "../../../public/assets/images/sp/Digital-Marketing-&-SEO.jpg";
import shortcourse1 from "../../../public/assets/images/stc/office.jpg";
import shortcourse2 from "../../../public/assets/images/stc/dm.jpg";
import shortcourse3 from "../../../public/assets/images/stc/ai.jpg";
import shortcourse4 from "../../../public/assets/images/stc/amazon.jpg";
import shortcourse5 from "../../../public/assets/images/stc/chatgpt.jpg";
import shortcourse6 from "../../../public/assets/images/stc/excel.jpg";
import shortcourse7 from "../../../public/assets/images/stc/phplaravel.jpg";
import shortcourse8 from "../../../public/assets/images/stc/tableou.jpg";
import language1 from "../../../public/assets/images/courses/language/language 1.png";
import language2 from "../../../public/assets/images/courses/language/language 2.png";
import language3 from "../../../public/assets/images/courses/language/language 3.png";
import language4 from "../../../public/assets/images/courses/language/language 4.png";
import bonus1 from "../../../public/assets/images/courses/bonus (1).jpg";
import bonus2 from "../../../public/assets/images/courses/bonus (2).jpg";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Courses() {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        { title: "Career Program", id: 1, tagline: "Career Courses For Matric & Intermediate student" },
        { title: "ACN-Pro", id: 2, tagline: "Aptech Certified NXT Generation Professional" },
        { title: "Smart Pro", id: 3, tagline: "ProTrack your skills with SMART PRO Programming" },
        { title: "Short Course", id: 4, tagline: "Quick Skills LIFELONG IMPACT" },
        { title: "English Language", id: 5, tagline: "Your Pathway to Communication EXCELLENCE" },
        { title: "Summer Camp", id: 6, tagline: "Future-Ready Careers Begin" },
    ];
    const data = [
        { id: 1, tabId: 1, img: career1, desc: 'ACCP-AI is a complete career path encompassing the development of websites, web and mobile applications, data science tools, and real-world artificial intelligence and machine learning projects, equipping individuals with the necessary skills for the future job market.', title: 'ADSE', url: '/courses-adse', title2: 'ADSE (3 Years)' },

        { id: 2, tabId: 1, img: career2, desc: " Aptech's Higher Diploma in Software Engineering (HDSE) now provides an Intermediate equivalency. This program combines the industry relevant IT education with national recognition, ensuring you receive a comprehensive learning experience that prepares you for a successful career in technology.", title: 'HDSE', url: '/courses-hdse', title2: 'HDSE + SBTE (Intermediate equivalency)' },
        { id: 3, tabId: 2, img: acnpro5, desc: 'Unlock the creative side of Al with Aptech Learning Pakistan. Learn how to use tools like ChatGPT, Midjourney, and DALL-E to generate text, images, and more. Understand prompt engineering, content automation, and how generative Al is transforming industries like marketing, design, and customer service.', title: 'Generative Ai', title2: 'DATA ANALYTICS & Ai' },

        { id: 4, tabId: 2, img: acnpro1, desc: 'Step into the future with Aptech Learning Pakistan. This diploma equips you with hands-on knowledge of Artificial Intelligence and Machine Learning including supervised and unsupervised learning, neural networks, and model training. Learn how to build smart systems that can predict outcomes, automate tasks, and adapt to new data in real-time.', title: 'Ai & ML', title2: 'ANALYTICS, AI & ML' },

        { id: 5, tabId: 2, img: acnpro2, desc: "Master the art of extracting knowledge from data. At Aptech Learning Pakistan, you’ll learn Python programming, SQL, data visualization, statistics, and machine learning foundations. This diploma prepares you to analyze large datasets, uncover trends, and make powerful business decisions with confidence.", title: 'Data Science', title2: 'DATA ANALYSIS' },

        { id: 6, tabId: 2, img: acnpro3, desc: 'Become a certified digital marketer through Aptech Learning Pakistan. This diploma covers everything from Search Engine Optimization (SEO) to Social Media Marketing (SMM), Pay-Per-Click (PPC), Google Ads, Email Marketing, and content creation. Gain the skills to grow brands, run ad campaigns, and generate real leads online.', title: 'Digital Marketing', title2: 'BUSINESS INTELLIGENCE ANALYSIS' },

        { id: 7, tabId: 2, img: acnpro4, desc: 'Join the frontline of digital defense with Aptech Learning Pakistan. This diploma trains you in ethical hacking, risk assessment, network protection, secure coding, and threat mitigation. Build a strong foundation in securing digital systems and protecting data from modern cyber threats.', title: 'Cybersecurity and Digital Forensics', title2: 'Cybersecurity and Digital Forensics' },


        { id: 8, tabId: 3, img: smartpro1, desc: "PHP Laravel MySQL course is a comprehensive training program designed to equip learners with the skills and knowledge needed to develop robust web applications. Through hands-on exercises and real-world projects, participants will master the Laravel framework, PHP programming, and MySQL database management, enabling them to build dynamic and scalable websites efficiently.", title: 'PHP Laravel MySql', duration: '2 hrs. / 3 days a week', time: '40 Hrs' },

        { id: 9, tabId: 3, img: smartpro2, desc: ".NET Core MSSQL Server C# course is a comprehensive program designed to equip learners with the skills and knowledge needed to develop robust applications using Microsoft's .NET Core framework, coupled with the power of MSSQL Server. Participants will gain hands experience in C# programming, database management, and building scalable solutions.", title: '.Net Core MSSql Server C#', duration: '2 hrs. / 3 days a week', time: '40 Hrs' },

        { id: 10, tabId: 3, img: smartpro3, desc: 'Mean Stack Developer course is a comprehensive program designed to equip aspiring developers with the skills and knowledge needed to build dynamic web applications. Participants will learn the fundamentals of MongoDB, Express.js, Angular, and Node.js, gaining hands-on experience in full-stack development and creating robust, scalable, and efficient applications.', title: 'Mean Stack Developer', duration: '2 hrs. / 3 days a week', time: '40 Hrs' },

        { id: 11, tabId: 3, img: smartpro4, desc: 'MERN Stack Developer course is a comprehensive program designed to equip aspiring developers with the skills and knowledge needed to build full-stack web applications using the MERN (MongoDB, Express.js, React.js, Node.js) technology stack. From front-end development with React to back-end server setup with Node.js, this course covers it all.', title: 'Mern Stack Developer', duration: '2 hrs. / 3 days a week', time: '40 Hrs' },

        { id: 12, tabId: 3, img: smartpro5, desc: "Android Application Development course is a comprehensive program designed to equip aspiring developers with the skills and knowledge needed to create high-quality Android applications. Through hands-on projects, participants will learn essential concepts such as UI design, data storage, networking, and app deployment, ensuring they are well-prepared for a successful career in Android development.", title: 'Android Application Development', duration: '2 hrs. / 3 days a week', time: '40 Hrs' },

        { id: 13, tabId: 3, img: smartpro6, desc: "Cross Platform Development course is designed to equip students with the skills and knowledge needed to develop applications that can run seamlessly on multiple platforms, such as iOS, Android, and web. Through hands-on projects and practical exercises, students will learn to leverage frameworks like React Native and Flutter to create efficient and user-friendly cross-platform apps.", title: 'Cross Platform Development', duration: '2 hrs. / 3 days a week', time: '40 Hrs' },

        { id: 14, tabId: 3, img: smartpro7, desc: "Web App Development Python course is a comprehensive program designed to equip learners with the skills and knowledge needed to build dynamic and interactive web applications using Python. From front-end development with HTML, CSS, and JavaScript to back-end programming with Django and Flask frameworks, this course covers all aspects of web app development.", title: 'Web App Development Python', duration: '2 hrs. / 3 days a week', time: '40 Hrs' },

        { id: 15, tabId: 3, img: smartpro8, desc: "Digital Marketing & SEO course is a comprehensive program designed to equip students with the knowledge and skills needed to excel in the dynamic world of online marketing. From understanding search engine optimization (SEO) techniques to mastering social media marketing strategies, this course offers practical insights and hands-on experience to drive digital success.", title: 'Digital Marketing & SEO', duration: '2 hrs. / 3 days a week', time: '40 Hrs' },

        { id: 16, tabId: 4, img: shortcourse1, desc: "Office automation refers to the implementation of technology and software solutions to streamline and simplify various administrative tasks within an office environment. It encompasses processes such as document management, data entry, scheduling, communication, and workflow automation. By reducing manual effort, improving efficiency", title: 'Office Automation', duration: '2 hrs. / 3 days a week', time: '40 Hrs' },

        { id: 17, tabId: 4, img: shortcourse2, desc: "Social Media Marketing course is a comprehensive program designed to equip you with the skills and knowledge needed to excel in the dynamic world of social media. Learn how to create effective strategies, engage your target audience, optimize campaigns, and measure success. Gain practical experience through hands-on projects and case studies.", title: 'Social Media Marketing', duration: '2 hrs. / 3 days a week', time: '40 Hrs' },

        { id: 18, tabId: 4, img: shortcourse3, desc: "Artificial Intelligence (AI) is a groundbreaking technology that is revolutionizing the way we live, work, and interact with the world. It encompasses the development of machines and systems that can perform tasks that typically require human intelligence, such as speech recognition, problem-solving, and decision-making. AI has become accessible to everyone", title: 'AI for Everyone', duration: '2 hrs. / 3 days a week', time: '40 Hrs' },

        { id: 19, tabId: 4, img: shortcourse4, desc: "Unlock the secrets to Amazon FBA success with our comprehensive course. Learn step-by-step strategies to start and grow a profitable e-commerce business. From product research and sourcing to listing optimization and marketing, we cover it all. Gain insider knowledge and practical skills to dominate the world of Amazon FBA.", title: 'Amazon FBA Virtual Assistant', duration: '2 hrs. / 3 days a week', time: '40 Hrs' },

        { id: 20, tabId: 4, img: shortcourse5, desc: "The Chat GPT course is a comprehensive training program designed to equip learners with the skills and knowledge needed to build and deploy chatbots using OpenAIs GPT technology. Through hands-on exercises, practical examples, and expert guidance, participants will learn how to create interactive conversational agents that can engage users effectively", title: 'Chat GPT for Developers', duration: '2 hrs. / 3 days a week', time: '40 Hrs' },

        { id: 21, tabId: 4, img: shortcourse6, desc: "Advanced Excel course is designed to take your spreadsheet skills to the next level. Learn advanced functions, data analysis techniques, and data visualization methods. Dive into complex formulas, pivot tables, and macros to streamline your work and increase efficiency. Gain a competitive edge in the workplace with our comprehensive training program.", title: 'Advanced Excel', duration: '2 hrs. / 3 days a week', time: '40 Hrs' },

        { id: 22, tabId: 4, img: shortcourse7, desc: "PHP and Laravel course is a comprehensive program designed to equip learners with the skills to create dynamic and robust web applications. Through hands-on exercises and real-world projects, participants will gain proficiency in PHP programming and harness the power of Laravel framework for efficient development", title: 'Web Development using PHP and Laravel', duration: '2 hrs. / 3 days a week', time: '40 Hrs' },

        { id: 23, tabId: 4, img: shortcourse8, desc: "Join our comprehensive Tableau course and unlock the power of data visualization. Learn hands-on techniques for creating interactive dashboards, analyzing data, and sharing insights with Tableaus intuitive interface. Enhance your analytical skills, make data-driven decisions, and gain a competitive edge in todays data-driven world..", title: 'Data Visualization foundation with Tableau', duration: '2 hrs. / 3 days a week', time: '40 Hrs' },

        { id: 24, tabId: 5, img: language1, desc: "Beginners English Language Course is designed to provide a solid foundation for learners starting their English language journey. Through interactive lessons, engaging activities, and practical exercises, students will develop essential skills in speaking, listening, reading, and writing. Join us and embark on an exciting learning adventure today!", title: 'Beginners', duration: '2 hrs. / 3 days a week', time: '40 Hrs', title2: "English Essentials - Beginners" },

        { id: 25, tabId: 5, img: language2, desc: "Pre-Intermediate English language course is designed for learners who have a basic understanding of English and want to further develop their skills. This comprehensive course focuses on improving grammar, vocabulary, reading, writing, listening, and speaking abilities. Through interactive lessons and engaging activities, students will gain confidence in using English in everyday situations.", title: 'Pre-Intermediate', duration: '2 hrs. / 3 days a week', time: '40 Hrs', title2: "Stepping Up English" },

        { id: 26, tabId: 5, img: language3, desc: "Intermediate English Language Course is designed to take your language skills to the next level. Through engaging lessons and interactive activities, you will enhance your vocabulary, grammar, and conversational abilities. Build confidence in expressing yourself fluently and accurately while exploring a wide range of topics. Join us on this exciting linguistic journey!", title: 'Intermediate', duration: '2 hrs. / 3 days a week', time: '40 Hrs', title2: "Proficient English" },

        { id: 27, tabId: 5, img: language4, desc: "Take your English language proficiency to new heights with our Upper Intermediate English Language Course. Designed for learners seeking advanced fluency, this course focuses on refining grammar, expanding vocabulary, and honing communication skills. Engage in stimulating discussions, debates, and presentations while exploring complex topics. Elevate your language abilities and unlock endless opportunities!", duration: '2 hrs. / 3 days a week', time: '40 Hrs', title: "Upper-Intermediate", title2: "Mastery in English" },

        { id: 28, tabId: 6, img: bonus1, desc: "Get ready for an exciting summer with our Technology Camp designed for students who've just passed Matric! Learn Web Designing, App Development, Digital Marketing, AI Basics, and more at discounted rates. Enroll now and turn your free time into a  powerful career head start", title: 'Technology Camp' },

        { id: 29, tabId: 6, img: bonus2, desc: "We're excited to launch the Generation AI Diploma perfect for students, educators, professionals, and creators, ready to lead in an AI-powered world. Master AI basics, Machine Learning, Generative AI tools (Midjourney, DALL-E, ChatGPT), AI in Business, Marketing, Web Development, Data Analysis, and Ethical AI. Start your journey today and become future-ready.", title: 'Gen Ai' },

    ];

    // ✅ filter courses based on active tab
    const filteredCourses = data.filter((course) => course.tabId === activeTab);

    return (
        <>
            <Header />

            {/* Main Banner */}
            <img src={mainBanner} alt="Main Banner" className="w-full object-cover" />

            {/* Breadcrumb */}
            <ul className="flex items-center gap-2 text-gray-500 px-4 mt-4 text-sm">
                <li>
                    <Link to="/" className="hover:text-gray-900">
                        <i className="fa-solid fa-house"></i>
                    </Link>
                </li>
                <li className="text-gray-800">/ Courses</li>
            </ul>

            {/* Secondary Banner */}
            <div className="mt-10">
                <img
                    src={"assets/images/courses/courses banner.jpg"}
                    alt="Courses Banner"
                    className="w-full object-cover"
                />
            </div>

            {/* Tabs */}
            <div className="mt-10 px-4 flex justify-center">
                <div className="inline-flex flex-wrap md:flex-nowrap gap-2 sm:gap-4 bg-[#001236] rounded-lg p-2 overflow-x-auto scrollbar-hide">
                    {tabs.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-3 sm:px-4 md:px-6 py-2 rounded-lg text-sm sm:text-base font-semibold transition-colors whitespace-nowrap 
          ${i === tabs.length - 1
                                    ? "bg-[#febe10] text-[#001236]"
                                    : activeTab === tab.id
                                        ? "bg-white text-[#001236]"
                                        : "text-white"
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tagline */}
            <div className="text-center py-6 text-2xl font-bold">
                <p>{tabs.find((tab) => tab.id === activeTab)?.tagline}</p>
            </div>

            {/* Course Grid */}
            <section className="mb-16 px-4 bg-[#f8f9fa]">
                <div
                    className={`mx-auto grid gap-8 ${activeTab === 1
                        ? "max-w-6xl grid-cols-1 sm:grid-cols-2" // Career Program tab
                        : "max-w-[1400px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        }`}
                >
                    {filteredCourses.map((course) => (
                        <Link
                            to={course.url || ""}
                            key={course.id}
                            className={`relative flex flex-col bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl p-6 transition-all duration-300 hover:-translate-y-2 group ${!course.url ? "pointer-events-none" : ""
                                } ${activeTab === 1 ? "min-h-[500px]" : "min-h-[450px]" // thoda bada card
                                }`}
                        >
                            {/* Image Section */}
                            <div className="flex justify-center mb-6">
                                <img
                                    src={course.img}
                                    alt={course.title}
                                    className={`rounded-xl object-cover w-full ${activeTab === 1 ? "h-[320px]" : "h-[200px]"
                                        } transition-transform duration-300 group-hover:scale-105`}
                                />
                            </div>

                            {/* Title */}
                            <h4 className="text-2xl font-bold text-[#001236] mb-3 leading-snug group-hover:text-[#febe10] transition-colors">
                                {course.title}
                            </h4>

                            {/* Description */}
                            <p className="text-gray-600 text-[1rem] leading-relaxed flex-1 mb-4">
                                {course.desc.length > 150
                                    ? `${course.desc.substring(0, 150)}...`
                                    : course.desc}
                            </p>

                            {/* Duration Section */}
                            {course.duration && (
                                <div className="flex flex-col gap-1 text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                                    <p className="font-semibold">Course Duration</p>
                                    <p className="font-bold text-gray-900">{course.duration}</p>
                                    <p>140 Hrs</p>
                                    <p className="font-bold text-gray-900">{course.time}</p>
                                </div>
                            )}

                            {/* Arrow Icon */}
                            <div className="absolute right-4 bottom-4 bg-[#001236] h-12 w-12 rounded-full flex items-center justify-center text-white shadow-lg opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                                <i className="fa fa-arrow-right text-lg"></i>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>


            <Footer />
        </>
    );
}

export default Courses;
