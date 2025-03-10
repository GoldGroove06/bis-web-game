"use client";
import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Heading, Text } from "@radix-ui/themes";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center text-white text-center !p-6 bg-white/20 z-30 absolute space-y-4 rounded-xl h-[60%]">
    
    <div className="text-green-400 mb-10 text-xl">
    <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
    <br/>
    <div className=" mr-4">
      Project contributors:
    </div>
    <div className=" mr-4">
        Arshpreet Singh
    </div>
    <div className=" mr-4">
      Jaskaran Chopra
    </div>
 
    <div className=" mr-4">
      Rijul Ahuja
    </div>
  </div>
  <div className="">
    Smart Consumer Interactive Portal
  </div>
  
    </div>
  );
}
