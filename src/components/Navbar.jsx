import Link from "next/link";

export default function NavBar() {

  return (
    <div
      className="w-full sticky top-0 py-4 px-8 flex justify-between items-center relative transition-shadow duration-300 bg-blue-700" 
    >
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