import { NavLink } from "react-router-dom";

function AboutPreview() {
  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=700"
            alt="Crunchy Atchar"
            className="rounded-2xl shadow-xl"
          />
        </div>

        <div className="md:w-1/2">
          <p className="mb-2 font-semibold uppercase tracking-widest text-green-700">
            About Us
          </p>

          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900">
            Homemade Goodness Since Day One
          </h2>

          <p className="mb-4 text-gray-600">
            Crunchy Atchar is passionate about producing delicious homemade
            atchar using carefully selected ingredients and traditional family
            recipes.
          </p>

          <p className="mb-8 text-gray-600">
            Every jar is packed with flavour, freshness, and the authentic
            taste South Africans know and love.
          </p>

          <NavLink
            to="/about"
            className="rounded-lg bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800"
          >
            Read More
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;