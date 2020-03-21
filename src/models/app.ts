import { observable, configure, action, decorate } from "mobx";

configure({ enforceActions: "observed" });

interface IAppModel {
  selected: string;
  loadingHotels: boolean;
  
  city: string;
  date_from: Date;
  peopleCnt: number;
  dayCnt: number;
}

class AppModel implements IAppModel {
  selected = "0"; // 0 - all 1 - favorites
  loadingHotels = false;
  city = '';
  date_from = new Date();
  peopleCnt = 1;
  dayCnt = 1;

  set<U extends keyof IAppModel>(item: U, value: any) {
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

  set: action
});

export default new AppModel();
