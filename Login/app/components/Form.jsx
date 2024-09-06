"use client";
import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "primereact/resources/themes/lara-light-cyan/theme.css";

import { Password } from "primereact/password";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { PasswordTwoTone } from "@mui/icons-material";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#F3F6F9",
    border: "1px solid",
    borderColor: "#E0E3E7",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    // ...theme.applyStyles('dark', {
    //   backgroundColor: '#1A2027',
    //   borderColor: '#2D3843',
    // }),
  },
}));

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "400" }); // Ensure weight is specified

export default function FormInput() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [value, setValue] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.validity.valid) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  return (
    <>
      <Grid marginY={"20px"} marginTop={"20px"}>
        <Grid
          display={"flex"}
          sx={{ fontFamily: jakarta.style.fontFamily, fontWeight: 400 }}
        >
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr" },
              gap: 2,
            }}
          >
            <FormControl variant="standard">
              <InputLabel shrink htmlFor="bootstrap-input">
                First Name
              </InputLabel>
              <BootstrapInput id="bootstrap-input" />
            </FormControl>
          </Box>
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr" },
              gap: 2,
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <FormControl variant="standard">
              <InputLabel shrink htmlFor="bootstrap-input">
                Last Name
              </InputLabel>
              <BootstrapInput id="bootstrap-input" />
            </FormControl>
          </Box>
        </Grid>

        <Box
          width={"95%"}
          marginTop={"20px"}
          sx={{ fontFamily: jakarta.style.fontFamily, fontWeight: 400 }}
        >
          <InputLabel shrink>Email</InputLabel>
          <TextField
            required
            //   label="Email"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? "Please enter a valid email" : ""}
            inputProps={{
              type: "email",
            }}
            fullWidth
            id="fullWidth"
          />
        </Box>
        <Box
          marginTop={"20px"}
          className="card flex justify-content-center "
          sx={{ fontFamily: jakarta.style.fontFamily, fontWeight: 400 }}
        >
          <InputLabel shrink>Password</InputLabel>
          <Password
            value={value}
            onChange={(e) => setValue(e.target.value)}
            toggleMask
            className="p-inputtext-lg"
            width={"100%"}
          />
        </Box>
        <Box
          marginTop={"20px"}
          className="card flex justify-content-center "
          sx={{ fontFamily: jakarta.style.fontFamily, fontWeight: 400 }}
        >
          <InputLabel shrink>Re Password</InputLabel>
          <Password
            // onChange={(e) => setValue(e.target.value)}
            toggleMask
            className="p-inputtext-lg"
            width={"100%"}
          />
        </Box>
        <Button
          sx={{
            width: "95%",
            border: "solid 1px gray",
            marginTop: "50px",
            // backgroundColor: "#5848a8",
            color: "white",
            fontWeight: "bold",
            backgroundImage:
              "radial-gradient( farthest-corner at 50% 99%, #AD49E1 5%, #5848a8 95%)",
          }}
        >
          Sign Up
        </Button>
        <Typography
          marginTop={"20px"}
          textAlign={"center"}
          sx={{ fontFamily: jakarta.style.fontFamily, fontWeight: 400 }}
        >
          Dont have an account?{" "}
          <Link href={"/"} color="#5848a8">
            Create Account
          </Link>
        </Typography>
      </Grid>
    </>
  );
}
