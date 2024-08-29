import React from "react";
import { CheckCircle2 } from "lucide-react";

const CardPrice = ({ priceOption, index }) => {
  return (
    <>
      <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 hover:-translate-y-10 transition duration-600">
        <div className="p-10 border border-neutral-700 rounded-xl">
          <p className="text-4xl mb-8">
            {priceOption.title}
            {priceOption.title === "Pro" && (
              <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                (Most Popular)
              </span>
            )}
          </p>
          <p className="mb-8">
            <span className="text-5xl mt-6 mr-2">{priceOption.price}</span>
            <span className="text-neutral-400 tracking-tight">/Month</span>
          </p>
          <ul>
            {priceOption.features.map((feature, index) => (
              <li key={index} className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
          >
            Subscribe
          </a>
        </div>
      </div>
    </>
  );
};

export default CardPrice;
