import { useMemo, useState } from "react";
import products from "../data/products";
import ProductCard from "../components/products/ProductCard";

function Products() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Mild", "Hot", "Mixed"];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <>
      <section className="bg-linear-to-r from-green-700 to-orange-500 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <h1 className="text-5xl font-extrabold">
            Our Products
          </h1>

          <p className="mt-5 max-w-2xl text-lg">
            Browse our range of authentic homemade atchar made with quality
            ingredients and traditional recipes.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-10 rounded-2xl bg-white p-6 shadow">

          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-xl border p-4 focus:border-green-700 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="mt-6 flex flex-wrap gap-3">

            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-6 py-3 font-semibold transition ${
                  category === item
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 hover:bg-orange-100"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

        </div>

        <p className="mb-8 text-lg font-semibold text-gray-600">
          {filteredProducts.length} Product(s) Found
        </p>

        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl bg-orange-50 p-16 text-center">

            <h2 className="text-3xl font-bold">
              No products found
            </h2>

            <p className="mt-4 text-gray-600">
              Try a different search or category.
            </p>

          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

      </section>
    </>
  );
}

export default Products;