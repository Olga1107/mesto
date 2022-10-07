export class UserInfo {
    constructor ({name, profession, avatar}) {
    this._userName = name;
    this._userJob = profession;
    this._avatar = avatar;
    };

getUserInfo() {
    return {name: this._userName.textContent, profession: this._userJob.textContent, avatar: this._avatar.src};
  };

setUserInfo(res) {
      this._userName.textContent = res.name;
      this._userJob.textContent = res.about;
      this._avatar.src = res.avatar;
      this._idUser = res._id;
  };

  getUserId() {
    return this._idUser;
};
};

