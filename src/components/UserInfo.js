export default class UserInfo {
    constructor(nameSelector, jobSelector, avatarSelector) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);
    }
    
    getUserInfo () {
        return {
            name: this._name.textContent,
            job: this._job.textContent
        }     
    }
    
    setUserInfo ({name, job}) {   
        this._name.textContent = name;
        this._job.textContent = job;
    }

    setAvatar({link}) {
        if (this.onerror) {
            console.log('1')
        }
        this._avatar.src = link
    }
}