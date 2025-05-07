// softwareEngineer.js

const { Employee } = require('./Employee');

class SoftwareEngineer extends Employee {
    #programmingLanguages;

    constructor(name, position, salary, programmingLanguages) {
        super(name, position, salary);
        this.#programmingLanguages = programmingLanguages || [];
    }
// getter and setter for programmong Languages
    getProgrammingLanguages() {
        return this.#programmingLanguages;
    }

    setProgrammingLanguage(language) {
        if (typeof language === 'string' && !this.#programmingLanguages.includes(language)) {
            this.#programmingLanguages.push(language);
        }
    }

    // Optional performance-based promotion
    promote(newPosition, raiseAmount) {
        console.log(`${this.name} promoted to ${newPosition} with a raise of $${raiseAmount}`);
        super.promote(newPosition, raiseAmount);
    }
}

module.exports = {
    SoftwareEngineer,
};
