import React, { useEffect, useState } from "react";
import useTitle from "../../../../Hooks/useTitle";
import FoodCard from "./FoodCard";

const Food = () => {
  useTitle("Home");
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://kh-organic-food-server.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div>
      <h2 className="text-5xl font-semibold text-center mb-4">
        Our Organic Food
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-3">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default Food;
