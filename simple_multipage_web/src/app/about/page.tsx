import Footer from "../Footer/page";
import Navbar from "../Navbar/page";

export default function about(){
    return(
        <div className="container mx-auto">
        <Navbar/>
        <main className="bg-gray-50 text-gray-800 my-2">
        <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-blue-600">About Us</h2>
            <p className="text-gray-600 mt-4">
              MyBrand is a trusted partner dedicated to providing innovative solutions tailored to
              our clients' unique needs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  Our mission is to empower businesses to reach new heights by delivering solutions that
                  drive success.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  We envision a world where businesses of all sizes can achieve their goals with
                  streamlined, efficient solutions.
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