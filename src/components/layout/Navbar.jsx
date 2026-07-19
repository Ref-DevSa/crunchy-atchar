import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/crunchy-atchar-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={logo}
            alt="Crunchy Atchar"
            className="h-16 w-auto"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-semibold transition ${
                    isActive
                      ? "text-green-700 border-b-2 border-orange-500 pb-1"
                      : "text-gray-700 hover:text-orange-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <NavLink
          to="/products"
          className="hidden rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600 md:block"
        >
          Order Now
        </NavLink>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl md:hidden"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 ${
                  isActive
                    ? "bg-green-700 text-white"
                    : "hover:bg-orange-100"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/products"
            onClick={() => setIsOpen(false)}
            className="m-4 block rounded-lg bg-orange-500 py-3 text-center font-semibold text-white"
          >
            Order Now
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Navbar;