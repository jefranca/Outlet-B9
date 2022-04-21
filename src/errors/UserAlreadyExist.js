export default class UserAlreadyExist extends Error {
    constructor(message) {
      super(message);
      this.name = "UserAlreadyExist";
    }
  }