import React from "react";
import "./Ingredient.css";

function Ingredient(props) {
  // console.log("ingredient render");
  return (
    <>
      <h1>vikash</h1>
      <li className="ingredient">
        {props.ingredient} - {props.measure}
      </li>
    </>
  );
}

export default Ingredient;
