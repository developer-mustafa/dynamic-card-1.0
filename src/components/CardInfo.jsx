import Card from "./Card";
import data from "../data/data";
import DateTimeDisplay from "./DateTimeDisplay";
const CardInfo = () => {
  return (
    <div className="flex gap-4 h-screen w-[86%] flex-wrap sm:justify-center  overflow-y-auto">
      {data &&
        data.map((card, index) => {
          return <Card key={index} name={card.name} title={card.title} />;
        })}
      <DateTimeDisplay />
    </div>
  );
};

export default CardInfo;
