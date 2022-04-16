import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  //const categories = ["One punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(["One punch"]);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category}/>
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
