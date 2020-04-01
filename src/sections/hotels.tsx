import * as React from "react";
import { useEffect } from "react";
import { observer } from "mobx-react";
import {
  Container,
  makeStyles,
  Tabs,
  Tab,
  CircularProgress
} from "@material-ui/core";

import { hotels } from "../mocks/hotels";

import { Store } from "../store";
import { HotelItem } from "../components";

const useStlyes = makeStyles(() => ({
  root: {
    marginTop: 20
  },
  spinner: {
    marginLeft: "50%"
  },
  container: {
    flexGrow: 1,
    marginTop: 10,
    width: "50%",
    height: 280
  }
}));

export const HotelsSection = observer(() => {
  const classes = useStlyes();

  useEffect(() => {
    Store.set("loadingHotels", true);

    setTimeout(() => {
      Store.set("hotels", hotels);
      Store.set("loadingHotels", false);
    }, 2500);
  }, []);

  const hotelsShow =
    Store.selected === "all"
      ? Store.hotels
          .filter(
            hotel =>
              hotel.city
                .toLowerCase()
                .startsWith(Store.city.toLowerCase()) && hotel.hasPlace
          )
          .filter(hotel => hotel.maxPlace >= Store.peopleCnt)
      : Store.hotels.filter(hotel => hotel.favorite);

  return (
    <div className={classes.root}>
      {Store.loadingHotels ? (
        <Container className={classes.container}>
          <CircularProgress className={classes.spinner} />
        </Container>
      ) : (
        <>
          <Tabs
            value={Store.selected}
            onChange={(e, newTab) => Store.set("selected", newTab)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Все" value="all" />
            <Tab label="Избранное" value="favorites" />
          </Tabs>
          {hotelsShow.map(hotel => {
            return (
              <Container key={hotel.id} className={classes.container}>
                <HotelItem hotel={hotel} />
              </Container>
            );
          })}
        </>
      )}
    </div>
  );
});
