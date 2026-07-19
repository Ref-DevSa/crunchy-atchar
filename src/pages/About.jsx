import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <section className="bg-linear-to-r from-green-700 to-orange-500 py-20 text-center text-white">
        <h1 className="text-5xl font-extrabold">
          About Crunchy Atchar
        </h1>

        <p className="mt-5 text-lg">
          Authentic homemade flavour with every jar.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2">

        <img
          src="/products/combo-pack.png"
          alt="Crunchy Atchar"
          className="rounded-3xl shadow-xl"
        />

        <div>

          <h2 className="text-4xl font-bold">
            Our Story
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Crunchy Atchar was founded with one goal:
            bringing authentic homemade atchar to families
            across South Africa using quality ingredients,
            traditional recipes and exceptional customer service.
          </p>

        </div>

      </section>

      <section className="bg-orange-50 py-20">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-3 text-2xl font-bold">
              Mission
            </h3>

            <p>
              Deliver authentic homemade flavour with every jar.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-3 text-2xl font-bold">
              Vision
            </h3>

            <p>
              Become South Africa's favourite homemade atchar brand.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-3 text-2xl font-bold">
              Values
            </h3>

            <p>
              Quality • Freshness • Passion • Community
            </p>
          </div>

        </div>

      </section>

      <section className="py-20">

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">

          <div>
            <h2 className="text-5xl font-bold text-green-700">100%</h2>
            <p>Homemade</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-green-700">Fresh</h2>
            <p>Ingredients</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-green-700">Local</h2>
            <p>South African</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-green-700">Quality</h2>
            <p>Guaranteed</p>
          </div>

        </div>

      </section>

      <section className="bg-green-700 py-20 text-center text-white">

        <h2 className="text-4xl font-bold">
          Ready to Taste the Difference?
        </h2>

        <NavLink
          to="/products"
          className="mt-8 inline-block rounded-xl bg-orange-500 px-8 py-4 font-bold"
        >
          Shop Products
        </NavLink>

      </section>
    </>
  );
}

export default About;