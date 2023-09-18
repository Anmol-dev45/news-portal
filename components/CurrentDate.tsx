'use client'
import { AiFillCalendar } from 'react-icons/ai';
import { useState, useEffect } from 'react';

const CurrentDate = () => {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
    const updateDate = () => {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
      const currentDate = new Date();
      const formattedDateString = currentDate.toLocaleDateString('en-US', options);
      setFormattedDate(formattedDateString);

      const midnight = new Date(currentDate);
      midnight.setHours(24, 0, 0, 0);
      const timeUntilMidnight = midnight.getTime() - currentDate.getTime();

      setTimeout(updateDate, timeUntilMidnight);
    };

    updateDate();
  }, []);

  return (
    <div className='flex items-center gap-2 text-dark'>
      <AiFillCalendar className='text-lg' />
      <p className='text-sm font-medium'>{formattedDate}</p>
    </div>
  );
};

export default CurrentDate;
