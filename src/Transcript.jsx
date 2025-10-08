import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';

function Transcript() {
    return (
        <>
            <Header />
            <div className="max-w-[90%] mx-auto mt-12 px-5">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-8 pb-2">
                    Certificates
                </h2>

                <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 space-y-8">
                    {/* Certificates & Performance Statements */}
                    <div>
                        <h2 className="text-yellow-500 text-2xl font-bold mb-4 border-b-4 border-gray-200 pb-2">
                            Certificates & Performance Statements
                        </h2>
                        <p className="text-gray-700 text-justify leading-relaxed">
                            After completing your course requirements, students are issued Certificates & Performance Statements depending upon the course enrolled. These Transcripts are instantly verifiable from the links mentioned below.
                        </p>
                    </div>

                    <hr className="border-gray-300 my-6" />

                    {/* Authenticating P.S./Cert. */}
                    <div>
                        <h2 className="text-yellow-500 text-2xl font-bold mb-4 border-b-4 border-gray-200 pb-2">
                            Authenticating P.S./Cert.
                        </h2>
                        <p className="text-gray-700 text-justify leading-relaxed mb-4">
                            Certificates & Performance Statements issued can be verified from the following links. You'll need the name as printed on the document and the serial number.
                        </p>
                        <div className="flex flex-col space-y-3">
                            <a
                                href="https://www.aptechlearning.com/it/member-login/pop_icon.asp"
                                target="_blank"
                                className="text-red-600 hover:text-red-800 hover:underline transition-colors duration-200"
                            >
                                &#x27A4; For 2003 & 0511 curriculum please click here
                            </a>
                            <a
                                href="https://aptrack.asia/PS%20and%20Certificates/PS_13_AuthenticateCertificate.aspx"
                                target="_blank"
                                className="text-red-600 hover:text-red-800 hover:underline transition-colors duration-200"
                            >
                                &#x27A4; For New curriculum please click here
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Transcript;
