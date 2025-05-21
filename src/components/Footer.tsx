
import { MapPin, Mail, Phone, Info, Facebook, Twitter, Instagram } from "lucide-react";

function SocialIcon({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-accent rounded-full transition-all">
      {children}
    </a>
  );
}

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 py-8 mt-20">
    <div className="container flex flex-col md:flex-row items-center md:justify-between gap-8">
      <div className="text-primary font-bold text-xl mb-2 md:mb-0">Shirba Line Hospital</div>
      <div className="flex gap-4 text-gray-500">
        <SocialIcon href="#"><Facebook size={20} /></SocialIcon>
        <SocialIcon href="#"><Twitter size={20} /></SocialIcon>
        <SocialIcon href="#"><Instagram size={20} /></SocialIcon>
      </div>
      <div className="text-sm text-gray-600 flex flex-col items-center md:items-end gap-1">
        <div className="flex gap-2 items-center"><MapPin size={16}/> 123 Hospital Lane, City Name</div>
        <div className="flex gap-2 items-center"><Mail size={16}/> info@shirbelinehospital.com</div>
        <div className="flex gap-2 items-center"><Phone size={16}/> +234 800 123 4567</div>
      </div>
    </div>
    <div className="text-center mt-5 text-xs text-gray-400">&copy; {new Date().getFullYear()} Shirba Line Hospital</div>
  </footer>
);

export default Footer;
