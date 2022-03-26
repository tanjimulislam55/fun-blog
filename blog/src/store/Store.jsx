import React from 'react'
import { Box } from "@mui/material";

export const StoreContext = React.createContext(); 

const Store = ({children}) => {

    const [favPosts, SetFavPosts] = React.useState([])
    return <>
        <StoreContext.Provider value={[favPosts, SetFavPosts]}>
        <Box
        sx={{
          width: "60%",
          maxWidth: "60%",
          margin: "auto",
        }}
      >
            {children}
       </Box>
        </StoreContext.Provider>
    </>
}
export default Store;