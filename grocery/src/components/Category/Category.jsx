import React from "react";
import Heading from "../Heading/Heading";
import Fruit from "../../assets/fruits-and-veggies.png";
import dairy from "../../assets/dairy-and-eggs.png";
import meat from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button";
const Category = () => {
  const category = [
    {
      id: 1,
      title: "Fruits & Veggies",
      description: "Fresh,organic produce sources daily from local ",
      image: Fruit,
    },
    {
      id: 2,
      title: "Dairy-and-eggs",
      description: "Fresh,organic produce sources daily from local ",
      image: dairy,
    },
    {
      id: 3,
      title: "Meat-and-seafood",
      description: "Fresh,organic produce sources daily from local ",
      image: meat,
    },
  ];
  return (
    <section>
      <div className="md:min-h-screen max-w-[1400px] mx-auto px-10 ">
        <div className="flex justify-center  p-20">
          <Heading highlight="Shop" heading="by Category" />
        </div>
        <div className="md:flex gap-10 justify-evenly">
          {category.map((card) => {
            return (
              <div className="flex-1">
                <div>
                  <img src={card.image} alt="" />
                </div>
                <div className="bg-gray-400/10 pt-17 md:p-8 p-15 ml-5 -mt-10 rounded-xl flex-nowrap ">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <Button content="See All" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
