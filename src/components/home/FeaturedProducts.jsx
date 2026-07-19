import { NavLink } from "react-router-dom";
import products from "../../data/products";
import ProductCard from "../products/ProductCard";

function FeaturedProducts() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex items-center justify-between">

          <div>

            <p className="font-semibold uppercase tracking-widest text-orange-500">
              Our Products
            </p>

            <h2 className="mt-2 text-5xl font-extrabold text-gray-900">
              Best Sellers
            </h2>

          </div>

          <NavLink
            to="/products"
            className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
          >
            View All
          </NavLink>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;