import param from 'jquery-param'
import sha256 from 'js-sha256'

const Utils = {
  goToTop() {
    window.scroolTo(0, 0);
  },

  createRequest(request, successCallback, failedCallback) {
    request.then(response => response.data)
      .then(json => {
        if (typeof(successCallback) === 'function') {successCallback(json);}
      })
      .catch((error) => {
        const response = error.response;

        if (response) {
          if (typeof(failedCallback) === 'function') {
            failedCallback(response.data);
          }
        } else {
          throw error;
        }
      });
  },

  generateUrlLazada() {
    let data = {
      UserID: user.lazada_user_id,
      Version: '1.0',
      Action: action,
      Format: 'JSON',
      Timestamp: this.getTimeIso8601()
    }
    data['Signature'] = sha256.hmac(user.lazada_api_key, param(this.sortHashByKey(data)))
    return param(data);
  },

  getTimeIso8601() {
    let time = new Date().toISOString().split('.');
    return `${time[0]}+00:00`
  },

  sortHashByKey(hash) {
    let result = {};
    Object.keys(hash).sort().forEach(key => {
      result[key] = hash[key];
    });
    return result;
  }
}

export default Utils;
