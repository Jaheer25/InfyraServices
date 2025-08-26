import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Wrench, 
  Settings, 
  Network, 
  Shield, 
  Download, 
  Laptop,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle
} from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Computer Repair",
      description: "Expert diagnosis and repair of desktop and laptop computers. Quick turnaround time with quality parts and professional service.",
      features: [
        "Hardware diagnostics and troubleshooting",
        "Software issues resolution",
        "Virus and malware removal",
        "Component replacement and upgrades",
        "Performance optimization"
      ],
      pricing: "Starting from ₹500"
    },
    {
      icon: Settings,
      title: "System Maintenance",
      description: "Regular maintenance services to keep your systems running smoothly and efficiently with preventive care.",
      features: [
        "System optimization and cleanup",
        "Regular software updates",
        "Performance tuning and monitoring",
        "Registry cleaning and defragmentation",
        "Preventive maintenance schedules"
      ],
      pricing: "₹300 per session"
    },
    {
      icon: Network,
      title: "Network Setup",
      description: "Professional network installation and configuration for homes and small businesses with security setup.",
      features: [
        "WiFi network installation",
        "Router configuration and optimization",
        "Network security implementation",
        "Cable management and setup",
        "Network troubleshooting"
      ],
      pricing: "₹1000 - ₹3000"
    },
    {
      icon: Shield,
      title: "Data Recovery",
      description: "Professional data recovery services for corrupted or lost files from various storage devices with high success rate.",
      features: [
        "Hard drive recovery services",
        "USB and SD card data retrieval",
        "File restoration from damaged devices",
        "Photo and document recovery",
        "Emergency data recovery"
      ],
      pricing: "₹800 - ₹5000"
    },
    {
      icon: Download,
      title: "Software Installation",
      description: "Complete software setup and installation services including operating systems, applications, and drivers.",
      features: [
        "Operating system installation",
        "Driver updates and installation",
        "Software configuration and setup",
        "License activation and management",
        "Custom software solutions"
      ],
      pricing: "₹200 - ₹800"
    },
    {
      icon: Laptop,
      title: "Custom Solutions",
      description: "Tailored IT solutions for specific business needs and requirements with ongoing technical support.",
      features: [
        "Business IT consulting",
        "System integration services",
        "Custom application setup",
        "Technical support packages",
        "IT infrastructure planning"
      ],
      pricing: "Quote on request"
    }
  ];

  const whyChooseUs = [
    {
      title: "Expert Technicians",
      description: "Certified professionals with years of experience in computer repair and maintenance"
    },
    {
      title: "Quick Turnaround",
      description: "Fast service delivery with most repairs completed within 24-48 hours"
    },
    {
      title: "Affordable Pricing",
      description: "Competitive rates with transparent pricing and no hidden charges"
    },
    {
      title: "Quality Guarantee",
      description: "All repairs come with warranty and satisfaction guarantee"
    },
    {
      title: "On-Site Service",
      description: "Home and office visits available for your convenience"
    },
    {
      title: "Latest Tools",
      description: "Modern diagnostic equipment and genuine replacement parts"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="services-hero-title">
            Professional Computer Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" data-testid="services-hero-description">
            Expert IT solutions for individuals and businesses in Barasat. From repairs to network setup, 
            we provide comprehensive computer services with professional quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-cyan hover:bg-cyan/90" data-testid="button-get-quote">
                Get Free Quote
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-navy"
              onClick={() => window.location.href = "tel:+916289727242"}
              data-testid="button-call-now"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call: +91 6289727242
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4" data-testid="services-section-title">
              Our Computer Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="services-section-description">
              Comprehensive IT solutions tailored to meet your specific needs with professional quality and competitive pricing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow h-full" data-testid={`service-card-${index}`}>
                  <CardContent className="p-8">
                    <div className="bg-cyan/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-cyan" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-4 text-center" data-testid={`service-title-${index}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-center" data-testid={`service-description-${index}`}>
                      {service.description}
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start" data-testid={`service-feature-${index}-${featureIndex}`}>
                          <CheckCircle className="h-4 w-4 text-cyan mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-cyan mb-4" data-testid={`service-pricing-${index}`}>
                        {service.pricing}
                      </p>
                      <Link href="/contact">
                        <Button className="w-full" data-testid={`button-request-service-${index}`}>
                          Request Service
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4" data-testid="why-choose-title">
              Why Choose Infyra Computer Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="why-choose-description">
              We stand out from the competition with our commitment to quality, customer service, and technical expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center" data-testid={`why-choose-item-${index}`}>
                <div className="bg-cyan/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4" data-testid={`why-choose-item-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-gray-600" data-testid={`why-choose-item-description-${index}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas & Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6" data-testid="service-area-title">
                Service Areas & Contact
              </h2>
              <p className="text-lg text-gray-600 mb-8" data-testid="service-area-description">
                We proudly serve Barasat and surrounding areas with professional computer services. 
                Contact us today for a free consultation and quote.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-cyan mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Service Location</h4>
                    <p className="text-gray-600" data-testid="service-location">
                      Barasat 2, Golabari Bazar, PIN 743423
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-cyan mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Phone</h4>
                    <p className="text-gray-600" data-testid="service-phone">
                      +91 6289727242
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-cyan mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Email</h4>
                    <p className="text-gray-600" data-testid="service-email">
                      jk9092745@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-cyan mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Business Hours</h4>
                    <p className="text-gray-600" data-testid="service-hours">
                      Mon - Sat: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-cyan to-blue-600 text-white" data-testid="emergency-service">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Emergency Service Available</h3>
                <p className="text-gray-100 mb-6">
                  Need urgent computer repair? We offer emergency services for critical business systems 
                  and important personal computers.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Same-day service available
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    On-site emergency visits
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    24/7 phone support
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-cyan w-full"
                  onClick={() => window.location.href = "tel:+916289727242"}
                  data-testid="button-emergency-call"
                >
                  Call for Emergency Service
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
