import React from "react";
import img1 from '../../assets/image/img (1).jpeg'
import img2 from '../../assets/image/img (11).jpeg'
import img3 from '../../assets/image/img (10).png'
import img4 from '../../assets/image/img (9).png'
import img5 from '../../assets/image/img (9).jpeg'

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
  {
    id: 5,
    image:img5,
    name: "Army Green Active Short Sleeve",
    price: 14.95,
    originalPrice: 19.95,
  },
];

const Banner = () => {
  return (
    <>
    
     

      {/* Main Content */}
      <main className="container mx-auto p-6 bg-[#EA2127] -mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:-mr-40 gap-6 ">
          {/* Mapping over the products array */}
          {products.map((product) => (
            <div
              key={product.id}
              className="product    overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                <div className="main-price text-lg">
                  ${product.price.toFixed(2)}{" "}
                  <span className="original-price text-gray-500 line-through ml-2">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
  
    </>
  );
};

export default Banner;
