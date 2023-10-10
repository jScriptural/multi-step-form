import {useContext} from "react";
import {currentFormContext} from "../context/CurrentFormContext.jsx";
import checkmarkIcon from "/images/icon-checkmark.svg";
import thankYouIcon from "/images/icon-thank-you.svg";



export default function SuccessFeedback(){
	const step = useContext(currentFormContext);

	return (
		<div id="successFeedback" hidden={step.currentStep !==5}>
		<main>
		<object type="image/svg+xml" data={thankYouIcon}></object>
		<h1>Thank you!</h1>
		<p>Thanks for confirming your subscription!
		We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
		</main>
		</div>
	);
}
