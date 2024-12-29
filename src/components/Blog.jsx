import Image from "next/image";

import collegeImg from "../../public/Images/cambridge.jpeg";

const Blog = () => {
  return (
    <>
      <div className="w-[80%] mx-auto mt-[100px]">
        <h1 className="text-4xl font-bold text-center text-blue-300">
          Our Latest <span className="text-indigo-500 underline"> Blog</span>
        </h1>
        <p className="text-center mt-2 text-gray-600">
          Empowering Future Doctors with Valuable Information!
        </p>
        <div className="flex flex-wrap items-center justify-center mt-10 gap-5">
          <div className="w-[300px] border-2 shadow-lg rounded-lg overflow-hidden bg-gray-50">
            <div>
              <Image src={collegeImg} className="object-cover w-full h-[200px]" />
            </div>
            <div className="p-3 flex flex-col gap-2">
              <p className="font-semibold text-indigo-600">Dec 25 2025</p>
              <h1 className="text-xl font-semibold text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>

              <p className="font-semibold text-gray-500 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                nam sequi sint i...
              </p>
              <button className="bg-indigo-600 px-4 py-1.5 font-semibold rounded-md text-white hover:bg-indigo-700 transition-colors">
                Read More
              </button>
            </div>
          </div>
          <div className="w-[300px] border-2 shadow-lg rounded-lg overflow-hidden bg-gray-50">
            <div>
              <Image src={collegeImg} className="object-cover w-full h-[200px]" />
            </div>
            <div className="p-3 flex flex-col gap-2">
              <p className="font-semibold text-indigo-600">Dec 25 2025</p>
              <h1 className="text-xl font-semibold text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>

              <p className="font-semibold text-gray-500 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                nam sequi sint i...
              </p>
              <button className="bg-indigo-600 px-4 py-1.5 font-semibold rounded-md text-white hover:bg-indigo-700 transition-colors">
                Read More
              </button>
            </div>
          </div>
          <div className="w-[300px] border-2 shadow-lg rounded-lg overflow-hidden bg-gray-50">
            <div>
              <Image src={collegeImg} className="object-cover w-full h-[200px]" />
            </div>
            <div className="p-3 flex flex-col gap-2">
              <p className="font-semibold text-indigo-600">Dec 25 2025</p>
              <h1 className="text-xl font-semibold text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>

              <p className="font-semibold text-gray-500 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                nam sequi sint i...
              </p>
              <button className="bg-indigo-600 px-4 py-1.5 font-semibold rounded-md text-white hover:bg-indigo-700 transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
