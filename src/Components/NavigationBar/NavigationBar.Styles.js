import { styled } from "@mui/system";
import { Box } from "@mui/material";


export const NavigationBarStyles = styled(Box)(({ theme, isDisabled }) => ({
  "& .appBar": {
    backgroundColor: theme.palette.common.white,
    boxShadow: "none",
    border: `1px solid ${theme.palette.grey[300]}`,
    zIndex:1,
    position: "fixed",
    width:"100%",
  },
  "& .logoImage": {
    height: theme.spacing(5),
    marginRight: theme.spacing(2),
  },
  "& .title": {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: "bold",
    color: theme.palette.text.primary,
    lineHeight:1,
    "&.active": {
      cursor: "pointer",
    },
  },
  "& .subtitle": {
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.text.secondary,
    display:"flex",
    justifyContent:"right",
    marginBottom:0,
  },
  "& .userSection": {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    padding: theme.spacing(0.5),
    borderRadius: theme.spacing(3),
    paddingRight: theme.spacing(2.5),
    "&:hover": {
      backgroundColor: theme.palette.grey.main,
      ...(isDisabled && {
        backgroundColor: "transparent",
        cursor: "default",
      }),
    },
  },
  "& .userName": {
    marginLeft: theme.spacing(1),
    fontSize: theme.typography.pxToRem(16),
    fontWeight: "bold",
    color: theme.palette.text.primary,
  },
  "& .icon": {
    fontSize: theme.typography.pxToRem(16),
  },
  "& .logoToolbar": {
    paddingLeft:theme.spacing(1),
  }
}));

export default NavigationBarStyles;
