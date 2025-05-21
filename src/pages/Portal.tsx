
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Wallet, Calendar, FileText, MessageSquare, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const mockProfile = {
  name: "Jane Doe",
  id: "SHB0011059",
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

const activeStaffList = [
  { name: "Nurse Samuel", id: 1 },
  { name: "Dr. Joyce", id: 2 },
];

const HospitalInfo = {
  name: "Shirba Line Hospital",
  address: "22, Medical Crescent, GRA, Ikeja, Lagos, Nigeria."
};

// Simple credentials for demo – in real app use auth/backend!
const allowedID = mockProfile.id;
const allowedName = mockProfile.name;

const Portal = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loginName, setLoginName] = useState("");
  const [loginId, setLoginId] = useState("");
  const [loginError, setLoginError] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatWith, setChatWith] = useState("");
  const [chatMsg, setChatMsg] = useState("");
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginId.trim() === allowedID && loginName.trim().toLowerCase() === allowedName.trim().toLowerCase()) {
      setAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Incorrect Name or Patient ID. Please check details from IT Desk.");
    }
  };

  const startLiveChat = (staff: string) => {
    setChatWith(staff);
    setChatOpen(true);
    setChatHistory([`Chat started with ${staff}`]);
  };

  const sendChatMsg = () => {
    if (chatMsg.trim()) {
      setChatHistory(prev => [...prev, `You: ${chatMsg}`]);
      setChatMsg("");
    }
  };

  return (
    <div className="bg-accent min-h-screen font-roboto flex flex-col">
      <Navbar />
      <main className="container pt-28 pb-20 flex flex-col gap-8 max-w-4xl mx-auto animate-fade-in">
        {!authenticated ? (
          <section className="bg-white max-w-md mx-auto mt-10 rounded-xl shadow p-8 border border-gray-100 flex flex-col">
            <h2 className="font-bold text-2xl text-primary-dark flex gap-2 items-center justify-center mb-4">
              <User size={22}/> Patient Portal Log In
            </h2>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-gray-700 mb-1 font-semibold">Name (as given by IT Desk)</label>
                <Input value={loginName} onChange={e => setLoginName(e.target.value)} required placeholder="Full Name" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 font-semibold">Patient ID</label>
                <Input value={loginId} onChange={e => setLoginId(e.target.value)} required placeholder="Patient ID" />
              </div>
              {loginError && <div className="text-destructive font-medium">{loginError}</div>}
              <Button type="submit" className="w-full mt-2 font-bold">LOGIN</Button>
            </form>
            <div className="text-xs text-gray-500 mt-3 text-center">Request your Patient ID & Name from the IT Desk.</div>
          </section>
        ) : (
          <>
            {/* Personal Profile */}
            <section className="bg-white rounded-xl shadow p-6 border border-gray-100">
              <div className="flex gap-3 items-center mb-3">
                <User size={20} className="text-primary" />
                <h2 className="font-bold text-lg text-primary-dark">Personal Profile</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
                <div><span className="text-gray-500">Full Name:</span> {mockProfile.name}</div>
                <div><span className="text-gray-500">Patient ID:</span> {mockProfile.id}</div>
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
            {/* Secure Messages & Live Chat */}
            <section className="bg-white rounded-xl shadow p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare size={20} className="text-primary" />
                <h2 className="font-bold text-lg text-primary-dark flex items-center gap-2">Secure Messages {chatOpen && <span className="text-xs text-gray-500 ml-2">Live</span>}</h2>
              </div>
              {!chatOpen ? (
                <div>
                  <div className="text-sm mb-3">Start a live chat with hospital staff:</div>
                  <div className="flex gap-3 flex-wrap">
                    {activeStaffList.map(staff => (
                      <Button key={staff.id} variant="secondary" className="flex gap-1 items-center" onClick={() => startLiveChat(staff.name)}>
                        <Headphones size={16}/> Chat with {staff.name}
                      </Button>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-3">Previous messages:</div>
                  <div className="space-y-2 mt-1">
                    {mockMessages.map(msg => (
                      <div key={msg.id} className="bg-accent rounded p-3 flex flex-col">
                        <div className="text-xs text-gray-500">{msg.from} &bull; {msg.date}</div>
                        <div className="text-gray-700">{msg.message}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="mb-2 flex items-center gap-1 text-primary">
                    <Headphones size={16}/> Live chat with {chatWith}
                    <Button size="sm" variant="ghost" className="ml-auto px-2" onClick={()=>setChatOpen(false)}>End Chat</Button>
                  </div>
                  <div className="bg-accent h-40 overflow-y-auto rounded border p-2 space-y-1 text-sm">
                    {chatHistory.map((m, idx) => (
                      <div key={idx} className="py-0.5">{m}</div>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-1">
                    <Input
                      value={chatMsg}
                      onChange={e=>setChatMsg(e.target.value)}
                      onKeyDown={e=>(e.key==="Enter") && sendChatMsg()}
                      placeholder="Type your message..."
                      className="flex-1"
                    />
                    <Button onClick={sendChatMsg}>Send</Button>
                  </div>
                  <div className="text-xs text-gray-500">Live chat with hospital staff is confidential and secure.</div>
                </div>
              )}
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Portal;

