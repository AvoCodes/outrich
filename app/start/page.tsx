"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  PhoneOff, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Upload, 
  Brain, 
  FileText,
  Users,
  Star,
  Play,
  TrendingUp,
  Shield,
  Menu,
  X
} from "lucide-react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/start" className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-tr from-red-600 to-yellow-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">🔥</span>
              </div>
              <span className="text-xl font-semibold text-gray-900 dark:text-white">Outrich</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="text-sm text-muted-foreground hover:text-gray-900">
                Features
              </Link>
              <Link href="#pricing" className="text-sm text-muted-foreground hover:text-gray-900">
                Pricing
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-gray-900">
                Contact
              </Link>
              <Button asChild variant="orange" size="sm">
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 mt-4">
              <div className="flex flex-col space-y-4">
                <Link href="#features" className="text-sm text-muted-foreground hover:text-gray-900 px-4">
                  Features
                </Link>
                <Link href="#pricing" className="text-sm text-muted-foreground hover:text-gray-900 px-4">
                  Pricing
                </Link>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-gray-900 px-4">
                  Contact
                </Link>
                <div className="px-4">
                  <Button asChild variant="orange" size="sm" className="w-full">
                    <Link href="/get-started">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        <div className="text-center pt-8 pb-6">
          <Badge variant="outline" className="mb-6 text-orange-600 border-orange-200 bg-orange-50">
            Get Response-Verified Leads
          </Badge>
          <h1 className="text-[2.5rem] lg:text-[3.8rem] text-[#36322F] dark:text-white font-semibold tracking-tight leading-[0.9] mb-6">
            67% of Phone Numbers in Your CRM Are{" "}
            <span className="relative px-1 text-transparent bg-clip-text bg-gradient-to-tr from-red-600 to-yellow-500 inline-flex justify-center items-center">
              Useless.
            </span>
          </h1>
          <p className="text-sm text-muted-foreground mt-3 mb-8 max-w-2xl mx-auto">
            Stop dialling dead numbers. Get AI-verified leads that actually answer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="orange" size="lg">
              <Link href="/get-started">Verify My Leads Now</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Play className="mr-2 h-4 w-4" />
              Watch 2-Minute Demo
            </Button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="bg-[#FBFAF9] p-4 sm:p-6 rounded-lg shadow-sm max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneOff className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Before</h3>
              <p className="text-xs text-muted-foreground mb-4">Call Failed</p>
              <div className="bg-red-50 rounded p-3">
                <p className="text-xl font-semibold text-red-600">23%</p>
                <p className="text-xs text-red-800">Connect Rate</p>
              </div>
            </div>
            
            {/* After */}
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">After</h3>
              <p className="text-xs text-muted-foreground mb-4">Connected</p>
              <div className="bg-green-50 rounded p-3">
                <p className="text-xl font-semibold text-green-600">87%</p>
                <p className="text-xs text-green-800">Connect Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#36322F] mb-4">
            Your Sales Team Is Calling Ghosts
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PhoneOff className="h-6 w-6 text-red-600" />
            </div>
            <p className="text-sm font-medium text-gray-900">
              54% of outbound calls go to disconnected numbers
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <p className="text-sm font-medium text-gray-900">
              Sales reps waste 3+ hours daily on invalid contacts
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-6 w-6 text-yellow-600" />
            </div>
            <p className="text-sm font-medium text-gray-900">
              Your lead generation ROI is cut in half by bad data
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#36322F] mb-4">
            AI-Powered Verification That Actually Works
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#FBFAF9] p-6 rounded-lg shadow-sm text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-sm font-medium text-gray-900">
              Every phone number tested with real AI calls
            </p>
          </div>
          
          <div className="bg-[#FBFAF9] p-6 rounded-lg shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-sm font-medium text-gray-900">
              Quality scored: High, Medium, Low, Invalid
            </p>
          </div>
          
          <div className="bg-[#FBFAF9] p-6 rounded-lg shadow-sm text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-sm font-medium text-gray-900">
              Professional report delivered in &lt; 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#36322F] mb-4">
            Trusted by Sales Teams Who Hit Their Numbers
          </h2>
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-3xl font-bold text-orange-600 mb-2">340%</h3>
            <p className="text-sm text-muted-foreground">Increase in connect rates</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-3xl font-bold text-green-600 mb-2">2.5 hours</h3>
            <p className="text-sm text-muted-foreground">Saved per rep daily</p>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-sm text-gray-700 mb-4">
              &ldquo;Our connect rates went from 20% to 85% overnight. This is game-changing for our outbound team.&rdquo;
            </p>
            <div className="border-t pt-3">
              <p className="text-sm font-medium text-gray-900">Sarah Chen</p>
              <p className="text-xs text-muted-foreground">VP Sales, SalesBlaster</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-sm text-gray-700 mb-4">
              &ldquo;We saved 15 hours per week per rep. The ROI was immediate and massive.&rdquo;
            </p>
            <div className="border-t pt-3">
              <p className="text-sm font-medium text-gray-900">Mike Rodriguez</p>
              <p className="text-xs text-muted-foreground">Sales Director, DealFuel</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-sm text-gray-700 mb-4">
              &ldquo;Finally, a service that actually validates phone numbers. No more wasted calls!&rdquo;
            </p>
            <div className="border-t pt-3">
              <p className="text-sm font-medium text-gray-900">Jessica Park</p>
              <p className="text-xs text-muted-foreground">Head of Growth, Cultro</p>
            </div>
          </div>
        </div>
        
        {/* Customer Logos */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-4">Trusted by leading companies</p>
          <div className="flex justify-center items-center space-x-6 opacity-60">
            <div className="text-sm font-medium text-gray-400">SalesBlaster</div>
            <div className="text-sm font-medium text-gray-400">DealFuel</div>
            <div className="text-sm font-medium text-gray-400">Cultro</div>
            <div className="text-sm font-medium text-gray-400">LockScreen AI</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#36322F] mb-4">
            From Dead to Deal in 24 Hours
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-tr from-red-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-lg font-bold text-white">1</span>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              Upload Your Lead List
            </h3>
            <p className="text-xs text-muted-foreground">
              Simply upload your CSV file with contact information
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-tr from-red-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-lg font-bold text-white">2</span>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              AI Verifies Every Number
            </h3>
            <p className="text-xs text-muted-foreground">
              Our AI makes real calls to test each phone number
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-tr from-red-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-lg font-bold text-white">3</span>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              Get Quality-Scored Results
            </h3>
            <p className="text-xs text-muted-foreground">
              Receive detailed report with quality scores for each lead
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
            Results delivered via email within 24 hours
          </Badge>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#36322F] mb-4">
            White Glove Verification
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Starter */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Starter</h3>
            <div className="mb-4">
              <span className="text-2xl font-bold text-gray-900">$299</span>
              <span className="text-sm text-muted-foreground">/month</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Perfect for small teams</p>
            <ul className="space-y-2 mb-6 text-xs">
              <li className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                <span className="text-gray-700">1,000 leads verified</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                <span className="text-gray-700">24-hour turnaround</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                <span className="text-gray-700">Quality scoring</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                <span className="text-gray-700">Email support</span>
              </li>
            </ul>
            <Button asChild variant="orange" size="sm" className="w-full">
              <Link href="/get-started?plan=starter">Choose Starter</Link>
            </Button>
          </div>
          
          {/* Scaling - Popular */}
          <div className="bg-white p-6 rounded-lg shadow-sm relative border border-orange-200">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-orange-600 text-white text-xs px-3 py-1">Most Popular</Badge>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Scaling</h3>
            <div className="mb-4">
              <span className="text-2xl font-bold text-gray-900">$899</span>
              <span className="text-sm text-muted-foreground">/month</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">For growing sales teams</p>
            <ul className="space-y-2 mb-6 text-xs">
              <li className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                <span className="text-gray-700">5,000 leads verified</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                <span className="text-gray-700">12-hour turnaround</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                <span className="text-gray-700">Advanced analytics</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                <span className="text-gray-700">Priority support</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                <span className="text-gray-700">API access</span>
              </li>
            </ul>
            <Button asChild variant="orange" size="sm" className="w-full">
              <Link href="/get-started?plan=scaling">Choose Scaling</Link>
            </Button>
          </div>
          
          {/* Enterprise */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise</h3>
            <div className="mb-4">
              <span className="text-2xl font-bold text-gray-900">$2,499</span>
              <span className="text-sm text-muted-foreground">/month</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">For large organizations</p>
            <ul className="space-y-2 mb-6 text-xs">
              <li className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                <span className="text-gray-700">15,000 leads verified</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                <span className="text-gray-700">6-hour turnaround</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                <span className="text-gray-700">Custom integrations</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                <span className="text-gray-700">Dedicated support</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                <span className="text-gray-700">SLA guarantee</span>
              </li>
            </ul>
            <Button asChild variant="orange" size="sm" className="w-full">
              <Link href="/get-started?plan=enterprise">Choose Enterprise</Link>
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Or try our{" "}
            <Link href="/fire-enrich" className="text-orange-600 hover:text-orange-700 font-medium underline">
              free self-serve enrichment
            </Link>{" "}
            (100 leads/month)
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-tr from-red-600 to-yellow-500 p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
            Stop Dialling Dead Data Tomorrow
          </h2>
          <p className="text-sm text-orange-100 mb-6">
            Join 500+ sales teams who verify their leads with Outrich
          </p>
          <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100 mb-6">
            <Link href="/get-started">Get Started Now</Link>
          </Button>
          
          <div className="flex justify-center items-center space-x-6 text-orange-100 text-xs">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              <span>Valid data guarantee</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-1" />
              <span>SOC 2 compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-tr from-red-600 to-yellow-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">🔥</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">Outrich</span>
            </div>
            <p className="text-xs text-muted-foreground">
              AI-powered lead verification that actually works.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-3">Product</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="#features" className="hover:text-gray-900">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-gray-900">Pricing</Link></li>
              <li><Link href="/fire-enrich" className="hover:text-gray-900">Free Tool</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-3">Company</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="#contact" className="hover:text-gray-900">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-900">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-gray-900">Terms</Link></li>
            </ul>
          </div>
          
          <div id="contact">
            <h4 className="text-sm font-medium mb-3">Contact</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>hello@outrich.com</li>
              <li>1-800-OUTRICH</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-6 pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; 2024 Outrich. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}