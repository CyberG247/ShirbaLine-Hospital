
import React, { useState } from "react";
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

const HOSPITAL_INFO = {
  name: "Shirba Line Hospital",
  address: "22, Medical Crescent, GRA, Ikeja, Lagos, Nigeria.",
  phone: "+234 555 555 5555",
  email: "info@shirbaline.com"
};

type BookingSlipProps = {
  summary: {
    fullName: string;
    phone: string;
    email: string;
    gender: string;
    age: string;
    type: string;
    department: string;
    doctor: string;
    datetime: string;
    description: string;
  };
  onPrint?: () => void;
};

const BookingSlip: React.FC<BookingSlipProps> = ({ summary, onPrint }) => (
  <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8 border border-gray-200 animate-fade-in mt-6">
    <div className="text-xl font-bold text-primary flex gap-2 items-center mb-2"><FileText size={22}/> Booking Slip</div>
    <div className="font-semibold text-primary-dark mb-1">{HOSPITAL_INFO.name}</div>
    <div className="text-sm text-gray-700 mb-2">{HOSPITAL_INFO.address}</div>
    <div className="text-sm text-gray-700 mb-4">Phone: {HOSPITAL_INFO.phone} &nbsp;|&nbsp; Email: {HOSPITAL_INFO.email}</div>
    <table className="w-full mb-4 text-gray-700">
      <tbody>
        <tr><td className="font-medium py-1">Patient Name:</td><td className="pl-2">{summary.fullName}</td></tr>
        <tr><td className="font-medium py-1">Phone:</td><td className="pl-2">{summary.phone}</td></tr>
        <tr><td className="font-medium py-1">Email:</td><td className="pl-2">{summary.email}</td></tr>
        <tr><td className="font-medium py-1">Gender:</td><td className="pl-2">{summary.gender}</td></tr>
        <tr><td className="font-medium py-1">Age:</td><td className="pl-2">{summary.age}</td></tr>
        <tr><td className="font-medium py-1">Appointment Type:</td><td className="pl-2">{summary.type}</td></tr>
        <tr><td className="font-medium py-1">Department:</td><td className="pl-2">{summary.department}</td></tr>
        <tr><td className="font-medium py-1">Doctor:</td><td className="pl-2">{summary.doctor}</td></tr>
        <tr><td className="font-medium py-1">Date & Time:</td><td className="pl-2">{summary.datetime && new Date(summary.datetime).toLocaleString(undefined,{dateStyle:'medium',timeStyle:'short'})}</td></tr>
        <tr><td className="font-medium py-1">Symptoms:</td><td className="pl-2">{summary.description}</td></tr>
      </tbody>
    </table>
    <Button className="mr-2" onClick={onPrint}><FileText size={16}/> Print / Save as PDF</Button>
    <div className="text-sm text-gray-500 mt-3">Bring this slip or your Patient ID for your appointment.</div>
  </div>
);

const Appointment = () => {
  const [booked, setBooked] = useState(false);
  const [bookingSummary, setBookingSummary] = useState<any>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    gender: "",
    age: "",
    type: "",
    department: "",
    doctor: "",
    datetime: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSummary(formData);
    setBooked(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-accent min-h-screen font-roboto">
      <Navbar />
      <main className="container pt-28 pb-20">
        {!booked ? (
        <div className="max-w-2xl mx-auto bg-white shadow rounded-xl p-8 border border-gray-100 animate-fade-in">
          <h1 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
            <Calendar size={24}/>
            Book an Appointment
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-gray-700 mb-1 flex items-center gap-1">
                  <User size={16}/> Full Name
                </label>
                <Input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" required />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1 flex items-center gap-1">
                  <Phone size={16}/> Phone Number
                </label>
                <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+234..." required />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Email</label>
                <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required className="bg-accent border border-gray-200 rounded px-3 py-2 w-full">
                  <option value="">Select gender</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Age</label>
                <Input name="age" type="number" min={0} max={120} value={formData.age} onChange={handleChange} placeholder="Enter your age" required />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1 flex items-center gap-1">
                  <Book size={16}/> Appointment Type
                </label>
                <select name="type" value={formData.type} onChange={handleChange} required className="bg-accent border border-gray-200 rounded px-3 py-2 w-full">
                  <option value="">Select Type</option>
                  <option>Online</option>
                  <option>In-Person</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Department/Clinic</label>
              <select name="department" value={formData.department} onChange={handleChange} required className="bg-accent border border-gray-200 rounded px-3 py-2 w-full">
                <option value="">Select Department</option>
                {departments.map((d, i) => <option key={i}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Preferred Doctor (Optional)</label>
              <Input name="doctor" value={formData.doctor} onChange={handleChange} placeholder="Enter doctor's name (optional)" />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Appointment Date & Time</label>
              <Input name="datetime" type="datetime-local" value={formData.datetime} onChange={handleChange} required />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Symptoms / Concern</label>
              <Textarea name="description" rows={3} value={formData.description} onChange={handleChange} placeholder="Describe your symptoms or concern..." required />
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
        ) : (
          <BookingSlip summary={bookingSummary} onPrint={handlePrint} />
        )}
        <div className="max-w-2xl mx-auto mt-8 bg-softgray rounded-xl shadow p-6 text-center text-gray-700">
          <div>After submitting, you'll receive a confirmation email and SMS with appointment details. You can track, reschedule, or cancel through your Patient Portal.</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Appointment;

