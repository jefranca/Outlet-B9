export default class SoldOut extends Error {
    constructor(message) {
      super(message);
      this.name = "SoldOut";
    }
  }