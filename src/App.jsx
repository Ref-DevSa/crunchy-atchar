import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTopButton from "./components/common/ScrollToTopButton";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <AppRoutes />
        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  );
}

export default App;
