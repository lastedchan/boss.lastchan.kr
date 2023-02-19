import styled from "@emotion/styled";
import SelectBossPanel from "@/components/organisms/selectBossPanel";

export default function CrystalCalc() {
  return (
    <Container>
      <SelectBossPanel />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: auto;
  max-width: 1200px;
  width: 100%;
  max-height: 100%;
  background-color: #333;
  overflow: hidden;
`;
