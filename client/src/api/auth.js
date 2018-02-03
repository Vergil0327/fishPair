import axios from './axiosInstance';

export default {
  register(payload, cb, errCb) {
    // console.log('register api: ', payload);
    return axios.post('https://84suxbrujk.execute-api.us-east-1.amazonaws.com/v1/register', payload)
      .then(cb)
      .catch(errCb);
  },

  login(payload, cb, errCb) {
    // console.log('login api', payload);
    return axios.post('https://84suxbrujk.execute-api.us-east-1.amazonaws.com/v1/login', payload)
      .then(cb)
      .catch(errCb);
  },

};
