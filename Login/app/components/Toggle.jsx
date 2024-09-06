import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box, Typography } from "@mui/material";

export default function LoginSignUpToggle() {
  const [alignment, setAlignment] = React.useState("login");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        width: "95%",
        backgroundColor: "#f5f5f5",
      }}
    >
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{ width: "100%" }}
      >
        <ToggleButton
          value="login"
          aria-label="log in"
          sx={{
            border: "none",
            flex: 1,
            backgroundColor: alignment === "login" ? "#fffff" : "transparent",
            color: alignment === "login" ? "#000" : "#888",
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
            borderRadius: "20px",
          }}
        >
          <Box
            padding={"0px"}
            sx={{
              backgroundColor: "#fffff",
              width: "100%",
              height: "100%",
            //   border: "solid 1px #ccc",
              borderRadius: "20px",
            }}
          >
            <Typography>Log in</Typography>
          </Box>
        </ToggleButton>
        <ToggleButton
          value="signup"
          aria-label="sign up"
          sx={{
            border: "none",
            flex: 1,
            backgroundColor: alignment === "signup" ? "#fffff" : "transparent",
            color: alignment === "signup" ? "#000" : "#888",
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
            borderRadius: "20px",

        }}
        >
          <Box
            padding={"0px"}
            sx={{
              backgroundColor: "e0e0e0",
              width: "100%",
              height: "100%",
            //   border: "solid 1px #ccc",
              borderRadius: "20px",
            }}
          >
            <Typography>Sign up</Typography>
          </Box>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
