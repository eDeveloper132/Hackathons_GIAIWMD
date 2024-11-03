import Footer from "./Footer/page";
import Navbar from "./Navbar/page";
import Carousel from "./Carousel/page";
export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <main className="bg-gray-50 text-gray-800 my-2">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to MyBrand</h1>
            <p className="text-lg mb-6">
              We deliver exceptional services to help your business thrive in a digital world.
            </p>
            <a
              href="/about"
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </section>
        <section className="my-2">
          <Carousel />
        </section>
      </main>
      <Footer />
    </div>
  );
}
