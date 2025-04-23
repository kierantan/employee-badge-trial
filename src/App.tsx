
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SuccessPage from "./pages/Success";

// Create a user context to pass the form data between components
import { EmployeeContext } from "./context/EmployeeContext";

const queryClient = new QueryClient();

const App = () => {
  const [employeeData, setEmployeeData] = useState({
    firstName: "",
    lastName: "",
    employeeId: "",
    department: "",
    position: "",
    photo: null as File | null,
    photoPreview: "",
  });

  return (
    <EmployeeContext.Provider value={{ employeeData, setEmployeeData }}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </EmployeeContext.Provider>
  );
};

export default App;
