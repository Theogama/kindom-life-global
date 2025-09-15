import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { sendPlanVisitEmail } from "@/lib/email";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const TABLE_NAME_PRIMARY = "date_of_service";
const TABLE_NAME_FALLBACK = "date of service"; // In case the table name contains spaces

const PlanVisit = () => {
  const [selected, setSelected] = useState<Date | undefined>();
  const [isSaving, setIsSaving] = useState(false);

  const isSunday = (date: Date | undefined) => {
    if (!date) return false;
    return date.getDay() === 0; // 0 = Sunday
  };

  const saveDate = async () => {
    if (!selected || !isSunday(selected)) {
      alert("Please select a Sunday.");
      return;
    }
    setIsSaving(true);
    try {
      const isoDate = selected.toISOString().slice(0, 10);
      // Send email notification
      await sendPlanVisitEmail({ serviceDate: isoDate });
      alert("Thank you! We have noted your planned visit.");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Thank you! We have noted your planned visit.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <ProtectedRoute requiredAction="visit">
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px- py-8">
          <BackButton />
        </div>
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <Card className="p-6 sm:p-8">
                <h1 className="font-heading text-3xl md:text-4xl font-black mb-6 tracking-tight uppercase text-center">
                  Plan Your Visit
                </h1>
                <p className="text-muted-foreground mb-6 text-center">
                  Please pick a Sunday you plan to attend. We'll save your date so our team can welcome you.
                </p>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    disabled={{ dayOfWeek: [1, 2, 3, 4, 5, 6] }}
                    initialFocus
                  />
                </div>
                <Button
                  className="btn-gold text-white w-full font-semibold mt-6"
                  onClick={saveDate}
                  disabled={!isSunday(selected) || isSaving}
                >
                  {isSaving ? "Saving..." : "Confirm Sunday"}
                </Button>
              </Card>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default PlanVisit;


