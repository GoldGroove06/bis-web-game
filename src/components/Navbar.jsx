import Link from "next/link";

export default function Navbar() {

  return (
    <div className="absolute w-full bg-white/10 backdrop-blur-lg border-b border-white/10 z-40 top-0 py-4 px-8 flex justify-between items-center ">
    
      <h1
        className="text-2xl font-bold cursor-pointer hover:underline transition-colors duration-300" 
        
     >
       <Link href="/">BIS game</Link> 
      </h1>

      <h2>
       <Link href="/leaderboard"> Current Leader : Name of leader </Link>
      </h2>
     
      </div>

  );
}