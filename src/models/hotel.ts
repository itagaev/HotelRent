import { observable, configure, action, decorate } from "mobx";
import { Hotel } from "../mocks/types";

configure({ enforceActions: "observed" });

interface Hotels {
  hotels: Hotel[];
}

class HotelModel implements Hotels {
  hotels: Hotel[] = [];

  set<U extends keyof Hotels>(item: U, value: any) {
    this[item] = value;
  }
}

decorate(HotelModel, {
  hotels: observable,

  set: action
});

export default new HotelModel();
