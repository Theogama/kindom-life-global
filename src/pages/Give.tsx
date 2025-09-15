import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BackButton from "@/components/BackButton";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

// PayFast constants. Replace MERCHANT_ID with your real PayFast merchant ID.
const PAYFAST_BASE = "https://www.payfast.co.za/eng/process";
const MERCHANT_ID = "YOUR_MERCHANT_ID";

const Give = () => {
  const [amount, setAmount] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    const parsed = Number(amount);
    if (!parsed || parsed <= 0) {
      alert("Please enter a valid amount greater than 0.");
      return;
    }
    setIsSubmitting(true);
    const formattedAmount = parsed.toFixed(2);
    const params = new URLSearchParams({
      cmd: "_paynow",
      receiver: MERCHANT_ID,
      item_name: "Church Donation",
      amount: formattedAmount,
    });
    const url = `${PAYFAST_BASE}?${params.toString()}`;
    window.location.href = url;
  };

  return (
    <ProtectedRoute requiredAction="give">
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto mt-4">
              <div className="flex justify-between items-center mb-4">
                <BackButton />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigate('/')}
                  className="hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <Card className="p-6 sm:p-8">
                <h1 className="font-heading text-3xl md:text-4xl font-black mb-6 tracking-tight uppercase text-center">
                  Give Online
                </h1>
                <p className="text-muted-foreground mb-6 text-center">
                  Enter the amount you'd like to give. You'll be redirected to our secure checkout to complete your donation.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <label className="block text-sm font-medium">Amount (ZAR)</label>
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g. 200"
                  />

                  <Button
                    className="btn-gold text-white w-full font-semibold mt-1 sm:mt-2"
                    disabled={isSubmitting}
                    onClick={handleConfirm}
                  >
                    {isSubmitting ? "Redirecting..." : "Confirm & Continue to PayFast"}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    By proceeding, you agree to our{" "}
                    <button
                      onClick={() => navigate('/terms')}
                      className="text-primary hover:underline"
                    >
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button
                      onClick={() => navigate('/privacy')}
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </button>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default Give;


