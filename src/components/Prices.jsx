import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import CardPrice from "./CardPrice";

const Prices = () => {
  return (
    <div>
      <h2 className="text-center lg:text-6xl text-4xl mb-4">Pricing</h2>
      <div className="flex-wrap flex my-10">
        {pricingOptions.map((priceOption, index) => (
          <CardPrice priceOption={priceOption} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Prices;
