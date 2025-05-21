
import { Home, CalendarCheck, User, Search, Info, Folder, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about", icon: Info },
  { name: "Clinical Services", path: "/services", icon: Folder },
  { name: "Departments", path: "/departments", icon: Users },
  { name: "Health Resources", path: "/resources", icon: Search },
  { name: "Contact & Location", path: "/contact", icon: MapPin },
];

const Navbar = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between h-16 py-2">
        <div className="flex items-center gap-4">
          <div className="text-primary font-bold text-2xl flex items-center gap-2 ml-2">
            <span className="text-primary-dark">Shirba</span>
            <span className="text-skyblue">Line</span>
            <span className="text-gray-600 hidden md:inline">Hospital</span>
          </div>
          {!isMobile && (
            <div className="ml-8 flex gap-2">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path}>
                  <div className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors hover:bg-accent text-gray-700 font-medium text-sm ${location.pathname === link.path ? "bg-accent font-bold" : ""}`}>
                    <link.icon size={18} className="mr-1" />
                    {link.name}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Link to="/appointment">
            <Button className="font-bold rounded-full bg-primary hover:bg-primary-dark text-white px-5 py-2 shadow animate-fade-in hover-scale transition-transform">
              <CalendarCheck className="inline-block mr-2" size={20} />
              Book Appointment
            </Button>
          </Link>
          <Link to="/portal">
            <Button variant="outline" className="border-primary text-primary px-5 py-2 font-medium rounded-full ml-2 hover:bg-primary hover:text-white transition">
              <User className="inline-block mr-2" size={18} />
              Patient Portal
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
