export const DEFAULT_STAGE_NAME = 'offline';

export const getStageNameFromEnv = () => {
  const stage = process.env.STAGE_NAME || DEFAULT_STAGE_NAME;
  console.warn('STAGE FOUND', stage);
  return stage;
};
