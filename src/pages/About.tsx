
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => (
  <div className="bg-accent min-h-screen font-roboto">
    <Navbar />
    <main className="container pt-28 pb-20">
      <h1 className="text-3xl font-bold text-primary mb-4">About Shirba Line Hospital</h1>
      <p className="mb-3 text-lg text-gray-700 max-w-2xl">
        Shirba Line Hospital is committed to providing cutting-edge medical services, compassionate care, and digital convenience to patients across our city and beyond.
      </p>
      <p className="text-gray-600 max-w-2xl">
        Our mission is to blend best-in-class clinical expertise with modern technology, empowering patients, staff, and doctors alike. We continuously strive to innovate for a healthier tomorrow.
      </p>
    </main>
    <Footer />
  </div>
);

export default About;
