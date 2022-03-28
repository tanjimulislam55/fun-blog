import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 600,
        margin: "auto",
        my: 2,
        border: 1,
        borderTop: 0,
        borderBottom: 0,
        borderColor: "grey.200",
        p: 2,
        minHeight: "60vh",
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
