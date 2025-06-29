"use client";

import { Box, Card, Skeleton, Stack } from "@mui/material";

export default function NewsSkeleton() {
  return (
    <Card sx={{ p: 2 }}>
      <Stack direction={"row"} spacing={1}>
        <Skeleton
          variant="rounded"
          animation="wave"
          height={200}
          width={"100%"}
        />
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 1 }}>
          <Skeleton
            variant="rounded"
            animation="wave"
            height={40}
            width={"100%"}
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            height={70}
            width={"100%"}
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            height={30}
            width={"30%"}
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            height={20}
            width={"20%"}
          />
        </Box>
      </Stack>
    </Card>
  );
}
