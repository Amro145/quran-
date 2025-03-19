import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-red-50 h-10 fixed w-full z-10 to-0">
      <Link to="/" className="text-2xl px-5 cursor-pointer">
        Holy Quran
      </Link>
    </div>
  );
}

export default Navbar;
