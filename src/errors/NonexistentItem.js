export default class NonexistentItem extends Error {
    constructor(message) {
      super(message);
      this.name = "NonexistentItem";
    }
  }