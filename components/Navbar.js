"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  // const user = useUser();
  // console.log(user.user?.id);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 shadow-md sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            CodeHash
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/forums" className="text-gray-300 hover:text-white">
              Forums
            </Link>

            <div className="flex justify-center items-center">
              <UserButton />
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="p-4 space-y-2">
            <Link
              href="/about"
              className="block text-gray-300 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-gray-300 hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-gray-300 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
