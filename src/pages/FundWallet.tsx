import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wallet, CreditCard, Smartphone, Building2, ArrowLeft, CheckCircle, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const paymentMethods = [
  { id: "card", name: "Credit/Debit Card", icon: CreditCard, desc: "Visa, Mastercard, Verve" },
  { id: "transfer", name: "Bank Transfer", icon: Building2, desc: "Direct bank transfer" },
  { id: "ussd", name: "USSD Code", icon: Smartphone, desc: "*737# or *966#" },
];

const quickAmounts = [1000, 2500, 5000, 10000, 15000, 25000];

const hospitalDetails = {
  name: "Specialized Hospital Benin",
  address: "No. 123, Ring Road, GRA, Benin City, Edo State",
  phone: "+234 805 123 4567",
  email: "info@shbenin.com",
  website: "www.shbenin.com",
  rcNumber: "RC 123456"
};

const FundWallet = () => {
  const [amount, setAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [showSuccess, setShowSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const handleFunding = async () => {
    if (!amount || parseFloat(amount) < 100) return;
    
    setProcessing(true);
    // Generate transaction ID
    const newTransactionId = `TXN${Date.now()}${Math.floor(Math.random() * 1000)}`;
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setTransactionId(newTransactionId);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }, 2000);
  };

  const formatAmount = (value: string) => {
    const num = parseFloat(value);
    return isNaN(num) ? "₦ 0" : `₦ ${num.toLocaleString()}`;
  };

  const printReceipt = () => {
    const receiptWindow = window.open('', '_blank');
    const currentDate = new Date().toLocaleString();
    
    receiptWindow?.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Payment Receipt - ${hospitalDetails.name}</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              margin: 20px; 
              line-height: 1.6;
              color: #333;
            }
            .header { 
              text-align: center; 
              border-bottom: 2px solid #2563eb; 
              padding-bottom: 20px; 
              margin-bottom: 30px;
            }
            .logo { 
              font-size: 24px; 
              font-weight: bold; 
              color: #2563eb; 
              margin-bottom: 10px;
            }
            .hospital-info { 
              font-size: 14px; 
              color: #666; 
            }
            .receipt-title { 
              font-size: 20px; 
              font-weight: bold; 
              text-align: center; 
              margin: 30px 0; 
              color: #2563eb;
            }
            .details-grid { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 20px; 
              margin-bottom: 30px;
            }
            .detail-item { 
              border-bottom: 1px dotted #ccc; 
              padding: 8px 0; 
            }
            .label { 
              font-weight: bold; 
              color: #555;
            }
            .amount-section { 
              background: #f8f9fa; 
              padding: 20px; 
              border-radius: 8px; 
              text-align: center; 
              margin: 30px 0;
            }
            .amount { 
              font-size: 24px; 
              font-weight: bold; 
              color: #16a34a;
            }
            .footer { 
              text-align: center; 
              margin-top: 40px; 
              padding-top: 20px; 
              border-top: 1px solid #ccc; 
              font-size: 12px; 
              color: #666;
            }
            .status { 
              color: #16a34a; 
              font-weight: bold;
            }
            @media print {
              body { margin: 0; }
              button { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">${hospitalDetails.name}</div>
            <div class="hospital-info">
              ${hospitalDetails.address}<br>
              Phone: ${hospitalDetails.phone} | Email: ${hospitalDetails.email}<br>
              Website: ${hospitalDetails.website} | RC: ${hospitalDetails.rcNumber}
            </div>
          </div>
          
          <div class="receipt-title">WALLET FUNDING RECEIPT</div>
          
          <div class="details-grid">
            <div class="detail-item">
              <div class="label">Patient Name:</div>
              <div>Jane Doe</div>
            </div>
            <div class="detail-item">
              <div class="label">Patient ID:</div>
              <div>SHB0011059</div>
            </div>
            <div class="detail-item">
              <div class="label">Transaction ID:</div>
              <div>${transactionId}</div>
            </div>
            <div class="detail-item">
              <div class="label">Date & Time:</div>
              <div>${currentDate}</div>
            </div>
            <div class="detail-item">
              <div class="label">Payment Method:</div>
              <div>${paymentMethods.find(m => m.id === selectedMethod)?.name}</div>
            </div>
            <div class="detail-item">
              <div class="label">Status:</div>
              <div class="status">SUCCESSFUL</div>
            </div>
          </div>
          
          <div class="amount-section">
            <div style="margin-bottom: 10px;">Amount Funded</div>
            <div class="amount">${formatAmount(amount)}</div>
          </div>
          
          <div class="footer">
            <p><strong>Thank you for using ${hospitalDetails.name}</strong></p>
            <p>This is a computer-generated receipt. No signature required.</p>
            <p>For inquiries, please contact us at ${hospitalDetails.phone} or ${hospitalDetails.email}</p>
            <p>Generated on: ${currentDate}</p>
          </div>
        </body>
      </html>
    `);
    
    receiptWindow?.document.close();
    receiptWindow?.print();
  };

  if (showSuccess) {
    return (
      <div className="bg-accent min-h-screen font-roboto flex flex-col">
        <Navbar />
        <main className="container pt-28 pb-20 flex-1 flex items-center justify-center">
          <Card className="max-w-md mx-auto text-center p-8">
            <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-primary-dark mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-4">Your wallet has been funded with {formatAmount(amount)}</p>
            <p className="text-sm text-gray-500 mb-6">Transaction ID: {transactionId}</p>
            
            <div className="space-y-3">
              <Button onClick={printReceipt} variant="outline" className="w-full">
                <Printer size={16} className="mr-2" />
                Print Payment Receipt
              </Button>
              <Link to="/portal">
                <Button className="w-full">Return to Portal</Button>
              </Link>
            </div>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-accent min-h-screen font-roboto">
      <Navbar />
      <main className="container pt-28 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/portal">
              <Button variant="outline" size="sm">
                <ArrowLeft size={16} className="mr-2" />
                Back to Portal
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
              <Wallet size={24} />
              Fund Wallet
            </h1>
          </div>

          <div className="space-y-6">
            {/* Amount Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Enter Amount</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount (Minimum: ₦100)
                  </label>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="text-lg"
                    min="100"
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    You will pay: {formatAmount(amount)}
                  </div>
                </div>
                
                {/* Quick Amount Buttons */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quick Amounts
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {quickAmounts.map((quickAmount) => (
                      <Button
                        key={quickAmount}
                        variant="outline"
                        size="sm"
                        onClick={() => setAmount(quickAmount.toString())}
                        className="text-sm"
                      >
                        ₦{quickAmount.toLocaleString()}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedMethod === method.id
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedMethod(method.id)}
                    >
                      <div className="flex items-center gap-3">
                        <method.icon size={20} className="text-primary" />
                        <div className="flex-1">
                          <div className="font-medium">{method.name}</div>
                          <div className="text-sm text-gray-500">{method.desc}</div>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          selectedMethod === method.id
                            ? "border-primary bg-primary"
                            : "border-gray-300"
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="text-sm text-blue-800">
                  <div className="font-medium mb-1">🔒 Secure Payment</div>
                  <div>Your payment information is encrypted and secure. We never store your card details.</div>
                </div>
              </CardContent>
            </Card>

            {/* Fund Button */}
            <Button
              onClick={handleFunding}
              disabled={!amount || parseFloat(amount) < 100 || processing}
              className="w-full py-3 text-lg font-bold"
            >
              {processing ? "Processing..." : `Fund Wallet with ${formatAmount(amount)}`}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FundWallet;
