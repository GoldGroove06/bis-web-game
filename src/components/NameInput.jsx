import React from 'react';
import { Dialog, Button, Flex } from "@radix-ui/themes";

function NameInput({isOpen,setIsOpen, handleStart}) {
    return (
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
                Name: <input name="name" type="text" value={name} onChange={(e) => setName(e.value)}/>
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
    );
}

export default NameInput;