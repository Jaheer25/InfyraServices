import { Monitor, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-cyan text-2xl font-bold mb-4">
              <Monitor className="inline mr-2 h-6 w-6" />
              Infyra
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional computer services and digital marketing training in Barasat. 
              Empowering individuals and businesses with modern technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cyan transition-colors" data-testid="social-facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan transition-colors" data-testid="social-instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan transition-colors" data-testid="social-linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan transition-colors" data-testid="social-youtube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-cyan transition-colors" data-testid="footer-link-home">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-300 hover:text-cyan transition-colors" data-testid="footer-link-services">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/courses">
                  <a className="text-gray-300 hover:text-cyan transition-colors" data-testid="footer-link-courses">
                    Digital Marketing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-300 hover:text-cyan transition-colors" data-testid="footer-link-about">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-300 hover:text-cyan transition-colors" data-testid="footer-link-contact">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li data-testid="footer-address">Barasat 2, Golabari Bazar</li>
              <li data-testid="footer-pin">PIN 743423</li>
              <li data-testid="footer-phone">+91 6289727242</li>
              <li data-testid="footer-email">jk9092745@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300" data-testid="footer-copyright">
            © 2024 Infyra Computer Services. All rights reserved. | Built with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
}
