import * as React from "react";
import { observer } from "mobx-react";
import { action } from 'mobx';
import { Hotel } from "../../mocks/types";
import { Grid, Paper, ButtonBase, Typography, Chip } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Rating } from "@material-ui/lab";
import { DescItem } from "../DescItem";
import { useStyles } from "./HotelItem.style";

import HotelModel from "../../models/hotel";
import AppModel from "../../models/app";
import { Price } from '../../mocks/types';

interface Props {
  hotel: Hotel;
}

export const HotelItem = observer(({ hotel }: Props) => {
  const classes = useStyles();

  const calcPrice = (price: Price) => {
      const unitPrice = price[AppModel.peopleCnt];
      return AppModel.dayCnt * unitPrice;
  }

  const handleChangeFav = action((id: number) => {
    const [...hotels] = HotelModel.hotels;
    hotels.find(hotel => hotel.id === id)!.favorite = !hotels.find(
      hotel => hotel.id === id
    )!.favorite;
    HotelModel.set("hotels", hotels);
  });

  return (
    <Paper>
      <Grid container style={{ height: "100%", padding: "10px" }}>
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
                style={{ cursor: "pointer" }}
                onClick={() => handleChangeFav(hotel.id)}
              />
            ) : (
              <FavoriteBorderIcon
                style={{ cursor: "pointer" }}
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
          <DescItem keyItem="Описание" value={hotel.contacts} />

          {(hotel.banking || hotel.breakfast) && (
            <>
              <Typography color="primary" display="inline">
                Плюсы:{" "}
              </Typography>
              <Typography
                variant="body2"
                display="inline"
                style={{ color: "#077812" }}
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
                style={{ color: "red" }}
              >
                {hotel.prepayment && "Предоплата"}
              </Typography>
              <br />
            </>
          )}
          <Typography color="primary" display="inline">
            Цена на {AppModel.dayCnt} дней/день:{" "}
          </Typography>
          <Chip color="primary" size="small" label={calcPrice(hotel.price)} />
          <br />
        </Grid>
      </Grid>
    </Paper>
  );
});
