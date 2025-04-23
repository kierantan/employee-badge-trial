
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PhotoUpload from "@/components/PhotoUpload";
import EmployeeForm from "@/components/EmployeeForm";
import BadgePreview from "@/components/BadgePreview";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Employee Badge Registration</CardTitle>
                <CardDescription>
                  Complete the form below to register for your employee badge
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <PhotoUpload />
                  <EmployeeForm />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
                <CardDescription>
                  See how your badge will look
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BadgePreview />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <footer className="py-6 border-t bg-white">
        <div className="container text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} BadgeSnap - Employee Badge Registration System
        </div>
      </footer>
    </div>
  );
};

export default Index;
