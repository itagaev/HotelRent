import { observable, configure, action, decorate } from "mobx";

configure({ enforceActions: "observed" });

interface IAppModel {
  title: string;
  selected: string;
  loadingHotels: boolean;
}

class AppModel implements IAppModel {
  title = "Hello World!";
  selected = "0"; // 0 - all 1 - favorites
  loadingHotels = false;

  set<U extends keyof IAppModel>(item: U, value: any) {
    this[item] = value;
  }
}

decorate(AppModel, {
  title: observable,
  selected: observable,
  loadingHotels: observable,

  set: action
});

export default new AppModel();
