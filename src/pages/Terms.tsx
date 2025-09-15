import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Shield, Users, CreditCard, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
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
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-3xl md:text-4xl font-black mb-4">
                  Terms of Service
                </CardTitle>
                <p className="text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </CardHeader>

              <CardContent className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using the Kingdom Life Global website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">2. Use License</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Permission is granted to temporarily download one copy of the materials on Kingdom Life Global's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">3. Online Giving and Donations</h2>
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CreditCard className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Donation Terms</h3>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                          <li>• All donations are voluntary and non-refundable</li>
                          <li>• Donations are processed through secure third-party payment processors</li>
                          <li>• We reserve the right to refuse any donation</li>
                          <li>• Donation receipts will be provided for tax purposes</li>
                          <li>• Recurring donations can be cancelled at any time</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">4. User Accounts and Privacy</h2>
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Users className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Account Information</h3>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                          <li>• You are responsible for maintaining the confidentiality of your account</li>
                          <li>• You must provide accurate and complete information</li>
                          <li>• We reserve the right to terminate accounts that violate these terms</li>
                          <li>• Your personal information is protected according to our Privacy Policy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">5. Content and Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All content on this website, including but not limited to text, graphics, logos, images, audio clips, video, and software, is the property of Kingdom Life Global or its content suppliers and is protected by international copyright laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">6. Prohibited Uses</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You may not use our website:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">7. Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The materials on Kingdom Life Global's website are provided on an 'as is' basis. Kingdom Life Global makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">8. Limitations</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall Kingdom Life Global or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Kingdom Life Global's website, even if Kingdom Life Global or an authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">9. Contact Information</h2>
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Questions About Terms</h3>
                        <p className="text-muted-foreground text-sm">
                          If you have any questions about these Terms of Service, please contact us at:
                        </p>
                        <p className="text-sm mt-2">
                          <strong>Email:</strong> kingdomlifeglobal@gmail.com<br />
                          <strong>Address:</strong> 4545 Langeni Street, Daveyton, Benoni
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">10. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Kingdom Life Global reserves the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </div>

                <div className="pt-8 border-t">
                  <div className="text-center">
                    <Button
                      onClick={() => navigate('/privacy')}
                      variant="outline"
                      className="mr-4"
                    >
                      View Privacy Policy
                    </Button>
                    <Button
                      onClick={() => navigate('/')}
                      className="btn-gold"
                    >
                      Back to Home
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
