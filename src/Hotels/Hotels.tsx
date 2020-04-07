import * as React from "react";
import { observer } from "mobx-react";
import { Container, Tabs, Tab, CircularProgress } from "@material-ui/core";

import { hotels } from "../hotels.mock";
import { Store } from "../store";
import { HotelItem } from "./HotelItem";

import { useHotelsSectionStyles } from "./Hotels.style";

export const HotelsSection: React.FC = observer(() => {
  const classes = useHotelsSectionStyles();

  React.useEffect(() => {
    Store.set("loadingHotels", true);

    setTimeout(() => {
      Store.set("hotels", hotels);
      Store.set("loadingHotels", false);
    }, 2500);
  }, []);

  const filteredHotels =
    Store.selectedHotelsListView === "all"
      ? Store.hotels.filter(
          (hotel) =>
            hotel.city.toLowerCase().startsWith(Store.city.toLowerCase()) &&
            hotel.hasPlace &&
            hotel.maxPlace >= Store.peopleCnt
        )
      : Store.hotels.filter((hotel) => hotel.favorite);

  return (
    <div className={classes.root}>
      {Store.loadingHotels ? (
        <Container className={classes.container}>
          <CircularProgress className={classes.spinner} />
        </Container>
      ) : (
        <>
          <Tabs
            value={Store.selectedHotelsListView}
            onChange={(e, newTab) =>
              Store.set("selectedHotelsListView", newTab)
            }
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Все" value="all" />
            <Tab label="Избранное" value="favorites" />
          </Tabs>
          {filteredHotels.map((hotel) => (
            <Container key={hotel.id} className={classes.container}>
              <HotelItem hotel={hotel} />
            </Container>
          ))}
        </>
      )}
    </div>
  );
});
