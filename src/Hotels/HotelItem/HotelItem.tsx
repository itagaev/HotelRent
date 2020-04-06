import * as React from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { HotelItemShape } from "./HotelItem.types";
import { Grid, Paper, ButtonBase, Typography, Chip } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Rating } from "@material-ui/lab";
import { DescItem } from './DescItem';
import { useHotelItemStyles } from "./HotelItem.style";

import { Store } from "../../store";

export interface HotelItemProps {
  hotel: HotelItemShape;
}

export const HotelItem: React.FC<HotelItemProps> = observer(({ hotel }) => {
  const classes = useHotelItemStyles();

  const calcPrice = (price: { [key: number]: number }) => {
    const unitPrice = price[Store.peopleCnt];
    return Store.dayCnt * unitPrice;
  };

  const handleChangeFav = action((id: number) => {
    const [...hotels] = Store.hotels;
    const triggeredHotelIndex = hotels.findIndex(hotel => hotel.id === id);
    const triggeredHotel = hotels[triggeredHotelIndex];

    hotels[triggeredHotelIndex] = {
      ...triggeredHotel,
      favorite: !triggeredHotel.favorite
    };

    Store.set("hotels", hotels);
  });

  return (
    <Paper>
      <Grid container className={classes.root}>
        <Grid item xs={4} className={classes.image}>
          <ButtonBase>
            <img src={hotel.imgLink} alt="Hotel pic" />
          </ButtonBase>
        </Grid>
        <Grid item xs={8}>
          <div>
            <Typography color="primary" variant="h6" display="inline">
              {hotel.name}, {hotel.city}
            </Typography>
            <Rating value={hotel.stars} readOnly size="small" />
            {hotel.favorite ? (
              <FavoriteIcon
                className={classes.favIcon}
                onClick={() => handleChangeFav(hotel.id)}
              />
            ) : (
              <FavoriteBorderIcon
                className={classes.favIcon}
                onClick={() => handleChangeFav(hotel.id)}
              />
            )}
          </div>
          <Typography color="primary" display="inline">
            Рейтинг:{" "}
          </Typography>
          <Chip color="primary" size="small" label={hotel.rating} />
          <br />

          <DescItem keyItem="Описание" value={hotel.desc} />
          <DescItem
            keyItem="Количество мест"
            value={`От 1 до ${hotel.maxPlace}`}
          />
          <DescItem keyItem="Контакты" value={hotel.contacts} />

          {(hotel.banking || hotel.breakfast) && (
            <>
              <Typography color="primary" display="inline">
                Плюсы:{" "}
              </Typography>
              <Typography
                variant="body2"
                display="inline"
                className={classes.adv}
              >
                {hotel.banking && "Онлайн-оплата"}
                {hotel.breakfast && ", бесплатный завтрак"}
              </Typography>
              <br />
            </>
          )}
          {hotel.prepayment && (
            <>
              <Typography color="primary" display="inline">
                Минусы:{" "}
              </Typography>
              <Typography
                variant="body2"
                display="inline"
                className={classes.disAdv}
              >
                Предоплата
              </Typography>
              <br />
            </>
          )}
          <Typography color="primary" display="inline">
            Цена на {Store.dayCnt} дней/день:{" "}
          </Typography>
          <Chip color="primary" size="small" label={calcPrice(hotel.price)} />
          <br />
        </Grid>
      </Grid>
    </Paper>
  );
});
