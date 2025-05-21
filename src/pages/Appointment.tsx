
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarCheck } from "lucide-react";

const Appointment = () => (
  <div className="bg-accent min-h-screen font-roboto">
    <Navbar />
    <main className="container pt-28 pb-20">
      <div className="max-w-2xl mx-auto bg-white shadow rounded-xl p-8 border border-gray-100 animate-fade-in">
        <h1 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
          <CalendarCheck size={24}/>
          Book an Appointment
        </h1>
        <div className="text-gray-700 mb-6">
          (Booking form and patient onboarding system will be available here soon.)
        </div>
        <form>
          {/* FORM FIELDS (to implement in next iteration) */}
        </form>
      </div>
    </main>
    <Footer />
  </div>
);

export default Appointment;
