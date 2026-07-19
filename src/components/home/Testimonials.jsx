function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Nomsa M.",
      review:
        "The best atchar I've ever tasted. Fresh, crunchy and full of flavour!",
    },
    {
      id: 2,
      name: "Thabo K.",
      review:
        "Excellent quality and fast service. My family absolutely loves it.",
    },
    {
      id: 3,
      name: "Lerato P.",
      review:
        "Authentic homemade taste. I'll definitely be ordering again.",
    },
  ];

  return (
    <section className="bg-green-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-widest text-green-700">
            Customer Reviews
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-gray-600">
            We appreciate every customer who supports Crunchy Atchar.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-xl bg-white p-8 shadow"
            >
              <div className="mb-4 text-3xl text-yellow-500">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mb-6 italic text-gray-600">
                "{review.review}"
              </p>

              <h3 className="font-bold">
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