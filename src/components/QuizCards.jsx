import React from "react";
import { RadioCards, Flex } from "@radix-ui/themes";

function QuizCards({ data, color, handleClick, selectedValue, radioRef }) {
  return (
    <div>
        <Flex direction="column" gap="3" maxWidth="200px">
      {data.question}
      <RadioCards.Root
        size="3"
        color={color}
        className="bg-[--var(--blue-9)]"
        onClick={(e) => handleClick(e)}
        ref={radioRef}
      >
        <RadioCards.Item
          value="1"
          disabled={selectedValue !== null && selectedValue !== "1"}
        >
          {data.option1}
        </RadioCards.Item>
        <RadioCards.Item
          value="2"
          disabled={selectedValue !== null && selectedValue !== "2"}
        >
          {data.option2}
        </RadioCards.Item>
        <RadioCards.Item
          value="3"
          disabled={selectedValue !== null && selectedValue !== "3"}
        >
          {data.option2}
        </RadioCards.Item>
        <RadioCards.Item
          value="4"
          disabled={selectedValue !== null && selectedValue !== "4"}
        >
          {data.option2}
        </RadioCards.Item>
      </RadioCards.Root>
      </Flex>
    </div>
  );
}

export default QuizCards;
