export class UserInfo {
    constructor ({name, profession}) {
    this._userName = name;
    this._userJob = profession;
    };

getUserInfo() {
    return {name: this._userName.textContent, profession: this._userJob.textContent};
  };

setUserInfo(res) {
  debugger
      this._userName.textContent = res.name;
      this._userJob.textContent = res.about;
  };

};