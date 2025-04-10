import Clicker from "@/components/clicker";
import Header from "@/components/header";


export default function Home() {
   return (
      <main className="flex flex-col w-full gap-[32px] row-start-2 items-center justify-center">

         <div className="section">
            <div>Section Column 1</div>
            <div>Section Column 2</div>
         </div>

         <Clicker/>

      </main>
   );
}
