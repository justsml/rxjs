import { unset } from 'lodash';

import { isOffline } from './isOffline';

describe(isOffline, () => {
  it('should be true if STAGE_NAME is offline', () => {
    process.env.STAGE_NAME = 'offline';
    expect(isOffline()).toEqual(true);
  });
  it('should be false if STAGE_NAME is not offline', () => {
    unset(process.env, 'STAGE_NAME');
    process.env.STAGE_NAME = 'not-offline';
    expect(isOffline()).toEqual(false);
  });
  it('should be true if STAGE_NAME is not set on the enviornment', () => {
    unset(process.env, 'STAGE_NAME');
    expect(isOffline()).toEqual(true);
  });
});
