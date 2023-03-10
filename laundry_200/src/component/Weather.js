//get input from the weather
import Rain from "../image/rainy.png";
import Clear from "../image/sunny.png";
import Snow from "../image/snowy.png";
import Clouds from "../image/cloudy.png";

function Weather(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "20px",
      }}
    >
      <div> {props.day} </div>
      <div> {props.weather} </div>
      <img
        src={
          props.weather === "Rain"
            ? Clouds
            : props.weather === "Clear"
            ? Clear
            : props.weather === "Snow"
            ? Snow
            : Clouds
        }
        width="100"
        height="100"
      ></img>
    </div>
  );
}

export default Weather;
