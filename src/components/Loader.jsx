import { useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";

import { Bouncy } from 'ldrs/react'
import 'ldrs/react/Bouncy.css'

// Default values shown


export default function Loader() {
  const { loading } = useContext(LoaderContext);

  if (!loading){
    return
  } 

  return (
    <div className="loader-overlay">
    <Bouncy
        size="100"
        speed="1.3"
        color="white" 
    />
    </div>
  );
}




