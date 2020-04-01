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

import AppModel from "../models/app";
import HotelModel from "../models/hotel";
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
    AppModel.set("loadingHotels", true);

    setTimeout(() => {
      HotelModel.set("hotels", hotels);
      AppModel.set("loadingHotels", false);
    }, 2500);
  }, []);

  const hotelsShow =
    AppModel.selected === "all"
      ? HotelModel.hotels
          .filter(
            hotel =>
              hotel.city
                .toLowerCase()
                .startsWith(AppModel.city.toLowerCase()) && hotel.hasPlace
          )
          .filter(hotel => hotel.maxPlace >= AppModel.peopleCnt)
      : HotelModel.hotels.filter(hotel => hotel.favorite);

  return (
    <div className={classes.root}>
      {AppModel.loadingHotels ? (
        <Container className={classes.container}>
          <CircularProgress className={classes.spinner} />
        </Container>
      ) : (
        <>
          <Tabs
            value={AppModel.selected}
            onChange={(e, newTab) => AppModel.set("selected", newTab)}
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
