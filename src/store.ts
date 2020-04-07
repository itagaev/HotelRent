import { observable, configure, action, decorate } from "mobx";
import { HotelItemShape } from "./Hotels";

configure({ enforceActions: "observed" });

interface IStoreModel {
  selectedHotelsListView: "all" | "favorites";
  loadingHotels: boolean;
  hotels: HotelItemShape[];
  city: string;
  peopleCnt: number;
  dayCnt: number;
  date_from: Date | null;
}

class StoreModel implements IStoreModel {
  selectedHotelsListView: "all" | "favorites" = "all";
  loadingHotels = false;
  city = "";
  hotels: HotelItemShape[] = [];
  date_from: Date | null = new Date();
  peopleCnt = 1;
  dayCnt = 1;

  set<U extends keyof IStoreModel>(item: U, value: this[U]) {
    this[item] = value;
  }
}

decorate(StoreModel, {
  selectedHotelsListView: observable,
  loadingHotels: observable,
  city: observable,
  date_from: observable,
  peopleCnt: observable,
  dayCnt: observable,
  hotels: observable,

  set: action,
});

export const Store = new StoreModel();
