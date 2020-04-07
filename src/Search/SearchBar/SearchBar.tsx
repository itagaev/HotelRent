import * as React from "react";
import { observer } from "mobx-react";
import { makeStyles, Typography } from "@material-ui/core";

import { SearchBarForm } from "./SearchForm/SearchForm";

export const useSearchBarStyles = makeStyles((theme) => ({
  root: {
    padding: "3.5% 0% 9.5% 0%",
  },
}));

export const SearchBar: React.FC = observer(() => {
  const classes = useSearchBarStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" display="block">
        Найдите спецпредложения для отелей и домов
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        От уютных загородных домов до стильных городских квартир
      </Typography>
      <SearchBarForm />
    </div>
  );
});
