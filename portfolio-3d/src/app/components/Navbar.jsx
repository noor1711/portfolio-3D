"use client";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header>
      <Link
        href="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">
          Noor
        </p>
      </Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </header>
  );
};
