import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky z-50 top-0 py-2  backdrop-blur-lg border-b border-neutral-700/80">
      <div className="relative  flex   justify-between px-4 mx-3 items-center  lg:text-sm flex-shrink-0">
        <div className="flex space-x-3 items-center text-xl">
          <img src={logo} alt="here is my logo" className="h-12 w-12" />
          <span>Virtual</span>
        </div>

        <ul className="hidden lg:flex ml-14 space-x-12">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex space-x-12 items-center">
          <a href="#" className="border rounded-md py-2 px-2 text-md">
            Sign in
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
          >
            Create a account
          </a>{" "}
        </div>
        <div className="lg:hidden md:flex flex-col justify-end">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
         {mobileDrawerOpen && (
          <div className="fixed right-0 top-14 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
