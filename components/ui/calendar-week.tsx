import React from "react";
import { weekObject } from "@/lib/utils";

export default function CalendarWeek() {
  const daysArray = Object.values(weekObject.days);
  const hoursArray = Object.values(weekObject.hours);
  console.log(daysArray);
  return (
    <div className="m-4">
      <div className="grid grid-cols-8 gap-2 col-start-2 text-center">
        {daysArray.map((day) => (
          <div className="" key={day}>
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 text-start">
        {hoursArray.map((hour) => (
          <div className="" key={hour}>
            {hour}
          </div>
        ))}
      </div>
    </div>
  );
}
