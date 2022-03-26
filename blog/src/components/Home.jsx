import StarIcon from "@mui/icons-material/Star";
import { Box, List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../store/Store";

function Home() {
  const [posts, setPosts] = useState([]);

  const history = useNavigate();

  const url = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = React.useContext(StoreContext)

  const pushToFav = (post) => {    
    if (!data.includes(post)) {
      setData([...data, post])
    }
  }

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box
    >
      <List aria-label="contacts">
        {posts.map((post) => (
          <ListItem disablePadding key={post.id}>
            <ListItemButton>
              <ListItemIcon onClick={() => pushToFav(post)} >
                {data.includes(post) ? <StarIcon color="primary"/> : <StarIcon color="disabled"/>}
              </ListItemIcon>
              <ListItemText
                primary={post.title}
                onClick={() => history(`/posts/${post.id}`)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Home;
