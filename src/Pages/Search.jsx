import React, { useState } from "react";
import { Link } from "react-router-dom";

const allcourses = [
  {
    name: "python",
    key: [
      {
        name: "web development",
        detail:
          "Web development is the work involved in developing a website for the Internet",
        img: "assets/images/logo/webdesign.png",
      },
      {
        name: "python programming",
        detail:
          "Python is a popular programming language. Python can be used on a server to create web applications.",
        img: "assets/images/logo/python.png",
      },
      { name: "HDSE", detail: "", img: "assets/images/icon-aptech.png" },
      { name: "ADSE", detail: "", img: "assets/images/icon-aptech.png" },
    ],
    url: "assets/images/search/python.jpg",
  },
  {
    name: "js",
    key: [
      {
        name: "web development",
        detail:
          "Web development is the work involved in developing a website for the Internet",
        img: "assets/images/logo/webdesign.png",
      },
      {
        name: "react",
        detail:
          "React is a JavaScript library for building user interfaces. Declarative: React makes it painless to create interactive UIs. Design simple views",
        img: "assets/images/logo/react.png",
      },
      {
        name: "angular",
        detail:
          "Angular is a platform for building mobile and desktop web applications. ",
        img: "assets/images/logo/angular.png",
      },
      {
        name: "web designing",
        detail:
          "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development",
        img: "assets/images/logo/webdesign.png",
      },
      { name: "CPISM", detail: "", img: "assets/images/icon-aptech.png" },
      { name: "HDSE", detail: "", img: "assets/images/icon-aptech.png" },
      { name: "ADSE", detail: "", img: "assets/images/icon-aptech.png" },
    ],
    url: "assets/images/search/js.jpg",
  },
  {
    name: "jquery",
    key: [
      {
        name: "web development",
        detail:
          "Web development is the work involved in developing a website for the Internet",
        img: "assets/images/logo/webdesign.png",
      },
      {
        name: "react",
        detail:
          "React is a JavaScript library for building user interfaces. Declarative: React makes it painless to create interactive UIs. Design simple views",
        img: "assets/images/logo/react.png",
      },
      {
        name: "angular",
        detail:
          "Angular is a platform for building mobile and desktop web applications. ",
        img: "assets/images/logo/angular.png",
      },
      {
        name: "web designing",
        detail:
          "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development",
        img: "assets/images/logo/webdesign.png",
      },
      { name: "CPISM", detail: "", img: "assets/images/icon-aptech.png" },
      { name: "HDSE", detail: "", img: "assets/images/icon-aptech.png" },
      { name: "ADSE", detail: "", img: "assets/images/icon-aptech.png" },
    ],
    url: "assets/images/search/js.jpg",
  },
  {
    name: "javascript",
    key: [
      {
        name: "web development",
        detail:
          "Web development is the work involved in developing a website for the Internet",
        img: "assets/images/logo/webdesign.png",
      },
      {
        name: "react",
        detail:
          "React is a JavaScript library for building user interfaces. Declarative: React makes it painless to create interactive UIs. Design simple views",
        img: "assets/images/logo/react.png",
      },
      {
        name: "angular",
        detail:
          "Angular is a platform for building mobile and desktop web applications. ",
        img: "assets/images/logo/angular.png",
      },
      {
        name: "web designing",
        detail:
          "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development",
        img: "assets/images/logo/webdesign.png",
      },
      { name: "CPISM", detail: "", img: "assets/images/icon-aptech.png" },
      { name: "HDSE", detail: "", img: "assets/images/icon-aptech.png" },
      { name: "ADSE", detail: "", img: "assets/images/icon-aptech.png" },
    ],
    url: "assets/images/search/js.jpg",
  },
  {
    name: "html",
    key: [
      {
        name: "web development",
        detail:
          "Web development is the work involved in developing a website for the Internet",
        img: "assets/images/logo/webdesign.png",
      },
      {
        name: "web designing",
        detail:
          "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development",
        img: "assets/images/logo/webdesign.png",
      },
      { name: "CPISM", detail: "", img: "assets/images/icon-aptech.png" },
      { name: "HDSE", detail: "", img: "assets/images/icon-aptech.png" },
      { name: "ADSE", detail: "", img: "assets/images/icon-aptech.png" },
    ],
    url: "assets/images/search/html.jpg",
  },
  {
    name: "css",
    key: [
      {
        name: "web development",
        detail:
          "Web development is the work involved in developing a website for the Internet",
        img: "assets/images/logo/webdesign.png",
      },
      {
        name: "web designing",
        detail:
          "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development",
        img: "assets/images/logo/webdesign.png",
      },
      { name: "CPISM", detail: "", img: "assets/images/icon-aptech.png" },
      { name: "HDSE", detail: "", img: "assets/images/icon-aptech.png" },
      { name: "ADSE", detail: "", img: "assets/images/icon-aptech.png" },
    ],
    url: "assets/images/search/css.jpg",
  },
  {
    name: "angular",
    key: [
      {
        name: "angular",
        detail:
          "Angular is a platform for building mobile and desktop web applications. ",
        img: "assets/images/logo/angular.png",
      },
      {
        name: "MEAN",
        detail:
          "The MEAN stack is a JavaScript-based framework for developing web applications. MEAN is named after MongoDB, Express, Angular, and Node.",
        img: "assets/images/logo/mean.png",
      },
      { name: "HDSE", detail: "", img: "assets/images/icon-aptech.png" },
      { name: "ADSE", detail: "", img: "assets/images/icon-aptech.png" },
    ],
    url: "assets/images/search/angular.jpg",
  },
  {
    name: "react",
    key: [
      {
        name: "MERN",
        detail:
          "The MERN stack is a JavaScript-based framework for developing web applications. MERN is named after MongoDB, Express, React, and Node.",
        img: "assets/images/logo/mern.png",
      },
      { name: "HDSE", detail: "", img: "assets/images/icon-aptech.png" },
      { name: "ADSE", detail: "", img: "assets/images/icon-aptech.png" },
    ],
    url: "assets/images/search/react.jpg",
  },
  {
    name: "website",
    key: [
      {
        name: "web development",
        detail:
          "Web development is the work involved in developing a website for the Internet",
        img: "assets/images/logo/webdesign.png",
      },
      {
        name: "web designing",
        detail:
          "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development",
        img: "assets/images/logo/webdesign.png",
      },
      { name: "CPISM", detail: "", img: "assets/images/icon-aptech.png" },
      { name: "HDSE", detail: "", img: "assets/images/icon-aptech.png" },
      { name: "ADSE", detail: "", img: "assets/images/icon-aptech.png" },
    ],
    url: "assets/images/search/website.jpg",
  },
  {
    name: "bootstrap",
    key: [
      {
        name: "web development",
        detail:
          "Web development is the work involved in developing a website for the Internet",
        img: "assets/images/logo/webdesign.png",
      },
      {
        name: "web designing",
        detail:
          "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development",
        img: "assets/images/logo/webdesign.png",
      },
      { name: "CPISM", detail: "", img: "assets/images/icon-aptech.png" },
      { name: "HDSE", detail: "", img: "assets/images/icon-aptech.png" },
      { name: "ADSE", detail: "", img: "assets/images/icon-aptech.png" },
    ],
    url: "assets/images/search/bootstrap.jpg",
  },
];

const Search = ({ handleSearchButtonClick }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAutocompleteVisible, setAutocompleteVisible] = useState(false);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setAutocompleteVisible(query.length > 0);
  };

  const filteredCourses = allcourses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative w-full min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover transition-all duration-300"
        style={{
          backgroundImage:
            filteredCourses.length > 0 ? `url(${filteredCourses[0].url})` : "",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <p className="text-center text-white text-2xl sm:text-3xl font-semibold mb-6">
          Explore courses, events, and locations
        </p>

        {/* Search Box */}
        <div className="w-full max-w-xl relative">
          <div className="flex items-center border rounded-lg overflow-hidden shadow-md bg-white">
            <div className="px-3 text-gray-500">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="search"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search courses..."
              className="w-full py-3 px-2 outline-none text-gray-700"
            />
            <div
              className="px-3 text-gray-500 cursor-pointer"
              onClick={() => {
                setSearchQuery("");
                setAutocompleteVisible(false);
                handleSearchButtonClick();
              }}
            >
              <i className="fa-solid fa-circle-xmark"></i>
            </div>
          </div>

          {/* Autocomplete Dropdown */}
          {isAutocompleteVisible && filteredCourses.length > 0 && (
            <div className="absolute z-20 w-full bg-white border mt-1 rounded-lg shadow-lg max-h-80 overflow-auto">
              {filteredCourses.map((course) => (
                <div key={course.name} className="px-4 py-2 border-b">
                  <p className="font-semibold mb-1">{course.name}</p>
                  <ul>
                    {course.key.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center py-1 hover:bg-gray-100 rounded cursor-pointer"
                      >
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-10 h-10 object-cover rounded mr-4"
                        />
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* View All Link */}
              <div className="px-4 py-2 text-center">
                <Link
                  to="/all-courses"
                  onClick={handleSearchButtonClick}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View All Courses
                </Link>
              </div>
            </div>
          )}

          {/* No results */}
          {isAutocompleteVisible && filteredCourses.length === 0 && (
            <div className="absolute z-20 w-full bg-white border mt-1 rounded-lg shadow-lg px-4 py-2">
              <p className="text-gray-600 text-center">No results found</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;