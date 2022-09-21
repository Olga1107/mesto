export class UserInfo {
    constructor ({name, job}) {
    this._userName = name;
    this._userJob = job;
    };

getUserInfo() {
    return {name: this._userName.textContent, job: this._userJob.textContent};
  };

setUserInfo(res) {
      this._userName.textContent = res.name;
      this._userJob.textContent = res.job;
  };

};