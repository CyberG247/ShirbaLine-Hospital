
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book } from "lucide-react";

const Resources = () => (
  <div className="bg-accent min-h-screen font-roboto">
    <Navbar />
    <main className="container pt-28 pb-20">
      <h1 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
        <Book size={26}/> Health Resources: Blog & FAQs
      </h1>
      <div className="bg-white rounded-xl shadow p-6 text-gray-700 border border-gray-100 animate-fade-in">
        <div className="mb-2 font-semibold">Hospital Health Blog & FAQs</div>
        <ul className="space-y-2 text-gray-600">
          <li>- Educational articles on preventive care, healthy living, and understanding your prescriptions.</li>
          <li>- Frequently Asked Questions (FAQs) for patients and families.</li>
          <li>- Hospital tips for navigating your visit and using the digital platform effectively.</li>
          <li>- Medical updates and wellness resources from our staff and consultants.</li>
        </ul>
        <div className="mt-4 text-blue-700">
          Stay tuned as we launch our full online resource center!
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Resources;
