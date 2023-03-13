import CrystalCalc from "@/components/templates/crystalCalc";
import { Box } from "@mui/material";

export default function CalcCrystal() {
  return (
    <Box m={"auto"} p={0.5} height={"100%"} overflow={"hidden"}>
      <CrystalCalc />
    </Box>
  );
}
