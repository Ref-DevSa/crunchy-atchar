function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Nomsa M.",
      rating: "★★★★★",
      comment:
        "Absolutely delicious! The mango atchar is fresh, crunchy and packed with flavour.",
    },
    {
      id: 2,
      name: "Thabo K.",
      rating: "★★★★★",
      comment:
        "Excellent customer service and the quality is always consistent.",
    },
    {
      id: 3,
      name: "Lerato P.",
      rating: "★★★★★",
      comment:
        "I've ordered several times and have never been disappointed.",
    },
    {
      id: 4,
      name: "Sipho D.",
      rating: "★★★★☆",
      comment:
        "Great homemade taste. Looking forward to trying more flavours.",
    },
    {
      id: 5,
      name: "Amanda N.",
      rating: "★★★★★",
      comment:
        "Perfect with braai meat and pap. Highly recommended!",
    },
    {
      id: 6,
      name: "Brian S.",
      rating: "★★★★★",
      comment:
        "The whole family loves it. Definitely buying again.",
    },
  ];

  return (
    <>
      <section className="bg-green-700 py-16 text-center text-white">
        <h1 className="text-5xl font-bold">Customer Reviews</h1>

        <p className="mt-4 text-lg">
          Here's what our customers have to say.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-xl bg-white p-8 shadow hover:shadow-lg transition"
            >
              <div className="mb-4 text-yellow-500 text-2xl">
                {review.rating}
              </div>

              <p className="mb-6 italic text-gray-600">
                "{review.comment}"
              </p>

              <h3 className="font-bold text-lg">
                {review.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-3xl rounded-xl bg-white p-10 shadow">

          <h2 className="mb-6 text-center text-3xl font-bold">
            Leave a Review
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border p-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border p-4"
            />

            <select className="w-full rounded-lg border p-4">
              <option>★★★★★</option>
              <option>★★★★☆</option>
              <option>★★★☆☆</option>
              <option>★★☆☆☆</option>
              <option>★☆☆☆☆</option>
            </select>

            <textarea
              rows="5"
              placeholder="Write your review..."
              className="w-full rounded-lg border p-4"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-lg bg-green-700 py-4 font-semibold text-white hover:bg-green-800"
            >
              Submit Review
            </button>

          </form>

        </div>
      </section>
    </>
  );
}

export default Reviews;