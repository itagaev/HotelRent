import * as React from "react";
import { useState } from "react";
import { observer } from "mobx-react";
import { Store } from "../../../store";

import DateFnsUtils from "@date-io/date-fns";

import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Grid,
  TextField,
  Button
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import { HotelOutlined } from "@material-ui/icons";
import { useStyles } from "./SearchForm.style";

export const SearchBarForm = observer(() => {
  const [inputText, setInputText] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [peopleNumber, setPeopleNumber] = useState<number>(1);
  const [rentDays, setRentDays] = useState<number>(1);

  const classes = useStyles();

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleChangePeopleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (+value <= 0) setPeopleNumber(1);
    else if (+value > 4) setPeopleNumber(4);
    else setPeopleNumber(+value);
  };

  return (
    <div className={classes.root}>
      <Grid>
        <FormControl className={classes.input}>
          <InputLabel htmlFor="input">Куда вы хотите поехать?</InputLabel>
          <Input
            id="input"
            startAdornment={
              <InputAdornment position="start">
                <HotelOutlined />
              </InputAdornment>
            }
            value={inputText}
            onChange={e => {
              setInputText(e.currentTarget.value);
            }}
          />
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            className={classes.date}
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            label="День заселения"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </MuiPickersUtilsProvider>
        <TextField
          className={classes.peopleNumber}
          label="Количество людей"
          type="number"
          value={peopleNumber}
          onChange={handleChangePeopleNumber}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          className={classes.peopleNumber}
          label="Количество дней"
          value={rentDays}
          onChange={e => {
            if (isNaN(+e.currentTarget.value)) setRentDays(0);
            else setRentDays(+e.currentTarget.value);
          }}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => {
            Store.set("loadingHotels", true);

            setTimeout(() => {
              Store.set("city", inputText);
              Store.set("date_from", selectedDate);
              Store.set("peopleCnt", peopleNumber);
              Store.set("dayCnt", rentDays);
              Store.set("loadingHotels", false);
            }, 1000);
          }}
        >
          Поиск
        </Button>
      </Grid>
    </div>
  );
});
