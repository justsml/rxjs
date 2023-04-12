import { get } from 'lodash';

export const getGitInfoFromEnv = (): string => get(process.env, 'GIT_INFO', '');
