'use client'

import React, { useEffect, useState } from 'react';


interface DateTimeProps {
  dayId?: string;
  monthId?: string;
  timeId?: string;
}

export default function DateTime({ dayId = "Day", monthId = "Month", timeId = "Time" }: DateTimeProps) {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    const updateDateTime = (): void => {
      const currentDate = new Date();

      // Update day
      const currentDay: string = days[currentDate.getDay()];
      setDay(`${currentDay},`);

      // Update month
      const currentMonth: string = new Date().toLocaleDateString('en-US', { month: 'long' });
      setMonth(`${currentMonth} at `);

      // Update time
      const currentTime: string = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      setTime(currentTime);
    };

    // Set initial date and time
    updateDateTime();

    // Update date and time every second
    const intervalId: NodeJS.Timeout = setInterval(updateDateTime, 1000);

    // Cleanup interval on component unmount
    return (): void => clearInterval(intervalId);
  }, [days]);

  return (
    <div className="text-[1em] text-copy-primary dark:text-copy-primary font-Louis">
      <span id={dayId}>{day}</span>
      <span id={monthId}>{month}</span>
      <span id={timeId}>{time}</span>
    </div>
    );

}