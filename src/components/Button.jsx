import {useContext} from "react";
import {currentFormContext} from "../context/CurrentFormContext.jsx";
import {personalData} from "../context/PersonalData.jsx";
import {formDataContext} from "../context/FormDataContext.jsx";

export default function Button(){
	let fifth = 0;
	const personalInfo = useContext(personalData);
	const step = useContext(currentFormContext);
	const formData = useContext(formDataContext);

	function handleClick(e){
		const target = e.target;
		if(target.classList.contains("prev-btn")){
			step.setCurrentStep(prev=>prev-1);
			console.log("p",step);
		}else if(target.classList.contains("next-btn")){

			if(personalInfo.data.name.length < 4){
				personalInfo.data.setNameError(true);
				return;
			}else if(!(/([0-9a-z.-])+?@([0-9a-z_.-])+?\.\w{2,}/i.test(personalInfo.data.email))){
				personalInfo.data.setEmailError(true);
				return;
			}else if(!(/^\+\d+?\s*?\d+?$/.test(personalInfo.data.phoneNumber.trim()))){
				personalInfo.data.setPhoneNumberError(true);
				return;
			}
			if(step.currentStep===2){
				if(!formData.data.plan){
					return;
				}else if(Object.keys(formData.data.plan).length <1){
					return;
				};
			}

			if(step.currentStep === 3){
				if(!formData.data.addons){
					return;
				}else if (Object.keys(formData.data.addons).length<1){
					return;
				};
			}

	step.setCurrentStep(prev=>prev===5?5:prev+1);
		}
	}

	return (
		<div id="buttons">
		  <button style={{visibility: step.currentStep>1?"visible":"hidden"}} className="prev-btn" onClick={handleClick}>Go Back</button>
		<button style={{backgroundColor: step.currentStep>3?"hsl(243, 100%, 62%)":"hsl(213, 96%, 18%)"}} className="next-btn" onClick={handleClick}>{step.currentStep >3?"Confirm":"Next step"}</button>
		</div>
	);
}

