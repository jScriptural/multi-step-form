import {useContext} from "react";
import {currentFormContext} from "../context/CurrentFormContext.jsx";
import {personalData} from "../context/PersonalData.jsx";
import {formDataContext} from "../context/FormDataContext.jsx";

function verifyData({name,email,phoneNumber,setEmailError,setNameError,setPhoneNumberError}){
		if(name.trim().length<4){
			setNameError(true);
			/** joke **/
			/*They say, 'he who lives in a glass
			 * house should not throw stone', 
			 * so I throw error.
			 */
			throw new Error("name too short")
		} else if (!(/^[0-9a-z_]([0-9a-z.$-])*?@([0-9a-z_.-])+?\.\w{2,}/i.test(email))){
			setEmailError(true);
			throw new Error("invalid email");
		}else if (!(/^\+\d+?\s*?\d+?$/.test(phoneNumber.trim()))){
			setPhoneNumberError(true);
			throw new Error("invalid phone Number");
		}
}


export default function Button(){
	const personalInfo = useContext(personalData);
	const step = useContext(currentFormContext);
	const formData = useContext(formDataContext);

	function handleClick(e){
		const target = e.target;
		if(target.classList.contains("prev-btn")){
			step.setCurrentStep(prev=>prev-1);
		}else if(target.classList.contains("next-btn")){
			try {
				verifyData(personalInfo.data);
			}catch(bug){
				/** joke **/
				/* A man caught a bug on a log
				 * but doesn't know what to do
				 * with it,
				 * so he console the log.
				 */
				console.log(bug);
				return;
			}
			/**joke**/
			/* Q: what do I say about too many if's?
			 *A: It gets the work done.
			 */

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
		<div id="buttons" role="container">
		  <button arial-label="go back button"  style={{visibility: step.currentStep>1?"visible":"hidden"}} className="prev-btn" onClick={handleClick}>Go Back</button>
		<button arial-label="next button" className={step.currentStep===4?"next-btn bg-purplish-blue":"next-btn bg-marine-blue"} onClick={handleClick}>{step.currentStep===4?"Confirm":"Next step"}</button>
		</div>
	);
}

