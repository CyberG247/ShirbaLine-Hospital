
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Wallet, Calendar, FileText, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockProfile = {
  name: "Jane Doe",
  gender: "Female",
  age: 32,
  phone: "+234 800 111 2233",
  email: "jane.doe@email.com",
  medicalHistory: "Asthma, Allergy to penicillin.",
};

const mockWallet = {
  balance: "₦ 12,500",
  transactions: [
    { date: "2024-05-01", type: "Deposit", amount: "₦ 10,000" },
    { date: "2024-05-02", type: "Consultation Fee", amount: "-₦ 2,500" },
    { date: "2024-05-10", type: "Lab Test", amount: "-₦ 1,000" },
    { date: "2024-05-18", type: "Deposit", amount: "₦ 6,000" },
  ],
};

const mockAppointments = [
  { date: "2024-05-02", clinic: "General Medicine", doctor: "Dr. Smith", status: "Completed" },
  { date: "2024-05-14", clinic: "Paediatrics", doctor: "Dr. Yusuf", status: "Upcoming" },
];

const mockPrescriptions = [
  { id: 1, name: "Ibuprofen 200mg", date: "2024-05-02", fileUrl: "#" },
  { id: 2, name: "Allergy Test Results", date: "2024-05-10", fileUrl: "#" },
];

const mockMessages = [
  { id: 1, from: "Nurse", date: "2024-05-01", message: "Welcome to Shirba Line Hospital! Let us know how we can help." },
  { id: 2, from: "Reception", date: "2024-05-12", message: "Your next appointment is scheduled for May 14, 2024." },
];

const Portal = () => (
  <div className="bg-accent min-h-screen font-roboto flex flex-col">
    <Navbar />
    <main className="container pt-28 pb-20 flex flex-col gap-8 max-w-4xl mx-auto animate-fade-in">
      {/* Personal Profile */}
      <section className="bg-white rounded-xl shadow p-6 border border-gray-100">
        <div className="flex gap-3 items-center mb-3">
          <User size={20} className="text-primary" />
          <h2 className="font-bold text-lg text-primary-dark">Personal Profile</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
          <div><span className="text-gray-500">Full Name:</span> {mockProfile.name}</div>
          <div><span className="text-gray-500">Gender:</span> {mockProfile.gender}</div>
          <div><span className="text-gray-500">Age:</span> {mockProfile.age}</div>
          <div><span className="text-gray-500">Phone:</span> {mockProfile.phone}</div>
          <div><span className="text-gray-500">Email:</span> {mockProfile.email}</div>
          <div className="sm:col-span-2"><span className="text-gray-500">Medical History:</span> {mockProfile.medicalHistory}</div>
        </div>
      </section>

      {/* Wallet */}
      <section className="bg-white rounded-xl shadow p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <Wallet size={20} className="text-primary" />
          <h2 className="font-bold text-lg text-primary-dark">Wallet</h2>
          <span className="ml-auto text-gray-600">Balance: <span className="font-semibold text-green-600">{mockWallet.balance}</span></span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-600 mt-2">
            <thead>
              <tr className="bg-softgray text-gray-500">
                <th className="py-2 px-3 rounded-tl">Date</th>
                <th className="py-2 px-3">Type</th>
                <th className="py-2 px-3 rounded-tr text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {mockWallet.transactions.map((txn, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-accent"}>
                  <td className="py-2 px-3">{txn.date}</td>
                  <td className="py-2 px-3">{txn.type}</td>
                  <td className={`py-2 px-3 text-right ${txn.amount.startsWith('-') ? "text-red-500" : "text-green-600"}`}>{txn.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button variant="secondary" className="mt-4">Fund Wallet</Button>
      </section>

      {/* Appointment History */}
      <section className="bg-white rounded-xl shadow p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <Calendar size={20} className="text-primary" />
          <h2 className="font-bold text-lg text-primary-dark">Appointments</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-600 mt-2">
            <thead>
              <tr className="bg-softgray text-gray-500">
                <th className="py-2 px-3 rounded-tl">Date</th>
                <th className="py-2 px-3">Department/Clinic</th>
                <th className="py-2 px-3">Doctor</th>
                <th className="py-2 px-3 rounded-tr">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockAppointments.map((a, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-accent"}>
                  <td className="py-2 px-3">{a.date}</td>
                  <td className="py-2 px-3">{a.clinic}</td>
                  <td className="py-2 px-3">{a.doctor}</td>
                  <td className={`py-2 px-3 font-semibold ${a.status === "Upcoming" ? "text-blue-600" : "text-gray-700"}`}>{a.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button variant="secondary" className="mt-4">Book New Appointment</Button>
      </section>

      {/* Prescriptions & Referrals */}
      <section className="bg-white rounded-xl shadow p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <FileText size={20} className="text-primary" />
          <h2 className="font-bold text-lg text-primary-dark">Prescriptions & Referrals</h2>
        </div>
        <ul className="space-y-2 text-gray-700">
          {mockPrescriptions.map(r => (
            <li key={r.id} className="flex items-center gap-4 bg-accent rounded p-3 justify-between">
              <div>
                <div className="font-medium">{r.name}</div>
                <div className="text-xs text-gray-500">Date: {r.date}</div>
              </div>
              <a href={r.fileUrl} download className="text-primary font-semibold text-sm hover:underline">Download PDF</a>
            </li>
          ))}
        </ul>
      </section>

      {/* Secure Messages */}
      <section className="bg-white rounded-xl shadow p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <MessageSquare size={20} className="text-primary" />
          <h2 className="font-bold text-lg text-primary-dark">Secure Messages</h2>
        </div>
        <div className="space-y-3">
          {mockMessages.map(msg => (
            <div key={msg.id} className="bg-accent rounded p-3 flex flex-col">
              <div className="text-xs text-gray-500">{msg.from} &bull; {msg.date}</div>
              <div className="text-gray-700">{msg.message}</div>
            </div>
          ))}
        </div>
        <Button variant="secondary" className="mt-4">Send New Message</Button>
        <div className="text-xs text-gray-500 mt-1">Secure chat is private and visible only to you and hospital staff.</div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Portal;
