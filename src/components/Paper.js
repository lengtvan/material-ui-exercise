import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';



const darkTheme = createTheme({ palette: { mode: "dark" } });

const Item = styled(Paper)(({ theme= darkTheme}) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));


export default function Elevation() {
  return (
    <Grid container spacing={2}>
      {
        <Grid item xs={6} sm={1}>
          <ThemeProvider theme={darkTheme}>
          <CssBaseline />
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr" },
                gap: 2,
              }}
            >
              {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {`elevation=${elevation}`}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      }
    </Grid>
  );
}
