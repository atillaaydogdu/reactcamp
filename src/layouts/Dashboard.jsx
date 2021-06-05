import React from "react";
import Categories from "./Categories";
import ProductLists from "../pages/ProductLists";
export default function Dashboard() {
  return (
    <div>
      <Categories />
      <ProductLists />
    </div>
  );
}
