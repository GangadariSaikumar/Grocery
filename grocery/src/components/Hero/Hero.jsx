import React from "react";
import grocer from "../../assets/grocery.png";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <section>
      <div className="max-w-[1400px] min-h-screen items-center md:flex mx-auto px-10 py-25">
        {/* Hero Content */}
        <div className="flex-1">
          <span className=" bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">
            Export Best Quality...
          </span>
          <h1 className="text-5xl/14 md:text-7xl/20 mt-4 font-bold ">
            Tasty Organic <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span>
            <br></br> In Your City
          </h1>
          <p className="text-zinc-600 text-lg max-w-[530px] mt-5 mb-10">
            Bred for a high content of beneficial substance. Our products are
            all fresh and healthy.
          </p>
          <Button content="Shop Now" />
        </div>
        {/* Hero Image */}
        <div className="flex-1">
          <img src={grocer} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
