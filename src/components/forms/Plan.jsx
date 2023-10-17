
import {useState,useContext} from "react";
import arcadeIcon from "/images/icon-arcade.svg";
import advancedIcon  from "/images/icon-advanced.svg";
import proIcon from "/images/icon-pro.svg";
import {formDataContext} from "../../context/FormDataContext.jsx";
import {currentFormContext} from "../../context/CurrentFormContext.jsx";

const plans = [
	 {
		 package: "Arcade",
		 icon: arcadeIcon,
		 bill: {
			 yearly: "$90/yr",
			 monthly: "$9/mo",
		 },
		 bonus: "2 months free",
	 },
	 {
		 package: "Advanced",
		 icon: advancedIcon,
		 bill: {
			 yearly: "$120/yr",
			 monthly: "$12/mo",
		 },
		 bonus: "2 months free",
	 },
	 {
		 package: "Pro",
		 icon: proIcon,
		 bill: {
			 yearly: "$150/yr",
			 monthly: "$15/mo",
		 },
		 bonus: "2 months free",
	 
	}
];


export default function Plan(){
	const formData = useContext(formDataContext);
	const step = useContext(currentFormContext);	
	const [type, setType] = useState("yearly");
	const [session,setSession] = useState(0);
	
	function handleClick(e){
		const target = e.target;
		const currentTarget = e.currentTarget;
	        const plan = target.closest(".plan");
		const regexp = /(?<pack>\w+?)(?<bill>\$\d+?\/(yr|mo))/;
		const groups= plan.textContent.match(regexp).groups;
		currentTarget.querySelector(".selected-plan")?.classList.remove("selected-plan");
		plan.classList.add("selected-plan");
		formData.setData(prev=>({...prev,plan:{pack:groups.pack,bill:groups.bill,type}}));

	}
	function handleToggle(e){
    		setType((prev)=>prev==="yearly"?"monthly":"yearly");
		setSession((prev)=>((prev+1)%2));
		formData.setData({});
	}
	/** joke **/
	/* Q: How do you comfort a javascript bug?
	 * A: You console it.
	 */


	return (
		<section id="selectPlan" hidden={step.currentStep !== 2}>
		  <main>
		    <h1>Select your plan</h1>
		    <p>You have the option of monthly or yearly billing.</p>
		<div role="group" className="parent-container" onClick={handleClick} key={session}>
		{plans.map((plan,i)=>(<div className={`plan ${plan.package}`} key={i}>
			<object arial-label="icon" type="image/svg+xml" data={plan.icon}></object>
			<div role="group"><span className="package">{plan.package}</span><span className="bill">{type==="yearly"?plan.bill.yearly: plan.bill.monthly}</span><span className="bonus" hidden={!(type==="yearly")}>{plan.bonus}</span></div>
			</div>
		))}
		</div>

		  <section className="toggler-container">
		   <p className={type==="yearly"? "text-cool-gray":"text-marine-blue"}>Monthly</p>
		   <div  style={{justifyContent: type==="yearly"?"flex-end":"flex-start"}} className="toggler">
		     <span className="slider" onClick={handleToggle}></span> </div>
		   <p className={type==="monthly"? "text-cool-gray":"text-marine-blue"} >Yearly</p>
		  </section>
		  </main>
		 </section>
	);
}
