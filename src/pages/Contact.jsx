function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h1 className="text-5xl font-bold">Contact Us</h1>

        <p className="mt-4 text-lg">
          We'd love to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Contact Info */}
          <div>
            <h2 className="mb-8 text-3xl font-bold">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-bold text-green-700">
                  📍 Address
                </h3>

                <p className="text-gray-600">
                  Johannesburg, South Africa
                </p>
              </div>

              <div>
                <h3 className="font-bold text-green-700">
                  📞 Phone
                </h3>

                <p className="text-gray-600">
                  +27 00 000 0000
                </p>
              </div>

              <div>
                <h3 className="font-bold text-green-700">
                  ✉️ Email
                </h3>

                <p className="text-gray-600">
                  info@crunchyatchar.co.za
                </p>
              </div>

              <div>
                <h3 className="font-bold text-green-700">
                  🕒 Business Hours
                </h3>

                <p className="text-gray-600">
                  Monday - Friday
                </p>

                <p className="text-gray-600">
                  08:00 - 17:00
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl bg-white p-8 shadow">

            <h2 className="mb-6 text-3xl font-bold">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border p-4"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg border p-4"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full rounded-lg border p-4"
              ></textarea>

              <button
                className="w-full rounded-lg bg-green-700 py-4 font-semibold text-white hover:bg-green-800"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-6 pb-20">
        <div className="mx-auto flex h-96 max-w-7xl items-center justify-center rounded-xl bg-gray-200">
          <p className="text-xl text-gray-600">
            Google Map will be added here later.
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;