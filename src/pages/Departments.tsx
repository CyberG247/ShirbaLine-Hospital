
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users } from "lucide-react";

const departments = [
  "Family & Specialty Medicine",
  "Fertility & Genetics",
  "Obstetrics & Gynaecology",
  "Paediatrics & Neonatology",
  "Reproductive & Sexual Health",
  "Surgery, Urology, Imaging, Radiology",
  "Cardiology, Emergency, Physiotherapy, Ophthalmology",
];

const Departments = () => (
  <div className="bg-accent min-h-screen font-roboto">
    <Navbar />
    <main className="container pt-28 pb-20">
      <h1 className="text-3xl font-bold text-primary mb-6 flex gap-2 items-center"><Users size={32} /> Hospital Departments</h1>
      <ul className="grid md:grid-cols-2 gap-6">
        {departments.map(dep => (
          <li key={dep} className="bg-white shadow rounded-xl p-6 text-lg text-primary-dark border border-gray-100 animate-fade-in">
            {dep}
          </li>
        ))}
      </ul>
    </main>
    <Footer />
  </div>
);

export default Departments;
