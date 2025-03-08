import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import TutorialCard from "@/components/TutorialCard";
import { Dialog, Button, IconButton } from "@radix-ui/themes";
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";

function Tutorial({tutData, redirect,isOpen,setIsOpen}) {
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
              <Button>Start Tutorial</Button>
            </Dialog.Trigger>
  
            <Dialog.Content maxWidth="450px">
              <Dialog.Title>Tutorial</Dialog.Title>
              
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
                  <Button> Tutorial Complete </Button>
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