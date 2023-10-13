import mut from './Portfolio.js';

let portfolio;
beforeEach(() => {
    portfolio = new mut();
});

test('test --- constructor/obj creation', () => {
    expect(portfolio).toBeDefined();
});

test('test --- is empty', () => {
    const shares = portfolio.is_empty();
    expect(shares).toBeTruthy();
});

test('test --- num unique ticker symbols', () => {
    const num_symbols = portfolio.num_symbols();
    const expected = 0;
    expect(expected).toEqual(num_symbols);
})

test('test ---  make a purchase and delete it', () => {
    const symbol = 'XYZ';
    const num_shares = 10;
    
    expect(portfolio.purchase(symbol, num_shares)).toBeTruthy();
    expect(portfolio.is_empty()).toBeFalsy();
    expect(portfolio.num_symbols()).toBe(1);

    expect(portfolio.sale(symbol, num_shares)).toBeTruthy();
    expect(portfolio.is_empty()).toBeTruthy();
    expect(portfolio.num_symbols()).toBe(0);
});
