import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import EcomContext from "../context/EcomContext";
import useLocalStorage from "../hooks/useLocalStorage";

function Header() {
  const [open, setOpen] = useState(false);
  const { cartItems, isAuthenticated, cartCount } = useContext(EcomContext);
  const { showAndHide } = useContext(EcomContext);
  const { deleteItem } = useLocalStorage("auth-token");


  function logout() {
    deleteItem();
    dispatch({ type: "setToken", payload: null });
    showAndHide("success", "you are now signed out");
  }

  const showHeader = (
    <div className="sticky top-0 z-[20] flex items-center justify-between py-[15px] px-[30px] bg-blue-950">
      <div>
        <a href="">
          <h1 className="text-[24px] text-white font-bold">Star Tech</h1>
        </a>
      </div>
      <nav className="hidden lg:flex space-x-4 text-white text-[15px]">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-[35px] h-[35px] lg:hidden"
      >
        <HiMenu className="text-3xl text-white" />
      </button>
      <div
        onClick={() => setOpen(!open)}
        className={`fixed lg:hidden top-0 w-full bg-black z-[20] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opcacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed lg:hidden left-0 top-0 w-[300px] h-screen overflow-auto z-[30] bg-white transition-all duration-200 ${
          open ? "translate-x-[0px]" : "translate-x-[-500px]"
        }`}
      >
        <nav className="flex flex-col gap-5 text-black text-[25px] pt-20 px-10">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>
    </div>
  );

  const showAuthHeader = (
    <div className="sticky top-0 z-[20] flex items-center justify-between py-[15px] px-[30px] bg-blue-950">
      <div>
        <a href="">
          <h1 className="text-[24px] text-white font-bold">Star Tech</h1>
        </a>
      </div>
      <nav className="hidden lg:flex space-x-4 text-white text-[15px]">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="relative">
          <BsCart4 className="text-xl" />
          <div className="absolute bottom-2 font-bold left-2 text-blue-950 bg-white text-center rounded-full h-4 w-4 text-[10px]">
            {cartCount}
          </div>
        </Link>
        <Link onClick={logout}>Logout</Link>
      </nav>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-[35px] h-[35px] lg:hidden"
      >
        <HiMenu className="text-3xl text-white" />
      </button>
      <div
        onClick={() => setOpen(!open)}
        className={`fixed lg:hidden top-0 w-full bg-black z-[20] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opcacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed lg:hidden left-0 top-0 w-[300px] h-screen overflow-auto z-[30] bg-white transition-all duration-200 ${
          open ? "translate-x-[0px]" : "translate-x-[-500px]"
        }`}
      >
        <nav className="flex flex-col gap-5 text-black text-[25px] pt-20 px-10">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="" className="relative">
            <BsCart4 className="text-4xl" />
            <div className="absolute bottom-4 left-4 text-white bg-blue-950 text-center rounded-full h-6 w-6 text-[15px]">
              4
            </div>
          </Link>
          <Link onClick={logout}>Logout</Link>
        </nav>
      </div>
    </div>
  );

  return <div>{isAuthenticated ? showAuthHeader : showHeader}</div>;
}

export default Header;
