
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Info } from "lucide-react";

const Resources = () => (
  <div className="bg-accent min-h-screen font-roboto">
    <Navbar />
    <main className="container pt-28 pb-20">
      <h1 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
        <Info size={26} /> Health Resources: Blog & FAQs
      </h1>
      <div className="bg-white rounded-xl shadow p-6 text-gray-700 border border-gray-100 animate-fade-in">
        <div className="mb-2 font-semibold">Coming Soon!</div>
        <div>Stay tuned for helpful articles, hospital tips, FAQs, and wellness resources as we launch our new digital platform.</div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Resources;
