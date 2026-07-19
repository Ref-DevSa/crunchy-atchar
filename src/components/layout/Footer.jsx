import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">

        <div>

          <h2 className="mb-5 text-3xl font-bold">
            Crunchy Atchar
          </h2>

          <p className="leading-8 text-gray-400">
            Authentic homemade atchar made with fresh ingredients and
            traditional South African recipes.
          </p>

        </div>

        <div>

          <h3 className="mb-5 text-xl font-semibold">
            Quick Links
          </h3>

          <div className="space-y-3">

            <NavLink to="/" className="block hover:text-orange-400">
              Home
            </NavLink>

            <NavLink to="/products" className="block hover:text-orange-400">
              Products
            </NavLink>

            <NavLink to="/about" className="block hover:text-orange-400">
              About
            </NavLink>

            <NavLink to="/reviews" className="block hover:text-orange-400">
              Reviews
            </NavLink>

            <NavLink to="/contact" className="block hover:text-orange-400">
              Contact
            </NavLink>

          </div>

        </div>

        <div>

          <h3 className="mb-5 text-xl font-semibold">
            Contact
          </h3>

          <p className="text-gray-400">
            Johannesburg
          </p>

          <p className="mt-3 text-gray-400">
            info@crunchyatchar.co.za
          </p>

          <p className="mt-3 text-gray-400">
            +27 XX XXX XXXX
          </p>

        </div>

      </div>

      <div className="border-t border-gray-800 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Crunchy Atchar. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;