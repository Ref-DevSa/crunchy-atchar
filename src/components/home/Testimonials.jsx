function Testimonials() {
  const reviews = [
    {
      name: "Nomsa M.",
      review:
        "Absolutely delicious! The mango atchar reminds me of my grandmother's recipe.",
    },
    {
      name: "Thabo K.",
      review:
        "Excellent service and amazing flavour. I'll definitely order again.",
    },
    {
      name: "Lerato P.",
      review:
        "Fresh, crunchy and full of flavour. Highly recommended!",
    },
  ];

  return (
    <section className="bg-green-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-widest text-orange-500">
            Customer Reviews
          </p>

          <h2 className="mt-3 text-5xl font-extrabold">
            Loved By Our Customers
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <div className="mb-4 text-2xl text-yellow-500">
                ★★★★★
              </div>

              <p className="italic leading-8 text-gray-600">
                "{review.review}"
              </p>

              <h3 className="mt-8 text-xl font-bold">
                {review.name}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;