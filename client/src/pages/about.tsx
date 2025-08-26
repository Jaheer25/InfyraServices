import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Award,
  Target,
  Users,
  Zap,
  Shield,
  Star
} from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const whyChooseUs = [
    {
      icon: Award,
      title: "Professional Expertise",
      description: "Years of experience in IT services and digital marketing training with certified professionals"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast and efficient service delivery for all computer repairs with same-day service available"
    },
    {
      icon: Zap,
      title: "Affordable Pricing",
      description: "Competitive rates for all services and courses with transparent pricing and no hidden charges"
    },
    {
      icon: Users,
      title: "Local Community Focus",
      description: "Dedicated to serving the Barasat community with personalized attention and local support"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All repairs and services come with warranty and 100% satisfaction guarantee"
    },
    {
      icon: Target,
      title: "Results-Driven Training",
      description: "Practical, industry-focused courses designed to get you job-ready with placement support"
    }
  ];

  const businessValues = [
    {
      title: "Innovation",
      description: "Staying ahead with the latest technology trends and digital marketing strategies"
    },
    {
      title: "Quality",
      description: "Delivering excellence in every service and maintaining high standards"
    },
    {
      title: "Trust",
      description: "Building long-term relationships through reliable service and honest communication"
    },
    {
      title: "Growth",
      description: "Empowering individuals and businesses to grow through technology and digital skills"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="about-hero-title">
            About Infyra Computer Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" data-testid="about-hero-description">
            Your trusted partner for professional computer services and digital marketing education in Barasat. 
            Bridging the technology gap with expertise and dedication.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6" data-testid="our-story-title">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6" data-testid="our-story-description">
                Founded in the heart of Barasat, Infyra Computer Services began with a simple mission: 
                to make technology accessible and understandable for everyone in our community. What started 
                as a small computer repair shop has evolved into a comprehensive technology education and 
                service center.
              </p>
              <p className="text-gray-600 mb-8" data-testid="our-story-mission">
                Today, we serve hundreds of satisfied customers with reliable IT solutions and have trained 
                over 150 students in digital marketing skills. Our commitment to quality service and 
                personalized attention has made us the go-to technology partner for individuals and 
                small businesses in Barasat and surrounding areas.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-cyan/10 rounded-lg" data-testid="stat-customers">
                  <div className="text-3xl font-bold text-cyan mb-2">500+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center p-4 bg-cyan/10 rounded-lg" data-testid="stat-students">
                  <div className="text-3xl font-bold text-cyan mb-2">150+</div>
                  <div className="text-gray-600">Trained Students</div>
                </div>
              </div>
            </div>
            
            <Card className="bg-light-gray" data-testid="business-info-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-6">Get to Know Us</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-cyan" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Our Location</h4>
                      <p className="text-gray-600" data-testid="business-address">
                        Barasat 2, Golabari Bazar<br />
                        PIN 743423, West Bengal
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-cyan" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Contact Number</h4>
                      <p className="text-gray-600" data-testid="business-phone">
                        +91 6289727242
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-cyan" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Email Address</h4>
                      <p className="text-gray-600" data-testid="business-email">
                        jk9092745@gmail.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-cyan" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Business Hours</h4>
                      <p className="text-gray-600" data-testid="business-hours">
                        Mon - Sat: 9:00 AM - 7:00 PM<br />
                        Sunday: 10:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4" data-testid="why-choose-title">
              Why Choose Infyra Computer Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="why-choose-description">
              We stand out from the competition with our commitment to excellence, 
              customer satisfaction, and community focus.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`why-choose-item-${index}`}>
                  <CardContent className="p-8">
                    <div className="bg-cyan/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-cyan" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-4" data-testid={`why-choose-item-title-${index}`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600" data-testid={`why-choose-item-description-${index}`}>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4" data-testid="values-title">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="values-description">
              The principles that guide everything we do and how we serve our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessValues.map((value, index) => (
              <div key={index} className="text-center" data-testid={`value-item-${index}`}>
                <div className="bg-gradient-to-br from-cyan to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4" data-testid={`value-title-${index}`}>
                  {value.title}
                </h3>
                <p className="text-gray-600" data-testid={`value-description-${index}`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-cyan rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white/10 backdrop-blur-sm border border-cyan/20" data-testid="mission-card">
              <CardContent className="p-8 text-center">
                <div className="bg-cyan/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-cyan" />
                </div>
                <h3 className="text-2xl font-bold mb-6" data-testid="mission-title">Our Mission</h3>
                <p className="text-gray-200" data-testid="mission-text">
                  To empower individuals and businesses in Barasat with reliable technology solutions 
                  and comprehensive digital marketing education, bridging the digital divide and 
                  fostering growth in our community.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border border-cyan/20" data-testid="vision-card">
              <CardContent className="p-8 text-center">
                <div className="bg-cyan/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-cyan" />
                </div>
                <h3 className="text-2xl font-bold mb-6" data-testid="vision-title">Our Vision</h3>
                <p className="text-gray-200" data-testid="vision-text">
                  To become the leading technology education and service center in West Bengal, 
                  known for excellence, innovation, and our commitment to transforming lives 
                  through technology and digital skills.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6" data-testid="cta-title">
            Ready to Work with Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto" data-testid="cta-description">
            Whether you need computer services or want to learn digital marketing, 
            we're here to help you succeed. Get in touch today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-cyan hover:bg-cyan/90 text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                data-testid="button-contact-us"
              >
                Contact Us Today
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-cyan text-cyan hover:bg-cyan hover:text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105"
                data-testid="button-view-services"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
