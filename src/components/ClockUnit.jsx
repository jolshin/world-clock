const ClockUnit = ({ name, time }) => {

  const updateHourHand = (time) => {
    const hour = time.split(":")[0];
    const hourHand = { transform: `rotate(${(hour % 12) * 30}deg)` };
    return hourHand;
  };

  const updateMinuteHand = (time) => {
    const minute = time.split(":")[1];
    const minuteHand = { transform: `rotate(${minute * 6}deg)` };
    return minuteHand;
  };

  const updateSecondHand = (time) => {
    const second = time.split(":")[2];
    const secondHand = { transform: `rotate(${second * 6}deg)` };
    return secondHand;
  };

  return (
    <div className="clock-unit">
      <div className="clock">
        <div className="hour-hand" style={updateHourHand(time)}></div>
        <div className="minute-hand" style={updateMinuteHand(time)}></div>
        <div className="second-hand" style={updateSecondHand(time)}></div>
      </div>
    </div>
  );
};

export default ClockUnit;
