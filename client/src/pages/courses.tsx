import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap,
  Clock,
  Users,
  Tag,
  Briefcase,
  Star,
  CheckCircle,
  Lightbulb,
  Search,
  ChartPie,
  Share2,
  Edit,
  Mail,
  Handshake,
  BarChart3,
  Plus,
  Phone,
  MapPin
} from "lucide-react";
import { Link } from "wouter";

export default function Courses() {
  const [selectedPackage, setSelectedPackage] = useState<"basic" | "advanced">("advanced");

  const coursePackages = [
    {
      id: "basic",
      title: "3 Months - Basic Computer",
      duration: "3 months",
      price: "₹8,000",
      description: "Foundation course covering essential computer skills and digital literacy",
      features: [
        "Computer fundamentals and basics",
        "Microsoft Office suite (Word, Excel, PowerPoint)",
        "Internet basics and web browsing",
        "Email setup and communication",
        "File management and organization",
        "Basic troubleshooting skills"
      ],
      bestFor: "Beginners with little to no computer experience"
    },
    {
      id: "advanced",
      title: "6 Months - Digital Marketing",
      duration: "6 months",
      price: "₹15,000",
      description: "Comprehensive digital marketing training with hands-on projects and industry certification",
      features: [
        "Complete digital marketing curriculum",
        "SEO, SEM, and SMM training",
        "Content marketing and copywriting",
        "Email marketing strategies",
        "Analytics and reporting",
        "Industry certification upon completion",
        "Job placement assistance",
        "Live project work"
      ],
      bestFor: "Those looking to build a career in digital marketing"
    }
  ];

  const courseModules = [
    {
      icon: Lightbulb,
      title: "Introduction to Digital Marketing",
      duration: "Week 1-2",
      topics: [
        "What is Digital Marketing?",
        "Traditional vs. Digital Marketing",
        "Website Basics & Domain Setup",
        "WordPress website creation",
        "Digital marketing ecosystem overview"
      ]
    },
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      duration: "Week 3-6",
      topics: [
        "On-page SEO (keywords, content, meta tags)",
        "Off-page SEO (backlinks, guest posting)",
        "Technical SEO (site speed, mobile optimization)",
        "Local SEO strategies",
        "SEO tools and analytics"
      ]
    },
    {
      icon: ChartPie,
      title: "Search Engine Marketing (SEM)",
      duration: "Week 7-10",
      topics: [
        "Google Ads fundamentals",
        "Search, Display, and Video advertising",
        "Pay-per-click campaign management",
        "Keyword research and bidding strategies",
        "Campaign optimization techniques"
      ]
    },
    {
      icon: Share2,
      title: "Social Media Marketing (SMM)",
      duration: "Week 11-14",
      topics: [
        "Facebook and Instagram marketing",
        "LinkedIn for business",
        "Content planning and scheduling",
        "Paid social media campaigns",
        "Meta Ads Manager training"
      ]
    },
    {
      icon: Edit,
      title: "Content Marketing",
      duration: "Week 15-18",
      topics: [
        "Content strategy development",
        "Blog writing and article creation",
        "Copywriting fundamentals",
        "Content calendar management",
        "Visual content creation"
      ]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      duration: "Week 19-20",
      topics: [
        "Email marketing platforms (Mailchimp, Sendinblue)",
        "List building strategies",
        "Email campaign design",
        "Automation and drip campaigns",
        "Performance tracking"
      ]
    },
    {
      icon: Handshake,
      title: "Affiliate & Influencer Marketing",
      duration: "Week 21-22",
      topics: [
        "Affiliate marketing basics",
        "Commission structures",
        "Influencer collaboration strategies",
        "Partnership management",
        "Revenue optimization"
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      duration: "Week 23-24",
      topics: [
        "Google Analytics setup and basics",
        "Social media insights",
        "Campaign performance tracking",
        "ROI measurement",
        "Report creation and presentation"
      ]
    },
    {
      icon: Plus,
      title: "Extra Skills (Bonus Modules)",
      duration: "Additional",
      topics: [
        "Canva for graphic design",
        "Basic Photoshop skills",
        "Video editing for social media",
        "E-commerce fundamentals",
        "Dropshipping basics"
      ]
    }
  ];

  const whyChooseOurCourse = [
    {
      icon: Star,
      title: "Industry-Ready Curriculum",
      description: "Up-to-date course content designed by industry experts with latest tools and techniques"
    },
    {
      icon: Users,
      title: "Hands-on Training",
      description: "Real-world projects and practical exercises to build your portfolio"
    },
    {
      icon: Tag,
      title: "Professional Certification",
      description: "Industry-recognized certificate to boost your career prospects"
    },
    {
      icon: Briefcase,
      title: "Job Placement Support",
      description: "Career guidance, resume building, and placement assistance"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Weekend and evening batches available to fit your schedule"
    },
    {
      icon: Users,
      title: "Small Batch Size",
      description: "Limited students per batch for personalized attention"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "Digital Marketing Course",
      text: "The course content was excellent and the instructors were very knowledgeable. I got placed in a digital marketing agency within 2 months of completion.",
      rating: 5
    },
    {
      name: "Rahul Das",
      course: "Basic Computer Course",
      text: "Perfect for beginners like me. The step-by-step approach made learning easy and enjoyable. Now I'm confident with computers.",
      rating: 5
    },
    {
      name: "Anjali Roy",
      course: "Digital Marketing Course",
      text: "Great practical training with real projects. The job placement support was amazing and helped me land my dream job.",
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-blue-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-cyan rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="courses-hero-title">
            Digital Marketing Courses
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" data-testid="courses-hero-description">
            Professional digital marketing training designed to make you industry-ready. 
            Learn from experts and build a successful career in the digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-cyan hover:bg-cyan/90" data-testid="button-enroll-now">
                <GraduationCap className="mr-2 h-5 w-5" />
                Enroll Now
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-navy"
              onClick={() => window.location.href = "tel:+916289727242"}
              data-testid="button-call-admission"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call for Admission
            </Button>
          </div>
        </div>
      </section>

      {/* Course Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4" data-testid="packages-title">
              Choose Your Learning Path
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="packages-description">
              Select the perfect course package that matches your goals and experience level
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {coursePackages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`relative overflow-hidden transition-all ${
                  selectedPackage === pkg.id ? 'ring-2 ring-cyan shadow-xl' : ''
                }`}
                data-testid={`package-${pkg.id}`}
              >
                {pkg.id === "advanced" && (
                  <Badge className="absolute top-4 right-4 bg-cyan text-white" data-testid="popular-badge">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span data-testid={`package-title-${pkg.id}`}>{pkg.title}</span>
                    <span className="text-2xl font-bold text-cyan" data-testid={`package-price-${pkg.id}`}>
                      {pkg.price}
                    </span>
                  </CardTitle>
                  <p className="text-gray-600" data-testid={`package-description-${pkg.id}`}>
                    {pkg.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-6">
                    <Badge variant="outline" data-testid={`package-duration-${pkg.id}`}>
                      <Clock className="mr-1 h-3 w-3" />
                      {pkg.duration}
                    </Badge>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start" data-testid={`package-feature-${pkg.id}-${index}`}>
                        <CheckCircle className="h-5 w-5 text-cyan mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 mb-6" data-testid={`package-best-for-${pkg.id}`}>
                    <strong>Best for:</strong> {pkg.bestFor}
                  </p>
                  <Button 
                    className="w-full" 
                    variant={selectedPackage === pkg.id ? "default" : "outline"}
                    onClick={() => setSelectedPackage(pkg.id as "basic" | "advanced")}
                    data-testid={`button-select-${pkg.id}`}
                  >
                    {selectedPackage === pkg.id ? "Selected" : "Select This Package"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules (shown for advanced package) */}
      {selectedPackage === "advanced" && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4" data-testid="modules-title">
                Digital Marketing Course Modules
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="modules-description">
                Comprehensive curriculum covering all aspects of modern digital marketing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseModules.map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`module-${index}`}>
                    <CardContent className="p-6">
                      <div className="bg-cyan/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-cyan" />
                      </div>
                      <h4 className="font-semibold text-navy mb-2" data-testid={`module-title-${index}`}>
                        {module.title}
                      </h4>
                      <Badge variant="outline" className="mb-3" data-testid={`module-duration-${index}`}>
                        {module.duration}
                      </Badge>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} data-testid={`module-topic-${index}-${topicIndex}`}>
                            • {topic}
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
      )}

      {/* Why Choose Our Course */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4" data-testid="why-choose-title">
              Why Choose Our Courses?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="why-choose-description">
              We provide comprehensive training that prepares you for real-world digital marketing challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseOurCourse.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`benefit-${index}`}>
                  <CardContent className="p-6">
                    <div className="bg-cyan/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-cyan" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-4" data-testid={`benefit-title-${index}`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600" data-testid={`benefit-description-${index}`}>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4" data-testid="testimonials-title">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="testimonials-description">
              Hear from our successful graduates who have transformed their careers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`testimonial-${index}`}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4" data-testid={`testimonial-text-${index}`}>
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-navy" data-testid={`testimonial-name-${index}`}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500" data-testid={`testimonial-course-${index}`}>
                      {testimonial.course}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-testid="enrollment-cta-title">
            Ready to Start Your Digital Marketing Journey?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto" data-testid="enrollment-cta-description">
            Join hundreds of successful students who have built thriving careers in digital marketing. 
            Enroll today and transform your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-cyan px-8 py-4 text-lg"
                data-testid="button-enroll-contact"
              >
                Enroll Now
              </Button>
            </Link>
            <Button 
              size="lg" 
              className="bg-white text-cyan hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() => window.location.href = "tel:+916289727242"}
              data-testid="button-call-enrollment"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: +91 6289727242
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center text-white">
            <MapPin className="h-5 w-5 mr-2" />
            <span data-testid="enrollment-location">
              Classes at Barasat 2, Golabari Bazar, PIN 743423
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
