import { init } from "ityped";
import { useEffect, useRef } from "react";


const Header = () => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["tools", "For developers"],
    });
  }, []);

  return (
    <div className="text-center pt-7">
      <h1 className="text-center">
        <span className="text-4xl sm:text-6xl lg:text-7xl tracking-wide">Virtualr build </span>
        <span className="text-4xl sm:text-6xl lg:text-7xl bg-gradient-to-r  from-orange-500 to-red-800 text-transparent bg-clip-text" ref={textRef}>{"  "} </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl mx-auto my-6">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="space-x-12">
        <bouton className="border px-2 py-3 bg-gradient-to-tr from-orange-500 to-orange-700 rounded-md">
          Start for free
        </bouton>
        <button className="border px-2 py-3 rounded-md">Documentation</button>
      </div>
    </div>
  );
};

export default Header;
