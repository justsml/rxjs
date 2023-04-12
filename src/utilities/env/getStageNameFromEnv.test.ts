import { unset } from 'lodash';

import { DEFAULT_STAGE_NAME, getStageNameFromEnv } from './getStageNameFromEnv';

describe(getStageNameFromEnv, () => {
  it('gets the STAGE_NAME if set', () => {
    const stageName = 'test';
    process.env.STAGE_NAME = stageName;
    expect(getStageNameFromEnv()).toEqual(stageName);
  });
  it('gets an default, warning string if STAGE_NAME is not set', () => {
    unset(process.env, 'STAGE_NAME');
    expect(getStageNameFromEnv()).toEqual(DEFAULT_STAGE_NAME);
  });
});
