
import { CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="w-full bg-gradient-to-tr from-primary-light via-white to-accent py-16 md:py-28 min-h-[50vh] flex items-center justify-center animate-fade-in">
    <div className="container flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold font-roboto text-primary mb-4 leading-tight">
          Welcome to <span className="text-primary-dark">Shirba Line Hospital</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          Modern healthcare for today’s families.<br />Book appointments, fund your wallet, access care—digitally.
        </p>
        <Link to="/appointment">
          <Button className="bg-primary hover:bg-primary-dark px-8 py-3 rounded-full text-white font-bold shadow transition shadow-lg animate-scale-in">
            <CalendarCheck className="inline-block mr-2" />
            Book Appointment
          </Button>
        </Link>
      </div>
      <div className="hidden md:block flex-1">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80" alt="Hospital Waiting Room" className="rounded-xl shadow-lg w-full max-w-md object-cover" />
      </div>
    </div>
  </section>
);

export default HeroSection;
