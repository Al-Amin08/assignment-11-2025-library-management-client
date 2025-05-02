import React from "react";
import Marquee from "react-fast-marquee";

// Imports Images
import adidas from "../../assets/adidas-logo-svgrepo-com.svg";
import amazon from "../../assets/amazon-2-logo-svgrepo-com.svg";
import british_council from "../../assets/british-council-1-logo-svgrepo-com.svg";
import mastercard from "../../assets/mastercard-2-logo-svgrepo-com.svg";
import mercedes from "../../assets/mercedes-benz-9-logo-svgrepo-com.svg";
import mongodb from "../../assets/mongodb-logo-svgrepo-com.svg";
import nike from "../../assets/nike-3-logo-svgrepo-com.svg";
import paypal from "../../assets/paypal-logo-svgrepo-com.svg";
import linkedin from "../../assets/linkedin-logo-svgrepo-com.svg";
import samsung from "../../assets/samsung-logo-svgrepo-com.svg";

const Sponsor = () => {
  return (
    <div className="my-28">
      <h1 className="text-center font-bold text-4xl mb-6">Our Sponsor</h1>
      <Marquee
        // autoFill={true}
        play={true}
        // pauseOnHover={true}
        pauseOnClick={true}
        direction="left"
        speed={30}
        //delay={2}
        loop={0} //infinite
        gradient={true}
        gradientColor="white"
        gradientWidth={250}
        className="flex gap-7"
      >
        <img className="w-20 md:w-30 lg:w-40  mx-8" src={adidas} alt="" />
        <img className="w-20 md:w-30 lg:w-40  mx-8" src={mastercard} alt="" />
        <img className="w-20 md:w-30 lg:w-40  mx-8" src={mercedes} alt="" />
        <img className="w-20 md:w-30 lg:w-40  mx-8" src={paypal} alt="" />
        <img className="w-20 md:w-30 lg:w-40  mx-8" src={amazon} alt="" />
        <img className="w-20 md:w-30 lg:w-40  mx-8" src={mongodb} alt="" />
        <img className="w-20 md:w-30 lg:w-40  mx-8" src={samsung} alt="" />
        <img className="w-20 md:w-30 lg:w-40  mx-8" src={linkedin} alt="" />
        <img className="w-20 md:w-30 lg:w-40  mx-8" src={nike} alt="" />
        <img
          className="w-20 md:w-30 lg:w-40  mx-8"
          src={british_council}
          alt=""
        />
      </Marquee>
    </div>
  );
};

export default Sponsor;
