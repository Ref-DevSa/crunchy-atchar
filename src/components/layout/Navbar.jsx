import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/crunchy-atchar-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 bg-white shadow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/">
          <img src={logo} alt="Crunchy Atchar" className="h-16" />
        </NavLink>

        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-green-700"
                    : "text-gray-700 hover:text-green-700"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/products"
          className="hidden rounded bg-green-700 px-5 py-3 text-white md:block"
        >
          Shop Now
        </NavLink>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl md:hidden"
        >
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4"
            >
              {link.name}
            </NavLink>
          ))}

          <div className="p-6">
            <NavLink
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="block rounded bg-green-700 py-3 text-center text-white"
            >
              Shop Now
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;