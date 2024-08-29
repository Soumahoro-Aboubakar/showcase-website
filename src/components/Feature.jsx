import { features } from "../constants";
const Feature = () => {
  return (
    <div className="">
      <div className="text-center">
        <h5 className="text-orange-600 text-xl">Feature</h5>
        <div className="lg:my-8">
          <span className="lg:text-6xl text-4xl flex-shrink-0">
            Easily build{" "}
          </span>
          <span className="lg:text-6xl text-4xl bg-gradient-to-tr  from-orange-500 to-orange-700 text-transparent  bg-clip-text">
            your code
          </span>
        </div>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-b border-neutral-700/80  my-12">

      </div>
    </div>
  );
};

export default Feature;
