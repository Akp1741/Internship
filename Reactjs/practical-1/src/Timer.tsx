import React, { useState, useEffect } from 'react';

  const Timer: React.FC = () => {
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [inputTime, setInputTime] = useState<string>('');

  useEffect(() => {
    if (inputTime === '') return;
const [hrs = 0, mins = 0, secs = 0] = inputTime.split(':').map(Number);
    const newTotalSeconds = hrs * 3600 + mins * 60 + secs;
    setTotalSeconds(newTotalSeconds);

    const timer = setInterval(() => {
      setTotalSeconds(prevSeconds => prevSeconds > 0 ? prevSeconds - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, [inputTime]);

  const formatTime = (): string => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${formatNumber(hrs)}:${formatNumber(mins)}:${formatNumber(secs)}`;};
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div>
      <input type="text" value={inputTime} onChange={(e) => setInputTime(e.target.value)} placeholder="HH:MM:SS" />
      <p>Time remaining: {formatTime()}</p>
    </div>
  );
};
export default Timer;