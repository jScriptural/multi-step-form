import {useState,useContext,useEffect} from "react";
import {currentFormContext} from "../../context/CurrentFormContext.jsx";
import {personalData} from "../../context/PersonalData.jsx";




export default function PersonalInfo(){
	/** joke **/
	/* Too many constants/const make 
	 * the world stand still.
	 */
	const step = useContext(currentFormContext);
	const personalInfo = useContext(personalData);
	const [nameError,setNameError] = useState(false);
	const [emailError,setEmailError] = useState(false);
	const [phoneNumberError,setPhoneNumberError] = useState(false);

	useEffect(()=>{
		personalInfo.setData(prev=>({...prev,setNameError,setEmailError,setPhoneNumberError}));
	},[]);


	return (
		<div id="personalInfo" hidden={step.currentStep !==1} role="region">
		 <form>
		   <legend>Personal info </legend>
		   <p>Please provide your name, email address and phone number.</p>
		   <div className="name" role="group">
	              <label htmlFor="inputName"><span>Name</span><span className="error-feedback" hidden={!nameError}>Name too short</span></label>
		     <input type="text" 
		   	    id="inputName"
		             name="name" 
		             placeholder="e.g Stephen King" 
			     value={personalInfo.data.name} 
		             onChange={(e)=>personalInfo.setData(prev=>({...prev,name:e.target.value}))} 
		               onFocus={e=>setNameError(false)}/></div>

		<div className="email" role="group">
	             <label htmlFor="inputEmail">Email address <span className="error-feedback" hidden={!emailError}>Invalid email</span></label>
		     <input type="email" 
		 	    id="inputEmail" 
		             name="email" 
		             placeholder="e.g stephenking@lorem.com" 
		              value={personalInfo.data.email} 
		              onChange={(e)=>personalInfo.setData(prev=>({...prev,email:e.target.value}))} 
		              onFocus={e=>setEmailError(false)} /></div>

		<div className="phone-number" role="group">
	              <label htmlFor="inputPhoneNumber"><span>Phone Number</span><span className="error-feedback" hidden={!phoneNumberError}>Invalid input</span></label>
		       <input  type="tel" 
		               id="inputPhoneNumber" 
		                name="phoneNumber" 
		   		placeholder="e.g +1 234567890" 
				value={personalInfo.data.phoneNumber} 
				onChange={(e)=>personalInfo.setData(prev=>({...prev,phoneNumber:e.target.value}))} 
				onFocus={e=>setPhoneNumberError(false)}/></div>	
	  </form>
	 </div>
	);
}
