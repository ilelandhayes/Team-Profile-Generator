const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("initialization", () => {
        it("check to see if the initialized object is a new Employee class", () => {
            const newEmp = new Employee();
            expect(newEmp instanceof Employee).toEqual(true);
        });

        it("attach the given name to the instance for Employee", () => {
            const name = "Leland";
            const newEmp = new Employee(name);
            expect(newEmp.name).toEqual(name);
        });

        it("attach the given id to the instance for Employee", () => {
            const name = "Leland";
            const newID = "0001";
            const newEmp = new Employee(name, newID);
            expect(newEmp.id).toEqual(newID);
        });

        it("attach the given email address to the instance for Employee", () => {
            const name = "Leland";
            const newID = "0001";
            const setEmail = "lelandkhayes13@gmail.com";
            const newEmp = new Employee(name, newID, setEmail);
            expect(newEmp.email).toEqual(setEmail);
        });
        it("return the role for the instance of Employee", () => {
            const name = "Leland";
            const newID = "0001";
            const setEmail = "lelandkhayes13@gmail.com";
            const newEmp = new Employee(name, newID, setEmail);
            expect(newEmp.getRole()).toEqual("Employee");
        });
    });
});