import Footer from "../Footer/page";
import Navbar from "../Navbar/page";

export default function contact(){
    return(
        <div className="container mx-auto">
            <Navbar/>
            <main className="bg-gray-50 text-gray-800 my-2">

            <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions? Contact us to learn how we can help your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
      
      </main>
            <Footer/>
        </div>
    )
}