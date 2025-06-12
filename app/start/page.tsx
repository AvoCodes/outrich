"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/start" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-red-600 to-yellow-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">🔥</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Outrich</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 font-medium">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">
                Pricing
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">
                Contact
              </Link>
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link href="#features" className="text-gray-600 hover:text-gray-900 font-medium px-4">
                  Features
                </Link>
                <Link href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium px-4">
                  Pricing
                </Link>
                <Link href="#contact" className="text-gray-600 hover:text-gray-900 font-medium px-4">
                  Contact
                </Link>
                <div className="px-4">
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                    <Link href="/get-started">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-6 text-orange-600 border-orange-200 bg-orange-50">
                Get Response-Verified Leads
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                67% of Phone Numbers in Your CRM Are{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  Useless.
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stop dialling dead numbers. Get AI-verified leads that actually answer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-6"
                >
                  <Link href="/get-started">Verify My Leads Now</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 border-gray-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch 2-Minute Demo
                </Button>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="lg:pl-12">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-8">
                  {/* Before */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <PhoneOff className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Before</h3>
                    <p className="text-sm text-gray-600 mb-4">Call Failed</p>
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="text-2xl font-bold text-red-600">23%</p>
                      <p className="text-xs text-red-800">Connect Rate</p>
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">After</h3>
                    <p className="text-sm text-gray-600 mb-4">Connected</p>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-2xl font-bold text-green-600">87%</p>
                      <p className="text-xs text-green-800">Connect Rate</p>
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Sales Team Is Calling Ghosts
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <PhoneOff className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  54% of outbound calls go to disconnected numbers
                </h3>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Sales reps waste 3+ hours daily on invalid contacts
                </h3>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Your lead generation ROI is cut in half by bad data
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Verification That Actually Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Every phone number tested with real AI calls
                </h3>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Quality scored: High, Medium, Low, Invalid
                </h3>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Professional report delivered in &lt; 24 hours
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Sales Teams Who Hit Their Numbers
            </h2>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="text-center p-8 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="pt-6">
                <h3 className="text-4xl font-bold text-orange-600 mb-2">340%</h3>
                <p className="text-lg text-gray-700">Increase in connect rates</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="pt-6">
                <h3 className="text-4xl font-bold text-green-600 mb-2">2.5 hours</h3>
                <p className="text-lg text-gray-700">Saved per rep daily</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 border-0 shadow-lg">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Our connect rates went from 20% to 85% overnight. This is game-changing for our outbound team."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Sarah Chen</p>
                  <p className="text-sm text-gray-600">VP Sales, SalesBlaster</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "We saved 15 hours per week per rep. The ROI was immediate and massive."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Mike Rodriguez</p>
                  <p className="text-sm text-gray-600">Sales Director, DealFuel</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Finally, a service that actually validates phone numbers. No more wasted calls!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Jessica Park</p>
                  <p className="text-sm text-gray-600">Head of Growth, Cultro</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Customer Logos */}
          <div className="text-center">
            <p className="text-gray-600 mb-8">Trusted by leading companies</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-lg font-semibold text-gray-400">SalesBlaster</div>
              <div className="text-lg font-semibold text-gray-400">DealFuel</div>
              <div className="text-lg font-semibold text-gray-400">Cultro</div>
              <div className="text-lg font-semibold text-gray-400">LockScreen AI</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              From Dead to Deal in 24 Hours
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Upload Your Lead List
              </h3>
              <p className="text-gray-600">
                Simply upload your CSV file with contact information
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                AI Verifies Every Number
              </h3>
              <p className="text-gray-600">
                Our AI makes real calls to test each phone number
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get Quality-Scored Results
              </h3>
              <p className="text-gray-600">
                Receive detailed report with quality scores for each lead
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 text-lg px-6 py-2">
              Results delivered via email within 24 hours
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              White Glove Verification
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Starter */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$299</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-6">Perfect for small teams</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">1,000 leads verified</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">24-hour turnaround</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Quality scoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Email support</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/get-started?plan=starter">Choose Starter</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Scaling - Popular */}
            <Card className="border-0 shadow-xl relative border-orange-200">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-600 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Scaling</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$899</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-6">For growing sales teams</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">5,000 leads verified</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">12-hour turnaround</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">API access</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/get-started?plan=scaling">Choose Scaling</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Enterprise */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$2,499</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-6">For large organizations</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">15,000 leads verified</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">6-hour turnaround</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">SLA guarantee</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/get-started?plan=enterprise">Choose Enterprise</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Or try our{" "}
              <Link href="/fire-enrich" className="text-orange-600 hover:text-orange-700 font-medium underline">
                free self-serve enrichment
              </Link>{" "}
              (100 leads/month)
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Stop Dialling Dead Data Tomorrow
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join 500+ sales teams who verify their leads with Outrich
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-gray-100 text-xl px-12 py-6 mb-8"
          >
            <Link href="/get-started">Get Started Now</Link>
          </Button>
          
          <div className="flex justify-center items-center space-x-8 text-orange-100">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Valid data guarantee</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>SOC 2 compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-tr from-red-600 to-yellow-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🔥</span>
                </div>
                <span className="text-xl font-bold">Outrich</span>
              </div>
              <p className="text-gray-400">
                AI-powered lead verification that actually works.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features" className="hover:text-white">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/fire-enrich" className="hover:text-white">Free Tool</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
            
            <div id="contact">
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@outrich.com</li>
                <li>1-800-OUTRICH</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Outrich. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}