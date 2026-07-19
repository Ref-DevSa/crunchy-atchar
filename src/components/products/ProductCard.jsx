function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow transition hover:-translate-y-2 hover:shadow-xl">
      <img
        src={product.image}
        alt={product.name}
        className="h-60 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold">
          {product.name}
        </h3>

        <p className="mb-4 text-lg font-semibold text-green-700">
          {product.price}
        </p>

        <button className="w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800">
          View Product
        </button>
      </div>
    </div>
  );
}

export default ProductCard;