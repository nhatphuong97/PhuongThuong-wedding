import { createContext, useState } from "react";


const AlertContext = createContext(null);

const AlertProvider = ({children}) =>{
    const {label,setLabel} = useState()
    const {status,setStatusAlert} = useState()
    return <AlertContext.Provider value={{
        label:label,
        status:status,
        success : () => {
            sel
        }
    }}>
        {children}

    </AlertContext.Provider>

}

export {AlertProvider};

export default AlertContext;