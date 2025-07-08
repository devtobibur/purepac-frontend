import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Camera,
  CreditCard,
  Facebook,
  Gamepad2,
  Headphones,
  Instagram,
  Laptop,
  Mail,
  MapPin,
  Monitor,
  Phone,
  RotateCcw,
  Send,
  Shield,
  Smartphone,
  Truck,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Ahead of Tech Trends
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join over 50,000+ tech enthusiasts and get exclusive deals,
                product launches, and expert reviews delivered weekly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12 px-4 border-gray-200 focus:border-blue-500 focus:ring-blue-500 bg-white shadow-sm"
              />
              <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg">
                <Smartphone className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">TechHub</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Your premier destination for cutting-edge electronics and
              innovative tech solutions. Trusted by millions worldwide since
              2015.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors group"
              >
                <Facebook className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors group"
              >
                <Twitter className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors group"
              >
                <Instagram className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors group"
              >
                <Youtube className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
              </Link>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Shop Categories</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <div className="w-8 h-8 bg-gray-50 group-hover:bg-blue-50 rounded-lg flex items-center justify-center transition-colors">
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <span className="font-medium">Smartphones & Tablets</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <div className="w-8 h-8 bg-gray-50 group-hover:bg-blue-50 rounded-lg flex items-center justify-center transition-colors">
                    <Laptop className="h-4 w-4" />
                  </div>
                  <span className="font-medium">Laptops & Computers</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <div className="w-8 h-8 bg-gray-50 group-hover:bg-blue-50 rounded-lg flex items-center justify-center transition-colors">
                    <Monitor className="h-4 w-4" />
                  </div>
                  <span className="font-medium">TVs & Monitors</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <div className="w-8 h-8 bg-gray-50 group-hover:bg-blue-50 rounded-lg flex items-center justify-center transition-colors">
                    <Gamepad2 className="h-4 w-4" />
                  </div>
                  <span className="font-medium">Gaming & Consoles</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <div className="w-8 h-8 bg-gray-50 group-hover:bg-blue-50 rounded-lg flex items-center justify-center transition-colors">
                    <Camera className="h-4 w-4" />
                  </div>
                  <span className="font-medium">Cameras & Photography</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <div className="w-8 h-8 bg-gray-50 group-hover:bg-blue-50 rounded-lg flex items-center justify-center transition-colors">
                    <Headphones className="h-4 w-4" />
                  </div>
                  <span className="font-medium">Audio & Headphones</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Customer Care</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Support</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      Track Your Order
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      Returns & Exchanges
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      Warranty Center
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      About TechHub
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      Press & Media
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      Partnerships
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact & Trust */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Get in Touch</h3>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Visit Our Store</p>
                  <p className="text-gray-600 text-sm">
                    123 Tech Street, Digital District
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Call Us</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email Support</p>
                  <p className="text-gray-600">support@techhub.com</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-3">
                Why Choose TechHub
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">
                    Free shipping over $50
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">
                    30-day hassle-free returns
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">
                    2-year comprehensive warranty
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Headphones className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">
                    24/7 expert support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-100" />

      {/* Bottom Footer */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
              <p className="text-gray-600 font-medium">
                &copy; {new Date().getFullYear()} TechHub. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link
                  href="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors font-medium"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors font-medium"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors font-medium"
                >
                  Cookie Settings
                </Link>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600">
                Secure Payments:
              </span>
              <div className="flex items-center gap-2">
                <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-sm">
                  <CreditCard className="h-6 w-6 text-gray-600" />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
                  <Image
                    src="/placeholder.svg?height=24&width=38"
                    alt="Visa"
                    width={38}
                    height={24}
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
                  <Image
                    src="/placeholder.svg?height=24&width=38"
                    alt="Mastercard"
                    width={38}
                    height={24}
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
                  <Image
                    src="/placeholder.svg?height=24&width=38"
                    alt="PayPal"
                    width={38}
                    height={24}
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
                  <Image
                    src="/placeholder.svg?height=24&width=38"
                    alt="Apple Pay"
                    width={38}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
