import mockRequests from './mock-requests';
import fooApi from './requests';

const requests = (process.env.MOCK_REQUESTS) ? mockRequests : fooApi;

export default requests;
