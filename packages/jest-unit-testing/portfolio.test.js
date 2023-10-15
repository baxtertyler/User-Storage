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

test('test ---  make a purchase, check num stocks, delete it', () => {
    const stock = { symbol: 'XYZ', number: 10, };

    expect(portfolio.purchase(stock)).toBeTruthy();
    expect(portfolio.is_empty()).toBeFalsy();
    expect(portfolio.num_symbols()).toBe(1);

    expect(portfolio.num_of_stock('XYZ')).toBe(10);

    expect(portfolio.sale(stock)).toBeTruthy();
    expect(portfolio.is_empty()).toBeTruthy();
    expect(portfolio.num_symbols()).toBe(0);
});

test('test --- only owned symbols', () => {
    const stock1 = { symbol: 'XYZ', number: 10, };
    const stock2 = { symbol: 'ABC', number: 0, };

    expect(portfolio.purchase(stock1)).toBeTruthy();
    expect(portfolio.purchase(stock2)).toBeFalsy();
});

