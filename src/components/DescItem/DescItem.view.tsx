import * as React from "react";
import { Typography } from "@material-ui/core";

interface Props {
  keyItem: string;
  value: string;
}

export const DescItem = ({ keyItem, value }: Props) => {
  return (
    <>
      <Typography color="primary" display="inline">
        {keyItem}:{" "}
      </Typography>
      <Typography variant="body2" display="inline">
        {value}
      </Typography>
      <br />
    </>
  );
};
