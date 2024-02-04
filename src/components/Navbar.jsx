import {  Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";

const NavbarC = () => {
  const path = useLocation().pathname;
  const dynamicStyles = path === "/" ? 'active' : '';
  return (
    <div className="bg-orange-50 py-3 sticky top-0">
      <Navbar
        
        rounded
        className="font-mono max-w-7xl mx-auto bg-orange-50 "
      >
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-4xl font-semibold dark:text-white uppercase text-orange-500">
            Chakri<span className="text-sm text-orange-700">.com</span>
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <button  className="flex items-center justify-center rounded bg-orange-500 px-4 py-2 text-white font-extrabold hover:bg-orange-600 uppercase"><AiOutlineLogin className="mr-2  h-5 w-5"/>Login</button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            className={`font-semibold ${dynamicStyles}`}
            active={path === "/"}
            
            as={"div"}
          >
            <Link className="hover:text-orange-500" to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link
            className="font-semibold"
            active={path === "/about"}
            as={"div"}
          >
            <Link className="hover:text-orange-500" to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarC;
