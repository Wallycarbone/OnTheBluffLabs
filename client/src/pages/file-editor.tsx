import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, FileText } from "lucide-react";

const editableFiles = [
  { path: "client/src/components/hero.tsx", name: "Hero Section" },
  { path: "client/src/components/about.tsx", name: "About Section" },
  { path: "client/src/components/puppies.tsx", name: "Puppies Section" },
  { path: "client/src/components/contact.tsx", name: "Contact Section" },
  { path: "client/src/components/testimonials.tsx", name: "Testimonials" },
  { path: "client/src/components/facilities.tsx", name: "Facilities" },
  { path: "client/src/components/health-testing.tsx", name: "Health Testing" },
];

export default function FileEditor() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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

  const loadFile = async (filePath: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/admin/files/${encodeURIComponent(filePath)}`);
      if (response.ok) {
        const content = await response.text();
        setFileContent(content);
      } else {
        toast({
          title: "Error",
          description: "Failed to load file",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load file",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const saveFile = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/admin/files/${encodeURIComponent(selectedFile)}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: fileContent
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "File saved successfully!"
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to save file",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save file",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Button
              variant="ghost"
              onClick={() => setLocation("/admin")}
              className="mr-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Admin
            </Button>
            <h1 className="text-3xl font-bold text-amber-800">File Editor</h1>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Edit Website Files
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Select File to Edit</label>
              <Select 
                value={selectedFile} 
                onValueChange={(value) => {
                  setSelectedFile(value);
                  loadFile(value);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose a file to edit..." />
                </SelectTrigger>
                <SelectContent>
                  {editableFiles.map((file) => (
                    <SelectItem key={file.path} value={file.path}>
                      {file.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedFile && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    File Content ({selectedFile})
                  </label>
                  <Textarea
                    value={fileContent}
                    onChange={(e) => setFileContent(e.target.value)}
                    className="min-h-96 font-mono text-sm"
                    placeholder="File content will appear here..."
                  />
                </div>

                <div className="flex justify-end">
                  <Button 
                    onClick={saveFile}
                    disabled={isLoading}
                    className="bg-amber-600 hover:bg-amber-700"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {isLoading ? "Saving..." : "Save File"}
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardContent className="p-4">
            <div className="text-sm text-amber-700">
              <h3 className="font-semibold mb-2">⚠️ Important Notes:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Changes take effect immediately after saving</li>
                <li>Always test your changes to ensure they work correctly</li>
                <li>Be careful with syntax - errors can break the website</li>
                <li>Contact support if you need help with complex changes</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}