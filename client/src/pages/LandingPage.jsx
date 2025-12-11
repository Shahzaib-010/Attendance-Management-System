import React from "react";

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

            <h1 className="text-white font-wix2 text-2xl">PresencePro</h1>
          </div>

          <div className="flex items-center space-x-[3vw] font-switzer text-white">
            <a href="/">Pricing</a>
            <a href="/">Blogs</a>
            <a href="/">Contact Us</a>
          </div>

          <div className="flex justify-center item-center font-switzer text-white">
            <button className="px-4 py-2 border-r border-gray-300 focus:outline-none cursor-pointer">
              Sign Up
            </button>

            <button className="px-4 py-2 focus:outline-none cursor-pointer">
              Log In
            </button>
          </div>
        </div>
      </nav>

      {/* Landing Page */}

      <section className="w-full h-screen flex flex-col justify-start  items-center text-white pt-[17vw]  bg-[radial-gradient(circle_500px_at_50%_300px,rgba(6,182,212,0.3),transparent)]">
        {/* Hero Content Wrapper */}
        <div className="text-center max-w-5xl">
          {/* Main Heading: Uses custom style for VW-based sizing for responsiveness */}
          <h1
            className="font-extrabold leading-tight  uppercase font-wix2"
            // Custom style for responsive text size (e.g., 4vw on medium screens, capped at 48px)
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)", // min size, responsive size, max size
              lineHeight: 1.1,
            }}
          >
            YOUR
            <span className="text-blue-400 mx-2">"ONE-CLICK"</span>
            <br />
            ATTENDANCE SOLUTION
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="mt-6 text-md  text-gray-400 max-w-xl mx-auto font-switzer">
            Effortless presence tracking, simplified shifts, and instant reports
            for modern teams.
          </p>

          {/* --- Divider for the two CTA sections --- */}

          {/* Primary CTAs (Large and Bold) */}
          <div className="flex justify-center space-x-6 mt-12">
            {/* CTA 1: Primary Action (Purple) */}
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.03] text-md uppercase focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
              Start Free Today
            </button>

            {/* CTA 2: Secondary Action (White/Outline) */}
            <button className="bg-white text-purple-800 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.03] text-lg uppercase focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
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

      <section className="w-full bg-black py-20 lg:py-32 px-4">
    
    {/* Section Heading */}
    <div className="max-w-7xl mx-auto pb-16">
        <p className="text-base sm:text-xl font-bold text-blue-400 font-wix2">
            Selected Work
        </p>
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white font-wix2 mt-2">
            About Us
        </h1>
    </div>

    {/* Content Wrapper for the Three Pillars */}
    <div className="max-w-7xl mx-auto flex flex-col space-y-20 lg:space-y-32">
        
        {/* Pillar 01: PROVEN (Text always first) */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 lg:space-x-16">
            
            {/* Text Content (Order 1 on all sizes) */}
            <div className="flex flex-col max-w-md order-1">
                <p className="font-switzer text-lg text-blue-400">/01</p>
                <h2 className="font-wix2 text-5xl sm:text-7xl font-extrabold text-white leading-none mt-2">
                    PROVEN
                </h2>
                <p className="font-switzer text-lg text-gray-400 mt-4">
                    Our PROVEN Commitment to Your Team: We build trust through reliable, established timekeeping technology.
                </p>
            </div>
            
            {/* Image (Order 2 on all sizes) */}
            <img
                src="./images/mockup3.jpg"
                alt="Mockup showing commitment"
                className="w-full max-w-sm md:max-w-xl lg:max-w-2xl h-auto rounded-2xl shadow-2xl order-2"
            />
        </div>

        {/* Pillar 02: INSTANT (Text always first) */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 lg:space-x-16">
            
            {/* Image (Order 2 on small screens, Order 1 on large screens for alternating look) */}
            <img
                src="./images/mockup4.jpg"
                alt="Mockup showing instant results"
                className="w-full max-w-sm md:max-w-xl lg:max-w-2xl h-auto rounded-2xl shadow-2xl transition duration-500 hover:scale-[1.02] order-2 lg:order-1"
            />
            
            {/* Text Content (Order 1 on small screens, Order 2 on large screens) */}
            <div className="flex flex-col max-w-md order-1 lg:order-2">
                <p className="font-switzer text-lg text-blue-400">/02</p>
                <h2 className="font-wix2 text-5xl sm:text-7xl font-extrabold text-white leading-none mt-2">
                    INSTANT
                </h2>
                <p className="font-switzer text-lg text-gray-400 mt-4">
                    The Path to INSTANT Compliance: Real-time data and automated reports mean zero waiting time.
                </p>
            </div>
        </div>

        {/* Pillar 03: PRECISION (Text always first) */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 lg:space-x-16">
            
            {/* Text Content (Order 1 on all sizes) */}
            <div className="flex flex-col max-w-md order-1">
                <p className="font-switzer text-lg text-blue-400">/03</p>
                <h2 className="font-wix2 text-5xl sm:text-7xl font-extrabold text-white leading-none mt-2">
                    PRECISION
                </h2>
                <p className="font-switzer text-lg text-gray-400 mt-4">
                    Built on PRECISION, Driven by Data: Eliminate time fraud and ensure flawless payroll every cycle.
                </p>
            </div>
            
            {/* Image (Order 2 on all sizes) */}
            <img
                src="./images/mockup5.jpg"
                alt="Mockup showing data precision"
                className="w-full max-w-sm md:max-w-xl lg:max-w-2xl h-auto rounded-2xl shadow-2xl order-2"
            />
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
            <h3 className="text-3xl font-bold text-white">Presence<span className="text-blue-400">Pro</span></h3>
            <p className="text-sm text-gray-400 max-w-xs">
              The accurate, effortless way to manage team attendance and timekeeping across the globe.
            </p>
            <div className="flex space-x-4 pt-2">
              {/* Social Icons Placeholder */}
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Product</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition">Features</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Integrations</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Demo</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Media Kit</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition">Support</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact Sales</a></li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          
        </div>
        
        {/* Bottom Section: Copyright & Language */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} PresencePro. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            {/* Language Switcher Placeholder */}
            <a href="#" className="hover:text-white transition">English (US)</a>
          </div>
        </div>

      </div>
    </footer>


      
    </section>
  );
}

export default landingPage;
