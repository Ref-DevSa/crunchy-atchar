function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow transition hover:-translate-y-2 hover:shadow-xl">
      <img
        src={product.image}
        alt={product.name}
        className="h-60 w-full object-cover"
      />

      <div className="p-5">

        <span className="rounded bg-orange-100 px-3 py-1 text-sm text-orange-700">
          {product.category}
        </span>

        <h3 className="mt-4 text-2xl font-bold">
          {product.name}
        </h3>

        <p className="mt-2 text-gray-600">
          {product.description}
        </p>

        <p className="mt-4 text-xl font-bold text-green-700">
          {product.price}
        </p>

        <button className="mt-5 w-full rounded-lg bg-green-700 py-3 text-white hover:bg-green-800">
          View Product
        </button>

      </div>
    </div>
  );
}

export default ProductCard;