import React, { useEffect, useState } from "react";
import categoryData from "../api/categories.json";
import Category from "./ui/category";

function Catagories() {
  const [Catagories, setCatagories] = useState([]);
  useEffect(() => {
    setCatagories(categoryData);
  }, []);
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3">Katagoriler</h3>
        <div className="grid grid-cols-10">
          {Catagories &&
            Catagories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Catagories;
