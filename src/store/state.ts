import { IRootState, IUser } from "./types";
export default class RootState implements IRootState {
  userDetails: IUser;
  constructor() {
    this.userDetails = {
      id: "",
      name: "",
      email: ""
    };
  }
}
