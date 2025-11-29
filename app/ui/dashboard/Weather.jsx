"use client";

import { cities } from "@/app/config/cities";
import { useSettings } from "@/app/context/ThemeContext";
import { splitWeather } from "@/app/utils/splitWeather";
import { Card, Stack, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import WeatherSkeleton from "../skeletons/WeatherSkeleton";

export default function Weather() {
  const { lang } = useSettings();

  const [weather, setWeather] = React.useState(null);
  const [forecast, setForecast] = React.useState([]);
  const [city, setCity] = React.useState("munich");

  // 👇 SSR hydration için çözüm
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    async function getWeather() {
      try {
        const response = await fetch(
          `https://api.collectapi.com/weather/getWeather?data.lang=${lang}&data.city=${city}`,
          {
            headers: {
              "content-type": "application/json",
              authorization: `apikey ${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
            },
          }
        );

        const data = await response.json();
        console.log("API RESPONSE:", data);

        if (!data?.result || !Array.isArray(data.result)) {
          console.error("API result formatı yanlış:", data);
          return;
        }

        setWeather(data.result[0]);
        setForecast(data.result);
      } catch (err) {
        console.error("Weather API fetch error:", err);
      }
    }

    if (isClient) getWeather(); // 👈 sadece client’ta fetch et
  }, [city, lang, isClient]);

  // 🛑 SSR sırasında hiçbir render yapılmaz → hydration mismatch biter
  if (!isClient) return null;

  return weather ? (
    <Card sx={{ pb: 2, pt: 1, width: "100%", maxWidth: { lg: 400 } }}>
      {/* Tabs */}
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
          {cities.map((c) => (
            <Tab
              key={c}
              value={c}
              label={c}
              sx={{ fontSize: "12px", textTransform: "capitalize" }}
            />
          ))}
        </Tabs>
      </Stack>

      {/* Main weather */}
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

      {/* Forecast */}
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
