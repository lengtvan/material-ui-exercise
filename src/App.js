import React from "react";
import "./App.css";
import jobs from "./jobs.json";
import JobCard from "./components/JobCard.js";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import PaperTheme from "./components/Paper.js";
import ButtonAppBar from "./components/ButtonAppBar";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { black } from "@mui/material/colors";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";

const darkTheme = createTheme({ palette: { mode: "dark" } });

function App() {
  return (
    <>
      {/* <ThemeProvider theme={darkTheme}> */}
      <ThemeProvider theme={darkTheme}>
        <ButtonAppBar />
      <CssBaseline />
      <Paper
        sx={{
          bgcolor: "background.default",
        }}
      />
      <div className="App">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          {jobs.slice(0, 5).map((job) => (
            <JobCard job={job} />
          ))}
        </Stack>
        <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
>

  <Grid item xs={3}>
   
  </Grid>   
 <Pagination count={4} color="standard" 
/>
</Grid> 
       
      </div>
      </ThemeProvider>
      
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
