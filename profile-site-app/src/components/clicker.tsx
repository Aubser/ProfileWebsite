"use client";

import styles from "../app/page.module.css";
import { useState } from "react";

export default function Clicker() {

   const [countClick, setCountClick] = useState(0);

   const functionName = () => {
      setCountClick(countClick + 1);
   }

   return (
      <div className={styles.card} style={{ flex: 0.3 }}>
         <div>Total clicks:{countClick}</div>
         <button onClick={functionName} >Click Here!</button>
      </div>
   );
}