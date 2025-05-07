// salesperson.js

const { Employee } = require('./employee');

class SalesPerson extends Employee {
    #totalSales;

    constructor(name, position, salary, clients) {
        super(name, position, salary);
        this.clients = clients; // Public array
        this.#totalSales = 0;   // Private field
    }

    getSalesNumbers() {
        return this.#totalSales;
    }

    makeSale(amount) {
        if (amount < 0) {
            throw new Error("Sale amount cannot be negative");
        }
        this.#totalSales += amount;
    }

    findClient(clientName) {
        return this.clients.find(c => c.toLowerCase() === clientName.toLowerCase()) || null;
    }
}

module.exports = {
    SalesPerson,
};
