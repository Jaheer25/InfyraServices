import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Monitor, 
  GraduationCap, 
  User, 
  Settings, 
  BookOpen, 
  MessageCircle,
  TrendingUp,
  Award,
  Clock,
  Users
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { toast } = useToast();
  const { isAuthenticated, isLoading, user } = useAuth();

  // Redirect to home if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return;
    }
  }, [isAuthenticated, isLoading, toast]);

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect via useEffect
  }

  const quickStats = [
    {
      icon: Users,
      title: "Active Students",
      value: "150+",
      description: "Students enrolled in our courses"
    },
    {
      icon: Award,
      title: "Success Rate",
      value: "95%",
      description: "Course completion rate"
    },
    {
      icon: Clock,
      title: "Support Hours",
      value: "24/7",
      description: "Technical support available"
    },
    {
      icon: TrendingUp,
      title: "Growth Rate",
      value: "200%",
      description: "Year over year business growth"
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: "Contact Support",
      description: "Get help with your services or courses",
      href: "/contact",
      color: "bg-blue-500"
    },
    {
      icon: BookOpen,
      title: "Course Materials",
      description: "Access your digital marketing resources",
      href: "/courses",
      color: "bg-green-500"
    },
    {
      icon: Settings,
      title: "Service Request",
      description: "Request computer repair or maintenance",
      href: "/services",
      color: "bg-purple-500"
    },
    {
      icon: User,
      title: "Profile Settings",
      description: "Update your account information",
      href: "/profile",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Welcome Section */}
      <section className="bg-gradient-to-r from-navy to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="welcome-title">
              Welcome back, {user?.firstName || user?.email}!
            </h1>
            <p className="text-lg text-gray-300 mb-6" data-testid="welcome-description">
              Your digital transformation journey continues with Infyra Computer Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button className="bg-cyan hover:bg-cyan/90" data-testid="button-continue-learning">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Continue Learning
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy" data-testid="button-view-services">
                  <Monitor className="mr-2 h-4 w-4" />
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} data-testid={`stat-card-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600" data-testid={`stat-title-${index}`}>
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold text-navy" data-testid={`stat-value-${index}`}>
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-500" data-testid={`stat-description-${index}`}>
                        {stat.description}
                      </p>
                    </div>
                    <div className="bg-cyan/10 p-3 rounded-full">
                      <IconComponent className="h-6 w-6 text-cyan" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Link key={index} href={action.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer" data-testid={`action-card-${index}`}>
                  <CardContent className="p-6">
                    <div className={`${action.color} p-3 rounded-full w-fit mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-navy mb-2" data-testid={`action-title-${index}`}>
                      {action.title}
                    </h3>
                    <p className="text-sm text-gray-600" data-testid={`action-description-${index}`}>
                      {action.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Recent Activity & Updates */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card data-testid="recent-activity">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-cyan" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <GraduationCap className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Course Progress Updated</p>
                    <p className="text-xs text-gray-500">Digital Marketing Module 3 completed</p>
                    <p className="text-xs text-gray-400">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Monitor className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Service Request Submitted</p>
                    <p className="text-xs text-gray-500">Computer maintenance scheduled</p>
                    <p className="text-xs text-gray-400">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <User className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Profile Updated</p>
                    <p className="text-xs text-gray-500">Contact information updated</p>
                    <p className="text-xs text-gray-400">3 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-testid="updates-announcements">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-cyan" />
                Updates & Announcements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan pl-4">
                  <h4 className="font-medium text-sm text-navy">New Course Module Available</h4>
                  <p className="text-xs text-gray-600 mb-1">
                    Advanced Google Analytics module is now live for enrolled students.
                  </p>
                  <p className="text-xs text-gray-400">Posted 2 days ago</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-sm text-navy">Service Hours Extended</h4>
                  <p className="text-xs text-gray-600 mb-1">
                    We now offer computer repair services until 8 PM on weekdays.
                  </p>
                  <p className="text-xs text-gray-400">Posted 1 week ago</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-sm text-navy">Holiday Schedule</h4>
                  <p className="text-xs text-gray-600 mb-1">
                    Please note our adjusted hours during upcoming holidays.
                  </p>
                  <p className="text-xs text-gray-400">Posted 2 weeks ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
