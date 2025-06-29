"use client";

import { Card, Skeleton, Stack } from "@mui/material";

export default function CurrencySkeleton() {
  return (
    <Stack direction={"column"} spacing={1}>
      <Card sx={{ p: 2, borderRadius: 1 }}>
        <Stack direction={"row"} spacing={1}>
          <Skeleton
            variant="rounded"
            animation="wave"
            height={40}
            width={"40%"}
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            height={40}
            width={"60%"}
          />
        </Stack>
      </Card>
      <Card sx={{ p: 2, borderRadius: 1 }}>
        <Stack direction={"row"} spacing={1}>
          <Skeleton
            variant="rounded"
            animation="wave"
            height={40}
            width={"40%"}
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            height={40}
            width={"60%"}
          />
        </Stack>
      </Card>
    </Stack>
  );
}
