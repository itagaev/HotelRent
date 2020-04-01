import * as React from "react";
import { Container, makeStyles } from "@material-ui/core";
import { SearchBar } from '../components';

const useSearchSectionStlyes = makeStyles(theme => ({
  root: {
    backgroundColor: "#f7f7f7"
  },
  container: {
    flexGrow: 1,
    width: "75%",
    height: 240
  }
}));

export const SearchSection: React.FC = () => {
  const classes = useSearchSectionStlyes();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <SearchBar />
      </Container>
    </div>
  );
};
