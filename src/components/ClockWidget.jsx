import { useEffect, useState } from 'react';
import ClockForm from './ClockForm';
import ClockViewer from './ClockViewer';
import React from 'react';
import moment from 'moment-timezone'

const ClockWidget = () => {
  const [clocks, setClocks] = useState([{name: "Irkutsk", timezone: "Etc/GMT-8"}, {name: "Vladivostok", timezone: "Etc/GMT-10"}]);
  const [time, setTime] = useState(moment());

  const refreshTime = React.useCallback(() => {
    setTime(moment());
  }, [setTime]);
  
  useEffect(() => {
    const intervalId = setInterval(refreshTime, 1000);
    return () => clearInterval(intervalId);
  }, [refreshTime]);

  const addClock = (newClock) => {
    if (!moment.tz.names().includes(newClock.timezone)) {
      alert("Некорректаня временная зона");
      return;
    }
    if (newClock.name === "") {
      alert("Некорректное название");
      return;
    }
    setClocks((prevClocks) => {
      if (prevClocks) {
        return [...prevClocks, newClock];
      } else {
        return [newClock];
      }
    });
  }

  const removeClock = (clockToRemove) => {
    setClocks((prevClocks) => prevClocks.filter(clock => clock !== clockToRemove));
  }

  return (
    <div className="clock-widget">
      <ClockForm onSubmit={addClock}/>
      <div className='clock-viewer-container'>
        {clocks.map((clock, index) => (
          <ClockViewer key={index} clock={clock} onDelete={removeClock} />
        ))}
        </div>
    </div>
  );
}
export default ClockWidget;