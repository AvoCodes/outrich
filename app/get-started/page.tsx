"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
    console.log("Form submitted:", { ...formData, plan: selectedPlan });
    alert("Thank you! We&apos;ll contact you within 24 hours to get started.");
  };

  const selectedPlanData = plans[selectedPlan as keyof typeof plans];

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/start" className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-tr from-red-600 to-yellow-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">🔥</span>
              </div>
              <span className="text-xl font-semibold text-gray-900 dark:text-white">Outrich</span>
            </Link>
            <Button variant="outline" size="sm" asChild>
              <Link href="/start">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        <div className="text-center pt-8 pb-6">
          <h1 className="text-[2.5rem] lg:text-[3.8rem] text-[#36322F] dark:text-white font-semibold tracking-tight leading-[0.9] mb-4">
            Get Started with{" "}
            <span className="relative px-1 text-transparent bg-clip-text bg-gradient-to-tr from-red-600 to-yellow-500 inline-flex justify-center items-center">
              Outrich
            </span>
          </h1>
          <p className="text-sm text-muted-foreground mt-3 mb-8 max-w-2xl mx-auto">
            Choose your verification package and we&apos;ll have you up and running within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Plan Selection */}
          <div>
            <h2 className="text-xl font-semibold text-[#36322F] mb-6">Choose Your Package</h2>
            
            <div className="space-y-3 mb-6">
              {Object.entries(plans).map(([key, plan]) => (
                <div 
                  key={key}
                  className={`bg-white p-4 rounded-lg shadow-sm cursor-pointer transition-all border ${
                    selectedPlan === key 
                      ? 'border-orange-500 bg-orange-50' 
                      : 'border-gray-200 hover:shadow-sm'
                  }`}
                  onClick={() => setSelectedPlan(key)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full border-2 ${
                        selectedPlan === key 
                          ? 'bg-orange-500 border-orange-500' 
                          : 'border-gray-300'
                      }`} />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-medium text-gray-900">{plan.name}</h3>
                          {(plan as any).popular && (
                            <Badge className="bg-orange-600 text-white text-xs px-2 py-0">Most Popular</Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{plan.leads} leads • {plan.turnaround}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">${plan.price}</p>
                      <p className="text-xs text-muted-foreground">/month</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Free Option */}
            <div className="bg-[#FBFAF9] p-4 rounded-lg shadow-sm border border-gray-200 border-dashed">
              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Try Free First?</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Test our self-serve enrichment tool with 100 leads/month
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/fire-enrich">Try Free Tool</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-[#FBFAF9] p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-orange-600" />
                <h2 className="text-lg font-semibold text-[#36322F]">Tell Us About Your Team</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="name" className="text-xs text-muted-foreground">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="John Doe"
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-xs text-muted-foreground">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@company.com"
                      className="text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="company" className="text-xs text-muted-foreground">Company *</Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Acme Corp"
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-xs text-muted-foreground">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="teamSize" className="text-xs text-muted-foreground">Sales Team Size</Label>
                    <Select onValueChange={(value) => handleInputChange("teamSize", value)}>
                      <SelectTrigger className="text-sm">
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
                    <Label htmlFor="currentLeads" className="text-xs text-muted-foreground">Monthly Lead Volume</Label>
                    <Select onValueChange={(value) => handleInputChange("currentLeads", value)}>
                      <SelectTrigger className="text-sm">
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
                  <Label htmlFor="message" className="text-xs text-muted-foreground">Tell us about your current challenges</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="What problems are you trying to solve with lead verification?"
                    rows={3}
                    className="text-sm"
                  />
                </div>

                <Button type="submit" variant="orange" className="w-full">
                  Get Started with {selectedPlanData.name} Plan
                </Button>
              </form>
            </div>

            {/* Selected Plan Summary */}
            <div className="bg-white p-4 rounded-lg shadow-sm mt-4 border border-orange-200">
              <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
                <Star className="h-4 w-4 text-orange-600" />
                Your Selected Plan: {selectedPlanData.name}
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs text-muted-foreground">Price</p>
                  <p className="text-lg font-semibold text-gray-900">${selectedPlanData.price}/month</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Turnaround</p>
                  <p className="text-sm font-medium text-gray-900">{selectedPlanData.turnaround}</p>
                </div>
              </div>
              <ul className="space-y-1">
                {selectedPlanData.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-xs">
                    <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Steps */}
            <div className="bg-white p-4 rounded-lg shadow-sm mt-4">
              <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-600" />
                What Happens Next?
              </h3>
              <ol className="space-y-2 text-xs text-gray-700">
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">1</span>
                  <span>We&apos;ll contact you within 24 hours to confirm details</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">2</span>
                  <span>Secure onboarding call to set up your account</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">3</span>
                  <span>Upload your first lead list and receive verified results</span>
                </li>
              </ol>
            </div>
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