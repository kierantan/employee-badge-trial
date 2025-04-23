
import { useContext } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EmployeeContext } from "@/context/EmployeeContext";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const SuccessPage = () => {
  const { employeeData, setEmployeeData } = useContext(EmployeeContext);
  const navigate = useNavigate();

  const handleReset = () => {
    // Reset form data
    setEmployeeData({
      firstName: "",
      lastName: "",
      employeeId: "",
      department: "",
      position: "",
      photo: null,
      photoPreview: "",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container max-w-3xl py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <Card className="w-full">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle>Registration Successful!</CardTitle>
            <CardDescription>
              Your employee badge has been submitted for processing
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="border rounded-lg p-4 bg-muted/30">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Name</h3>
                  <p>{`${employeeData.firstName} ${employeeData.lastName}`}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Employee ID</h3>
                  <p>{employeeData.employeeId}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Department</h3>
                  <p>{employeeData.department}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Position</h3>
                  <p>{employeeData.position}</p>
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Your badge is being prepared and will be available for pickup from HR within 24 hours.
              </p>
              <p className="text-sm font-medium">
                Reference Number: {Math.random().toString(36).substring(2, 10).toUpperCase()}
              </p>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-center pb-6">
            <Button variant="outline" onClick={handleReset}>
              Register Another Employee
            </Button>
          </CardFooter>
        </Card>
      </main>
      
      <footer className="py-6 border-t bg-white">
        <div className="container text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} BadgeSnap - Employee Badge Registration System
        </div>
      </footer>
    </div>
  );
};

export default SuccessPage;
