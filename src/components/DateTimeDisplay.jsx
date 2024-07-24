import  { useState, useEffect } from 'react';

function DateTimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleString('bn-BD', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true // Use 24-hour format
  });

  const formattedDate = currentTime.toLocaleDateString('bn-BD', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="text-center text-white fixed top-20 sm:top-24 right-3 bg-slate-700 p-4 w-[200px] rounded-md">
      <p className="text-2xl font-bold">{formattedTime}</p>
      <p>{formattedDate}</p>
    </div>
  );
}

export default DateTimeDisplay;
