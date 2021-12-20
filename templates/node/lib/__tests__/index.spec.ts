import { pickFirst } from '../utils/index';

describe('Index', () => {
  it('should pick first element', () => {
    const list = ['hello', 'world'];
    expect(pickFirst(list)).toEqual('hello');
  });
});
