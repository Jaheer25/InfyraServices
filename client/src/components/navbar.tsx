import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { isAuthenticated, user, isLoading } = useAuth();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Digital Marketing", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="bg-navy shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <div className="text-cyan text-2xl font-bold">
              <Monitor className="inline mr-2 h-6 w-6" />
              Infyra
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className={`text-white hover:text-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href) ? "text-cyan" : ""
                    }`}
                    data-testid={`nav-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-3">
              {!isLoading && (
                <>
                  {isAuthenticated ? (
                    <>
                      <span className="text-white text-sm" data-testid="user-greeting">
                        Welcome, {user?.firstName || user?.email}!
                      </span>
                      <Button
                        variant="outline"
                        className="text-cyan border-cyan hover:bg-cyan hover:text-white"
                        onClick={() => window.location.href = "/api/logout"}
                        data-testid="button-logout"
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="ghost"
                        className="text-white hover:text-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        onClick={() => window.location.href = "/api/login"}
                        data-testid="button-login"
                      >
                        Login
                      </Button>
                      <Button
                        className="bg-cyan hover:bg-cyan/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                        onClick={() => window.location.href = "/api/login"}
                        data-testid="button-register"
                      >
                        Register
                      </Button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-cyan"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-navy/95 backdrop-blur-sm">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  className={`text-white hover:text-cyan block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                    isActive(item.href) ? "text-cyan" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            <div className="border-t border-gray-700 pt-4">
              {!isLoading && (
                <>
                  {isAuthenticated ? (
                    <>
                      <div className="text-white px-3 py-2" data-testid="mobile-user-greeting">
                        Welcome, {user?.firstName || user?.email}!
                      </div>
                      <Button
                        variant="ghost"
                        className="text-white hover:text-cyan block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                        onClick={() => window.location.href = "/api/logout"}
                        data-testid="mobile-button-logout"
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="ghost"
                        className="text-white hover:text-cyan block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                        onClick={() => window.location.href = "/api/login"}
                        data-testid="mobile-button-login"
                      >
                        Login
                      </Button>
                      <Button
                        className="bg-cyan hover:bg-cyan/90 text-white block px-3 py-2 rounded-md text-base font-medium w-full mt-2"
                        onClick={() => window.location.href = "/api/login"}
                        data-testid="mobile-button-register"
                      >
                        Register
                      </Button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
