import React from "react";
import Heading from "../Heading/Heading";

// ✅ Image imports
import strawberry from "../../assets/strawberry.png";
import butter from "../../assets/butter.png";
import eggs from "../../assets/eggs.png";
import cabbage from "../../assets/cabbage.png";
import eggplant from "../../assets/eggplant.png";
import shrimp from "../../assets/shrimp.png";
import kiwi from "../../assets/kiwi.png";
import capsicum from "../../assets/capsicum.png";

const Products = () => {
  const items = [
    {
      id: 1,
      image: strawberry,
      title: "Strawberry",
      price: "3.00",
    },
    {
      id: 2,
      image: butter,
      title: "Butter",
      price: "4.50",
    },
    {
      id: 3,
      image: eggs,
      title: "Eggs",
      price: "2.80",
    },
    {
      id: 4,
      image: cabbage,
      title: "Cabbage",
      price: "1.50",
    },
    {
      id: 5,
      image: eggplant,
      title: "Eggplant",
      price: "2.20",
    },
    {
      id: 6,
      image: shrimp,
      title: "Shrimp",
      price: "6.00",
    },
    {
      id: 7,
      image: kiwi,
      title: "Kiwi",
      price: "3.20",
    },
    {
      id: 8,
      image: capsicum,
      title: "Capsicum",
      price: "1.80",
    },
  ];

  return (
    <section>
      <div className="min-h-screen max-w-[1400px] mx-auto">
        <div className="flex justify-center p-20">
          <Heading highlight="Our" heading="Products" />
        </div>

        <div className="grid grid-cols-4 gap-6 px-10 ">
          {items.map((card) => (
            <div
              key={card.id}
              className="border rounded-lg p-4 text-center shadow hover:shadow-lg transition bg-gray-500/20"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-32 h-32 mx-auto object-contain"
              />
              <h3 className="mt-3 font-semibold">{card.title}</h3>
              <p className="text-orange-500 font-bold">${card.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
