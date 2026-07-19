import products from "../../data/products";
import ProductCard from "../products/ProductCard";

function FeaturedProducts() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900">
          Featured Products
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Discover our most loved homemade atchar products.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
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