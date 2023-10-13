class Portfolio {
    constructor() {
        this.symbols = new Array();
        this.num_shares = 0;
    }

    is_empty() {
        return this.num_shares === 0;
    }

    num_symbols() {
        return this.symbols.length;
    }

    purchase(sym, num) {
        this.symbols.push(sym);
        this.num_shares += num;
        return true;
    }

    sale(sym, num) {
        let i = this.symbols.indexOf(sym);
        if (i == -1) {
            return false;
        }
        this.symbols.splice(i, 1);
        this.num_shares -= num;
        return true;
    }
}

export default Portfolio;