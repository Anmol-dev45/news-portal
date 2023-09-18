'use client'
import { useState, useEffect } from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
const CurrentTime = () => {
  const [formattedTime, setFormattedTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const amOrPm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const timeString = `${formattedHours}:${formattedMinutes} ${amOrPm}`;
      setFormattedTime(timeString);

      const nextMinute = new Date(currentTime);
      nextMinute.setSeconds(60, 0);
      const timeUntilNextMinute = nextMinute.getTime() - currentTime.getTime();

      setTimeout(updateTime, timeUntilNextMinute);
    };

    updateTime();
  }, []);

  return (
    <div className='flex items-center gap-2 text-dark'>
      <AiFillClockCircle className='text-lg' />
      <p className='text-sm font-medium'>{formattedTime}</p>
    </div>
  );
};

export default CurrentTime;

