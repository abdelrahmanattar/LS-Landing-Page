import React, { useState } from "react";

import {
  Toolbar,
  Grid,
  Avatar,
  Typography,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import { AccountCircle, ExitToApp } from "@mui/icons-material";
import NavigationBarStyles from "./NavigationBar.Styles";
import { useNavigate } from "react-router-dom";
import logo from "@Assets/logo.png";
import useLogout from "@Hooks/useLogout";
import { styled } from "@mui/system";
import LogoTitle from "@Components/LogoTitle/LogoTitle";



const UserMenu = styled(Menu)(({ theme }) => ({
  "& .menuPaper": {
    width: theme.spacing(18),
    boxShadow: theme.shadows.main,
  },
  "& .menuList": {
    padding: 0,
  },
}));

const NavigationBar = ({ text, user, isDisabled }) => {
  const navigate = useNavigate();
  const [anchor, setAnchor] = useState(null);
  const toggleAnchor = (event) => {
    if (isDisabled) {
      return;
    }
    if (anchor) {
      setAnchor(null);
    } else {
      setAnchor(event.currentTarget);
    }
  };

  const logout = useLogout();

  return (
    <NavigationBarStyles isDisabled={isDisabled}>
      <Box className="appBar">
        <Toolbar className="logoToolbar">
          <Grid container alignItems="center">
            <LogoTitle isDisabled={isDisabled}/>
            <Box className="userSection" onClick={toggleAnchor}>
              <Avatar>
                <AccountCircle className="icon" />
              </Avatar>
              <Typography className="userName" variant="body1">
                {user.fullName}
              </Typography>
              <UserMenu
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={() => setAnchor(null)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                PopoverClasses={{
                  root: "popoverRootOverride",
                  paper: "menuPaper",
                }}
                MenuListProps={{
                  className: "menuList",
                }}
              >
                <MenuItem
                  onClick={() => {
                    toggleAnchor();
                    logout();
                  }}
                >
                  <ListItemIcon>
                    <ExitToApp fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </UserMenu>
            </Box>
          </Grid>
        </Toolbar>
      </Box>
    </NavigationBarStyles>
  );
};

export default NavigationBar;
