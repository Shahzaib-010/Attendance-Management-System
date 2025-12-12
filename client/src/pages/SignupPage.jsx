import Signup from "components/Forms/Signup";
import React from "react";

function SignupPage() {
  return (
    <section className="flex w-full h-screen bg-black ">
      {/* ----------------------------left side---------------------------- */}
      <div
        className=" w-[45%]  inset-0 z-0 bg-[length:100%_100%] bg-no-repeat m-3 "
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),
            radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 65%)
      `,
        }}
      >
        <div
          className="h-full w-full flex flex-col justify-end backdrop-blur-3xl bg-white/4 
                    border border-white/10 p-5  space-y-8"
        >
          {/* ----------------------------heading---------------------------- */}
          <div className="p2 flex flex-col">
            <h1 className="font-wix2 md:text-[2.9vw] text-[5vw] text-white leading-none">
              Get <span className="text-orange-500">Started</span>
            </h1>
            <p className="font-switzer text-gray-400">
              Complete these steps to register your account
            </p>
          </div>
          {/* ----------------------------heading------------------------------ */}

          {/* ----------------------------Cards------------------------------- */}
          <div className=" flex items-center flex-wrap space-x-6  ">
            <div
              className="w-[12vw] h-[12vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/10 flex flex-col justify-center p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03]"
            >
              <div
                className="w-6 h-6 backdrop-blur-4xl bg-white/4 
                    border border-white/10 rounded-full flex justify-center items-center     "
              >
                <p className="text-[15px]">1</p>
              </div>
              <h3>Sign Up Your Account</h3>
            </div>
            <div
              className="w-[12vw] h-[12vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/10 flex flex-col justify-center  p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03] "
            >
              <div
                className="w-6 h-6 backdrop-blur-4xl bg-white/4 
                    border border-white/10 rounded-full flex justify-center items-center     "
              >
                <p className="text-[15px]">2</p>
              </div>
              <h3>Set up your work space</h3>
            </div>
            <div
              className="w-[12vw] h-[12vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/10 flex flex-col justify-center  p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03] "
            >
              <div
                className="w-6 h-6 backdrop-blur-4xl bg-white/4 
                    border border-white/10 rounded-full flex justify-center items-center     "
              >
                <p className="text-[15px]">3</p>
              </div>
              <h3>Set up your profile </h3>
            </div>
          </div>

          {/* ----------------------------Cards------------------------------- */}
        </div>
      </div>
      {/* ----------------------------left side---------------------------- */}

      {/* ----------------------------Right side---------------------------- */}

      <div className="w-[50%] p-2 flex flex-col justify-center">
        <Signup />
      </div>

      

      {/* ----------------------------Right side---------------------------- */}
    </section>
  );
}

export default SignupPage;
