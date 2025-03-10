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
    <main className="flex flex-col items-center justify-center text-center !p-6 bg-white/10 z-30 absolute space-y-4 rounded-xl">
      {/* Game Introduction */}
      <div className=" shadow-lg p-8 rounded-2xl max-w-4xl text-green-400 mb-10">
        <h1 className="text-4xl font-extrabold mb-4">🕵️‍♂️ Fake Detector Challenge!!</h1>
        <div className="text-lg leading-relaxed  !p-2 text-green-300">
          Are you ready to test your skills? <br/>
          This game will challenge your eye for detail and knowledge about<div className="text-2xl"> REAL vs. FAKE products.</div>
        </div>
        <p className="mt-4 text-lg text-green-300">
          {/* <p>🎯 Drag & Drop Challenge – Spot the authentic product!</p>
          <p>🧠 Quiz Battle – Answer MCQs on consumer rights and safety!</p>   */}
          🏆 Leaderboard Glory – Climb the ranks and prove your expertise!<br/>
        </p>
        <p className="mt-4 font-semibold text-green-300">Stay sharp, trust your instincts, and let us begin! 🚀</p>
      </div>

      {/* Start Game Button & Name Input Modal */}
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger>
          <Button className="!text-green-200 !text-3xl !p-2 !mt-2">
            Start Game
          </Button>
        </Dialog.Trigger>

        <Dialog.Content
          maxWidth="450px"
          className="!bg-black/80 backdrop-blur-lg border border-white/10 p-6 rounded-lg shadow-xl"
        >
          <Dialog.Title className="text-green-300 text-2xl font-bold mb-4">
            Enter Your Name to Start the Game
          </Dialog.Title>
          <div>
            <Flex direction="column" gap="3">
              <label className="text-green-200 text-lg">
                Name:{" "}
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/20 text-white px-4 py-2 rounded-lg border border-green-400 focus:outline-none focus:ring focus:ring-green-500"
                />
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="green">Cancel</Button>
              </Dialog.Close>
              <Button onClick={handleStart} color="green">Start</Button>
            </Flex>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </main>
  );
}
