import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";

export default function SimpleAdminLogin() {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async () => {
    console.log("SIMPLE LOGIN: Starting login attempt");
    setIsLoading(true);
    
    try {
      console.log("SIMPLE LOGIN: Making fetch request");
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      console.log("SIMPLE LOGIN: Response status:", response.status);

      if (!response.ok) {
        const text = await response.text();
        console.error("SIMPLE LOGIN: Error response:", text);
        throw new Error(`Login failed: ${text}`);
      }

      const data = await response.json();
      console.log("SIMPLE LOGIN: Success data:", data);

      localStorage.setItem("admin-token", data.token);
      localStorage.setItem("admin-user", JSON.stringify(data.user));
      
      toast({
        title: "Success",
        description: "Logged in successfully!"
      });
      
      setLocation("/admin");
    } catch (error: any) {
      console.error("SIMPLE LOGIN: Error:", error);
      toast({
        title: "Error",
        description: error.message || "Login failed",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleTestLogin = () => {
    console.log("TEST LOGIN: Using admin/admin123");
    setUsername("admin");
    setPassword("admin123");
    setTimeout(handleLogin, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Lock className="h-12 w-12 text-amber-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-amber-800">Simple Admin Login</CardTitle>
          <p className="text-amber-600">On The Bluff Labradors</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              disabled={isLoading}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              disabled={isLoading}
            />
          </div>
          
          <Button 
            onClick={handleLogin}
            className="w-full bg-amber-600 hover:bg-amber-700"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
          
          <Button 
            onClick={handleTestLogin}
            variant="outline"
            className="w-full"
            disabled={isLoading}
          >
            Test Login (admin/admin123)
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}