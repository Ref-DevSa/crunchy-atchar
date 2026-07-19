import { NavLink } from "react-router-dom";

function CallToAction() {
  return (
    <section className="bg-green-700 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 text-4xl font-bold">
          Ready to Taste the Difference?
        </h2>

        <p className="mb-10 text-lg">
          Order your favourite Crunchy Atchar products today and enjoy authentic
          homemade flavour delivered with care.
        </p>

        <NavLink
          to="/products"
          className="rounded-lg bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-orange-100"
        >
          Browse Products
        </NavLink>
      </div>
    </section>
  );
}

export default CallToAction;