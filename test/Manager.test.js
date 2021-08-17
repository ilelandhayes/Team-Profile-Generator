
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("initialization", () => {
        it("check to see if the new object is an instance of Manager", () => {
            const newManager = new Manager();
            expect(newManager instanceof Manager).toEqual(true);
        });

        it("check to to see if the name, id, email, and github information is passed through the constuctor", () => {
            const name = "Leland";
            const newId = "0004";
            const setEmail = "lelandkhayes13@gmail.com";
            const newOffice = "5A";
            const newManager = new Manager(name, newId, setEmail, newOffice);

            expect(newManager.name).toEqual(name);
            expect(newManager.id).toEqual(newId);
            expect(newManager.email).toEqual(setEmail);
            expect(newManager.officeNumber).toEqual(newOffice);
        });
    });

    describe("getRole and getOfficeNumber functions", () => {
        it("call getRole() and return the role of Manager", () => {
            const name = "Leland";
            const newId = "0004";
            const setEmail = "lelandkhayes13@gmail.com";
            const newManager = new Manager(name, newId, setEmail);
            expect(newManager.getRole()).toEqual("Manager");
        });
        it("should call getOfficeNumber() and return the office number of Manager", () => {
            const name = "Leland";
            const newId = "0004";
            const setEmail = "lelandkhayes13@gmail.com";
            const newOffice = "5A";
            const newManager = new Manager(name, newId, setEmail, newOffice);
            expect(newManager.getOfficeNumber()).toEqual(newOffice);
        });
    });
});