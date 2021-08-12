import { chop1, chop2 } from '../src/02-karate-chop';

describe('test chop 1', () => {
  it('work', () => {
    expect(chop1(3, [])).toEqual(-1);
    expect(chop1(3, [1])).toEqual(-1);
    expect(chop1(1, [1])).toEqual(0);

    expect(chop1(1, [1, 3, 5])).toEqual(0);
    expect(chop1(3, [1, 3, 5])).toEqual(1);
    expect(chop1(5, [1, 3, 5])).toEqual(2);
    expect(chop1(0, [1, 3, 5])).toEqual(-1);
    expect(chop1(2, [1, 3, 5])).toEqual(-1);
    expect(chop1(4, [1, 3, 5])).toEqual(-1);
    expect(chop1(6, [1, 3, 5])).toEqual(-1);

    expect(chop1(1, [1, 3, 5, 7])).toEqual(0);
    expect(chop1(3, [1, 3, 5, 7])).toEqual(1);
    expect(chop1(5, [1, 3, 5, 7])).toEqual(2);
    expect(chop1(7, [1, 3, 5, 7])).toEqual(3);
    expect(chop1(0, [1, 3, 5, 7])).toEqual(-1);
    expect(chop1(2, [1, 3, 5, 7])).toEqual(-1);
    expect(chop1(4, [1, 3, 5, 7])).toEqual(-1);
    expect(chop1(6, [1, 3, 5, 7])).toEqual(-1);
    expect(chop1(8, [1, 3, 5, 7])).toEqual(-1);
  });
})

describe('test chop 2', () => {
  it('work', () => {
    expect(chop2(3, [])).toEqual(-1);
    expect(chop2(3, [1])).toEqual(-1);
    expect(chop2(1, [1])).toEqual(0);

    expect(chop2(1, [1, 3, 5])).toEqual(0);
    expect(chop2(3, [1, 3, 5])).toEqual(1);
    expect(chop2(5, [1, 3, 5])).toEqual(2);
    expect(chop2(0, [1, 3, 5])).toEqual(-1);
    expect(chop2(2, [1, 3, 5])).toEqual(-1);
    expect(chop2(4, [1, 3, 5])).toEqual(-1);
    expect(chop2(6, [1, 3, 5])).toEqual(-1);

    expect(chop2(1, [1, 3, 5, 7])).toEqual(0);
    expect(chop2(3, [1, 3, 5, 7])).toEqual(1);
    expect(chop2(5, [1, 3, 5, 7])).toEqual(2);
    expect(chop2(7, [1, 3, 5, 7])).toEqual(3);
    expect(chop2(0, [1, 3, 5, 7])).toEqual(-1);
    expect(chop2(2, [1, 3, 5, 7])).toEqual(-1);
    expect(chop2(4, [1, 3, 5, 7])).toEqual(-1);
    expect(chop2(6, [1, 3, 5, 7])).toEqual(-1);
    expect(chop2(8, [1, 3, 5, 7])).toEqual(-1);
  });
})