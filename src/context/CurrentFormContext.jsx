import {useState, createContext} from "react";

export const currentFormContext = createContext(1);

export default function currentFormProvider({children}){
	const [currentStep,setCurrentStep] = useState(1);

	return (
		<currentFormContext.Provider value={{currentStep,setCurrentStep}}>{children}</currentFormContext.Provider>
	);
}
