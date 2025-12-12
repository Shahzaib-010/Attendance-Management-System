import React from "react";
import { Link } from 'react-router-dom';

function landingPage() {

  

  return (
    <section className="w-full bg-black">
      {/* Navbar */}

      <nav
        className=" fixed top-0 left-0 z-100 w-full   backdrop-blur-2xl bg-white/10 
  border-b border-white/10"
      >
        <div className="flex justify-between items-center h-20 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <img src="./images/bubble-chart.png" alt="" className="w-10" />

            <h1 className="text-white font-wix2 text-2xl">Presence<span className="text-orange-500">Pro</span></h1>
          </div>

          <div className="flex items-center space-x-[3vw] font-switzer text-white">
            <a href="/">Pricing</a>
            <a href="/">Blogs</a>
            <a href="/">Contact Us</a>
          </div>

          <div className="flex justify-center item-center font-switzer text-white">
           <Link to="/signup" className="flex">
                <button className="px-4 py-2 bg-transparent hover:bg-white/10 transition duration-200 border-r border-gray-500/50 focus:outline-none">
                  Sign Up
                </button>
            </Link>

            <Link to="/login" className="flex">
                <button className="px-4 py-2 bg-transparent hover:bg-white/10 transition duration-200 focus:outline-none">
                  Log In
                </button>
            </Link> 
          </div>
        </div>
      </nav>

      {/* Landing Page */}

      <section className="w-full h-screen flex flex-col justify-start  items-center text-white pt-[17vw]  bg-[radial-gradient(circle_500px_at_50%_300px,rgba(6,182,212,0.3),transparent)]">
        <div className="text-center max-w-5xl">
          <h1
            className="font-extrabold leading-tight  uppercase font-wix2"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
            }}
          >
            YOUR
            <span className="text-orange-500 mx-2">"ONE-CLICK"</span>
            <br />
            ATTENDANCE SOLUTION
          </h1>

          <p className="mt-6 text-md  text-gray-400 max-w-xl mx-auto font-switzer">
            Effortless presence tracking, simplified shifts, and instant reports
            for modern teams.
          </p>

          {/* Primary CTAs */}
          <div className="flex justify-center space-x-6 mt-12">
            <button className="bg-transparent bg-transparent backdrop-blur-4xl bg-white/4 
                    border border-white/10 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.03] text-md uppercase focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
              Start Free Today
            </button>

            <button className="bg-transparent backdrop-blur-4xl bg-white/4 
                    border border-white/10 text-white hover:bg-gray-800 font-bold py-3 px-6 rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.03] text-lg uppercase focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Live Demo
            </button>
          </div>
        </div>

        {/* Footer/Trust Section (Fixed to Bottom) */}
        <div className="absolute bottom-0 w-full p-4">
          <div className="text-center text-gray-500 text-sm">
            <p className="mb-1">Trusted by thousands of teams worldwide</p>
            <p>&copy; 2025 PresencePro</p>
          </div>
        </div>
      </section>

      {/* About */}

      <section className="w-full  bg-black flex  flex-col justify-start items-start  p-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="lg:text-xl font-bold text-(--color-orange) font-wix2 ">
              Selected Work
            </p>

            <h1 className="text-[4vw] leading-none  text-(--color-white) font-wix2">
              About Us
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center item-center w-full">
          <div className="flex flex-col justify-between item center py-[7vw] space-y-[7vw]">
            <div className="flex justify-around items-center space-x-10 ">
              <div className="flex flex-col justify-center item-center">
                <p className="font-switzer text-(--color-orange)">/01</p>
                <h2 className="font-wix2 text-[6vw] text-(--color-bg) leading-none">
                  PROVEN
                </h2>
                <p className="font-switzer text-gray-400">
                  Our PROVEN Commitment to Your Team
                </p>
              </div>
              <img
                src="./images/mockup3.jpg"
                alt="pfp"
                className="md:w-[50vw] h-[35vw] rounded-2xl"
              />
            </div>
            <div className="flex justify-around items-center">
              <img
                src="./images/mockup4.jpg"
                alt="pfp"
                className="md:w-[50vw] h-[35vw] rounded-2xl hover:scale-105"
              />
              <div className="flex flex-col justify-center item-center">
                <p className="font-switzer text-(--color-orange)">/02</p>
                <h2 className="font-wix2 text-[6vw] text-(--color-bg) leading-none">
                  INSTANT
                </h2>
                <p className="font-switzer text-gray-400">
                  The Path to INSTANT Compliance.
                </p>
              </div>
            </div>
            <div className="flex justify-around items-center">
              <div className="flex flex-col justify-center item-center">
                <p className="font-switzer text-(--color-orange)">/03</p>
                <h2 className="font-wix2 text-[6vw] text-(--color-bg) leading-none">
                  PRECISION
                </h2>
                <p className="font-switzer text-gray-400">
                  Built on PRECISION, Driven by Data.
                </p>
              </div>
              <img
                src="./images/mockup5.jpg"
                alt="pfp"
                className="md:w-[50vw] h-[40vw] rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* footer */}

      <footer className="w-full h-[60vh]  bg-[#020617] relative  flex flex-col justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(ellipse_120%_80%_at_70%_20%,rgba(255,20,147,0.15),transparent_50%),radial-gradient(ellipse_100%_60%_at_30%_10%,rgba(0,255,255,0.12),transparent_60%),radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(138,43,226,0.18),transparent_65%),radial-gradient(ellipse_110%_50%_at_80%_30%,rgba(255,215,0,0.08),transparent_40%),#000000`,
          }}
        />

        {/* --- Main Content Container (z-20 ensures it sits above the blur) --- */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Top Section: Logo, Company Info, and Main Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12 border-b border-gray-700/50">
            {/* Column 1: Logo and Tagline */}
            <div className="col-span-2 md:col-span-1 lg:col-span-2 space-y-3">
              <h3 className="text-3xl font-bold text-white">
                Presence<span className="text-orange-500">Pro</span>
              </h3>
              <p className="text-sm text-gray-400 max-w-xs">
                The accurate, effortless way to manage team attendance and
                timekeeping across the globe.
              </p>
              <div className="flex space-x-4 pt-2">
                {/* Social Icons Placeholder */}
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>

            {/* Column 2: Product */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Product</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-400 transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition">
                    Demo
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Media Kit
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Contact Sales
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: Legal */}
          </div>

          {/* Bottom Section: Copyright & Language */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} PresencePro. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0">
              {/* Language Switcher Placeholder */}
              <a href="#" className="hover:text-white transition">
                English (US)
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default landingPage;
