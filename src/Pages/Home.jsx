import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Main from "../Components/Main";
import Footer from "../Components/Footer";

function Home() {
    return (
        <div className="flex flex-col min-h-screen ">
            <Header />
            <div className="flex flex-1">
                {/* Sidebar - fixed left, no scroll */}
                <aside className="w-72 bg-gray-100 sticky left-0 top-0 border-r overflow-hidden">
                    <div className="h-full">
                        <Sidebar />
                    </div>
                </aside>

                {/* Main content - scrollable only here */}
                <div className="flex flex-col flex-1 overflow-hidden">
                    <main className="flex-1 overflow-y-auto bg-white">
                        <Main />
                    </main>

                    {/* Footer stays after main */}
                    <footer className="shrink-0 bg-gray-100">
                        <Footer />
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Home;
