import { useEffect, useState } from "react";
import CrystalCalc from "@/components/templates/crystalCalc";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    !loaded && setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!loaded) return null;

  return <CrystalCalc />;
}
