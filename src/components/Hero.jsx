import React from "react";

export function Hero() {
  return (
    <section className="container relative overflow-visible mx-auto container flex flex-wrap">
      <div className="max-w-auto px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 flex">
        <div className="mr-autolg:w-1/2">
          <div className="mt-[15vh]">
            <h1 className="text-white max-w-2xl mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl relative z-10">
              hyouka.<span id="japan" className="text-[2rem] font-bold">氷菓</span>
            </h1>
            <div className="absolute w-36 left-10 top-[9rem] h-36 bg-[#486B95] backdrop-blur blur-sm -z-10 rounded-full"></div>
            <div className="absolute w-20 left-[30rem] top-[19rem] h-20 bg-gradient-to-br from-[#486B95] to-[#3A5877] w backdrop-blur blur-sm -z-10 rounded-full"></div>
            <div className="absolute w-[400px] right-[5rem] top-[3rem] h-[500px] bg-[#2E4357] backdrop-blur blur-sm -z-10 rounded-full"></div>
            <div className="absolute w-[250px] right-[25rem] bottom-[5rem] h-[250px] bg-[#2E4357] backdrop-blur blur-sm -z-10 rounded-full"></div>
            <p className="max-w-2xl mb-6 text-white lg:mb-8 md:text-lg lg:text-xl">
              If someone didn't have any pride, wouldn't they also be lacking in self-confidence?
              If someone was free of greed, wouldn't they have trouble supporting their family?
              And if people didn't envy one another, wouldn't they stop inventing new things?
            </p>
          </div>
          <div className="flex gap-10 rounded-full ">
            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 rounded-full text-sm px-10 py-1.5 mr-2 mb-2 ">quote</button>
            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 rounded-full text-sm px-10 py-1.5 mr-2 mb-2 ">poetry</button>
            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 rounded-full text-sm px-10 py-1.5 mr-2 mb-2 ">literature</button>
          </div>
        </div>
        <div className="lg:w-1/2 lg:flex lg:justify-end">
          <img src="/hyouka.png" alt="Hyouka" className="drop-shadow-2xl"  />
        </div>
      </div>
    </section>
  );
}
