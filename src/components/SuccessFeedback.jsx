import {useContext} from "react";
import {currentFormContext} from "../context/CurrentFormContext.jsx";
import thankYouIcon from "/images/icon-thank-you.svg";



export default function SuccessFeedback(){
	const step = useContext(currentFormContext);

	return (
		<div id="successFeedback" hidden={step.currentStep !==5} role="region">
		<main arial-label="main content">
		<object type="image/svg+xml" data={thankYouIcon} arial-label="checkmark icon" role="icon"></object>
		<h1>Thank you!</h1>
		<p>Thanks for confirming your subscription!
		We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
		</main>
		</div>
	);
}
