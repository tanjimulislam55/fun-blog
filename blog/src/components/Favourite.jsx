import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { StoreContext } from "../store/Store";

const Favourite = ({ posts }) => {
  const [data, setData] = React.useContext(StoreContext);

  return (
    <>
      {data.length > 0 ? (
        <>
          {data.map((posts) => (
            <>
              <Box key={posts.id}>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  sx={{ px: 6 }}
                >
                  {posts.title}
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  divider={<Divider orientation="vertical" flexItem />}
                  justifyContent="center"
                  alignItems="center"
                >
                  <DeleteIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      const item = data.filter(
                        (ele) => ele.id !== posts.id
                        );
                        setData(item);
                        localStorage.removeItem(posts.id)
                    }}
                  />
                  <Typography
                    variant="body1"
                    gutterBottom
                    component="div"
                    sx={{ px: 2 }}
                  >
                    {posts.body}
                  </Typography>
                </Stack>
                <Divider sx={{ m: 2 }} />
              </Box>
            </>
          ))}
        </>
      ) : (
        <>
          <Box>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              align="center"
            >
              No Favourite Posts Found!!
            </Typography>
          </Box>
        </>
      )}
    </>
  );
};

export default Favourite;
