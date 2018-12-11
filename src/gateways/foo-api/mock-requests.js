const LATENCY = 1200;

const fakeRequest = mockResult => new Promise(
  resolve => setTimeout(() => resolve(
    { data: mockResult, status: 200 }, LATENCY,
  )),
);

export default {

  login() {
    return fakeRequest({ token: 'foobar' });
  },

  getCurrentUser() {
    return fakeRequest({
      user: {
        name: 'Sr Mock',
      },
    });
  },

};
