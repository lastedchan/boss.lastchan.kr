import CrystalCalc from "@/components/templates/crystalCalc";
import Head from "next/head";

export default function CrystalCalcIndex() {
  return (
    <>
      <Head>
        <title>LASTCHAN - 보스 결정 수익 계산기</title>
        <meta name={"og:title"} content={"LASTCHAN - 보스 결정 수익 계산기"} />
        <meta
          name={"og:description"}
          content={"주에 얼마를 버는지, 이번 주에 얼마를 벌었는지, 메이플스토리 보스 결정 수익을 쉽게 계산하고, 체크해보세요."}
        />
        <meta name={"og:image"} content={"/crystal.png"} />
      </Head>
      <CrystalCalc />
    </>
  );
}
