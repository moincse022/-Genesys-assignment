import React from "react";
import img1 from '../../assets/image/img (5).jpeg'
import img2 from '../../assets/image/img (6).jpeg'
import img3 from '../../assets/image/img (7).jpeg'
import img4 from '../../assets/image/img (10).jpeg'
// Array of product data
const products = [
  {
    id: 1,
    image:img1,
    name: "Army Green Active Short Sleeve",
    price: 14.95,
    originalPrice: 19.95,
  },
  {
    id: 2,
    image:img2,
    name: "Army Green Active Short Sleeve",
    price: 14.95,
    originalPrice: 19.95,
  },
  {
    id: 3,
    image:img3,
    name: "Army Green Active Short Sleeve",
    price: 14.95,
    originalPrice: 19.95,
  },
  {
    id: 4,
    image:img4,
    name: "Army Green Active Short Sleeve",
    price: 14.95,
    originalPrice: 19.95,
  },
];

const ProductSection = () => {
  return (
    <div className="section text-start py-10 px-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 ml-4">
        BUY 1 GET 1 FREE
        <br />
        ON{" "}
        <span className="text-blue-500">BEST SELLING PRODUCTS</span>
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
        {products.map((product) => (
          <div key={product.id} className="product bg-white shadow-md rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <div className="main-price text-lg mt-2">
              ${product.price.toFixed(2)}{" "}
              <span className="original-price text-gray-500 line-through ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
