
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => (
  <div className="bg-accent min-h-screen font-roboto">
    <Navbar />
    <main className="container pt-28 pb-20">
      <h1 className="text-3xl font-bold text-primary mb-4 flex items-center gap-2">
        <MapPin size={26}/> Contact & Location
      </h1>
      <div className="bg-white rounded-xl shadow p-7 flex flex-col gap-2 border border-gray-100 animate-fade-in max-w-lg">
        <div className="flex gap-2 items-center"><MapPin size={18}/> 123 Hospital Lane, City, Nigeria</div>
        <div className="flex gap-2 items-center"><Mail size={18}/> info@shirbelinehospital.com</div>
        <div className="flex gap-2 items-center"><Phone size={18}/> +234 800 123 4567</div>
        <div className="mt-4 text-primary font-semibold">Find us on Google Maps [Coming Soon]</div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;
