import mut from './module.js'; // MUT = Module Under Test

// sum tests

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

// dev tests

test('Testing dev -- success', () => {
    const expected = 10;
    const got = mut.div(20, 2);
    expect(got).toBe(expected);
});

test('Testing dev -- success', () => {
    const expected = 3;
    const got = mut.div(18, 6);
    expect(got).toBe(expected);
});

test('Testing dev -- decimal', () => {
    const expected = 0.5;
    const got = mut.div(1, 2);
    expect(got).toBe(expected);
});

test('Testing dev -- negative', () => {
    const expected = -4;
    const got = mut.div(-8, 2);
    expect(got).toBe(expected);
});

// contains numbers test

test('Testing containsNumbers -- success', () => {
    const got = mut.containsNumbers("11011");
    expect(got).toBeTruthy();
})

test('Testing containsNumbers -- no num', () => {
    const got = mut.containsNumbers("ffff");
    expect(got).toBeFalsy();
})

test('Testing containsNumbers -- =1 letter, >1 number', () => {
    const got = mut.containsNumbers("0000F0000");
    expect(got).toBeTruthy();
})

test('Testing containsNumbers -- >1 letter, >1 number', () => {
    const got = mut.containsNumbers("9g9g9g");
    expect(got).toBeTruthy();
})

test('Testing containsNumbers -- >1 letter, =1 number', () => {
    const got = mut.containsNumbers("6ooooo");
    expect(got).toBeTruthy();
})

test('Testing containsNumbers -- start with letter', () => {
    const got = mut.containsNumbers("oo7");
    expect(got).toBeTruthy();
})

/*
test('Testing containsNumbers -- space no number', () => {
    const got = mut.containsNumbers("ff ff");
    expect(got).toBeFalsy();
})
*/