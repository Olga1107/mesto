export class UserInfo {
    constructor ({name, job}) {
    this._userName = name;
    this._userJob = job;
    };

getUserInfo() {
    return {name: this._userName.textContent, job: this._userJob.textContent};
  };

setUserInfo({name, job}) {
      this._userName.textContent = name;
      this._userJob.textContent = job;
  };

};