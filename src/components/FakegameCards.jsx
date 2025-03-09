import React from "react";
import { RadioCards } from "@radix-ui/themes";
import Image from "next/image";

function FakegameCards({ data, color, handleClick, selectedValue, radioRef }) {
  return (
    <div>

    {data.desc}
    <RadioCards.Root
      size="3"
      color={color}
      onClick={(e) => handleClick(e)}
      ref={radioRef}
    >
      <RadioCards.Item
        value="1"
        disabled={selectedValue !== null && selectedValue !== "1"}
      > 
        <Image
        src={data.option1}
        alt="option1"

        />
      </RadioCards.Item>
      <RadioCards.Item
        value="2"
        disabled={selectedValue !== null && selectedValue !== "2"}
      >
        <Image
        src={data.option2}
        alt="option2"

        />
      </RadioCards.Item>
    </RadioCards.Root>
    </div>
  );
}

export default FakegameCards;
