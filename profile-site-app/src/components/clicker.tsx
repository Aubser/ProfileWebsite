"use client";


import { useState } from "react";

export default function Clicker() {

   const [countClick, setCountClick] = useState(0);

   const functionName = () => {
      setCountClick(countClick + 1);
   }

   return (
      <div className = "flex flex-col flex-[0.3] items-center">
         <div>Total clicks:{countClick}</div>
         <button onClick={functionName} >Click Here!</button>
      </div>
   );
}