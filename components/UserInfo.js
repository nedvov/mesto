export default class UserInfo {
    constructor(nameSelector, jobSelector) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
    }
    
    getUserInfo () {
        const userInfo = {};
        userInfo.name = this._name.textContent;
        userInfo.job = this._job.textContent;
        return userInfo;

    }
    setUserInfo ({name, job}) {   
        this._name.textContent = name;
        this._job.textContent = job;
    }
}