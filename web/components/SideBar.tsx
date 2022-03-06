import styled from "@emotion/styled";
import { Group } from "@mui/icons-material";
import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import { HomeContent } from "../routes/Home";

type SideBarProps = {
  value?: HomeContent;
  onChange: (v: HomeContent) => void;
};

export const SideBar = ({ onChange, value }: SideBarProps) => {
  return (
    <Wrapper>
      <MenuList>
        <MenuItem
          selected={value === HomeContent.Accounts}
          onClick={() => onChange(HomeContent.Accounts)}
        >
          <ListItemIcon>
            <Group fontSize="small" />
          </ListItemIcon>
          <ListItemText>账户</ListItemText>
        </MenuItem>
      </MenuList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 320px;
  height: 100vh;
  background: #d6dbdf;
`;
