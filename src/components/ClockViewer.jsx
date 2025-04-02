import ClockUnit from "./ClockUnit";
import moment from "moment-timezone";

const ClockViewer = ({ clock, onDelete }) => {
  const { name, timezone } = clock;

  const setTime = (timezone) => {
    const time = moment().tz(timezone).format("HH:mm:ss");
    return time;
  };

  return (
    <div className="clock-viewer">
      <div className="clock-header">

        <span>{name}</span>
        <button type="button" onClick={() => onDelete(clock)}>
        &#10005;
        </button>
      </div>
        <ClockUnit time={setTime(timezone)} name={name}></ClockUnit>
      
    </div>
  );
};
export default ClockViewer;
