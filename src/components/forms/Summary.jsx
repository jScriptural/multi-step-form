import {useContext} from "react";
import {formDataContext} from "../../context/FormDataContext.jsx";
import {currentFormContext} from "../../context/CurrentFormContext.jsx";

function extractBills(obj){
	let billings = [];
	for(let key of Object.keys(obj)){
		if(typeof obj[key] === "object"){
			if("bill" in obj[key]){
				billings.push(obj[key].bill.match(/\d+/)[0]);
			}else {
				billings.push(...extractBills(obj[key]));
			}
		}
	}
	return billings;
};


export default function Summary(){
	const step = useContext(currentFormContext);
	const formData = useContext(formDataContext);

	return (
		<section id="summary" hidden={step.currentStep !== 4}>
		 <main> 
		    <h1>Finishing up</h1>
		     <p>Double-check everything looks OK before confirming </p>
		     <section>
		        <div role="group" className="plan">
		             <div><span className="pack">{formData.data?.plan?.pack+"("+formData.data?.plan?.type+")"}</span><span className="link" onClick={(e)=>step.setCurrentStep(2)}> change</span></div>
		                <span className="bill">{formData.data?.plan?.bill}</span>
		        </div>
		 <hr/>
		        <div role="group" className="add-ons">
		          {formData.data.addons && Object.values(formData.data.addons).map((addon,i)=>(<div className="addon" key={i}><span className="pack">{addon?.pack}</span><span className="bill">{addon?.bill}</span></div>))}
		        </div>
		     </section>
		        <div role="group" className="total">
		           <span className="text">{`Total (per ${formData.data?.plan?.type?.slice(0,-2)})`}</span><span className="bill">{"$"+extractBills(formData.data).reduce((s,p)=>s+Number(p),0)+"/"+formData.data?.plan?.type?.slice(0,-2)}</span>
		         </div>
		     
		 </main>
		</section>
	);

}

