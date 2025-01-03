"use client";

import { ImCancelCircle } from "react-icons/im";
import { CgDetailsMore } from "react-icons/cg";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-800 h-[10vh] text-white flex relative">
      <div className="flex justify-between gap-4 items-center w-full md:px-12 px-4">
        <h1 className="text-xl font-bold text-yellow-400">Uzbekistan Medi</h1>

        <div className="md:hidden">
          {open ? (
            <ImCancelCircle
              className="text-2xl cursor-pointer text-red-500"
              onClick={() => setOpen((preState) => !preState)}
            />
          ) : (
            <CgDetailsMore
              className="text-2xl cursor-pointer text-yellow-400"
              onClick={() => setOpen((preState) => !preState)}
            />
          )}
        </div>

        <ul className="gap-5 font-semibold md:flex hidden">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">MBBS in Uzbekistan</Link>
          </li>
          <li>
            <Link href="/">Universities</Link>
          </li>
          <li>
            <Link href="/">Blogs</Link>
          </li>
          <li>
            <Link href="/">Gallery</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>

        <ul
          className={`absolute top-[calc(100%+2px)] w-full text-center bg-gray-800 leading-9 font-semibold z-50 md:hidden ${
            open ? "left-0" : "left-[-100%]"
          } duration-700`}
        >
          <li onClick={() => setOpen(false)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/">About</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/">MBBS in Uzbekistan</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/">Universities</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/">Blogs</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/">Gallery</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
