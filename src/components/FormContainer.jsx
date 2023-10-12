import {useContext,useEffect} from "react";
import PersonalInfo from "./forms/PersonalInfo.jsx";
import Plan from "./forms/Plan.jsx";
import AddOns from "./forms/AddOns.jsx";
import Summary from "./forms/Summary.jsx";
import Button from "./Button.jsx";
import SuccessFeedback  from "./SuccessFeedback.jsx";
import {currentFormContext} from "../context/CurrentFormContext.jsx";
import {formDataContext} from "../context/FormDataContext.jsx";



export default function FormContainer(){
	 const step = useContext(currentFormContext);
	 const formData = useContext(formDataContext);


	return (
		<div id="formContainer" role="region" arial-label="form container">
		<PersonalInfo />
		<Plan />
		<AddOns key={formData.data?.plan?.type} />

		<Summary />
		<SuccessFeedback />
		{step.currentStep !==5 && <Button />}
		 </div>
	);
}
