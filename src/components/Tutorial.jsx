
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import TutorialCard from "@/components/TutorialCard";
import { Dialog, Button, IconButton } from "@radix-ui/themes";
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";

function Tutorial({tutData, redirect}) {
    const [ track, setTrack ] = useState(0)

    const handlePrev = () => {
      if (track !== 0) setTrack(track - 1) 
    }
  
    const handleNext = () => {
      if (track !== tutData.length -1 )  setTrack(track + 1)
    }
  
    return (
      <div>
      
        <div>
          <Dialog.Root >
            <Dialog.Trigger>
              <Button >Start Tutorial</Button>
            </Dialog.Trigger>
            <div className="flex items-center justify-center">
            <Dialog.Content maxWidth="580px" maxHeight="" className="!bg-zinc-900 ">
              <Dialog.Title className="text-green-400">Tutorial</Dialog.Title>
        
              <Dialog.Description size="2" mb="4" className="text-green-400">
              {tutData[track].desc}
              </Dialog.Description>
              
              <TutorialCard
              
                content={tutData[track].content}
                imgsrc={tutData[track].img}
              />
             <div className="flex justify-between items-center mt-4">
  {track !== 0 && (
    <IconButton radius="full" onClick={handlePrev} className="">
      <ArrowLeftIcon />
    </IconButton>
  )}

  {track !== tutData.length - 1 ? (
    <IconButton radius="full" onClick={handleNext}>
      <ArrowRightIcon />
    </IconButton>
  ) : (
    <Link href={redirect}>
      <Button color="green" className="!p-2">Tutorial Complete</Button>
    </Link>
  )}
</div>

              
            </Dialog.Content>
            </div>
          </Dialog.Root>
        </div>
        <div>
          
        </div>
      </div>
    );
  }
  
  export default Tutorial;