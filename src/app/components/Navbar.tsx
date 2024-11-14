"use client"; // This directive marks the component as a client component

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // For burger and close icons

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-blue-900 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-white text-lg font-bold">My Website</h1>
                
                {/* Burger icon for small screens */}
                <div className="md:hidden" onClick={toggleMenu}>
                    {menuOpen ? (
                        <FiX className="text-white w-6 h-6 cursor-pointer" />
                    ) : (
                        <FiMenu className="text-white w-6 h-6 cursor-pointer" />
                    )}
                </div>

                {/* Menu Links */}
                <div
                    className={`md:flex space-x-12 items-center ${
                        menuOpen ? "block" : "hidden"
                    } md:block`}
                >
                    <Link href="/" className="text-white cursor-pointer p-2 hover:bg-blue-700 rounded">
                        Home
                    </Link>
                    <Link href="/about" className="text-white cursor-pointer p-2 hover:bg-blue-700 rounded">
                        About
                    </Link>
                    <Link href="/services" className="text-white cursor-pointer p-2 hover:bg-blue-700 rounded">
                        Services
                    </Link>
                    <Link href="/projects" className="text-white cursor-pointer p-2 hover:bg-blue-700 rounded">
                        Projects
                    </Link>
                    <Link href="/contact" className="text-white cursor-pointer p-2 hover:bg-blue-700 rounded">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
