import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-orange-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 md:flex-row">
        {/* Left */}
        <div className="md:w-1/2">
          <p className="mb-3 font-semibold uppercase tracking-widest text-green-700">
            Homemade • Fresh • Authentic
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
            Taste the Crunch of Tradition
          </h1>

          <p className="mb-8 text-lg text-gray-600">
            Crunchy Atchar brings you authentic homemade atchar crafted with
            fresh ingredients, bold flavours, and traditional recipes that make
            every meal unforgettable.
          </p>

          <div className="flex gap-4">
            <NavLink
              to="/products"
              className="rounded-lg bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800"
            >
              Shop Now
            </NavLink>

            <NavLink
              to="/about"
              className="rounded-lg border-2 border-green-700 px-8 py-4 font-semibold text-green-700 hover:bg-green-700 hover:text-white"
            >
              Learn More
            </NavLink>
          </div>
        </div>

        {/* Right */}
        <div className="mt-12 flex justify-center md:mt-0 md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=700"
            alt="Crunchy Atchar"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;