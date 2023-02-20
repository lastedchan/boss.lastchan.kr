import styled from "@emotion/styled";

type Props = {
  idx: number;
  value: number;
  children?: JSX.Element | JSX.Element[];
};

export default function TabPanel({ idx, value, children }: Props) {
  return <Container hidden={idx !== value}>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
