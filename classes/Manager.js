// manager.js
const { Employee } = require('./employee');
class Manager extends Employee {
    #employeesManaged;
    constructor(name, position, salary, department) {
        super(name, position, salary);
        this.department = department;
        this.#employeesManaged = [];
    }
    getEmployeesManaged() {
        return this.#employeesManaged;
    }
    addEmployeeManaged(employee) {
        this.#employeesManaged.push(employee);
    }
    promote(newPosition, raiseAmount) {
        // Optionally include extra promotion logic for managers
        console.log(`${this.name} has been promoted to ${newPosition} with a raise of $${raiseAmount}`);
        super.promote(newPosition, raiseAmount);
    }
}

module.exports = {
    Manager,
};
