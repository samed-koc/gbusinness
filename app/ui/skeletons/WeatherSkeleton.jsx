"use client";

import { Box, Card, Skeleton, Stack } from "@mui/material";

export default function WeatherSkeleton() {
  return (
    <Card sx={{ padding: 2, width: "100%", maxWidth: 400, margin: 2 }}>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        my={2}
        spacing={2}
      >
        <Skeleton
          variant="rounded"
          animation="wave"
          height={20}
          width={"100%"}
        />
        <Skeleton
          variant="rounded"
          animation="wave"
          height={100}
          width={"100%"}
        />
        <Skeleton
          variant="rounded"
          animation="wave"
          height={40}
          width={"100%"}
        />
      </Stack>
    </Card>
  );
}
