import { getStageNameFromEnv, DEFAULT_STAGE_NAME } from './getStageNameFromEnv';

export const isOffline = () => getStageNameFromEnv() === DEFAULT_STAGE_NAME;
