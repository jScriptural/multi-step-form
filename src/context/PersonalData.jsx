import {createContext,useState} from "react";

export const personalData = createContext(null);

export default function PersonalDataProvider({children}){
	const [data,setData] = useState({})
	 return (
		 <personalData.Provider value={{data,setData}}>
		 {children}
		 </personalData.Provider>
	 );
}

