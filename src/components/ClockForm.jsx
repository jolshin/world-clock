import moment from "moment";

const ClockForm = ({ onSubmit }) => {
  return (
    <div className="clock-form-container">
      <div className="clock-form header">
        <span>Название</span>
        <span>Временная зона</span>
        <span></span>
      </div>
      <form className="clock-form form">
        <input type="text" id="place" name="place"></input>
        <select list="timezones" id="timezone" name="timezone">
          {moment.tz.names().map((timezone, index) => (
            <option key={index} value={timezone}>
              {timezone}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() =>
            onSubmit({ name: place.value, timezone: timezone.value })
          }
        >
          Добавить
        </button>
      </form>
    </div>
  );
};
export default ClockForm;
