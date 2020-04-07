import { makeStyles } from "@material-ui/core";

export const useHotelItemStyles = makeStyles(() => ({
  image: {
    margin: "auto",
  },
  img: {
    maxWidth: "95%",
  },
  favIcon: {
    cursor: "pointer",
  },
  root: {
    height: "100%",
    padding: 10,
  },
}));
