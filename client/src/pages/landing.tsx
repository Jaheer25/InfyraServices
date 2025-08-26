import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Wrench, 
  Settings, 
  Network, 
  Shield, 
  Download, 
  Laptop,
  GraduationCap,
  Star,
  Users,
  Tag,
  Briefcase,
  Lightbulb,
  Search,
  ChartPie,
  Share2,
  Edit,
  Mail,
  Handshake,
  BarChart3,
  Plus
} from "lucide-react";
import { Link } from "wouter";

export default function Landing() {
  const services = [
    {
      icon: Wrench,
      title: "Computer Repair",
      description: "Expert diagnosis and repair of desktop and laptop computers. Quick turnaround time with quality parts.",
      features: ["Hardware diagnostics", "Software troubleshooting", "Virus removal"]
    },
    {
      icon: Settings,
      title: "System Maintenance",
      description: "Regular maintenance services to keep your systems running smoothly and efficiently.",
      features: ["System optimization", "Regular updates", "Performance tuning"]
    },
    {
      icon: Network,
      title: "Network Setup",
      description: "Professional network installation and configuration for homes and small businesses.",
      features: ["WiFi setup", "Router configuration", "Security setup"]
    },
    {
      icon: Shield,
      title: "Data Recovery",
      description: "Professional data recovery services for corrupted or lost files from various storage devices.",
      features: ["Hard drive recovery", "USB/SD card recovery", "File restoration"]
    },
    {
      icon: Download,
      title: "Software Installation",
      description: "Complete software setup and installation services including operating systems and applications.",
      features: ["OS installation", "Driver updates", "Software configuration"]
    },
    {
      icon: Laptop,
      title: "Custom Solutions",
      description: "Tailored IT solutions for specific business needs and requirements.",
      features: ["Business consulting", "System integration", "Technical support"]
    }
  ];

  const courseModules = [
    {
      icon: Lightbulb,
      title: "Introduction to Digital Marketing",
      topics: [
        "What is Digital Marketing?",
        "Traditional vs. Digital Marketing",
        "Website Basics",
        "Domain & Hosting",
        "WordPress website setup"
      ]
    },
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      topics: [
        "On-page SEO (keywords, content, meta tags)",
        "Off-page SEO (backlinks, guest posting)",
        "Technical SEO (speed, mobile-friendly)"
      ]
    },
    {
      icon: ChartPie,
      title: "Search Engine Marketing (SEM)",
      topics: [
        "Google Ads (Search, Display, Video Ads)",
        "Pay-per-click campaigns"
      ]
    },
    {
      icon: Share2,
      title: "Social Media Marketing (SMM)",
      topics: [
        "Facebook, Instagram, LinkedIn marketing",
        "Paid campaigns (Meta Ads Manager)"
      ]
    },
    {
      icon: Edit,
      title: "Content Marketing",
      topics: [
        "Blogging & article writing",
        "Copywriting basics",
        "Content calendar"
      ]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      topics: [
        "Email campaign tools (Mailchimp, Sendinblue)",
        "Lead generation strategies"
      ]
    },
    {
      icon: Handshake,
      title: "Affiliate & Influencer Marketing",
      topics: [
        "Earning through referrals",
        "Working with influencers"
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      topics: [
        "Google Analytics basics",
        "Social media insights"
      ]
    },
    {
      icon: Plus,
      title: "Extra Skills (Optional)",
      topics: [
        "Canva & Photoshop (Graphic Designing)",
        "Video Editing (for reels & YouTube)",
        "Basics of E-commerce & Dropshipping"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-teal-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in" data-testid="hero-title">
              Professional IT Solutions & <span className="text-cyan">Digital Marketing Training</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in" data-testid="hero-description">
              Expert computer services and comprehensive digital marketing courses in Barasat. 
              Transform your business with modern technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link href="/services">
                <Button 
                  size="lg" 
                  className="bg-cyan hover:bg-cyan/90 text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                  data-testid="button-services"
                >
                  <Wrench className="mr-2 h-5 w-5" />
                  Our Services
                </Button>
              </Link>
              <Link href="/courses">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-cyan text-cyan hover:bg-cyan hover:text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105"
                  data-testid="button-courses"
                >
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Digital Marketing Course
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4" data-testid="services-title">
              Computer Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="services-description">
              Professional IT solutions for individuals and businesses. From repairs to maintenance, we've got you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow" data-testid={`service-card-${index}`}>
                  <CardContent className="p-8 text-center">
                    <div className="bg-cyan/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-cyan" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-4" data-testid={`service-title-${index}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6" data-testid={`service-description-${index}`}>
                      {service.description}
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} data-testid={`service-feature-${index}-${featureIndex}`}>
                          <span className="inline-block w-2 h-2 bg-cyan rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Digital Marketing Course Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-cyan rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="course-title">
              Digital Marketing Course
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto" data-testid="course-description">
              Professional module designed to make you industry-ready in digital marketing
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6" data-testid="course-packages-title">
                Course Packages
              </h3>
              <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-sm border border-cyan/20" data-testid="course-basic">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-cyan mb-2">3 Months - Basic Computer</h4>
                    <p className="text-gray-300 mb-4">Foundation course covering essential computer skills and digital literacy</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li><span className="inline-block w-2 h-2 bg-cyan rounded-full mr-2"></span>Computer fundamentals</li>
                      <li><span className="inline-block w-2 h-2 bg-cyan rounded-full mr-2"></span>Microsoft Office suite</li>
                      <li><span className="inline-block w-2 h-2 bg-cyan rounded-full mr-2"></span>Internet basics</li>
                      <li><span className="inline-block w-2 h-2 bg-cyan rounded-full mr-2"></span>Email and communication</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border border-cyan/20" data-testid="course-advanced">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-cyan mb-2">6 Months - Digital Marketing</h4>
                    <p className="text-gray-300 mb-4">Comprehensive digital marketing training with hands-on projects</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li><span className="inline-block w-2 h-2 bg-cyan rounded-full mr-2"></span>Complete digital marketing curriculum</li>
                      <li><span className="inline-block w-2 h-2 bg-cyan rounded-full mr-2"></span>SEO, SEM, SMM training</li>
                      <li><span className="inline-block w-2 h-2 bg-cyan rounded-full mr-2"></span>Content and email marketing</li>
                      <li><span className="inline-block w-2 h-2 bg-cyan rounded-full mr-2"></span>Analytics and reporting</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-sm" data-testid="course-benefits">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Course?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-cyan mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Industry-Ready Curriculum</h4>
                      <p className="text-gray-300 text-sm">Latest tools and techniques used by professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-cyan mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Hands-on Training</h4>
                      <p className="text-gray-300 text-sm">Real projects and practical experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Tag className="h-5 w-5 text-cyan mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Professional Certification</h4>
                      <p className="text-gray-300 text-sm">Industry-recognized certificates upon completion</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Briefcase className="h-5 w-5 text-cyan mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Job Placement Support</h4>
                      <p className="text-gray-300 text-sm">Career guidance and placement assistance</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Course Modules */}
          <Card className="mb-8" data-testid="course-modules">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-navy mb-8 text-center">Digital Marketing Course Modules</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseModules.map((module, index) => {
                  const IconComponent = module.icon;
                  return (
                    <div key={index} className="bg-gray-50 rounded-lg p-6" data-testid={`module-${index}`}>
                      <div className="bg-cyan/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-cyan" />
                      </div>
                      <h4 className="font-semibold text-navy mb-3" data-testid={`module-title-${index}`}>
                        {module.title}
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} data-testid={`module-topic-${index}-${topicIndex}`}>
                            • {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <Link href="/courses">
              <Button 
                size="lg" 
                className="bg-cyan hover:bg-cyan/90 text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                data-testid="button-enroll"
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Learn More About Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6" data-testid="cta-title">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto" data-testid="cta-description">
            Contact us today for professional computer services or to enroll in our digital marketing course.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-cyan hover:bg-cyan/90 text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                data-testid="button-contact"
              >
                Contact Us
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-cyan text-cyan hover:bg-cyan hover:text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105"
              onClick={() => window.location.href = "tel:+916289727242"}
              data-testid="button-call"
            >
              Call Now: +91 6289727242
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
