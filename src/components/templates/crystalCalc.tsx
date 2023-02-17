import styled from "@emotion/styled";
import SelectBossPanel from "@/components/organisms/selectBossPanel";
import CharacterTabs from "@/components/organisms/characterTabs";
import useCharacterList from "@/hooks/useCharacterList";

export default function CrystalCalc() {
  const { idx } = useCharacterList();
  return (
    <Container>
      <CharacterTabs />
      {idx >= 0 && <SelectBossPanel />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  margin: auto;
  max-width: 600px;
  width: 100%;
  height: 100%;
  background-color: #333;
  overflow: hidden;
`;
