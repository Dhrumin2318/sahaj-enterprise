import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-4 bg-orange-500 text-white flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">Sahaj Enterprise</Link>
      </div>
      <nav>
        <ul className="flex gap-4">
          {[
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "Resources", path: "/resources" },
            { name: "Dealers", path: "/dealers" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-yellow-200 transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
