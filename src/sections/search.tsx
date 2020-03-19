import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import { SearchBar } from '../components';

const useStlyes = makeStyles(theme => ({
  root: {
    backgroundColor: "#f7f7f7"
  },
  container: {
    flexGrow: 1,
    width: "75%",
    height: "240px"
  }
}));

export const SearchSection = () => {
  const classes = useStlyes();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <SearchBar />
      </Container>
    </div>
  );
};
