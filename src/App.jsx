import  Container from "./components/Container.jsx";
import FormDataProvider from "./context/FormDataContext.jsx";
import CurrentFormProvider from "./context/CurrentFormContext.jsx";
import PersonalDataProvider from "./context/PersonalData.jsx";


export default function App() {

  return (
    <>  
	   <FormDataProvider> 
	   <CurrentFormProvider>
	    <PersonalDataProvider>
	     <Container />
	   </PersonalDataProvider>
	  </CurrentFormProvider>	
	  </FormDataProvider>
    </>
  )
}

