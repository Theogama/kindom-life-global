import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Shield, Eye, Lock, Database, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
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
                  Privacy Policy
                </CardTitle>
                <p className="text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </CardHeader>

              <CardContent className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">1. Information We Collect</h2>
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Database className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Personal Information</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          When you create an account, make donations, or interact with our services, we may collect:
                        </p>
                        <ul className="text-muted-foreground space-y-1 text-sm ml-4">
                          <li>• Name and contact information (email, phone, address)</li>
                          <li>• Account credentials and profile information</li>
                          <li>• Donation history and payment information</li>
                          <li>• Service attendance and ministry interests</li>
                          <li>• Communications with our church</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">2. How We Use Your Information</h2>
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Eye className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Purpose of Data Collection</h3>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                          <li>• To provide and maintain our services</li>
                          <li>• To process donations and provide receipts</li>
                          <li>• To communicate about church activities and events</li>
                          <li>• To track ministry involvement and volunteer activities</li>
                          <li>• To improve our website and services</li>
                          <li>• To comply with legal obligations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">3. Information Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>With trusted service providers who assist us in operating our website and conducting our business</li>
                    <li>When required by law or to protect our rights and safety</li>
                    <li>In connection with a merger, acquisition, or sale of assets</li>
                    <li>With your explicit consent for specific purposes</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">4. Data Security</h2>
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Lock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Protection Measures</h3>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                          <li>• All data is encrypted in transit and at rest</li>
                          <li>• We use industry-standard security protocols</li>
                          <li>• Access to personal information is restricted to authorized personnel</li>
                          <li>• Regular security audits and updates</li>
                          <li>• Secure payment processing through trusted providers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">5. Cookies and Tracking</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our website uses cookies and similar technologies to enhance your experience. Cookies help us:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Remember your preferences and login status</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve website functionality and performance</li>
                    <li>Provide personalized content and recommendations</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">6. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Access and review your personal information</li>
                    <li>Request correction of inaccurate or incomplete data</li>
                    <li>Request deletion of your personal information</li>
                    <li>Withdraw consent for data processing</li>
                    <li>Receive a copy of your data in a portable format</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">7. Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your personal information only as long as necessary to fulfill the purposes outlined in this privacy policy, comply with legal obligations, resolve disputes, and enforce our agreements. Donation records may be retained longer for tax and accounting purposes.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">8. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">9. International Data Transfers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-primary">10. Contact Information</h2>
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Privacy Questions</h3>
                        <p className="text-muted-foreground text-sm">
                          If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
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
                  <h2 className="text-xl font-semibold mb-4 text-primary">11. Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </div>

                <div className="pt-8 border-t">
                  <div className="text-center">
                    <Button
                      onClick={() => navigate('/terms')}
                      variant="outline"
                      className="mr-4"
                    >
                      View Terms of Service
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

export default Privacy;
