export default class Validator {
  constructor(nickName) {
    this.nickName = nickName;
  }

  validateUsername() {
    return (/^[^-_\d]+[A-Za-z-_]+\d{0,3}[^-_\d]+$/g).test(this.nickName);
  }
}
