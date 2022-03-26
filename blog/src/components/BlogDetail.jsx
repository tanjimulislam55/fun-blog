import { Box, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function BlogDetail() {
  const [blog, setBlog] = useState();
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com${location.pathname}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setBlog(data);
    };
    fetchData();
    return () => {
      fetchData();
      controller.abort();
    };
  }, [location.pathname]);

  return (
    <>
      {blog && (
        <>
          <Box
          >
            <Typography variant="h5" gutterBottom component="div" sx={{m:2}}>{blog.title}</Typography>
            <Typography variant="body" gutterBottom component="div" sx={{px: 4}}>{blog.body}</Typography>
          </Box>

        </>
      )}
    </>
  );
}
