import Image from "next/image";
import React from "react";
import collegeImg from "../../public/Images/cambridge.jpeg";
import doctor from "../../public/Images/doctor.png";

const Herosection = () => {
  return (
    <>
      <div>
        <div className="relative w-full h-[80vh]">
          <Image
            src={collegeImg}
            alt="img"
            className="w-full h-full object-cover"
          />
          <div className="absolute h-full top-0 left-0 right-0 bottom-0 bg-black/60"></div>
          <div className="absolute top-[15%] left-[10%] lg:left-[17%] flex flex-col items-center justify-center">
            <h1 className="text-3xl lg:text-5xl xl:text-6xl text-white font-bold text-center my-6">
              Study <span className="text-yellow-400">MBBS</span> At{" "}
              <span className="text-yellow-400">Uzbekistan's</span> <br /> Leading
              Universities
            </h1>
            <button className="bg-teal-500 mt-6 lg:mt-8 lg:px-6 lg:py-3 px-4 py-2 font-semibold rounded-md text-white">
              Apply Now
            </button>
          </div>
          <div className="absolute left-[5%] bottom-[12%] lg:bottom-[7%]">
            <h1 className="text-white font-semibold mb-3 text-lg">
              Study in NMC & WHO recognized medical colleges
            </h1>
            <ul className="space-y-3">
              {[
                "Get the best of quality education in Uzbekistan",
                "Direct Admissions: Students will get direct admission to the medical university of Uzbekistan",
                "Low tuition fee: Medical universities in Uzbekistan offer low-cost education to foreign students.",
                "100% Safety: Uzbekistan is the safest European country.",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-yellow-400">✔</span>
                  <p className="text-white">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:h-[20vh] h-fit bg-[#fffbef] relative">
          <Image
            src={doctor}
            alt="doctor image"
            className="lg:h-[60vh] lg:w-fit lg:absolute lg:bottom-0 lg:right-0 hidden lg:block"
          />
          <div className="w-[90%] mx-auto h-full flex flex-wrap items-center lg:justify-start justify-center gap-6">
            <div className="lg:border-r-2 border-black px-6 py-5 flex flex-col items-center justify-center gap-2">
              <h1 className="text-4xl text-black font-extrabold">12+</h1>
              <p className="font-semibold">Years of Experience</p>
            </div>
            <div className="lg:border-r-2 border-black px-6 py-5 flex flex-col items-center justify-center gap-2">
              <h1 className="text-4xl text-black font-extrabold">1000+</h1>
              <p className="font-semibold">Satisfied Students Counseled</p>
            </div>
            <div className="lg:border-r-2 border-black px-6 py-5 flex flex-col items-center justify-center gap-2">
              <h1 className="text-4xl text-black font-extrabold">10+</h1>
              <p className="font-semibold">Universities Affiliated with Us</p>
            </div>
            <div className="px-6 py-5 flex flex-col items-center justify-center gap-2">
              <h1 className="text-4xl text-black font-extrabold">100+</h1>
              <p className="font-semibold">Vice Assistance</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
