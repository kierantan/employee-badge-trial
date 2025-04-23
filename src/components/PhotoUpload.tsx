
import { useState, useContext } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Camera, Image, Upload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { EmployeeContext } from "@/context/EmployeeContext";

const PhotoUpload = () => {
  const { employeeData, setEmployeeData } = useContext(EmployeeContext);
  const [dragActive, setDragActive] = useState(false);

  const handleFile = (file: File) => {
    // Check if the file is an image
    if (!file.type.match("image.*")) {
      alert("Please upload an image file");
      return;
    }

    // Check if the file is too large (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("File is too large. Maximum size is 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setEmployeeData({
          ...employeeData,
          photo: file,
          photoPreview: e.target.result as string,
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="photo" className="text-base font-medium">
          Employee Photo
        </Label>
        <p className="text-sm text-muted-foreground">
          Upload a professional photo for your employee badge
        </p>
      </div>

      {!employeeData.photoPreview ? (
        <div
          className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center h-64 transition-colors ${
            dragActive 
              ? "border-badge-primary bg-accent/50" 
              : "border-muted-foreground/20 hover:border-badge-primary/50"
          }`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center gap-2">
            <Image className="h-12 w-12 text-badge-secondary opacity-75" />
            <p className="text-sm text-center text-muted-foreground">
              <span className="font-medium">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-muted-foreground">
              JPG, PNG or JPEG (max. 5MB)
            </p>
            <Input
              id="photo"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />
            <Button 
              variant="outline" 
              className="mt-2" 
              onClick={() => document.getElementById("photo")?.click()}
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload Photo
            </Button>
            <Button 
              variant="ghost" 
              className="text-xs text-muted-foreground" 
              onClick={() => alert("Camera functionality would open device camera")}
            >
              <Camera className="h-3 w-3 mr-1" />
              Use camera
            </Button>
          </div>
        </div>
      ) : (
        <Card className="overflow-hidden badge-card">
          <CardContent className="p-0 relative">
            <img 
              src={employeeData.photoPreview} 
              alt="Photo preview" 
              className="w-full object-cover h-64"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 flex justify-between items-center">
              <span className="text-sm truncate">
                {employeeData.photo?.name}
              </span>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="ghost"
                  onClick={() => document.getElementById("photo")?.click()}
                >
                  Change
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost"
                  className="text-destructive hover:text-destructive"
                  onClick={() => setEmployeeData({
                    ...employeeData,
                    photo: null,
                    photoPreview: "",
                  })}
                >
                  Remove
                </Button>
              </div>
            </div>
            <Input
              id="photo"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PhotoUpload;
