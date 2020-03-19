import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "#003580"
  },
  title: {
    marginLeft: theme.spacing(6)
  }
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          HotelRent
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
