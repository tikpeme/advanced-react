import { useContext } from "react";
import { VansContext } from "../pages/Vans/Vans";

//Custom hook to pass context data to to utils functions
const useMyContext = () => {
  const contextData = useContext(VansContext);
  console.log(contextData);
  return contextData;
};

export default useMyContext;
