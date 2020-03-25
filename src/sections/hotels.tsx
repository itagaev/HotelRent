import React, { useEffect } from "react";
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
    marginTop: "20px"
  },
  spinner: {
    marginLeft: "50%"
  },
  container: {
    flexGrow: 1,
    marginTop: "10px",
    width: "50%",
    height: "280px"
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

  const handleTabChange = (e: React.ChangeEvent<{}>, newTab: number) => {
    AppModel.set("selected", String(newTab));
  };

  const hotelsShow =
    AppModel.selected === "0"
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
            value={+AppModel.selected}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Все" />
            <Tab label="Избранное" />
          </Tabs>
          {hotelsShow.map(hotel => {
            return (
              <Container key={hotel.id} className={classes.container}>
                <HotelItem hotel={hotel}/>
              </Container>
            );
          })}
        </>
      )}
    </div>
  );
});
