function WhyChooseUs() {
  const features = [
    {
      icon: "🥭",
      title: "Fresh Ingredients",
      description: "Only the freshest ingredients go into every jar.",
    },
    {
      icon: "🌶️",
      title: "Authentic Recipes",
      description: "Traditional recipes that deliver real homemade flavour.",
    },
    {
      icon: "❤️",
      title: "Made With Care",
      description: "Every batch is carefully prepared for consistent quality.",
    },
    {
      icon: "🇿🇦",
      title: "Proudly South African",
      description: "Locally made for South African families to enjoy.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-widest text-green-700">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">
            More Than Just Atchar
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We focus on quality, freshness and authentic South African flavour
            in every jar we produce.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-orange-50 p-8 text-center shadow transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 text-5xl">{feature.icon}</div>

              <h3 className="mb-3 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;