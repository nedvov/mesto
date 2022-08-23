export default class UserInfo {
    constructor(nameSelector, jobSelector, avatarSelector) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);
    }
    
    getUserInfo () {
        return {
            name: this._name.textContent,
            about: this._job.textContent
        }     
    }

    getUserId () {
        return this._id
    }
    
    setUserInfo ({name, about, _id}) {   
        this._name.textContent = name;
        this._job.textContent = about;
        this._id = _id;
    }

    setAvatar({avatar}) {
        this._avatar.src = avatar
    }
}