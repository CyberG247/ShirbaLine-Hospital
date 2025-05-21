
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, User, Phone, Book, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const departments = [
  "Family & Specialty Medicine",
  "Fertility & Genetics",
  "Obstetrics & Gynaecology",
  "Paediatrics & Neonatology",
  "Reproductive & Sexual Health",
  "Surgery, Urology, Imaging, Radiology",
  "Cardiology, Emergency, Physiotherapy, Ophthalmology"
];

const Appointment = () => (
  <div className="bg-accent min-h-screen font-roboto">
    <Navbar />
    <main className="container pt-28 pb-20">
      <div className="max-w-2xl mx-auto bg-white shadow rounded-xl p-8 border border-gray-100 animate-fade-in">
        <h1 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
          <Calendar size={24}/>
          Book an Appointment
        </h1>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-1 flex items-center gap-1">
                <User size={16}/> Full Name
              </label>
              <Input placeholder="Enter your full name" required />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1 flex items-center gap-1">
                <Phone size={16}/> Phone Number
              </label>
              <Input placeholder="+234..." required />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Email</label>
              <Input type="email" placeholder="your@email.com" required />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Gender</label>
              <select required className="bg-accent border border-gray-200 rounded px-3 py-2 w-full">
                <option value="">Select gender</option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Age</label>
              <Input type="number" min={0} max={120} placeholder="Enter your age" required />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1 flex items-center gap-1">
                <Book size={16}/> Appointment Type
              </label>
              <select required className="bg-accent border border-gray-200 rounded px-3 py-2 w-full">
                <option value="">Select Type</option>
                <option>Online</option>
                <option>In-Person</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Department/Clinic</label>
            <select required className="bg-accent border border-gray-200 rounded px-3 py-2 w-full">
              <option value="">Select Department</option>
              {departments.map((d, i) => <option key={i}>{d}</option>)}
            </select>
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Preferred Doctor (Optional)</label>
            <Input placeholder="Enter doctor's name (optional)" />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Appointment Date & Time</label>
            <Input type="datetime-local" required />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Symptoms / Concern</label>
            <Textarea rows={3} placeholder="Describe your symptoms or concern..." required />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1 flex items-center gap-1">
              <FileText size={16}/> Upload Referral/Medical File (Optional)
            </label>
            <Input type="file" accept=".pdf,.jpg,.png,.doc,.docx" />
          </div>
          <Button type="submit" className="mt-2 w-full font-bold">Submit Appointment Request</Button>
        </form>
      </div>
      <div className="max-w-2xl mx-auto mt-8 bg-softgray rounded-xl shadow p-6 text-center text-gray-700">
        <div>After submitting, you'll receive a confirmation email and SMS with appointment details. You can track, reschedule, or cancel through your Patient Portal.</div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Appointment;
