import { makeStyles } from "@material-ui/core";

export const useHotelItemStyles = makeStyles(() => ({
  image: {
    margin: "auto"
  },
  favIcon: {
    cursor: "pointer"
  },
  root: {
    height: "100%",
    padding: 10
  },
  adv: {
    color: "#077812"
  },
  disAdv: {
    color: "red"
  }
}));
