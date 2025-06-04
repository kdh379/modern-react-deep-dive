import { sum } from './sum';

describe('sum 함수', () => {
  it('두 숫자의 합을 올바르게 반환해야 합니다', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(5, 7)).toBe(12);
    expect(sum(-1, 1)).toBe(0);
  });

  it('0과의 덧셈을 올바르게 처리해야 합니다', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
    expect(sum(0, 0)).toBe(0);
  });
}); 