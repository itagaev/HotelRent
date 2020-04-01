import { observable, configure, action, decorate } from "mobx";
import { IHotelItem } from "./components/HotelItem";

configure({ enforceActions: "observed" });

interface IStoreModel {
  selected: "all" | "favorites";
  loadingHotels: boolean;
  hotels: IHotelItem[];
  city: string;
  peopleCnt: number;
  dayCnt: number;
  date_from: Date | null;
}

class StoreModel implements IStoreModel {
  selected: "all" | "favorites" = "all";
  loadingHotels = false;
  city = "";
  hotels: IHotelItem[] = [];
  date_from: Date | null = new Date();
  peopleCnt = 1;
  dayCnt = 1;

  set<U extends keyof IStoreModel>(item: U, value: this[U]) {
    this[item] = value;
  }
}

decorate(StoreModel, {
  selected: observable,
  loadingHotels: observable,
  city: observable,
  date_from: observable,
  peopleCnt: observable,
  dayCnt: observable,
  hotels: observable,

  set: action
});

export const Store = new StoreModel();
