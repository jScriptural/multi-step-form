import {useContext} from "react";
import {currentFormContext} from "../context/CurrentFormContext.jsx";

const steps = ["YOUR INFO","SELECT PLAN","ADD-ONS","SUMMARY"];
console.log(window.innerHeight);
console.log(window.innerWidth);


export default function Stepper(){
	const step = useContext(currentFormContext);

	let n = step.currentStep-1;
	if(n>3)n=3;
	return (
		<section id="stepperSection">
		  <ul>
		    {steps.map((step,i)=><li key={i}><div className={i === n?"step active":"step"}>{i+1}</div><div className="headings"><span className="sub-heading">{`step ${i +1}`}</span><span className="heading">{step}</span></div></li>)}
		  </ul>
		</section>
	);
}
