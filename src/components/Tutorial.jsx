
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
  
            <Dialog.Content maxWidth="550px" className="!bg-zinc-900">
              <Dialog.Title className="text-green-400">Tutorial</Dialog.Title>
              <Dialog.Description size="2" mb="4" className="text-white">
              {tutData[track].desc}
              </Dialog.Description>
              
              <TutorialCard
              
                content={tutData[track].content}
                imgsrc={tutData[track].img}
              />
              {track !== 0  ?
              <IconButton radius="full" onClick={handlePrev}>
                  
                      <ArrowLeftIcon />
               
              </IconButton> : ""
                  }       
              
              {track !== tutData.length - 1  ? 
              <IconButton radius="full" onClick={handleNext}>
                
                      <ArrowRightIcon />
                
              </IconButton> :
                  <Link href={redirect}>
                  <Button color="green"> Tutorial Complete </Button>
                </Link>
              }
              
            </Dialog.Content>
          </Dialog.Root>
        </div>
        <div>
          
        </div>
      </div>
    );
  }
  
  export default Tutorial;