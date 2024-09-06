"use client";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Kristi } from "next/font/google";
import styled from "styled-components";
import ToggleButtons from "./components/Toggle";
import FormInput from "./components/Form";
import { Plus_Jakarta_Sans } from "next/font/google";

// Initialize the font with the available weight
const kristi = Kristi({ subsets: ["latin"], weight: "400" }); // Ensure weight is specified
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "400" }); // Ensure weight is specified

const StyledHeading = styled.h1`
  font-size: 24px;
  background: linear-gradient(to right, #ffffff, #1f316f);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  text-shadow: none;
`;
const StyledHeadingTwo = styled.h1`
  font-size: 14px;
  background: linear-gradient(to right, #ffffff, #1f316f);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  text-shadow: none;
`;

export default function Home() {
  return (
    <>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        sx={{
          backgroundImage: "linear-gradient(to left, #201348, #0d0d1b)",
        }}
      >
        <Typography
          color={"#5848a8"}
          sx={{ fontFamily: kristi.style.fontFamily, fontWeight: 400 }} // Apply fontFamily and weight here
          paddingLeft={"16px"}
          fontSize={"48px"}
        >
          wllt
        </Typography>
        <Grid paddingLeft={"20px"} sx={{ fontFamily: jakarta.style.fontFamily, fontWeight: 400 }}>
          <StyledHeading>Get started now</StyledHeading>
          <StyledHeadingTwo paddingBottom={"20px"}>
            Create an account or log in to app.
          </StyledHeadingTwo>
        </Grid>
      </Grid>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        paddingTop={"20px"}
        flexDirection={"column"}
        paddingX={"20px"}
        sx={{ fontFamily: jakarta.style.fontFamily, fontWeight: 400 , backgroundColor:"#E9EFEC"}}
      >
        <ToggleButtons />
        <Grid marginTop={"10px"}>
          <FormInput />
        </Grid>
      </Grid>
    </>
  );
}
