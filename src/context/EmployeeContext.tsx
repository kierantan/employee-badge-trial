
import { createContext, Dispatch, SetStateAction } from "react";

export interface EmployeeData {
  firstName: string;
  lastName: string;
  employeeId: string;
  department: string;
  position: string;
  photo: File | null;
  photoPreview: string;
}

interface EmployeeContextType {
  employeeData: EmployeeData;
  setEmployeeData: Dispatch<SetStateAction<EmployeeData>>;
}

export const EmployeeContext = createContext<EmployeeContextType>({
  employeeData: {
    firstName: "",
    lastName: "",
    employeeId: "",
    department: "",
    position: "",
    photo: null,
    photoPreview: "",
  },
  setEmployeeData: () => {},
});
