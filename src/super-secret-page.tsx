import { Typography } from "@mui/material";
import Spiral from "./components/Spiral";
import { Margin } from "@mui/icons-material";

export default function SuperSecretPage() {
  return (
    <>
      <div className="centered">
        <h1>Super Secret Page</h1>
        <Spiral />
        <Typography>OOOoooOOO you wanna hire me so bad OOOOoooOOO</Typography>
      </div>
    </>
  );
}
