function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white">
          {product.category}
        </span>

      </div>

      <div className="p-6">

        <div className="mb-2 text-yellow-500">
          ★★★★★
        </div>

        <h3 className="text-2xl font-bold">
          {product.name}
        </h3>

        <p className="mt-3 text-gray-600">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <span className="text-2xl font-bold text-green-700">
            {product.price}
          </span>

          <button className="rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white transition hover:bg-orange-600">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;