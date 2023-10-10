
import {useState,useEffect,useContext} from "react";
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
	const [pack, setPack] = useState("");
	const [bill, setBill] = useState("");
	const [session,setSession] = useState(0);
	const [selectedPlan,setSelectedPlan] = useState({});
	
	function handleClick(e){
		//console.log(e.target);
		const target = e.target;
		const currentTarget = e.currentTarget;
		currentTarget.querySelector(".selected-plan")?.classList.remove("selected-plan");
	        const plan = target.closest(".plan");
		plan.classList.add("selected-plan");
		let regexp = /(?<pack>\w+?)(?<bill>\$\d+?\/(yr|mo))/;
		const groups= plan.textContent.match(regexp).groups;
		setPack(groups.pack);
		setBill(groups.bill);

		setSelectedPlan({pack:groups.pack,bill:groups.bill,type});
  

	}
	function handleToggle(e){
    		setType((prev)=>prev==="yearly"?"monthly":"yearly");
		setSelectedPlan({});
		setSession((prev)=>((prev+1)%2));
		formData.setData({});
	}
	useEffect(()=>{
		formData.setData({...formData.data,plan:selectedPlan});
	},[selectedPlan])


	return (
		<section id="selectPlan" hidden={step.currentStep !== 2}>
		  <main>
		    <h1>Select your plan</h1>
		    <p>You have the option of monthly or yearly billing.</p>
		<div className="parent-container" onClick={handleClick} key={session}>
		{plans.map((plan,i)=>(<div className={`plan ${plan.package}`} key={i}>
			<object type="image/svg+xml" data={plan.icon}></object>
			<div><span className="package">{plan.package}</span><span className="bill">{type==="yearly"?plan.bill.yearly: plan.bill.monthly}</span><span className="bonus" hidden={!(type==="yearly")}>{plan.bonus}</span></div>
			</div>))}
		</div>

		  <section className="toggler-container">
		   <p className={type==="yearly"? "text-cool-gray":"text-marine-blue"}>Monthly</p>
		   <div  style={{justifyContent: type==="yearly"?"flex-end":"flex-start"}} className="toggler">
		     <span className="slider" onClick={handleToggle}></span>
		   </div>
		   <p className={type==="monthly"? "text-cool-gray":"text-marine-blue"} >Yearly</p>
		  </section>
		  </main>
		 </section>
	);
}
