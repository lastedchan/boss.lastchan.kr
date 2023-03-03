import { List, ListItem, ListProps, Typography } from "@mui/material";
import BossHead from "@/components/molecules/bossHead";
import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  content: ReactNode;
};

export default function BossModal({ title, content, ...props }: Props & ListProps) {
  return (
    <List {...props}>
      <BossHead sx={{ justifyContent: "center" }}>
        <Typography p={"0 8px"}>{title}</Typography>
      </BossHead>
      <ListItem sx={{ p: "4px 0", bgcolor: "#555", justifyContent: "center" }}>
        <Typography textAlign={"right"}>{content}</Typography>
      </ListItem>
    </List>
  );
}
