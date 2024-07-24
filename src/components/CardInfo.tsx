import React from "react";
import Card from "./Card";
import data from "../data/data";
import DateTimeDisplay from "./DateTimeDisplay";

interface CardData {
  name: string;
  title: string;
}

const CardInfo: Array = () => {
  return (
    <div className="flex gap-4 h-screen w-[86%] flex-wrap sm:justify-center overflow-y-auto">
      <DateTimeDisplay />
      {Array.isArray(data) &&
        data.map((card: CardData, index) => (
          <Card key={index} name={card.name} title={card.title} />
        ))}
    </div>
  );
};

export default CardInfo;


