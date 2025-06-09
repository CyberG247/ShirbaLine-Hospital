
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wallet, CreditCard, Smartphone, Building2, ArrowLeft, CheckCircle } from "lucide-react";
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

const FundWallet = () => {
  const [amount, setAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [showSuccess, setShowSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleFunding = async () => {
    if (!amount || parseFloat(amount) < 100) return;
    
    setProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  const formatAmount = (value: string) => {
    const num = parseFloat(value);
    return isNaN(num) ? "₦ 0" : `₦ ${num.toLocaleString()}`;
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
            <Link to="/portal">
              <Button className="w-full">Return to Portal</Button>
            </Link>
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
