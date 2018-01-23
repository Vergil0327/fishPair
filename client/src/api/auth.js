// import axios from './axiosInstance';

export default {
  register({ userType, userProfile }, cb, errCb) {
    // return axios.post('path/to/register', { userType, userProfile })
    //   .then(cb)
    //   .catch(errCb);
    console.log(userType, userProfile, cb, errCb);
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

  login({ userId }, cb, errCb) {
    // return axios.post('path/to/login', { userId })
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

  logout({ userId }, cb, errCb) {
    // return axios.post('path/to/logout', { userId })
    //   .then(cb)
    //   .catch(errCb);
    console.log(userId, cb, errCb);
    return Promise.resolve({ statusCode: 200, message: 'log out successfully' });
  },
};
