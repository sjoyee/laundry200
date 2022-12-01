import Navigation from "./NavigationBar.js";
import Weather from "./Weather.js";
import useWindowDimensions from "./WindowSize.js";
import { Grid, Toolbar, Typography } from "@mui/material";
import axios from 'axios';
import React, { useState, useEffect } from 'react';



const circle = (e) => {
  return {
    display: "flex",
    width: e,
    height: e,
    backgroundColor: "#E9F7FF",
    borderRadius: "50%",
    marginRight: "30px",
  };
};

const bar = (percentage, color) => {
  return {
    display: "flex",
    width: percentage,
    height: "30px",
    background: color,
    borderRadius: "40px",
    marginBottom: "150px",
  };
};

const styles = {
  horizontal: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "40px",
    justifyContent: "space-between",
    paddingRight: "10%",
    paddingLeft: "10%",
    marginTop: "50px",
  },
  vertical: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

const WeatherPage = () => {
  const { height, width } = useWindowDimensions();
  const [ arr ,setarr ] = useState([])


  const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=36&lon=127&appid=3a3acc40ffe3a923536f1a5f132edcd6"

  
  const jsonArray = new Array(40)

  useEffect(()=> {
    let unmounted = false;
    async function getWeather() {
      let response = await axios.get(weatherUrl);
      if (!unmounted) {
        for (var i=0 ; i<response.data.list.length; i++) {
          jsonArray[i] = ((response.data.list[i]))
        }
        setarr(jsonArray)
      }
    }
    getWeather()
    console.log(jsonArray)
    return() => {
      unmounted = true
    }
  }, [])

  return (
    <>
      <Navigation />
      <Toolbar />
      <div style={styles.horizontal}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography>Not Recommended</Typography>
          </Grid>
          <Grid item>
            <Typography>Recommended</Typography>
          </Grid>
        </Grid>
      </div>

      <div style={styles.horizontal}>
        <div style={bar(arr[0].main.humidity + "%", "skyblue")}></div>
        <div style={bar(100-arr[0].main.humidity + "%", "red")}></div>
      </div>

      {/* weather forecast for the day */}
      <div style={styles.vertical}>
        <div> Weather Forecast for Today </div>
        <div style={styles.horizontal}>
          <div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginRight: "50px",
              }}
            >
            {arr[0].main.temp}degrees
            </div>{" "}
            Celcius{" "}
          </div>

          <div style={circle("60px")} />

          <div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginRight: "50px",
              }}
            >
              {" "}
              60%{" "}
            </div>{" "}
            humidity{" "}
          </div>
          <div style={circle("60px")} />

          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginRight: "50px",
            }}
          >
            {" "}
            Cloudy{" "}
          </div>
        </div>

        {/* weather forecast for the week */}
        <div style={{ marginTop: "60px" }}> Weather Forecast for the week  - humidity</div>
        <div style={styles.horizontal}>
          <Weather day={arr[8].dt_txt} weather= {arr[8].weather[0].main}/>
          <Weather day={arr[16].dt_txt} weather={arr[16].weather[0].main} />
          <Weather day={arr[24].dt_txt} weather={arr[24].weather[0].main} />
          <Weather day={arr[32].dt_txt} weather={arr[32].weather[0].main}/>

        </div>

        <div style={{ marginTop: "60px" }}> Weather Forecast for today  - by time</div>
        <div style={styles.horizontal}>
          <Weather day={arr[0].dt_txt} weather={arr[0].weather[0].main} />
          <Weather day={arr[1].dt_txt} weather={arr[1].weather[0].main} />
          <Weather day={arr[2].dt_txt} weather={arr[2].weather[0].main} />
          <Weather day={arr[3].dt_txt} weather={arr[3].weather[0].main} />
          <Weather day={arr[4].dt_txt} weather={arr[4].weather[0].main} />
        </div>
      </div>
    </>
  );
};

export default WeatherPage;
