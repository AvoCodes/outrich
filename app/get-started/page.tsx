"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, ArrowLeft, Users, Clock, Star } from "lucide-react";

const plans = {
  starter: {
    name: "Starter",
    price: 299,
    leads: "1,000",
    turnaround: "24 hours",
    features: ["1,000 leads verified", "24-hour turnaround", "Quality scoring", "Email support"]
  },
  scaling: {
    name: "Scaling",
    price: 899,
    leads: "5,000",
    turnaround: "12 hours",
    features: ["5,000 leads verified", "12-hour turnaround", "Advanced analytics", "Priority support", "API access"],
    popular: true
  },
  enterprise: {
    name: "Enterprise",
    price: 2499,
    leads: "15,000",
    turnaround: "6 hours",
    features: ["15,000 leads verified", "6-hour turnaround", "Custom integrations", "Dedicated support", "SLA guarantee"]
  }
};

function GetStartedContent() {
  const searchParams = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState<string>("scaling");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    teamSize: "",
    currentLeads: "",
    message: ""
  });

  useEffect(() => {
    const planParam = searchParams.get("plan");
    if (planParam && plans[planParam as keyof typeof plans]) {
      setSelectedPlan(planParam);
    }
  }, [searchParams]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your backend
    console.log("Form submitted:", { ...formData, plan: selectedPlan });
    alert("Thank you! We'll contact you within 24 hours to get started.");
  };

  const selectedPlanData = plans[selectedPlan as keyof typeof plans];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/start" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-red-600 to-yellow-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">🔥</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Outrich</span>
            </Link>
            <Button variant="outline" asChild>
              <Link href="/start">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Started with Outrich
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your verification package and we&apos;ll have you up and running within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Plan Selection */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Package</h2>
            
            <div className="space-y-4 mb-8">
              {Object.entries(plans).map(([key, plan]) => (
                <Card 
                  key={key}
                  className={`cursor-pointer transition-all ${
                    selectedPlan === key 
                      ? 'ring-2 ring-orange-500 bg-orange-50' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedPlan(key)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          selectedPlan === key 
                            ? 'bg-orange-500 border-orange-500' 
                            : 'border-gray-300'
                        }`} />
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-gray-900">{plan.name}</h3>
                            {(plan as any).popular && (
                              <Badge className="bg-orange-600 text-white">Most Popular</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{plan.leads} leads • {plan.turnaround}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">${plan.price}</p>
                        <p className="text-sm text-gray-600">/month</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Free Option */}
            <Card className="border-dashed border-2 border-gray-300 bg-gray-50">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Try Free First?</h3>
                <p className="text-gray-600 mb-4">
                  Test our self-serve enrichment tool with 100 leads/month
                </p>
                <Button variant="outline" asChild>
                  <Link href="/fire-enrich">Try Free Tool</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-orange-600" />
                  Tell Us About Your Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="teamSize">Sales Team Size</Label>
                      <Select onValueChange={(value) => handleInputChange("teamSize", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-5">1-5 people</SelectItem>
                          <SelectItem value="6-15">6-15 people</SelectItem>
                          <SelectItem value="16-50">16-50 people</SelectItem>
                          <SelectItem value="51+">51+ people</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="currentLeads">Monthly Lead Volume</Label>
                      <Select onValueChange={(value) => handleInputChange("currentLeads", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select volume" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<1k">Less than 1,000</SelectItem>
                          <SelectItem value="1k-5k">1,000 - 5,000</SelectItem>
                          <SelectItem value="5k-15k">5,000 - 15,000</SelectItem>
                          <SelectItem value="15k+">15,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Tell us about your current challenges</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="What problems are you trying to solve with lead verification?"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-6">
                    Get Started with {selectedPlanData.name} Plan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Selected Plan Summary */}
            <Card className="mt-6 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 text-orange-600" />
                  Your Selected Plan: {selectedPlanData.name}
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="text-xl font-bold text-gray-900">${selectedPlanData.price}/month</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Turnaround</p>
                    <p className="font-semibold text-gray-900">{selectedPlanData.turnaround}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {selectedPlanData.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  What Happens Next?
                </h3>
                <ol className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                    <span>We&apos;ll contact you within 24 hours to confirm details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                    <span>Secure onboarding call to set up your account</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                    <span>Upload your first lead list and receive verified results</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GetStartedPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GetStartedContent />
    </Suspense>
  );
}