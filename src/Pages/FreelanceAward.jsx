import React, { useEffect } from "react";
import {
    Code,
    Smartphone,
    Monitor,
    Palette,
    BarChart3,
    PenTool,
    Film,
    Database,
    Shield,
    Briefcase,
} from "lucide-react";
import Banner from "/assets/pass-templates/Banner.jpg";
import MobileBanner from "/assets/pass-templates/Mobile-Banner.jpg";
import { useMediaQuery } from "@uidotdev/usehooks";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function FreelanceAward() {
    const isMobile = useMediaQuery("(max-width: 747px)");
    const isTablet = useMediaQuery(
        "(min-width: 748px) and (max-width: 1024px)"
    );
    const isDesktop = useMediaQuery("(min-width: 1025px)");

    useEffect(() => {
        document.title =
            "Aptech Freelancers Award — Celebrating professional independence";
    }, []);

    const CTA = ({ sizeClass = "w-full py-3 text-base", ...props }) => (
        <a
            href="https://forms.gle/QvkzybmeFGKqrNWx8"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center justify-center bg-[#D79C42] hover:bg-[#c28633] active:scale-[0.997] transition transform rounded-lg text-white font-semibold ${sizeClass}`}
            {...props}
        >
            Nominate yourself
        </a>
    );

    const categoriesLeft = [
        { Icon: Code, title: "Web Development", desc: "(Front-end / Back-end / Full-stack)" },
        { Icon: Smartphone, title: "Mobile App Development", desc: "(iOS / Android / Hybrid)" },
        { Icon: Monitor, title: "Software Programming", desc: "(Desktop Utilities / Automation)" },
        { Icon: Palette, title: "UI/UX & Graphic Design", desc: "(Apps & Web Interfaces)" },
        { Icon: BarChart3, title: "Digital Marketing & SEO" },
    ];

    const categoriesRight = [
        { Icon: Film, title: "Video Animation & Multimedia" },
        { Icon: Database, title: "Data Science & Analytics", desc: "(AI / ML)" },
        { Icon: Shield, title: "Cybersecurity & Network Engineering" },
        { Icon: Briefcase, title: "IT Consulting & Project Management" },
        { Icon: PenTool, title: "Content & Technical Writing" },
    ];

    const timeline = [
        { title: "Launch & Open Registrations", date: "Mon, 15 Sep 2025" },
        { title: "Submissions Close", date: "Wed, 1 Oct 2025" },
        { title: "Judging Period", date: "Fri, 3 & Sat, 4 Oct 2025" },
        { title: "Winners Announced / Ceremony", date: "Sat, 11 Oct 2025" },
    ];

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
                            href="https://forms.gle/QvkzybmeFGKqrNWx8"
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
                            href="https://forms.gle/QvkzybmeFGKqrNWx8"
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
                            href="https://forms.gle/QvkzybmeFGKqrNWx8"
                            target="_blank"
                            className="bg-[#D79C42] text-white w-full max-w-[280px] py-3 text-base sm:text-lg rounded-md inline-block"
                        >
                            Nominate yourself
                        </a>
                    </div>
                </section>
            )}

            {/* MAIN */}
            <main className="max-w-6xl mx-auto px-4 py-10 space-y-10">
                {/* About */}
                <section id="about" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-gray-800 mb-3">
                                Why We Celebrate Freelancers
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                The Aptech Freelancers Award celebrates independent professionals who are building
                                sustainable careers, contributing to Pakistan’s digital economy, and inspiring the next
                                generation of learners. Freelancing is rewarding but challenging — this award helps
                                freelancers showcase work, earn recognition, and strengthen their professional brand.
                            </p>
                        </div>

                        <div className="w-full lg:w-[340px]">
                            <div className="bg-gradient-to-tr from-white to-gray-50 border border-gray-100 rounded-xl p-4 shadow-sm">
                                <div className="text-sm text-gray-500 font-medium mb-2">Open to</div>
                                <div className="text-lg font-semibold text-gray-800">Pakistani Freelancers (18+)</div>
                                <p className="text-sm text-gray-600 mt-3">Priority for applicants operating out of Karachi for the inaugural edition.</p>
                                <div className="mt-4">
                                    <a href="#registration" className="text-sm inline-flex items-center gap-2 text-[#D79C42] font-medium hover:underline">
                                        Learn how to register →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Enter */}
                <section id="why-enter" className="grid gap-6 md:grid-cols-2">
                    <article className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-yellow-600 mb-2">Raise Your Work Visibility</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Being shortlisted or named a winner puts your name in front of industry peers and
                            potential clients — great for your portfolio, freelance profile and personal branding.
                        </p>
                    </article>

                    <article className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-yellow-600 mb-2">Strengthen Relationships</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Networking at the event or online can unlock collaborations, mentorship and new
                            opportunities. Recognition helps maintain your reputation and keeps you top-of-mind.
                        </p>
                    </article>
                </section>

                {/* Categories */}
                <section id="categories" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
                        <span className="text-sm text-gray-500">Select one category when you register</span>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <ul className="space-y-4">
                            {categoriesLeft.map((item, i) => {
                                const CategoryIcon = item.Icon;
                                return (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1">
                                            <CategoryIcon size={20} className="text-yellow-500" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-800">{item.title}</div>
                                            {item.desc && <div className="text-sm text-gray-500">{item.desc}</div>}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        <ul className="space-y-4">
                            {categoriesRight.map((item, i) => {
                                const CategoryIcon = item.Icon;
                                return (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1">
                                            <CategoryIcon size={20} className="text-yellow-500" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-800">{item.title}</div>
                                            {item.desc && <div className="text-sm text-gray-500">{item.desc}</div>}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>

                {/* Eligibility */}
                <section id="eligibility" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                        <li>Open to Pakistani freelancers aged 18 or above (citizens or legal residents).</li>
                        <li>Applicants must work primarily in IT or a related digital discipline and enter the best-matching category.</li>
                        <li>Provide a verifiable profile on a recognised freelancing platform OR client references and invoices if off-platform.</li>
                        <li>Demonstrate a proven track record: completed projects, client feedback, badges or equivalent evidence.</li>
                        <li>Aptech staff and judges (or their immediate family) are not eligible.</li>
                    </ol>
                </section>

                {/* Registration */}
                <section id="registration" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold mb-4">How to Register</h2>
                    <p className="text-gray-700 mb-4">
                        Registration is simple — upload samples and share profile links so judges can review your work.
                    </p>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <h3 className="text-lg font-medium text-yellow-600 mb-2">What to prepare</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong className="text-[#FCAF17]">Contact details:</strong> Full name, email, phone, city/province.</li>
                                <li><strong className="text-[#FCAF17]">Category:</strong> Choose one category per registration.</li>
                                <li><strong className="text-[#FCAF17]">Platform profiles:</strong> Links to Upwork, Fiverr, Freelancer.com (if available).</li>
                                <li><strong className="text-[#FCAF17]">Portfolio:</strong> 2–3 representative projects (links or uploads).</li>
                            </ul>
                        </div>

                        <div>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong className="text-[#FCAF17]">Metrics:</strong> Number of projects, average rating, Job Success Score (optional earnings).</li>
                                <li><strong className="text-[#FCAF17]">Summary:</strong> 100–200 word professional summary.</li>
                                <li><strong className="text-[#FCAF17]">Supporting docs:</strong> Resume, certificates, client testimonials (optional).</li>
                                <li><strong className="text-[#FCAF17]">Consent:</strong> Confirm data use for judging and promotion.</li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 mt-4">
                        Tip: Make your portfolio easy to review — include short case-study notes explaining the challenge, your role, tools used and outcome.
                    </p>
                </section>

                {/* Judging */}
                <section id="judging" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold mb-4">Judging & Selection</h2>
                    <p className="text-gray-700 mb-4">
                        A panel of independent industry experts will evaluate entries using a clear rubric: eligibility screening, portfolio review and scoring followed by panel deliberation.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                        <li><strong className="text-[#FCAF17]">Quality of work:</strong> Craftsmanship, technical accuracy, design and problem-solving.</li>
                        <li><strong className="text-[#FCAF17]">Impact:</strong> Measurable outcomes and client results.</li>
                        <li><strong className="text-[#FCAF17]">Client feedback:</strong> Ratings, reviews and references.</li>
                        <li><strong className="text-[#FCAF17]">Complexity & innovation:</strong> Difficulty and originality.</li>
                        <li><strong className="text-[#FCAF17]">Professionalism:</strong> Communication and delivery documentation.</li>
                    </ul>

                    <p className="text-sm text-gray-500 mt-4">
                        Winners chosen by majority decision. Judges recuse themselves from categories with conflicts of interest.
                    </p>

                    <p className="mt-3 text-sm"><strong>*</strong> <span className="text-gray-600">The inaugural Aptech Freelancers Award will prioritise applicants operating out of Karachi.</span></p>
                </section>

                {/* Timeline (horizontal scroll on small screens) */}
                <section id="timeline" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold mb-4">Timeline</h2>

                    <div className="overflow-x-auto -mx-2 py-2">
                        <div className="flex gap-4 px-2 min-w-max">
                            {timeline.map((t, idx) => (
                                <div
                                    key={idx}
                                    className="min-w-[220px] bg-gradient-to-b from-white to-gray-50 border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-3 h-3 rounded-full bg-yellow-400 ring-4 ring-yellow-100" />
                                        <h3 className="text-sm font-semibold text-gray-800">{t.title}</h3>
                                    </div>
                                    <p className="text-lg font-bold text-gray-900">{t.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center">
                    <div className="inline-block">
                        <CTA sizeClass="w-[260px] h-[64px] text-lg" />
                    </div>
                </section>

                {/* Contact */}
                <section className="text-center text-sm text-gray-600">
                    <p>Questions? Contact the Aptech Events Team:</p>
                    <a href="mailto:events@aptech-education.com.pk" className="text-blue-600 hover:underline">
                        events@aptech-education.com.pk
                    </a>

                    <div className="mt-3 flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4 inline-block fill-current text-green-600">
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                        <a href="https://wa.me/+923318781317" className="hover:underline">+92 331 8781317</a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default FreelanceAward;
