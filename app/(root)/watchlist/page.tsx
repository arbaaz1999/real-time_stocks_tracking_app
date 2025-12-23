import React from "react";

const ComingSoon = () => {
  return (
    <div className="text-white relative overflow-hidden flex flex-col items-center justify-center">
      {/* Main content */}

      {/* Main heading with gradient text animation */}
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center text-white leading-normal">
        Coming Soon
      </h1>

      {/* Tagline */}
      <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 text-center max-w-4xl px-4 leading-normal">
        A Next-Generation Trading Platform —{" "}
        <span className="text-cyan-400">Fast.</span>{" "}
        <span className="text-purple-400">Secure.</span>{" "}
        <span className="text-green-400">Intelligent.</span>
      </p>
    </div>
  );
};

export default ComingSoon;
