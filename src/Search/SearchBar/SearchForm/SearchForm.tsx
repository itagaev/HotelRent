import { KeyboardDatePicker } from "@material-ui/pickers";
import * as React from "react";
import { observer } from "mobx-react";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Grid,
  TextField,
  Button,
  TextFieldProps,
} from "@material-ui/core";
import { HotelOutlined } from "@material-ui/icons";

import { Store } from "../../../store";

import { useSearchFormStyles } from "./SearchForm.style";

export const SearchBarForm: React.FC = observer(() => {
  const [inputText, setInputText] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );
  const [peopleNumber, setPeopleNumber] = React.useState(1);
  const [rentDays, setRentDays] = React.useState(1);

  const classes = useSearchFormStyles();

  const handlePeopleNumberChanged: TextFieldProps["onChange"] = (e) => {
    const { value } = e.currentTarget;
    if (+value <= 0) {
      setPeopleNumber(1);
    } else if (+value > 4) {
      setPeopleNumber(4);
    } else {
      setPeopleNumber(+value);
    }
  };

  const handleSearchSubmit = () => {
    Store.set("loadingHotels", true);

    setTimeout(() => {
      Store.set("city", inputText);
      Store.set("date_from", selectedDate);
      Store.set("peopleCnt", peopleNumber);
      Store.set("dayCnt", rentDays);
      Store.set("loadingHotels", false);
    }, 1000);
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
            onChange={(e) => {
              setInputText(e.currentTarget.value);
            }}
          />
        </FormControl>
        <KeyboardDatePicker
          className={classes.date}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          label="День заселения"
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
        <TextField
          className={classes.peopleNumber}
          label="Количество людей"
          type="number"
          value={peopleNumber}
          onChange={handlePeopleNumberChanged}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          className={classes.peopleNumber}
          label="Количество дней"
          value={rentDays}
          onChange={(e) => {
            if (isNaN(+e.currentTarget.value)) setRentDays(0);
            else setRentDays(+e.currentTarget.value);
          }}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleSearchSubmit}
        >
          Поиск
        </Button>
      </Grid>
    </div>
  );
});
