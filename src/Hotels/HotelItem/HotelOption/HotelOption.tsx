import * as React from "react";
import { Typography, TypographyProps } from "@material-ui/core";

interface HotelOptionProps {
  options: string;
  optionText: string;
  optionTextColor: TypographyProps["color"];
}

export const HotelOption: React.FC<HotelOptionProps> = ({
  options,
  optionText,
  optionTextColor,
}) => (
  <>
    <Typography color="primary" display="inline">
      {optionText}:{" "}
    </Typography>
    <Typography variant="body2" display="inline" color={optionTextColor}>
      {options}
    </Typography>
    <br />
  </>
);
