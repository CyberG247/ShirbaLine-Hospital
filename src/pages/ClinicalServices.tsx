
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Folder } from "lucide-react";

const services = [
  { name: "General Consultation", desc: "Family, Internal Medicine, Follow-ups" },
  { name: "Fertility Screening", desc: "Assessment & specialty support" },
  { name: "Maternity & Gynaecology", desc: "Pregnancy care, delivery, specialty" },
  { name: "Paediatrics", desc: "Infants, children & adolescent care" },
  { name: "Specialist Clinics", desc: "Urology, Cardiology, Eye, Surgery" },
];

const ClinicalServices = () => (
  <div className="bg-accent min-h-screen font-roboto">
    <Navbar />
    <main className="container pt-28 pb-20">
      <h1 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2"><Folder size={28} /> Clinical Services</h1>
      <div className="grid md:grid-cols-2 gap-7">
        {services.map((service) => (
          <div key={service.name} className="bg-white rounded-xl shadow p-6 border border-gray-100 animate-fade-in">
            <div className="font-semibold text-lg text-primary-dark mb-1">{service.name}</div>
            <div className="text-gray-600">{service.desc}</div>
            <div className="mt-3">
              <span className="text-sm text-primary-light">Check consultant availability &nbsp;|&nbsp; </span>
              <a href="/appointment" className="text-primary font-bold underline hover:text-primary-dark">Book Now</a>
            </div>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default ClinicalServices;
