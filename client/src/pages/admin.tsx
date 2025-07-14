import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Mail, Phone, Calendar, User, Clock, Heart } from "lucide-react";
import { format } from "date-fns";
import type { Inquiry } from "@shared/schema";

export default function Admin() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("admin-token");
    const userData = localStorage.getItem("admin-user");
    
    if (!token || !userData) {
      setLocation("/admin/login");
      return;
    }

    try {
      setUser(JSON.parse(userData));
    } catch (error) {
      setLocation("/admin/login");
    }
  }, [setLocation]);

  const { data: inquiries, isLoading, error } = useQuery({
    queryKey: ["/api/inquiries"],
    enabled: !!user,
  });

  const handleLogout = () => {
    localStorage.removeItem("admin-token");
    localStorage.removeItem("admin-user");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully."
    });
    setLocation("/admin/login");
  };

  const getColorBadge = (color: string) => {
    const colorMap: { [key: string]: string } = {
      "yellow": "bg-yellow-100 text-yellow-800",
      "black": "bg-gray-100 text-gray-800",
      "chocolate": "bg-yellow-100 text-yellow-800",
      "silver": "bg-gray-100 text-gray-800",
      "fox-red": "bg-red-100 text-red-800",
      "charcoal": "bg-gray-100 text-gray-800",
      "champagne": "bg-yellow-100 text-yellow-800",
      "no-preference": "bg-blue-100 text-blue-800"
    };
    
    return colorMap[color] || "bg-gray-100 text-gray-800";
  };

  if (!user) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-amber-800">Loading inquiries...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <p className="text-red-600 mb-4">Error loading inquiries</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-amber-800">Admin Dashboard</h1>
            <p className="text-amber-600">Welcome back, {user.username}</p>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={() => setLocation("/admin/files")}
              className="bg-amber-600 hover:bg-amber-700"
            >
              Edit Website
            </Button>
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="text-amber-600 border-amber-600 hover:bg-amber-50"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Mail className="h-8 w-8 text-amber-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Total Inquiries</p>
                  <p className="text-2xl font-bold text-amber-800">{inquiries?.length || 0}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-amber-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Recent (24h)</p>
                  <p className="text-2xl font-bold text-amber-800">
                    {inquiries?.filter((inquiry: Inquiry) => 
                      new Date(inquiry.createdAt) > new Date(Date.now() - 24 * 60 * 60 * 1000)
                    ).length || 0}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-amber-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Most Requested</p>
                  <p className="text-2xl font-bold text-amber-800">Yellow</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inquiries */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-amber-800">Customer Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            {(!inquiries || inquiries.length === 0) ? (
              <div className="text-center py-8 text-gray-500">
                <Mail className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No inquiries yet</p>
              </div>
            ) : (
              <div className="space-y-6">
                {inquiries.map((inquiry: Inquiry) => (
                  <div key={inquiry.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <User className="h-5 w-5 text-amber-600" />
                          <h3 className="font-semibold text-lg text-amber-800">
                            {inquiry.firstName} {inquiry.lastName}
                          </h3>
                          <Badge className={getColorBadge(inquiry.preferredColor)}>
                            {inquiry.preferredColor}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Mail className="h-4 w-4" />
                            <span>{inquiry.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Phone className="h-4 w-4" />
                            <span>{inquiry.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>{format(new Date(inquiry.createdAt), "PPP")}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>{format(new Date(inquiry.createdAt), "p")}</span>
                          </div>
                        </div>

                        {inquiry.message && (
                          <>
                            <Separator className="mb-3" />
                            <div>
                              <p className="font-medium text-amber-800 mb-2">Message:</p>
                              <p className="text-gray-700 leading-relaxed">{inquiry.message}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}