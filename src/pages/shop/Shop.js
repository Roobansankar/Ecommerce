import React, { useState } from "react";
import "./Shop.css";
import { PRODUCTS } from "../../products.js";
import Product from "./Product";

const Shop = () => {
  const [finalData, setFinalData] = useState(PRODUCTS);
  const [selectedProductType, setSelectedProductType] = useState("All");
  const [enteredPrice, setEnteredPrice] = useState("");

  const handleCategoryClick = (productType) => {
    console.log("Clicked productType:", productType);
    setSelectedProductType(productType);

    if (productType === "All") {
      setFinalData(PRODUCTS);
    } else {
      const filteredData = PRODUCTS.filter(
        (item) => item.productType === productType
      );
      console.log("Filtered data:", filteredData);
      setFinalData(filteredData);
    }
  };

  const dataChange = (e) => {
    const price = e.target.value;
    setEnteredPrice(price);

    const filteredData = PRODUCTS.filter((item) => {
      const isMatchedProductType =
        selectedProductType === "All" ||
        item.productType === selectedProductType;

      const isMatchedPrice = !price || Number(item.price) < Number(price);

      return isMatchedProductType && isMatchedPrice;
    });

    setFinalData(filteredData);
  };

  return (
    <div className="Shop">
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>Products</h1>

      <div className="categories">
        <button onClick={() => handleCategoryClick("All")}>All</button>
        <button onClick={() => handleCategoryClick("mobile")}>Mobiles</button>
        <button onClick={() => handleCategoryClick("laptop")}>Laptops</button>
        <button onClick={() => handleCategoryClick("headphones")}>
          Headphones
        </button>
        <button onClick={() => handleCategoryClick("accessories")}>
          Accessories
        </button>
      </div>

      <div>
        <input
          type="number"
          placeholder="Search by price"
          value={enteredPrice}
          onChange={(e) => dataChange(e)}
        />
      </div>

      <div className="products card">
        {finalData.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
