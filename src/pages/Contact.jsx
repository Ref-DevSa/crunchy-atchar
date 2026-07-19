function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-r from-green-700 to-orange-500 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-5 text-lg">
            We'd love to hear from you. Send us a message or contact us using the details below.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">

          <div className="space-y-6">

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h2 className="mb-3 text-xl font-bold">📍 Address</h2>
              <p>Johannesburg, South Africa</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h2 className="mb-3 text-xl font-bold">☎ Phone</h2>
              <p>+27 XX XXX XXXX</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h2 className="mb-3 text-xl font-bold">✉ Email</h2>
              <p>info@crunchyatchar.co.za</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h2 className="mb-3 text-xl font-bold">🕒 Business Hours</h2>
              <p>Monday - Friday</p>
              <p>08:00 - 17:00</p>
            </div>

          </div>

          <div className="rounded-2xl bg-white p-8 shadow-xl">

            <h2 className="mb-6 text-3xl font-bold">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border p-4"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border p-4"
              />

              <textarea
                rows="6"
                placeholder="Message"
                className="w-full rounded-xl border p-4"
              ></textarea>

              <button className="w-full rounded-xl bg-green-700 py-4 font-bold text-white hover:bg-green-800">
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Map */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="rounded-2xl bg-gray-200 p-24 text-center shadow-lg">

          <h2 className="text-3xl font-bold">
            Google Maps
          </h2>

          <p className="mt-4 text-gray-600">
            Google Maps will be connected later.
          </p>

        </div>

      </section>
    </>
  );
}

export default Contact;