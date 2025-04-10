"use client";

import { useRouter } from "next/navigation";

export default function Header() {
   const router = useRouter();

   return (
      <header className = "flex justify-center bg-amber-500 w-full py-4 space-x-4">
         <button onClick={() => router.push("/")} className = "hover">Home</button>
         <button onClick={() => router.push("about-me")} className = "hover">About Me</button>
         <button onClick={() => router.push("projects")} className = "hover">Projects</button>
      </header>
   );
}