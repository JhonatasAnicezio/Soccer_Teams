import axios from 'axios';
import MockAdapter from 'axios-mock-adapter/types';

const mockAxios = new MockAdapter(axios);

export default mockAxios;