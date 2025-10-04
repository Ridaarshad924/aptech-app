import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Partner() {
    return (
        <>
            <Header />
            {/* Page Banner */}
            <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
                <video
                    src="assets/video/partner-with-us.mp4"
                    poster="assets/images/placementthumbnail.jpg"
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="relative z-10 text-4xl lg:text-5xl font-extrabold text-white text-center">
                    Partner with Us
                </div>
            </section>

            {/* Breadcrumb */}
            <ul className="flex gap-2 text-gray-700 px-8 py-4">
                <li>
                    <Link to="/" className="hover:text-blue-600">
                        <i className="fa-solid fa-house"></i>
                    </Link>
                </li>
                <li>/ Partners</li>
            </ul>

            {/* Section: IT Industry */}
            <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-6 gap-12 max-w-6xl mx-auto">
                {/* Text Content */}
                <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-yellow-700">
                        I.T Industry of Pakistan
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Pakistan’s digital growth is evolving at a rapid pace. IT/ITeS is one of Pakistan’s fastest-growing industries, accounting for around 1% of the country’s GDP, which is about 3.5 billion USD. It has more than doubled in the last four years, and experts predict that it will more than double again in the next two to four years, reaching $7 billion.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        This shows that the IT scope in Pakistan is very high. It leads to numerous career opportunities for you if you are passionate about information technology and want to pursue this field as your profession.
                    </p>
                </div>

                {/* Image Content */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <img
                        src="assets/images/meeting.jpg"
                        alt="IT Industry"
                        className="w-full max-w-lg lg:h-120 rounded-xl shadow-xl object-cover"
                    />
                </div>
            </section>


            {/* Section: Skilled Professionals */}
            <section className="bg-gray-100 py-12 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Skill Professionals required for Jobs</h2>
                    <p className="text-gray-700 mb-4">
                        As per survey, every year more then 25,000 graduates from university
                        joined the market but only 10% of them are employable since they are
                        lacking with skills. Whereas industry is looking for more then
                        100,000 skilled I.T professionals to meet the demand.
                    </p>
                    <p className="text-gray-700 mb-4">
                        APTECH already has more than 2500 satisfied business partners across
                        the globe. Those who have associated with us have grown and
                        prospered.
                    </p>
                    <p className="text-gray-700">
                        Aptech is here to fill the gap since we are offering skilled based
                        courses on market most in-demand technologies. This is why our
                        passed out are highly in-demand for industry to get jobs.
                    </p>
                </div>
            </section>

            {/* Section: Opportunities for Freelancing */}
            <section className="bg-gray-100 py-12 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Opportunities for Freelancing</h2>
                    <p className="text-gray-700 mb-4">
                        Pakistan is the 3rd Largest country in freelancing. This has open
                        new door of opportunities for youth of Pakistan where they are open
                        to the world to showcase their skills and earn with no boundaries.
                        Currently more than 300,000 skilled youth is benefitting from this
                        multidimensional opportunity, still this industry is looking for
                        more skilled professionals.
                    </p>
                    <p className="text-gray-700 mb-4">
                        APTECH already has more than 2500 satisfied business partners across
                        the globe. Those who have associated with us have grown and
                        prospered.
                    </p>
                    <p className="text-gray-700">
                        Aptech offering skilled based training on the technologies required
                        for freelancing along with special workshop to become a freelancer.
                    </p>
                </div>
            </section>

            {/* Section: Why Invest */}
            <section className="py-12 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Why Invest</h2>
                    <p className="text-gray-700 mb-4">
                        Franchise Model gives individuals the opportunity to go into
                        business for themselves with an excellent chance of success at a
                        minimum of risk. Starting a new business from scratch is inherently
                        risky. Most studies conclude that over 90% fail within 3 to 5 years.
                        In comparison, U.S. Dept of Commerce studies have shown that over
                        92% of franchised businesses are still operating after 5 years.
                    </p>
                    <p className="text-gray-700 mb-4">
                        APTECH already has more than 2500 satisfied business partners across
                        the globe. Those who have associated with us have grown and
                        prospered.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Our franchise owners have opportunity to access more than three
                        decade of business experience and a proven business model and can
                        offer a product/ service that have been well accepted in many
                        markets and a brand name that people are already familiar with. The
                        operation and control of your business has already been well
                        established, assisting you in running the business.
                    </p>
                    <p className="text-gray-700">
                        Under Individual Training, Aptech offers career and professional
                        training through its Aptech Computer Education brand.
                    </p>
                </div>
            </section>

            {/* Section: Support Franchise */}
            <section className="bg-gray-100 py-12 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Support Franchise</h2>
                    <p className="text-gray-700 mb-4">
                        Franchisee Support Office (FSO) Pakistan is extending its support to
                        its business partners in following areas: Active support & guidance
                        for center start-up includes
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Site selection.</li>
                        <li>
                            Center layout planning. APTECH helps in charting out areas such as
                            the reception desk, counselors' station, computer labs,
                            classrooms, etc.
                        </li>
                        <li>Recruitment (of staff, faculty, etc.) support.</li>
                        <li>
                            Center automation support. APTECH has developed its own customized
                            software for smooth running of the operations of the centers. This
                            enables each center to manage all invoicing & operations online.
                            At the time of start-up of new center, APTECH helps install this
                            system & guides the center's staff on using it.
                        </li>
                        <li>Support in marketing launch of the center.</li>
                        <li>Placement support for students.</li>
                    </ul>
                </div>
            </section>

            {/* Section: Placement Support */}
            <section className="py-12 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Placement support</h2>
                    <p className="text-gray-700 mb-4">
                        Franchisee Support Office (FSO) Pakistan is extending its support to
                        its business partners in following areas: Active support & guidance
                        for center start-up includes
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            Full-fledged Placements Team dedicated to finding appropriate job
                            openings for trained students across all centers.
                        </li>
                        <li>
                            Conducts job-oriented training workshops for students, increasing
                            visibility of brand & credibility of the center.
                        </li>
                        <li>
                            Organizes industry visits to familiarize students with job roles &
                            opportunities & to build their industry contacts.
                        </li>
                        <li>Sources job opportunities for students.</li>
                        <li>
                            Identifies internship opportunities for students in IT companies.
                        </li>
                        <li>
                            Conducts training programs for center's own placement executives,
                            if any.
                        </li>
                    </ul>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Partner;
