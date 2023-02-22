import CrystalCalc from "@/components/templates/crystalCalc";
import { useEffect, useState } from "react";

export default function CrystalCalcIndex() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    !loaded && setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!loaded) return null;

  return <CrystalCalc />;
}
