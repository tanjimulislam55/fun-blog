import React from 'react'
import { StoreContext } from "../store/Store";
import { Box, Typography, Divider , Stack} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


const Favourite = ({ posts }) => {
  const [data, setData] = React.useContext(StoreContext)

    return (
      <>{
        data.map((posts, index) => (
          <>
          <Box
          >
            <Typography variant="h5" gutterBottom component="div">
        {posts.title} </Typography>
        <Stack direction="row">
        <DeleteIcon onClick={() => {
              const item = data.filter((ele) => ele.id !== posts.id)
              setData(item)
            } 
          }
        />
        <Typography variant="body" gutterBottom component="div" sx={{px: 2}}>
        {posts.body} </Typography>
        </Stack>
        <Divider sx={{m: 2}} />
          </Box>

          </>
        ))
        
      }
      </>
    )
  };
  
  export default Favourite;
  