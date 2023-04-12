import { getAccountIdFromARN } from './getAccountIdFromARN';

describe(getAccountIdFromARN, () => {
  it('should return the aws account ID from a standard format ARN', () => {
    expect(
      getAccountIdFromARN(
        'arn:aws:lambda:us-west-2:123456789012:function:my-function',
      ),
    ).toEqual('123456789012');
  });
  it('should return undefined when account ID is missing from ARN', () => {
    expect(
      getAccountIdFromARN('arn:aws:lambda:us-west-2::function:my-function'),
    ).toBeUndefined();
  });
  it('should return undefined when it receives an icomplete ARN', () => {
    expect(getAccountIdFromARN('arn:aws:lambda:us-west-2')).toBeUndefined();
  });
  it('should return undefined when given an empty string', () => {
    expect(getAccountIdFromARN('')).toBeUndefined();
  });
  it('should return undefined when given an empty arn string', () => {
    expect(getAccountIdFromARN('::::::')).toBeUndefined();
  });
});
