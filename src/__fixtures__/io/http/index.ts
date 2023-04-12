import { AxiosResponse } from 'axios';
import getHttpResponseJSON from './getHttpResponse.json';

export const getHttpResponse =
  getHttpResponseJSON as unknown as AxiosResponse<any>;
