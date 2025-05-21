
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User } from "lucide-react";

const Portal = () => (
  <div className="bg-accent min-h-screen font-roboto">
    <Navbar />
    <main className="container pt-28 pb-20 flex flex-col items-center">
      <div className="max-w-lg w-full bg-white rounded-xl shadow p-8 border border-gray-100 animate-fade-in">
        <div className="flex gap-2 items-center mb-3">
          <User size={24} />
          <h1 className="text-2xl font-bold text-primary">Patient Portal</h1>
        </div>
        <div className="text-gray-700 mb-4">
          Login or Sign up to manage appointments, wallet and personal health records.
        </div>
        <div className="w-full flex flex-col gap-2">
          {/* TODO: Add login/signup forms and integration */}
          <div className="py-8 text-center text-gray-400">Patient Auth will go here next.</div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Portal;
