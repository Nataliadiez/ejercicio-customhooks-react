/* import {useEffect, useState} from "react"

const useTemperatura = () => {
    const [grados, setGrados] = useState(0);
    const [mayorACero, setMayorACero] = useState("");
    
    useEffect(() => {
      if(grados > 0) {
        setMayorACero("Temperatura por encima del cero");
      } else {
        setMayorACero("Suba la temperatura")
      }
    
    }, [grados]);
    
    return {mayorACero, setGrados}
};

export default useTemperatura; */
