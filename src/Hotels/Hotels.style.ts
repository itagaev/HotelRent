import { makeStyles } from "@material-ui/core";

export const useHotelsSectionStyles = makeStyles(() => ({
  root: {
    marginTop: 20,
  },
  spinner: {
    marginLeft: "50%",
  },
  container: {
    flexGrow: 1,
    marginTop: 10,
    width: "50%",
    height: 280,
  },
}));
