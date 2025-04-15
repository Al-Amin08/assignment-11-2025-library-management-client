import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/Black_White_Modern_Eagle_Coat_of_Arms_Logo-removebg-preview.png";
import img2 from "../../assets/White_Blue_Aesthetic_University_Logo-removebg-preview.png";
import img3 from "../../assets/Navy_White_University_Elegant_Logo-removebg-preview.png";
import img4 from "../../assets/Black_White_Modern_Eagle_Coat_of_Arms_Logo-removebg-preview.png";
import img5 from "../../assets/Black_and_White_Classic_University_School_Logo-removebg-preview.png";

const Banner = () => {
  return (
    <div className="mt-17 bg-[#1f1c15] ">
      <div className="mx-auto w-10/12 pt-20  text-white ">
        <div className="flex flex-col lg:flex-row-reverse gap-10 px-20">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8199169/pexels-photo-8199169.jpeg"
              alt="Counseling session"
              className="max-w-md rounded-lg shadow-2xl"
            />
            <div className="absolute top-2 right-2  text-white text-xs font-semibold px-2 py-1 rounded">
              🔴 Live
            </div>
          </div>

          {/* Text Section */}
          <div className="">
            <h1 className="text-6xl font-bold mb-4 mt-16">
              Unlock Knowledge, Empower Growth!
            </h1>
            <p className="mb-8 text-gray-300 w-2/3">
              Step into a world of limitless learning with our cutting-edge
              Library Management System. Organize, discover, and access
              resources effortlessly.
            </p>
            <div className="flex gap-4">
              <button className="btn bg-[#f5d064] border-none hover:bg-yellow-500 text-black font-bold">
                Book a Session
              </button>
              <button className="btn bg-[#36332d] border-none hover:bg-gray-700 text-white ">
                See Preview
              </button>
            </div>
          </div>
        </div>
        <div className="w-7/12 mx-auto bg-[#1f1c15] mt-32">
          <h1 className="text-xl font-bold text-center mb-5">
            Members and Partners
          </h1>
          <Marquee
            play={true}
            // pauseOnHover={true}
            pauseOnClick={true}
            direction="left"
            speed={30}
            //delay={2}
            loop={0} //infinite
            // gradient={true}
            // gradientColor="white"
            // gradientWidth={250}
            // className="flex gap-7"
          >
            <img className="w-30 bg-[#1f1c15] mx-8" src={img1} alt="" />
            <img className="w-30 bg-[#1f1c15] mx-8" src={img2} alt="" />
            <img className="w-30 bg-[#1f1c15] mx-8" src={img3} alt="" />
            <img className="w-30 bg-[#1f1c15] mx-8" src={img4} alt="" />
            <img className="w-30 bg-[#1f1c15] mx-8" src={img5} alt="" />
            <img className="w-30 bg-[#1f1c15] mx-8" src={img1} alt="" />
            <img className="w-30 bg-[#1f1c15] mx-8" src={img2} alt="" />
            <img className="w-30 bg-[#1f1c15] mx-8" src={img3} alt="" />
            <img className="w-30 bg-[#1f1c15] mx-8" src={img4} alt="" />
            <img className="w-30 bg-[#1f1c15] mx-8" src={img5} alt="" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Banner;
