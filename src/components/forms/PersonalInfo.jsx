import {useState,useContext,useEffect} from "react";
import {currentFormContext} from "../../context/CurrentFormContext.jsx";
import {personalData} from "../../context/PersonalData.jsx";




export default function PersonalInfo(){
	const step = useContext(currentFormContext);
	const personalInfo = useContext(personalData);
	const [name,setName] = useState("");
	const [email,setEmail] = useState("");
	const [phoneNumber,setPhoneNumber] = useState("");
	const [nameError,setNameError] = useState(false);
	const [emailError,setEmailError] = useState(false);
	const [phoneNumberError,setPhoneNumberError] = useState(false);
	useEffect(()=>{
		personalInfo.setData({name,email,phoneNumber,nameError,emailError,phoneNumberError,setNameError,setEmailError,setPhoneNumberError});

	},[name,email,phoneNumber,nameError,emailError,phoneNumberError]);


	return (
		<div id="personalInfo" hidden={step.currentStep !==1}>

		 <form>
		   <legend>Personal info </legend>
		   <p>Please provide your name, email address and phone number.</p>
		   <div className="name">
	              <label htmlFor="inputName"><span>Name</span><span className="error-feedback" hidden={!nameError}>Name too short</span></label>
		     <input type="text" id="inputName" name="name" placeholder="e.g Stephen King" value={name} onChange={(e)=>setName(e.target.value.trim())} onFocus={e=>setNameError(false)}/>
		</div>

		<div className="email">
	             <label htmlFor="inputEmail">Email address <span className="error-feedback" hidden={!emailError}>Invalid email</span></label>
		     <input type="email" id="inputEmail" name="email" placeholder="e.g stephenking@lorem.com" value={email} onChange={(e)=>setEmail(e.target.value.trim())} onFocus={e=>setEmailError(false)} />
		</div>

		<div className="phone-number">
	              <label htmlFor="inputPhoneNumber"><span>Phone Number</span><span className="error-feedback" hidden={!phoneNumberError}>Invalid input</span></label>
		       <input type="tel" id="inputPhoneNumber" name="phoneNumber" placeholder="e.g +1 234567890" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} onFocus={e=>setPhoneNumberError(false)}/>
		</div>	
			
	     </form>
	 </div>
	);
}
