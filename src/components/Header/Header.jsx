import { Typography, Box } from "@mui/material";

export const Header = () => {
  return (
    <Box
      component="div"
      sx={{
        maxWidth: "100%",
        textAlign: "center",
        backgroundColor: "primary.main",
        boxShadow: "2",
      }}
    >
      <Typography
        sx={{ p: "15px", textTransform: "uppercase", letterSpacing: "0.2rem" }}
        variant="h3"
        component="h1"
        color="secondary"
      >
        Todo List
      </Typography>
    </Box>
  );
};
