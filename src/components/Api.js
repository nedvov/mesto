export default class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    #isOK (res) {
        const status = res.ok
        const statusMessage = res.status
        return res.json()
        .then((data) => {
            if (!status) {
                return Promise.reject(`Ошибка: ${statusMessage}; ${data.message}`)
            }
            return data 
        })
    }

    #isError (err) {
        console.log(err);
    }
  
    async getInitialCards() {
        return  fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: {
              authorization: this._headers.authorization
            }            
        })
        .then(res => this.#isOK(res))
        .catch(err => this.#isError(err))
    }

    async getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
              authorization: this._headers.authorization
            }            
        })
        .then(res => this.#isOK(res))
        .catch(err => this.#isError(err)) 
    }

    async addNewCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
              authorization: this._headers.authorization,
              'Content-Type': this._headers['Content-Type']
            },
            body: JSON.stringify({
                'name': name,
                'link': link
            })          
        })
        .then(res => this.#isOK(res))
        .catch(err => this.#isError(err))    
    }

    async setUserInfo(name, job) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
              authorization: this._headers.authorization,
              'Content-Type': this._headers['Content-Type']
            },
            body: JSON.stringify({
                'name': name,
                'about': job
            })          
        })
        .then(res => this.#isOK(res))
        .catch(err => this.#isError(err))   
    }

    async deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
              authorization: this._headers.authorization
            }       
        })
        .then(res => {
            if (res.ok) {
              return res;
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
            console.log(err);
        })    
    }

    async likeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
              authorization: this._headers.authorization,
              'Content-Type': this._headers['Content-Type']
            }        
        })
        .then(res => this.#isOK(res))
        .catch(err => this.#isError(err))    
    }

    async dislikeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
              authorization: this._headers.authorization,
              'Content-Type': this._headers['Content-Type']
            }        
        })
        .then(res => this.#isOK(res))
        .catch(err => this.#isError(err))   
    }

    async setUserAvatar(link) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
              authorization: this._headers.authorization,
              'Content-Type': this._headers['Content-Type']
            },
            body: JSON.stringify({
                'avatar': link
            })          
        })
        .then(res => this.#isOK(res))
        .catch(err => this.#isError(err))   
    }
}