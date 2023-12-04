import { useEffect, useState } from "react";

function Progress({ time }) {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <progress value={timeLeft} max={time} />
    </>
  );
}

export default Progress;
