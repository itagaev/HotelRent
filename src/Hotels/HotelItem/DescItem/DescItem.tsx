import * as React from "react";
import { Typography } from "@material-ui/core";

export interface DescItemProps {
  keyItem: string;
  value: string;
}

export const DescItem: React.FC<DescItemProps> = ({ keyItem, value }) => {
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
