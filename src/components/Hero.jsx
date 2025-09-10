import React, { Suspense } from "react";
import ShinyText from "./ShinyText";
const Hero = () => {
  // Use React.lazy to load Spline only when needed (code splitting)
  const LazySpline = React.lazy(() => import("@splinetool/react-spline"));

  return (
    <main id="home" className="flex flex-col-reverse justify-center lg:flex-row items-center lg:justify-between min-h-[calc(100vh-100px)] px-4 lg:px-16 gap-10 lg:gap-16">
      {/* Left: Text Content */}
      <div className="w-full lg:w-2/3 flex flex-col justify-center items-center space-y-3 md:space-y-6 lg:items-start text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl  lg:text-5xl lg:w-[85%] font-semibold tighting-wide">
          Simplify <ShinyText speed={4}>Student</ShinyText>
          <span className="block"><ShinyText speed={4}>Management</ShinyText> with Ease</span>
        </h1>
        <p className="text-base md:text-lg lg:text-2xl font-light tighting-wide">
          Manage students, courses, attendance, and grades—all in one place.
        </p>
        <div className="flex  sm:flex-row items-center justify-center lg:justify-start gap-4 w-full max-w-md py-2">
          <button className="btn">
            <a href="#">Get Started</a>
          </button>
          {/* <button className="btn">
            <a href="#">Request Demo</a>
          </button> */}
        </div>
      </div>
      {/* Right: Spline 3D */}
      <div className="w-full lg:w-1/2 flex justify-center items-center h-96 md:mb-8 lg:mb-0 md:mt-8 lg:mt-0">
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading 3D...</div>}>
          <LazySpline scene="https://prod.spline.design/JtAdHISv3Ux6iACN/scene.splinecode" />
        </Suspense>
      </div>
    </main>
  );
};

export default Hero;
