import { observable, configure, action, decorate } from "mobx";
import { Hotel } from "./mocks/types";

configure({ enforceActions: "observed" });

interface IAppModel {
  selected: "all" | "favorites";
  loadingHotels: boolean;
  hotels: Hotel[];
  city: string;
  peopleCnt: number;
  dayCnt: number;
  date_from: Date | null;
}

class AppModel implements IAppModel {
  selected: "all" | "favorites" = "all";
  loadingHotels = false;
  city = "";
  hotels: Hotel[] = [];
  date_from: Date | null = new Date();
  peopleCnt = 1;
  dayCnt = 1;

  set<U extends keyof IAppModel>(item: U, value: this[U]) {
    this[item] = value;
  }
}

decorate(AppModel, {
  selected: observable,
  loadingHotels: observable,
  city: observable,
  date_from: observable,
  peopleCnt: observable,
  dayCnt: observable,
  hotels: observable,

  set: action
});

export const Store = new AppModel();
