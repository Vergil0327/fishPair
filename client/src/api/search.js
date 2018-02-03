import axios from './axiosInstance';

export default {
  searchUser(payload, cb, errCb) {
    console.log('search api: ', payload);
    return axios.post('https://84suxbrujk.execute-api.us-east-1.amazonaws.com/v1/search', payload)
      .then(cb)
      .catch(errCb);
  },

};
