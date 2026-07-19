import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/products/ProductCard";

function Products() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="bg-green-700 py-16 text-center text-white">
        <h1 className="text-5xl font-bold">Our Products</h1>

        <p className="mt-4">
          Browse our homemade atchar collection.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-8 w-full rounded-lg border p-4"
        />

        <div className="mb-10 flex flex-wrap justify-center gap-4">

          {["All", "Mild", "Hot", "Mixed"].map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-lg px-6 py-3 ${
                category === item
                  ? "bg-green-700 text-white"
                  : "bg-gray-200"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </section>
    </>
  );
}

export default Products;