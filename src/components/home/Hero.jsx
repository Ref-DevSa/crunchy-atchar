import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Background Decoration */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-200/30 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

        {/* Left */}
        <div>

          <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Proudly South African 🇿🇦
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Homemade Atchar
            <br />
            Full of Crunch.
            <br />
            Full of Flavour.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Discover authentic homemade atchar made using carefully selected
            ingredients, traditional recipes and bold South African flavour.
            Every jar is packed with freshness and quality.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <NavLink
              to="/products"
              className="rounded-lg bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
            >
              Shop Now
            </NavLink>

            <NavLink
              to="/about"
              className="rounded-lg border-2 border-green-700 px-8 py-4 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
            >
              Our Story
            </NavLink>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">

            <div>
              <h3 className="text-3xl font-bold text-green-700">
                100%
              </h3>
              <p className="text-sm text-gray-600">
                Homemade
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-500">
                Fresh
              </h3>
              <p className="text-sm text-gray-600">
                Ingredients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-700">
                SA
              </h3>
              <p className="text-sm text-gray-600">
                Proudly Local
              </p>
            </div>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <img
            src="/products/combo-pack.png"
            alt="Crunchy Atchar Combo Pack"
            className="w-full max-w-lg rounded-3xl shadow-2xl transition duration-500 hover:scale-105"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;