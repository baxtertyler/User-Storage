class Portfolio {
    constructor() {
        this.symbols = [];
        this.num_shares = 0;
    }

    is_empty() {
        return this.num_shares === 0;
    }

    num_symbols() {
        return this.symbols.length;
    }

    purchase(stock) {
        if (stock.number < 1) {
            return false;
        }
        this.symbols.push(stock);
        this.num_shares += stock.number;
        return true;
    }

    sale(stock) {
        let i = this.symbols.findIndex((element) => element.symbol == stock.symbol);
        if (i == -1) { 
            return false; 
        }
        this.num_shares -= this.symbols[i].number;
        if (this.symbols[i].number < stock.number) {
            this.symbols.splice(i, 1);
        } else {
            this.symbols[i].number -= stock.number;
        }
        return true;
    }

    num_of_stock(sym) {
        let i = this.symbols.findIndex((element) => element.symbol == sym);
        if (i == -1) { 
            return false; 
        } else {
            return this.symbols[i].number;
        }
    }
}

export default Portfolio;