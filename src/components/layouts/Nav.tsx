import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "animate.css";
// import scrollResults from "../../ScrollResult";
// import { ScrollItem } from "../../ScrollResult";
// import { Item } from "../../SearchResults";
// import SearchResults from "../../SearchResults";
// import { animateScroll } from "react-scroll";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  //   const items: Item[] = [
  //     { id: 1, name: "Home", path: "/" },
  //     { id: 2, name: "Discover", path: "/discover" },
  //     { id: 3, name: "Category", path: "/category" },
  //     { id: 4, name: "Product", path: "/product" },
  //     { id: 5, name: "Add to cart", path: "/cart" },
  //     { id: 6, name: "Checkout", path: "/checkout" },
  //     { id: 6, name: "Recently", path: "recently" },
  //   ];

  //   const ScrollItems: ScrollItem[] = [
  //     { id: 1, name: "Recently", to: "recently" },
  //     { id: 1, name: "", to: "recently" },
  //     { id: 1, name: "Recently", to: "recently" },
  //     { id: 1, name: "", to: "recently" },
  //     { id: 1, name: "Recently", to: "recently" },
  //     { id: 1, name: "", to: "recently" },
  //   ];

  //   console.log(ScrollItems);

  //   useEffect(() => {
  //     if (searchInput) {
  //       const results = ScrollItems.filter((ScrollItem) =>
  //         ScrollItem.name.toLowerCase().includes(searchInput.toLowerCase())
  //       );
  //       setscrollResults(results);
  //     } else {
  //       setscrollResults([]);
  //     }
  //   }, [searchInput]);

  //   console.log(scrollResults);

  //   useEffect(() => {
  //     if (searchInput) {
  //       const results = items.filter((item) =>
  //         item.name.toLowerCase().includes(searchInput.toLowerCase())
  //       );
  //       setSearchResults(results);
  //     } else {
  //       setSearchResults([]);
  //     }
  //   }, [searchInput]);
  //   console.log(setSearchResults);
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed bg-[#D9D9D9] top-0 left-0 w-full z-40 sm:h-[12rem] align-middle overflow-x-hidden overflow-y-hidden">
        <div className="sm:flex h-[10rem] space-y-5 py-4 sm:justify-between -space-x-4 sm:mx-10 items-center">
          {/* First div with "Futura" */}
          <div className="flex-shrink-0 ml-10 text-pink-700 text-2xl font-bold">
            Ella's Store
          </div>

          {/* Second div with menu, search, and icons */}
          <div className="flex justify-evenly space-x-4 items-center">
            {/* Menu bar */}
            <div className="hidden space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white">
                Services
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      !isOpen
                        ? "M4 6h16M4 12h16m-7 6h7"
                        : "M6 18L18 6M6 6l12 12"
                    }
                  />
                </svg>
              </button>
            </div>

            {/* Search bar */}
            <div className="flex items-center border border-black bg-[#D9D9D9] rounded-md py-1 relative">
              <CiSearch className="text-black" />
              <input
                type="text"
                placeholder="Search"
                className="bg-[#D9D9D9] text-black focus:outline-none ml-2"
                // value={searchInput}
                // onChange={(e) => setSearchInput(e.target.value)}
              />
              {/* {searchResults.length > 0 && (
                <SearchResults
                  searchResults={searchResults}
                  closeMenu={closeMenu}
                />
              )} */}
              {/* {scrollResults.length > 0 && (
                <scrollResults
                  scrollResults={scrollResults}
                  closeMenu={closeMenu}
                />
              )} */}
            </div>

            {/* Icons */}
            <div className="flex items-center sm:space-x-4">
              <Link to={"/cart"}>
                <BsCart3 className="text-black text-2xl md:text-2xl" />
              </Link>
              <div className="hidden sm:flex md:space-x-4">
                <Link to={"/"}>
                  <FaHeart className="text-black text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay to close the menu when clicking outside */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={closeMenu}
          ></div>
        )}

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-y-0 left-0 w-[20rem] h-full bg-[#D9D9D9] text-center text-white z-30 animate__animated animate__fadeInLeft  rounded-r-xl p-4">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block text-black font-bold hover:text-slate-500"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/cart"
                className="block text-black font-bold hover:text-slate-500"
                onClick={closeMenu}
              >
                Add to cart
              </Link>
              <Link
                to="/checkout"
                className="block text-black font-bold hover:text-slate-500"
                onClick={closeMenu}
              >
                Checkout
              </Link>
              <Link
                to="/recently"
                className="block text-black font-bold hover:text-slate-500"
                onClick={closeMenu}
              >
                Recently
              </Link>
            </div>
          </div>
        )}
      </nav>
      {/* This div ensures the content below the navbar starts after the navbar's height */}
      <div className="mt-[5rem]">{/* Content below the navbar */}</div>
    </>
  );
};

export default Nav;
