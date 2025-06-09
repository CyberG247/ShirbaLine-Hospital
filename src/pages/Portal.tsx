import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Wallet, Calendar, FileText, MessageSquare, Headphones, Download, Eye, Bell, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const mockProfile = {
  name: "Jane Doe",
  id: "SHB0011059",
  gender: "Female",
  age: 32,
  phone: "+234 800 111 2233",
  email: "jane.doe@email.com",
  medicalHistory: "Asthma, Allergy to penicillin.",
  bloodType: "O+",
  emergencyContact: "+234 800 555 7777",
};

const mockWallet = {
  balance: "₦ 12,500",
  transactions: [
    { date: "2024-05-01", type: "Deposit", amount: "₦ 10,000", status: "Completed" },
    { date: "2024-05-02", type: "Consultation Fee", amount: "-₦ 2,500", status: "Completed" },
    { date: "2024-05-10", type: "Lab Test", amount: "-₦ 1,000", status: "Completed" },
    { date: "2024-05-18", type: "Deposit", amount: "₦ 6,000", status: "Completed" },
  ],
};

const mockAppointments = [
  { date: "2024-05-02", clinic: "General Medicine", doctor: "Dr. Smith", status: "Completed", time: "10:00 AM" },
  { date: "2024-05-14", clinic: "Paediatrics", doctor: "Dr. Yusuf", status: "Upcoming", time: "2:30 PM" },
  { date: "2024-04-20", clinic: "Cardiology", doctor: "Dr. Adams", status: "Completed", time: "11:15 AM" },
];

const mockPrescriptions = [
  { 
    id: 1, 
    name: "Ibuprofen 200mg", 
    date: "2024-05-02", 
    doctor: "Dr. Smith",
    status: "Active",
    dosage: "2 tablets every 8 hours",
    fileUrl: "#" 
  },
  { 
    id: 2, 
    name: "Allergy Test Results", 
    date: "2024-05-10", 
    doctor: "Dr. Adams",
    status: "Completed",
    dosage: "Test Report",
    fileUrl: "#" 
  },
  { 
    id: 3, 
    name: "Blood Pressure Medication", 
    date: "2024-04-15", 
    doctor: "Dr. Johnson",
    status: "Expired",
    dosage: "1 tablet daily",
    fileUrl: "#" 
  },
];

const mockMessages = [
  { id: 1, from: "Nurse Samuel", date: "2024-05-01", message: "Welcome to Shirba Line Hospital! Let us know how we can help.", unread: false },
  { id: 2, from: "Reception", date: "2024-05-12", message: "Your next appointment is scheduled for May 14, 2024.", unread: true },
  { id: 3, from: "Dr. Smith", date: "2024-05-13", message: "Your test results are ready for review.", unread: true },
];

const activeStaffList = [
  { name: "Nurse Samuel", id: 1, status: "online" },
  { name: "Dr. Joyce", id: 2, status: "online" },
  { name: "Reception Desk", id: 3, status: "online" },
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
    setChatHistory([`Chat started with ${staff}`, `${staff}: Hello! How can I assist you today?`]);
  };

  const sendChatMsg = () => {
    if (chatMsg.trim()) {
      setChatHistory(prev => [...prev, `You: ${chatMsg}`]);
      setChatMsg("");
      // Simulate staff response
      setTimeout(() => {
        setChatHistory(prev => [...prev, `${chatWith}: Thank you for your message. I'll get back to you shortly.`]);
      }, 1000);
    }
  };

  const downloadPDF = (prescriptionName: string) => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJeLjz9MKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovQ29udGVudHMgNCAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL0xlbmd0aCA0NAo+PgpzdHJlYW0KQLQKMS4wIDAuMCAwLjAgMS4wIDEwMC4wIDcwMC4wIFRtCihIZWxsbyBXb3JsZCkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iago=';
    link.download = `${prescriptionName.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const unreadCount = mockMessages.filter(msg => msg.unread).length;

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
            {/* Welcome Banner */}
            <Card className="bg-gradient-to-r from-primary to-primary-dark text-white">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold">Welcome back, {mockProfile.name}!</h1>
                    <p className="opacity-90">Patient ID: {mockProfile.id}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90">Last Login</div>
                    <div className="font-semibold">{new Date().toLocaleDateString()}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield size={20} className="text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link to="/appointment">
                    <Button className="w-full h-16 flex flex-col items-center gap-1">
                      <Calendar size={20} />
                      <span>Book Appointment</span>
                    </Button>
                  </Link>
                  <Link to="/fund-wallet">
                    <Button variant="outline" className="w-full h-16 flex flex-col items-center gap-1">
                      <Wallet size={20} />
                      <span>Fund Wallet</span>
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full h-16 flex flex-col items-center gap-1">
                    <FileText size={20} />
                    <span>View Records</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

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
                <div><span className="text-gray-500">Blood Type:</span> {mockProfile.bloodType}</div>
                <div><span className="text-gray-500">Emergency Contact:</span> {mockProfile.emergencyContact}</div>
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
                      <th className="py-2 px-3 rounded-tl text-left">Date</th>
                      <th className="py-2 px-3 text-left">Type</th>
                      <th className="py-2 px-3 text-right">Amount</th>
                      <th className="py-2 px-3 rounded-tr text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockWallet.transactions.map((txn, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-accent"}>
                        <td className="py-2 px-3">{txn.date}</td>
                        <td className="py-2 px-3">{txn.type}</td>
                        <td className={`py-2 px-3 text-right font-medium ${txn.amount.startsWith('-') ? "text-red-500" : "text-green-600"}`}>{txn.amount}</td>
                        <td className="py-2 px-3 text-center">
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">{txn.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Link to="/fund-wallet">
                <Button variant="secondary" className="mt-4">Fund Wallet</Button>
              </Link>
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
                      <th className="py-2 px-3 rounded-tl text-left">Date</th>
                      <th className="py-2 px-3 text-left">Time</th>
                      <th className="py-2 px-3 text-left">Department</th>
                      <th className="py-2 px-3 text-left">Doctor</th>
                      <th className="py-2 px-3 rounded-tr text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockAppointments.map((a, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-accent"}>
                        <td className="py-2 px-3">{a.date}</td>
                        <td className="py-2 px-3">{a.time}</td>
                        <td className="py-2 px-3">{a.clinic}</td>
                        <td className="py-2 px-3">{a.doctor}</td>
                        <td className="py-2 px-3 text-center">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            a.status === "Upcoming" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
                          }`}>{a.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Link to="/appointment">
                <Button variant="secondary" className="mt-4">Book New Appointment</Button>
              </Link>
            </section>
            {/* Enhanced Prescriptions & Referrals */}
            <section className="bg-white rounded-xl shadow p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <FileText size={20} className="text-primary" />
                <h2 className="font-bold text-lg text-primary-dark">Prescriptions & Medical Records</h2>
              </div>
              <div className="space-y-3">
                {mockPrescriptions.map(prescription => (
                  <div key={prescription.id} className="bg-accent rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-800">{prescription.name}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            prescription.status === "Active" ? "bg-green-100 text-green-800" :
                            prescription.status === "Completed" ? "bg-blue-100 text-blue-800" :
                            "bg-gray-100 text-gray-800"
                          }`}>
                            {prescription.status}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div><span className="font-medium">Doctor:</span> {prescription.doctor}</div>
                          <div><span className="font-medium">Date Prescribed:</span> {prescription.date}</div>
                          <div><span className="font-medium">Dosage:</span> {prescription.dosage}</div>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => alert(`Viewing details for ${prescription.name}`)}
                          className="text-xs"
                        >
                          <Eye size={14} className="mr-1" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => downloadPDF(prescription.name)}
                          className="text-xs"
                        >
                          <Download size={14} className="mr-1" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Enhanced Secure Messages & Live Chat */}
            <section className="bg-white rounded-xl shadow p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare size={20} className="text-primary" />
                <h2 className="font-bold text-lg text-primary-dark flex items-center gap-2">
                  Secure Messages 
                  {unreadCount > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {unreadCount} new
                    </span>
                  )}
                  {chatOpen && <span className="text-xs text-green-600 ml-2 flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-full"></div>Live</span>}
                </h2>
              </div>
              {!chatOpen ? (
                <div>
                  <div className="text-sm mb-3 font-medium">Start a live chat with hospital staff:</div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    {activeStaffList.map(staff => (
                      <Button 
                        key={staff.id} 
                        variant="outline" 
                        className="flex gap-2 items-center justify-center h-12" 
                        onClick={() => startLiveChat(staff.name)}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <Headphones size={16}/>
                          <span className="text-sm">{staff.name}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mb-3">Recent messages:</div>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {mockMessages.map(msg => (
                      <div key={msg.id} className={`bg-accent rounded p-3 flex flex-col ${msg.unread ? 'border-l-4 border-primary' : ''}`}>
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-xs text-gray-500 flex items-center gap-2">
                            {msg.from} • {msg.date}
                            {msg.unread && <Bell size={12} className="text-primary" />}
                          </div>
                        </div>
                        <div className={`text-gray-700 text-sm ${msg.unread ? 'font-medium' : ''}`}>{msg.message}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="mb-2 flex items-center gap-2 text-primary">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <Headphones size={16}/>
                    <span className="font-medium">Live chat with {chatWith}</span>
                    <Button size="sm" variant="ghost" className="ml-auto px-2 text-xs" onClick={()=>setChatOpen(false)}>End Chat</Button>
                  </div>
                  <div className="bg-accent h-48 overflow-y-auto rounded border p-3 space-y-2 text-sm">
                    {chatHistory.map((m, idx) => (
                      <div key={idx} className={`py-1 ${m.startsWith('You:') ? 'text-right' : 'text-left'}`}>
                        <span className={`inline-block px-2 py-1 rounded ${
                          m.startsWith('You:') ? 'bg-primary text-white' : 'bg-white'
                        }`}>
                          {m}
                        </span>
                      </div>
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
                    <Button onClick={sendChatMsg} disabled={!chatMsg.trim()}>Send</Button>
                  </div>
                  <div className="text-xs text-gray-500">Live chat with hospital staff is confidential and secure.</div>
                </div>
              )}
            </section>

            {/* Health Reminders */}
            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock size={20} className="text-orange-600" />
                  Health Reminders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Bell size={14} className="text-orange-600" />
                    <span>Next appointment: May 14, 2024 at 2:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell size={14} className="text-orange-600" />
                    <span>Prescription refill due: May 20, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell size={14} className="text-orange-600" />
                    <span>Annual checkup recommended</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Portal;
