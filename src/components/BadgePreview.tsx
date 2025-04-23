
import { useContext } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "lucide-react";
import { EmployeeContext } from "@/context/EmployeeContext";

const BadgePreview = () => {
  const { employeeData } = useContext(EmployeeContext);
  
  const hasRequiredFields = 
    employeeData.firstName && 
    employeeData.lastName && 
    employeeData.employeeId && 
    employeeData.department && 
    employeeData.position;
  
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium">Badge Preview</h3>
      <p className="text-sm text-muted-foreground mb-4">
        This is how your employee badge will look
      </p>
      
      <Card className="overflow-hidden badge-card max-w-xs mx-auto">
        <div className="bg-badge-primary py-3 px-5 flex items-center gap-2">
          <Badge className="h-5 w-5 text-white" />
          <h3 className="text-white font-medium text-sm">EMPLOYEE BADGE</h3>
        </div>
        
        <CardContent className="p-4 space-y-4">
          <div className="w-32 h-32 mx-auto overflow-hidden rounded-full border-4 border-badge-primary">
            {employeeData.photoPreview ? (
              <img 
                src={employeeData.photoPreview} 
                alt="Employee" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <span className="text-xs text-muted-foreground">No photo</span>
              </div>
            )}
          </div>
          
          <div className="text-center space-y-2">
            {hasRequiredFields ? (
              <>
                <h2 className="font-bold text-lg text-badge-dark">
                  {`${employeeData.firstName} ${employeeData.lastName}`}
                </h2>
                <div className="text-sm text-muted-foreground">
                  <p>{employeeData.position}</p>
                  <p>{employeeData.department}</p>
                </div>
                <div className="mt-2 pt-2 border-t text-xs">
                  <p className="font-medium">{employeeData.employeeId}</p>
                </div>
              </>
            ) : (
              <div className="py-4 text-sm text-muted-foreground">
                Complete the form to see your badge preview
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BadgePreview;
