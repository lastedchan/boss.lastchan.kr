import { Box } from "@mui/material";
import CrystalCalc from "@/components/templates/crystalCalc";

export default function Home() {
  return (
    <Box m={"auto"} p={0.5} height={"100%"} overflow={"hidden"}>
      <CrystalCalc />
    </Box>
  );
}
