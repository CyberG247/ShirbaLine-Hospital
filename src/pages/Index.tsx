
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Folder, Users, MapPin, Info } from "lucide-react";

const quickLinks = [
  { title: "Clinical Services", icon: Folder, to: "/services", desc: "Explore world-class medical & clinical care" },
  { title: "Departments", icon: Users, to: "/departments", desc: "Find specialized departments & doctors" },
  { title: "Book Appointment", icon: Info, to: "/appointment", desc: "Schedule a visit or telemedicine session" },
  { title: "Patient Portal", icon: MapPin, to: "/portal", desc: "Access your health records & wallet" },
];

const Index = () => (
  <div className="bg-accent min-h-screen font-roboto">
    <Navbar />
    <HeroSection />
    <main className="container mt-[-2rem] mb-20 relative z-10">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-12">
        {quickLinks.map((link) => (
          <Link to={link.to} key={link.title}>
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all p-6 flex flex-col items-center text-center hover-scale border border-gray-100">
              <link.icon className="text-primary" size={32} />
              <div className="mt-3 font-semibold text-lg text-primary-dark">{link.title}</div>
              <div className="text-gray-500 text-sm mt-1">{link.desc}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full bg-white rounded-2xl shadow p-8 mt-16 text-gray-600 text-center">
        <h2 className="text-xl font-bold text-primary mb-1">Full Digital Patient Experience</h2>
        <p>
          Register, fund your medical wallet, and access healthcare—all seamlessly. Our platform empowers patients and staff for a better hospital journey.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Index;
