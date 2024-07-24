import React, { useState, useEffect } from "react";

interface DateTimeDisplayProps {}

const DateTimeDisplay: React.FC<DateTimeDisplayProps> = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleString("bn-BD", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  const formattedDate = currentTime.toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="text-center text-white m-auto md:fixed top-[60px] md:right-3 z-30 bg-slate-700 p-4 w-[200px] rounded-md">
      <p className="text-2xl font-bold">{formattedTime}</p>
      <p>{formattedDate}</p>
    </div>
  );
};

export default DateTimeDisplay;
