import React from "react";

const Heading = (props) => {
  return (
    <div>
      <h1 className="md:text-4xl text-2xl font-bold h-10vw">
        <span className="text-orange-400">{props.highlight}</span>{" "}
        {props.heading}
        <div
          className="bg-amber-600 h-1 rounded-full w-1/3 mt-2   right-0.5  flex ml-auto
          "
        ></div>
      </h1>
    </div>
  );
};

export default Heading;
