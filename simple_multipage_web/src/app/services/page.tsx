import Footer from "../Footer/page";
import Navbar from "../Navbar/page";

export default function services(){
    return(
        <div className="container mx-auto">
        <Navbar/>
        <main className="bg-gray-50 text-gray-800 my-2">

        <section className="bg-gray-100 py-16 my-2">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-blue-600">Our Services</h2>
            <p className="text-gray-600 mt-4">
              We offer a range of services to meet the demands of your business.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Consulting</h3>
                <p className="text-gray-600">
                  Our experts provide insights to guide your business strategies.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Marketing</h3>
                <p className="text-gray-600">
                  Grow your brand with our targeted marketing strategies.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Support</h3>
                <p className="text-gray-600">
                  Get dedicated support to keep your business running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
        <Footer/>
        </div>
    )
}