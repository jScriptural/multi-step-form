import {useContext} from "react";
import {currentFormContext} from "../context/CurrentFormContext.jsx";

const steps = ["YOUR INFO","SELECT PLAN","ADD-ONS","SUMMARY"];

export default function Stepper(){
	const step = useContext(currentFormContext);
	let currentStep = step.currentStep-1<3?step.currentStep-1:3;
	//if(n>3)n=3;
	return (
		<section id="stepperSection">
		  <ul>
		    {steps.map((step,i)=>(
		      <li key={i}>
			<div className={i === currentStep?"step active":"step"}>{i+1}</div>
			<div className="headings"><span className="sub-heading">{`step ${i +1}`}</span><span className="heading">{step}</span></div>
		       </li>
		    ))}
		  </ul>
		</section>
	);
}
