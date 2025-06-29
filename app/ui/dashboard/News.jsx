"use client";

import { Box, Card, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import NewsSkeleton from "../skeletons/NewsSkeleton";
import { useSettings } from "@/app/context/ThemeContext";

export default function News() {
  const [news, setNews] = React.useState();
  const [currentNews, setCurrentNews] = React.useState(0);
  const { lang } = useSettings();

  React.useEffect(() => {
    async function getNews() {
      const response = await fetch(
        `https://api.collectapi.com/news/getNews?country=${lang}&tag=economy`,
        {
          headers: {
            "content-type": "application/json",
            authorization: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
          },
        }
      );
      const data = await response.json();
      setNews(data.result);
    }

    getNews();
  }, [lang]);

  const handleNextNews = () => {
    if (currentNews < news.length - 1) {
      setCurrentNews(currentNews + 1);
    } else {
      setCurrentNews(0);
    }
  };

  const handlePrevNews = () => {
    if (currentNews > 0) {
      setCurrentNews(currentNews - 1);
    } else {
      setCurrentNews(news.length - 1);
    }
  };

  return news ? (
    <Card sx={{ p: 2 }}>
      <Stack direction={{ xs: "column", lg: "row" }} spacing={2}>
        {news[currentNews].image && (
          <Box
            component={"img"}
            src={news[currentNews].image}
            sx={{
              width: { xs: "100%", lg: "50%" },
              height: "100%",
              maxHeight: 250,
              borderRadius: 1,
            }}
          />
        )}
        <Stack direction={"column"} spacing={2} justifyContent={"center"}>
          <a
            href={news[currentNews].url ? news[currentNews].url : "#"}
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            <Typography variant="h6">{news[currentNews].name && news[currentNews].name}</Typography>
          </a>
          <Typography variant="body1">
            {news[currentNews].description && news[currentNews].description}
          </Typography>
          <Typography variant="caption">{news[currentNews].source && news[currentNews].source}</Typography>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        spacing={1}
        width={"100%"}
        justifyContent={"flex-end"}
      >
        <IconButton onClick={handlePrevNews}>
          <ChevronLeft />
        </IconButton>
        <IconButton onClick={handleNextNews}>
          <ChevronRight />
        </IconButton>
      </Stack>
    </Card>
  ) : (
    <NewsSkeleton />
  );
}
