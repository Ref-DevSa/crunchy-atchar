function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h1 className="text-5xl font-bold">About Crunchy Atchar</h1>

        <p className="mt-4 text-lg">
          Homemade flavour. Fresh ingredients. Proudly South African.
        </p>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <img
              src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800"
              alt="Our Story"
              className="rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="mb-6 text-4xl font-bold">
              Our Story
            </h2>

            <p className="mb-4 text-gray-600">
              Crunchy Atchar was founded with one goal: to produce authentic,
              homemade atchar using quality ingredients and traditional South
              African recipes.
            </p>

            <p className="mb-4 text-gray-600">
              Every jar is prepared with care to ensure freshness, flavour and
              consistency for every customer.
            </p>

            <p className="text-gray-600">
              We believe great food brings people together, and our products are
              made to be enjoyed at every table.
            </p>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-orange-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">

          <div className="rounded-xl bg-white p-8 shadow">
            <h3 className="mb-4 text-3xl font-bold text-green-700">
              Our Mission
            </h3>

            <p className="text-gray-600">
              To provide fresh, delicious homemade atchar that customers can
              trust while supporting local communities and quality food
              production.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow">
            <h3 className="mb-4 text-3xl font-bold text-green-700">
              Our Vision
            </h3>

            <p className="text-gray-600">
              To become one of South Africa's most trusted homemade atchar
              brands by delivering exceptional quality and customer
              satisfaction.
            </p>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h2 className="mb-12 text-4xl font-extrabold tracking-tight text-gray-900">
            Our Values
          </h2>

          <div className="grid gap-8 md:grid-cols-4">

            <div className="rounded-xl bg-white p-8 shadow">
              <h3 className="mb-4 text-2xl">🥭</h3>
              <h4 className="font-bold">Quality</h4>
            </div>

            <div className="rounded-xl bg-white p-8 shadow">
              <h3 className="mb-4 text-2xl">❤️</h3>
              <h4 className="font-bold">Passion</h4>
            </div>

            <div className="rounded-xl bg-white p-8 shadow">
              <h3 className="mb-4 text-2xl">🤝</h3>
              <h4 className="font-bold">Integrity</h4>
            </div>

            <div className="rounded-xl bg-white p-8 shadow">
              <h3 className="mb-4 text-2xl">🌍</h3>
              <h4 className="font-bold">Community</h4>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default About;