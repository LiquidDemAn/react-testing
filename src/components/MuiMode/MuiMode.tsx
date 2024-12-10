import { Typography, useTheme } from "@mui/material";

const MuiMode = () => {
  const { palette } = useTheme();

  return <Typography component="h1">{`${palette.mode} mode`}</Typography>;
};

export default MuiMode;
