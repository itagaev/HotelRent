import { observable, configure, action, decorate } from "mobx";

configure({ enforceActions: "observed" });

interface IAppModel {
  title: string;
}

class AppModel implements IAppModel {
  title = "Hello World!";

  set<U extends keyof IAppModel>(item: U, value: IAppModel[U]) {
    this[item] = value;
  }
}

decorate(AppModel, {
  title: observable,

  set: action
});

export default new AppModel();
