import { split } from 'lodash';

export const getAccountIdFromARN = (arn: string): string | undefined =>
  split(arn, ':')[4] || undefined;
