class Employee {
    static #allEmployees = [];
    #salary;
    #isHired;

    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true;
        Employee.#allEmployees.push(this);
    }

    getSalary() {
        return this.#salary;
    }

    setSalary(amount) {
        if (amount < 0) {
            throw new Error("Salary cannot be negative");
        }
        this.#salary = amount;
    }

    getStatus() {
        return this.#isHired;
    }

    setStatus(command) {
        if (command === "hire") {
            this.#isHired = true;
        } else if (command === "fire") {
            this.#isHired = false;
        }
    }

    promote(newPosition, raiseAmount) {
        this.position = newPosition;
        this.setSalary(this.#salary + raiseAmount);
    }

    // Static methods
    static getEmployees() {
        return Employee.#allEmployees;
    }

    static getTotalPayroll() {
        return Employee.#allEmployees.reduce((sum, emp) => sum + emp.#salary, 0);
    }
}

module.exports = {
    Employee,
};
git 