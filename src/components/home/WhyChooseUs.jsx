function WhyChooseUs() {
  const features = [
    {
      icon: "🥭",
      title: "Fresh Ingredients",
      text: "We carefully select quality ingredients to ensure every jar is packed with authentic flavour.",
    },
    {
      icon: "👩‍🍳",
      title: "Homemade Recipes",
      text: "Prepared using traditional family recipes that have been perfected over time.",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      text: "Fresh products delivered quickly so you can enjoy them at their very best.",
    },
    {
      icon: "🇿🇦",
      title: "Proudly South African",
      text: "Locally produced with passion and proudly supporting South African communities.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-widest text-orange-500">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-5xl font-extrabold">
            Made With Passion
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We don't just make atchar—we create authentic homemade flavour
            using fresh ingredients and recipes trusted by generations.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 text-5xl">
                {item.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;