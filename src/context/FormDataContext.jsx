import {useState,createContext} from "react";

export const formDataContext= createContext(null);

export default function FormDataProvider({children}){
	const [data,setData] = useState({});

	return (
	    <formDataContext.Provider value={{data,setData}}>
	     {children}
	     </formDataContext.Provider>
	     );

}

