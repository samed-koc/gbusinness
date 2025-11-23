"use client";

import { cities } from "@/app/config/cities";
import { useSettings } from "@/app/context/ThemeContext";
import { splitWeather } from "@/app/utils/splitWeather";
import { Card, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { Suspense } from "react";
import WeatherSkeleton from "../skeletons/WeatherSkeleton";

export default function Weather() {
  //const API = "apikey 0zCvR4sriZcVVcyxeU1Max:68wE1iSaAriO6s0A963yyk";

  const { lang } = useSettings();

  const [weather, setWeather] = React.useState();
  const [forecast, setForecast] = React.useState([]);
  const [city, setCity] = React.useState("munich");

  React.useEffect(() => {
    async function getWeather() {
      try {
        const authHeader = process.env.NEXT_PUBLIC_WEATHER_API_KEY
          ? process.env.NEXT_PUBLIC_WEATHER_API_KEY.startsWith("apikey ")
            ? process.env.NEXT_PUBLIC_WEATHER_API_KEY
            : `apikey ${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
          : undefined;

        const response = await fetch(
          `https://api.collectapi.com/weather/getWeather?data.lang=${lang}&data.city=${city}`,
          {
            headers: {
              "content-type": "application/json",
              authorization: authHeader,
            },
          }
        );

        const text = await response.text();
        if (!response.ok) {
          console.error("Weather API error:", response.status, text);
          return;
        }

        let data;
        try {
          data = JSON.parse(text);
        } catch (err) {
          console.error("Weather API returned invalid JSON:", text);
          return;
        }

        setWeather(data.result[0]);
        setForecast(data.result);
      } catch (err) {
        console.error("Failed to fetch weather:", err);
      }
    }

    getWeather();
  }, [city]);

  return weather ? (
    <Card sx={{ pb: 2, pt: 1, width: "100%", maxWidth: { lg: 400 } }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        pb={2}
      >
        <Tabs
          value={city}
          onChange={(e, value) => setCity(value)}
          scrollButtons
          variant="scrollable"
        >
          {cities.map((city) => (
            <Tab
              key={city}
              value={city}
              label={city}
              sx={{ fontSize: "12px", textTransform: "capitalize" }}
            />
          ))}
        </Tabs>
      </Stack>
      <Stack
        direction={"row"}
        spacing={1}
        alignItems={"center"}
        justifyContent={"space-around"}
        px={3}
      >
        {weather.icon && (
          <img
            src={weather.icon}
            alt={weather.description}
            style={{ width: "100%", maxWidth: "100px", height: "auto" }}
          />
        )}
        <Stack direction={"row"} spacing={1}>
          <Typography variant="h2">
            {weather.degree && splitWeather(weather.degree)}
          </Typography>
          <Typography variant="body1">°C</Typography>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        spacing={1}
        alignItems={"center"}
        width={"100%"}
        justifyContent={"space-around"}
        px={3}
        my={2}
      >
        {forecast.length > 0 &&
          forecast.slice(1, 7).map((f, i) => (
            <Stack direction={"column"} spacing={1} key={i}>
              {f.icon && (
                <img
                  src={f.icon}
                  alt={f.description}
                  style={{ width: "100%", maxWidth: "30px", height: "auto" }}
                />
              )}
              <Stack direction={"row"} spacing={0.5}>
                <Typography variant="body2">
                  {f.degree && splitWeather(f.degree)}
                </Typography>
                <Typography variant="caption" sx={{ fontSize: "10px" }}>
                  °C
                </Typography>
              </Stack>
            </Stack>
          ))}
      </Stack>
    </Card>
  ) : (
    <WeatherSkeleton />
  );
}
