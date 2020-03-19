import React from "react";
import { observer } from "mobx-react";

import { SearchBarForm } from "./SearchForm";

import { Typography } from "@material-ui/core";
import { useStlyes } from "./Search.style";

export const SearchBar = observer(() => {
  const classes = useStlyes();

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
