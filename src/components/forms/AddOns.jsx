import {useState, useEffect,useContext} from "react";
import {formDataContext} from "../../context/FormDataContext.jsx";
import {currentFormContext} from "../../context/CurrentFormContext.jsx";


const addOns = [
	{
		package: "Online service",
		description: "Access to multiplayer games",
		bill: {
			yearly:"+$10/yr",
			monthly: "+$1/mo",
		}
	},
	{
		package: "Larger storage",
		description: "Extra 1TB of cloud save",
		bill: {
			yearly:"+$20/yr",
			monthly: "+$2/mo",
		}
	},
	{
		package: "Customizable profile",
		description: "Custom theme on your profile",
		bill: {
			yearly:"+$20/yr",
			monthly: "+$2/mo",
		}
	},
]


export default function AddOns(){
	const step = useContext(currentFormContext);
	const formData = useContext(formDataContext);
	const [selectedAddOns, setSelectedAddOns] = useState({});
	/** joke **/
	/*Q: What does a programming language have in common 
	 * with a mathematics
	 * A: Functions
	 */

        function handleClick(e){
		const target = e.target;
		if(formData && target.tagName==="INPUT"){
			const checked = target.checked;
			const addOn = target.closest(".add-on");
			const regexp = /(?<pack>^[A-Z]\w+\s\w+)(?=[A-Z]).*?(?<bill>\+.*)/;
			const group= addOn.textContent.match(regexp).groups;
			addOn.classList.toggle("selected-add-on");
			if(checked){
				setSelectedAddOns({...selectedAddOns, [addOn.dataset.id]: group});

			}else {
				delete selectedAddOns[addOn.dataset.id];

				setSelectedAddOns({...selectedAddOns});
			}
		}
	}
	
	useEffect(()=>{
			formData.setData({...formData.data,addons:selectedAddOns});
	},[selectedAddOns]);

	return (
		<div id="addOns" hidden={step.currentStep !== 3} role="region">
		  <form> 
		   <legend>Pick add-ons</legend>
		   <p>Add-ons help enhance your gaming experience.</p>
		{addOns.map((addOn,i)=>(
		    <div role="container" key={i} className={`add-on ${addOn.package}`} data-id={"addOn"+i} onClick={handleClick}>
			<input type="checkbox" name="addOns"  />
			<div role="container"><span className="package">{addOn.package}</span><span className="description">{addOn.description}</span></div>
			<span className="bill">{formData.data.plan?.type=="yearly"?addOn.bill.yearly:addOn.bill.monthly}</span>
		</div>
		))}   
		 </form>   
		</div>
	);
}
