import {
  Card,
  CardContent,
  Container,
  Grid,
  InputAdornment,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

function BakersCalc() {
  const [flour, setFlour] = useState<number>();
  const [flour2, setFlour2] = useState<number>();
  const [flour2Percent, setFlour2Percent] = useState<number>();

  useEffect(() => {
    setFlour2Percent(
      flour2 && flour ? Math.round((flour2 / flour) * 100) : undefined
    );
  }, [flour, flour2]);

  useEffect(() => {
    setFlour2(
      flour && flour2Percent
        ? Math.round((flour * flour2Percent) / 100)
        : undefined
    );
  }, [flour, flour2Percent]);

  return (
    <Card
      style={{
        margin: "auto",
        marginLeft: "25vw",
        maxWidth: "50vw",
        backgroundColor: "#f5f5f5",
      }}
    >
      <CardContent>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2">Bakers Calculator</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                This is a simple bakers calculator to help you calculate the
                amount of ingredients you need to use for your recipe.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Flour (g)"
                variant="outlined"
                type="number"
                style={{ width: "35%", marginRight: "5%" }}
                onChange={(e) => {
                  setFlour(parseInt(e.target.value));
                }}
                value={flour}
              />
              <TextField
                id="outlined-basic2"
                label="Flour percentage"
                variant="outlined"
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                style={{ width: "35%", marginRight: "5%" }}
                disabled={true}
                value={100}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Flour 2 (g)"
                variant="outlined"
                type="number"
                style={{ width: "35%", marginRight: "5%" }}
                onChange={(e) => {
                  setFlour2(parseInt(e.target.value));
                }}
                value={flour2}
              />
              <TextField
                id="outlined-basic2"
                label="Flour 2 percentage"
                variant="outlined"
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                style={{ width: "35%", marginRight: "5%" }}
                onChange={(e) => {
                  setFlour2Percent(parseInt(e.target.value));
                }}
                value={flour2Percent}
              />
            </Grid>
          </Grid>
        </Container>
      </CardContent>
    </Card>
  );
}
export default BakersCalc;
