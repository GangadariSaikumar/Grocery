import React from "react";
import Heading from "../Heading/Heading";
import strabeery from "../../assets/strawberry.png";
const Products = () => {
  const item = [
    {
      key: "1",
      image: { strabeery },
      title: "Strawberry",
      price: "3.00",
    },
    {
      key: "2",
      image: { strabeery },
      title: "Strawberry",
      price: "3.00",
    },
    {
      key: "3",
      image: { strabeery },
      title: "Strawberry",
      price: "3.00",
    },
    {
      key: "4",
      image: { strabeery },
      title: "Strawberry",
      price: "3.00",
    },
    {
      key: "5",
      image: { strabeery },
      title: "Strawberry",
      price: "3.00",
    },
    {
      key: "6",
      image: { strabeery },
      title: "Strawberry",
      price: "3.00",
    },
    {
      key: "7",
      image: { strabeery },
      title: "Strawberry",
      price: "3.00",
    },
    {
      key: "8",
      image: { strabeery },
      title: "Strawberry",
      price: "3.00",
    },
  ];
  return (
    <section>
      <div className="min-h-screen max-w-[1400px] mx-auto ">
        <div className=" justify-center  flex mx-auto p-20">
          <Heading highlight="Our" heading="Products" />
        </div>
        <div className="flex-1 justify-between flex gap-2 relative mx-auto w-[30%] -mt-10">
          <ul className="bg-orange-400 text-white w-[4vh] p-1 mx-auto rounded items-center justify-centerS">
            All
          </ul>
          <ul className="bg-gray-500/10 text-black w-[6vh] p-1 mx-auto items-center justify-center rounded">
            Fruits
          </ul>
          <ul className="bg-gray-500/10 text-black w-[12vh] p-1 mx-auto items-center justify-center rounded">
            Vegetables
          </ul>
          <ul className="bg-gray-500/10 text-black w-[6vh] p-1 mx-auto items-center justify-center rounded">
            Dairy
          </ul>
          <ul className="bg-gray-500/10 text-black w-[9vh] p-1 mx-auto items-center justify-center rounded">
            Seafood
          </ul>
        </div>
        <div>
          {item.map((card) => {
            return <div>{card.image}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
