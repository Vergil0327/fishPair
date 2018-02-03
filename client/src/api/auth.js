import axios from './axiosInstance';

export default {
  register(payload, cb, errCb) {
    console.log('register api: ', payload);
    return axios.post('https://84suxbrujk.execute-api.us-east-1.amazonaws.com/v1/register', payload)
      .then(cb)
      .catch(errCb);
  },

  login({ userId }, cb, errCb) {
    // return axios.post('https://84suxbrujk.execute-api.us-east-1.amazonaws.com/v1/login', { userId })
    //   .then(cb)
    //   .catch(errCb);
    console.log(userId, cb, errCb);
    return Promise.resolve({
      userId: 1,
      userName: 'vergil',
      email: 'example@gmail.com',
      userType: 'professional',
      featureTags: ['fishLaw', 'certification'],
      address: {
        postalCode: '433',
        country: 'TW',
        province: 'taiwan',
        city: 'taipei',
        street: 'xinlong street',
      },
      meta: {
        userAgent: window.navigator.userAgent,
        locale: window.navigator.language,
        ipAddress: '127.0.0.1',
        geolocation: [1234.123, 1234.123], // [latitude, longitude]
      },
      pairStoryId: 1,
      isLogin: true,
      loginAt: new Date(),
    });
  },

};
