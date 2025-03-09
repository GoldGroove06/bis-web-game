import Link from 'next/link';
import React from 'react';
import { Dialog, Button, Flex } from "@radix-ui/themes";

function GameScore({btnText, score, redirect}) {
    return (
        <Dialog.Root >
          <Dialog.Trigger>
            <Button>{btnText}</Button>
          </Dialog.Trigger>

          <Dialog.Content maxWidth="450px">
            <Dialog.Title>Game Score</Dialog.Title>
            
                <div>
                    {score}
                </div>
            
                <Link
                href={redirect}
                >   
                    <Button >{btnText}</Button>
                </Link>
                
             
            
          </Dialog.Content>
        </Dialog.Root>
    );
}

export default GameScore;