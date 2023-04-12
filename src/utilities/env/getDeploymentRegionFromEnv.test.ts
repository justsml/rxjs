import { set, unset } from 'lodash';

import {
  DEFAULT_REGION,
  DEPLOYMENT_REGION_ENV_KEY,
  getDeploymentRegionFromEnv,
} from './getDeploymentRegionFromEnv';

describe(getDeploymentRegionFromEnv, () => {
  it('gets the DEPLOYMENT_REGION_ENV_KEY if set', () => {
    const region = 'test';
    set(process.env, DEPLOYMENT_REGION_ENV_KEY, region);
    expect(getDeploymentRegionFromEnv()).toEqual(region);
  });
  it('gets an default, warning string if DEPLOYMENT_REGION_ENV_KEY is not set', () => {
    unset(process.env, DEPLOYMENT_REGION_ENV_KEY);
    expect(getDeploymentRegionFromEnv()).toEqual(DEFAULT_REGION);
  });
});
