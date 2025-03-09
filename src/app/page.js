"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Dialog, Button, Flex } from "@radix-ui/themes";
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()  
  const [name, setName] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  

  const  handleStart =  async (e) => {
    e.preventDefault()
    setIsOpen(false)
    if (name !== '') {
      localStorage.setItem("name", name);
      router.push('/fake-detector/tutorial')
    }
    
 
  }

  

  return (
  


      
      <main className="" id="box-start">
      
        
        <Dialog.Root open={isOpen} onOpenChange={(isOpen) => setIsOpen(isOpen)}>
          <Dialog.Trigger>
            <Button class="text-green-400 text-3xl">Start Game</Button>
          </Dialog.Trigger>

            <div >
          <Dialog.Content maxWidth="450px" id="content" className=" !bg-white/1 backdrop-blur-lg border-b border-white/10">
            <Dialog.Title className="text-[var(--green-6)] " mb="4">Enter your Name to start the Game</Dialog.Title>
            {/* <Dialog.Description size="2" mb="4">
              Enter your Name to start the Game
            </Dialog.Description> */}
            <div id="form">

            <Flex direction="column" gap="3">
              <label className="text-[var(--green-6)]">
                Name: <input name="name" id="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="green" > 
                  Cancel
                </Button>
              </Dialog.Close>
              
                <Button onClick={handleStart} color="green">Start</Button>
             
            </Flex>
            </div>
          </Dialog.Content>
          </div>
        </Dialog.Root>
        {/* <Link href={"/fake-detector/tutorial"}>
          <button> Start Game </button>
        </Link> */}
       
      </main>
    
  
   
  );
}
