import { NavLink } from "react-router-dom";

function AboutPreview() {
  return (
    <section className="bg-orange-50 py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <img
          src="/products/mild-mango.png"
          alt="Crunchy Atchar"
          className="rounded-3xl shadow-2xl"
        />

        <div>

          <p className="font-semibold uppercase tracking-widest text-orange-500">
            About Crunchy Atchar
          </p>

          <h2 className="mt-3 text-5xl font-extrabold">
            Authentic Homemade Flavour
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            We proudly produce premium homemade atchar using carefully selected
            ingredients and trusted family recipes. Every jar is made with care,
            ensuring freshness and bold South African flavour.
          </p>

          <NavLink
            to="/about"
            className="mt-10 inline-block rounded-lg bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800"
          >
            Learn More
          </NavLink>

        </div>

      </div>

    </section>
  );
}

export default AboutPreview;