import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const value = [
    {
      id: 1,
      title: "Trust",
      para: "It is a long established fact that a reader will be distracted by the readble",
      icon: <FaHeart />,
    },
    {
      id: 2,
      title: "Always Fresh",
      para: "It is a long established fact that a reader will be distracted by the readble",
      icon: <FaLeaf />,
    },
    {
      id: 3,
      title: "Food Safety",
      para: "It is a long established fact that a reader will be distracted by the readble",
      icon: <FaShieldAlt />,
    },
    {
      id: 4,
      title: "100% Organic",
      para: "It is a long established fact that a reader will be distracted by the readble",
      icon: <FaSeedling />,
    },
  ];
  return (
    <div className="min-h-screen max-w-[1400px] mx-auto">
      <div className="  mx-auto p-10 justify-center flex  ">
        <Heading highlight="Our" heading="Value" />
      </div>
      <div className="flex">
        {/* left */}
        <div>
          {value.slice(0, 2).map((item) => {
            return (
              <div
                className="flex 
                gap-5
              py-20
              flex-row-reverse"
              >
                <div>
                  <span className="bg-gradient-to-b from-orange-400 justify-center items-center text-3xl flex  text-white to-orange-500 w-15 h-15 rounded-full ">
                    {item.icon}
                  </span>
                </div>
                <div className="text-right">
                  <h3 className="md:text-4xl font-black">{item.title}</h3>
                  <p>{item.para}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <img
            className="md:h-[50vh] md:p-5  md:items-center flex md:w-[70vh]"
            src={basket}
            alt=""
          />
        </div>
        {/* right */}
        <div>
          <div>
            {value.slice(2, 4).map((item) => {
              return (
                <div className="flex py-20 gap-5">
                  <div>
                    <span className="bg-gradient-to-b from-orange-400 justify-center items-center text-3xl flex  text-white to-orange-500 w-15 h-15 rounded-full">
                      {item.icon}
                    </span>
                  </div>
                  <div className="text-left">
                    <h3 className="md:text-4xl font-black">{item.title}</h3>
                    <p>{item.para}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
