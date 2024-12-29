import Image from "next/image";
import DoctorImg from "../../public/Images/doctor.png";

export default function WhyStudy() {
    return (
      <section className="bg-white flex items-center justify-between gap-16 flex-wrap md:flex-nowrap mt-[50px] px-6">
        
        <div className="relative w-full md:w-[750px] overflow-hidden rounded-lg shadow-lg">
          <div className="absolute bg-teal-200 w-full h-full top-12 left-0 z-0 rounded-tr-full rounded-br-full"></div>
          <Image
            src={DoctorImg}
            alt="Doctor"
            className="relative z-10 w-full h-full object-contain rounded-lg"
          />
        </div>
  
        <div className="w-full md:w-[50%] mt-8 md:mt-0 ml-3">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Study MBBS in <span className="text-teal-500 underline">Uzbekistan?</span>
          </h2>
          <ul className="mt-6 space-y-4">
            {[
              "Get the best of quality education in Uzbekistan",
              "Direct Admissions: Students will get direct admission to the medical university of Uzbekistan",
              "Low tuition fee: Medical universities in Uzbekistan offer low-cost education to foreign students.",
              "100% Safety: Uzbekistan is the safest European country.",
              "Worldwide acceptance: MBBS degree in Uzbekistan is accepted worldwide.",
              "Living & Accommodation: Cost of living in Uzbekistan is low, around 62 USD."
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-teal-500">✔</span>
                <p className="text-gray-600">{item}</p>
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-teal-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-teal-600 transition-all duration-300 ease-in-out">
            Read more
          </button>
        </div>
      </section>
    );
}
