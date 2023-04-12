import { unset } from 'lodash';

import { gitInfoFixture } from './__fixtures__/GitInfoFixture';

import { getGitInfoFromEnv } from './getGitInfoFromEnv';

describe(getGitInfoFromEnv, () => {
  it('returns a stringified git object', () => {
    process.env.GIT_INFO = JSON.stringify(gitInfoFixture);
    expect(getGitInfoFromEnv()).toMatchSnapshot();
  });
  it('defaults the git object to an empty string', () => {
    unset(process.env, 'GIT_INFO');
    expect(getGitInfoFromEnv()).toEqual('');
  });
});
