function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <h2 className="mb-4 text-3xl font-bold">
          Crunchy Atchar
        </h2>

        <p className="mb-6 max-w-md text-gray-400">
          Authentic homemade atchar made with fresh ingredients,
          traditional recipes and proudly South African flavour.
        </p>

        <hr className="border-gray-700" />

        <p className="mt-6 text-center text-gray-400">
          © {new Date().getFullYear()} Crunchy Atchar. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;