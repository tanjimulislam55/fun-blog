import { Box } from "@mui/material";
import React from "react";

export const StoreContext = React.createContext([[], () => null]);

const Store = ({ children }) => {
  const [favPosts, SetFavPosts] = React.useState([]);
  console.log(favPosts)
  return (
    <>
      <StoreContext.Provider value={[favPosts, SetFavPosts]}>
        <Box>{children}</Box>
      </StoreContext.Provider>
    </>
  );
};
export default Store;
