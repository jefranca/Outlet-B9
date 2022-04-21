export default class NonexistentUser extends Error {
    constructor(message) {
      super(message);
      this.name = "NonexistentUser";
    }
  }