import React, { useEffect } from "react";
import Banner from "/assets/pass-templates/VisionaryAwardsBanner.png";
import MobileBanner from "/assets/pass-templates/VisionaryAwardMobile.png";
import { useMediaQuery } from "@uidotdev/usehooks";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function VisionaryAwards() {
    const isMobile = useMediaQuery("(max-width: 747px)");
    const isTablet = useMediaQuery("(min-width: 748px) and (max-width: 1024px)");
    const isDesktop = useMediaQuery("(min-width: 1025px)");

    useEffect(() => {
        document.title = "Aptech Visionary Awards 2025";
    }, []);

    return (
        <>
            <Header />

            {/* HERO / BANNER */}
            {isDesktop && (
                <section className="relative w-full h-[400px]">
                    <img
                        src={Banner}
                        alt="Desktop Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-7 left-7 -translate-x-1 text-center">
                        <a
                            href="https://forms.gle/1KaqiXnS72dpX2CW7"
                            target="_blank"
                            className="bg-[#D79C42] text-white w-[250px] h-[65px] flex items-center justify-center text-lg font-semibold rounded-lg"
                        >
                            Nominate yourself
                        </a>
                    </div>
                </section>
            )}

            {/* Tablet Banner */}
            {isTablet && (
                <section className="relative w-full h-[40vh]">
                    <img
                        src={Banner}
                        alt="Tablet Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-5 left-3">
                        <a
                            href="https://forms.gle/1KaqiXnS72dpX2CW7"
                            target="_blank"
                            className="bg-[#D79C42] text-white px-6 py-3 text-xs rounded-md"
                        >
                            Nominate yourself
                        </a>
                    </div>
                </section>
            )}

            {/* Mobile Banner */}
            {isMobile && (
                <section className="relative w-full h-screen ">
                    <img
                        src={MobileBanner}
                        alt="Mobile Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-[62%] left-4 -translate-x-1 w-[40%] text-center">
                        <a
                            href="https://forms.gle/1KaqiXnS72dpX2CW7"
                            target="_blank"
                            className="bg-[#D79C42] text-white w-full max-w-[280px] py-3 text-base sm:text-lg rounded-md inline-block"
                        >
                            Nominate yourself
                        </a>
                    </div>
                </section>
            )}

            {/* Content */}
            <div className="max-w-6xl mx-auto px-6 mt-0">
                {/* About */}
                <section className="bg-white rounded-lg shadow-md p-6 mt-6">
                    <h2 className="text-xl font-semibold mb-3">
                        Aptech Visionary Awards 2025
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        The <b>Aptech Visionary Awards</b> celebrate extraordinary startups
                        led by students and young entrepreneurs who are reshaping
                        industries, solving real-world problems, and fueling Pakistan’s
                        digital economy.
                        <br />
                        Building a startup is exciting but challenging—from validating ideas
                        to scaling solutions. Taking time to reflect on your journey and
                        share your achievements gives your startup recognition, credibility,
                        and a platform to inspire others.
                        <br />
                        By entering the <b>Aptech Visionary Awards</b>, you gain the
                        opportunity to showcase your innovation, boost visibility, and
                        strengthen your professional and business brand.
                    </p>
                </section>

                {/* Why Enter */}
                <section className="bg-white rounded-lg shadow-md p-6 mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-[#FCAF17] font-medium mb-2">
                                Raise Your Startup’s Visibility
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Being shortlisted or named a winner puts your startup in front
                                of investors, industry experts, media, and potential partners.
                                Use award recognition on your website, pitch decks, and social
                                media to build trust, attract funding, and secure high-value
                                collaborations.
                                <br />
                                This is more than just an award—it’s a reflection of your growth
                                journey. Celebrating milestones, big or small, motivates you to
                                refine your business model and set higher goals for impact.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[#FCAF17] font-medium mb-2">
                                Strengthen Connections
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                A nomination is an opportunity to connect with other startups,
                                industry leaders, and potential mentors. Whether at the event or
                                online, this recognition can open doors to{" "}
                                <b>partnerships, collaborations, and investment opportunities.</b>
                                <br />
                                Recognition builds credibility and visibility, helping your
                                startup remain top-of-mind in Pakistan’s entrepreneurial
                                ecosystem.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Eligibility */}
                <section className="bg-white rounded-lg shadow-md p-6 mt-6">
                    <h2 className="text-xl font-semibold mb-3">Eligibility</h2>
                    <ol className="list-decimal list-inside text-gray-600 space-y-2">
                        <li>
                            Open to all Pakistani startups founded or co-founded by students
                            or young entrepreneurs (aged 18+).
                        </li>
                        <li>
                            Applicants must demonstrate a clear problem statement, innovative
                            solution, and measurable impact.
                        </li>
                        <li>Startups from any industry or sector are welcome to apply.</li>
                        <li>
                            Teams must provide supporting evidence (prototype, demo, early
                            users, revenue, or client references).
                        </li>
                        <li>
                            Aptech staff, judges, and their immediate family members are not
                            eligible.
                        </li>
                    </ol>
                </section>

                {/* Registration */}
                <section className="bg-white rounded-lg shadow-md p-6 mt-6">
                    <h2 className="text-xl font-semibold mb-3">What to Prepare</h2>
                    <p className="text-gray-700 mb-3">
                        Before you begin your registration, make sure you have the following
                        details ready:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>
                            <span className="text-[#FCAF17] font-semibold">Startup Name</span>
                        </li>
                        <li>
                            <span className="text-[#FCAF17] font-semibold">
                                Founder / Co-Founder Name(s)
                            </span>
                        </li>
                        <li>
                            <span className="text-[#FCAF17] font-semibold">
                                Email Address & Contact Number
                            </span>
                        </li>
                        <li>
                            <span className="text-[#FCAF17] font-semibold">
                                Website Link (if available)
                            </span>
                        </li>
                        <li>
                            <span className="text-[#FCAF17] font-semibold">
                                App Link (if applicable)
                            </span>
                        </li>
                        <li>
                            <span className="text-[#FCAF17] font-semibold">
                                Describe Your Startup
                            </span>{" "}
                            <i>(brief overview of your mission, product/service, and impact)</i>
                        </li>
                        <li>
                            <span className="text-[#FCAF17] font-semibold">Startup Logo</span>{" "}
                            <i>(PNG/JPG)</i>
                        </li>
                        <li>
                            <span className="text-[#FCAF17] font-semibold">
                                Current Status
                            </span>{" "}
                            <i>(Idea / Early Stage / Established)</i>
                        </li>
                        <li>
                            <span className="text-[#FCAF17] font-semibold">
                                Project Demonstration
                            </span>{" "}
                            <i>(Link or file upload)</i>
                        </li>
                        <li>
                            <span className="text-[#FCAF17] font-semibold">Your Picture</span>{" "}
                            <i>(PNG/JPG)</i>
                        </li>
                        <li>
                            <span className="text-[#FCAF17] font-semibold">
                                Why Your Startup Should Be Recognized
                            </span>{" "}
                            <i>
                                (100–200 words highlighting uniqueness, innovation, or impact)
                            </i>
                        </li>
                    </ul>
                </section>

                {/* Judging */}
                <section className="bg-white rounded-lg shadow-md p-6 mt-6">
                    <h2 className="text-xl font-semibold mb-3">Judging & Selection</h2>
                    <p className="text-gray-700 mb-3">
                        Entries will be reviewed by a{" "}
                        <b>panel of industry experts, investors, and entrepreneurs</b>{" "}
                        through a transparent evaluation process:
                    </p>
                    <p className="text-gray-700 font-semibold mb-2">Criteria:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>
                            <span className="text-[#FCAF17] font-semibold">Innovation: </span>
                            Originality of idea or product.
                        </li>
                        <li>
                            <span className="text-[#FCAF17] font-semibold">Impact: </span>
                            Social, economic, or technological value.
                        </li>
                        <li>
                            <span className="text-[#FCAF17] font-semibold">Traction: </span>
                            Users, clients, or revenue growth.
                        </li>
                        <li>
                            <span className="text-[#FCAF17] font-semibold">Scalability: </span>
                            Market expansion and sustainability potential.
                        </li>
                        <li>
                            <span className="text-[#FCAF17] font-semibold">Execution: </span>
                            Team capability and business model strength.
                        </li>
                        <li>
                            <span className="text-[#FCAF17] font-semibold">
                                Professionalism:{" "}
                            </span>
                            Presentation quality and clarity of vision.
                        </li>
                    </ul>
                </section>

                {/* Call to Action */}
                <section className="bg-white rounded-lg shadow-md p-6 mt-6 text-center">
                    <a
                        href="https://forms.gle/1KaqiXnS72dpX2CW7"
                        target="_blank"
                        className="bg-[#D79C42] text-white px-6 py-3 rounded-md text-lg font-semibold inline-flex items-center justify-center"
                    >
                        Nominate yourself
                    </a>
                </section>

                {/* Contact */}
                <div className="text-gray-500 text-center mt-8">
                    Questions? Contact the Aptech Events Team:
                    <br />
                    <a
                        href="mailto:events@aptech-education.com.pk"
                        className="text-[#0b5ed7] underline"
                    >
                        events@aptech-education.com.pk
                    </a>
                    <div className="flex justify-center items-center gap-2 mt-2">
                        <svg
                            className="w-4 h-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z" />
                        </svg>
                        <a href="https://wa.me/+923318781317" className="text-[#0b5ed7]">
                            +92 331 8781317
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
export default VisionaryAwards