import { get } from 'lodash';

export const DEFAULT_REGION = 'local';

export const DEPLOYMENT_REGION_ENV_KEY = 'DEPLOYMENT_REGION';

export const getDeploymentRegionFromEnv = () =>
  get(process.env, DEPLOYMENT_REGION_ENV_KEY, DEFAULT_REGION);
