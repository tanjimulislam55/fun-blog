import StarIcon from "@mui/icons-material/Star";
import { Box, Divider, Grid, List, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../store/Store";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const history = useNavigate();

  const url = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = React.useContext(StoreContext);
  const [loadLimit, setLoadLimit] = useState(11)

  const pushToFav = (post) => {
    let index = data.findIndex(item => item.id === post.id)
    if (index !== -1) {
      setData([...data, post]);
      localStorage.setItem(post.id, JSON.stringify(post))
    }
  };

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const data = res.data.slice(0, loadLimit);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loadLimit]);


  return (
    <Box>
      <List aria-label="contacts">
        {posts.map((post) => (
          <>
            <ListItem disablePadding key={post.id}>
              <ListItemButton>
                <ListItemIcon onClick={() => pushToFav(post)}>
                  {post.id === JSON.parse(localStorage.getItem(post.id))?.id ? <StarIcon color="primary" />
                    : <StarIcon color="disabled" />
                  }
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      variant="h5"
                      gutterBottom
                      component="div"
                      sx={{ fontSize: "1.2em" }}
                    >
                      {post.title}
                    </Typography>
                  }
                  onClick={() => history(`/posts/${post.id}`)}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
      <Grid item xs={4}>
        {loadLimit < 100 ? 
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            sx={{ m: 2, cursor: "pointer" }}
            align="right"
            color="blue"
            onClick={() => setLoadLimit(101)}
          >
            See all posts
          </Typography> : null}
      </Grid>
    </Box>
  );
};

export default Blog;
