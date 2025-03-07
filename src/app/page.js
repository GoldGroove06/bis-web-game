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
    localStorage.setItem("name", name);
    router.push('/fake-detector/tutorial')
 
  }

  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Homepage with content related to the BIS
        <Dialog.Root open={isOpen} onOpenChange={(isOpen) => setIsOpen(isOpen)}>
          <Dialog.Trigger>
            <Button>Start Game</Button>
          </Dialog.Trigger>

          <Dialog.Content maxWidth="450px">
            <Dialog.Title>Add Name</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Enter your Name to start the Game
            </Dialog.Description>

            <Flex direction="column" gap="3">
              <label>
                Name: <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              
                <Button onClick={handleStart}>Start</Button>
             
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
        {/* <Link href={"/fake-detector/tutorial"}>
          <button> Start Game </button>
        </Link> */}
      </main>
    </div>
  );
}
