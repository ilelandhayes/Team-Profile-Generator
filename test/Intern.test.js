
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("initialization", () => {
        it("check to see if the new object is an instance of Intern", () => {
            const newInt = new Intern();
            expect(newInt instanceof Intern).toEqual(true);
        });

        it("check to to see if the name, id, email, and github information is passed through the constuctor", () => {
            const name = "Leland";
            const newId = "0003";
            const setEmail = "lelandkhayes13@gmail.com";
            const newSchool = "RCC";
            const newInt = new Intern(name, newId, setEmail, newSchool);

            expect(newInt.name).toEqual(name);
            expect(newInt.id).toEqual(newId);
            expect(newInt.email).toEqual(setEmail);
            expect(newInt.school).toEqual(newSchool);
        });
    });

    describe("getRole and getSchool functions", () => {
        it("call getRole() and return the role of Intern", () => {
            const name = "Leland";
            const newId = "0003";
            const setEmail = "lelandkhayes13@gmail.com";
            const newInt = new Intern(name, newId, setEmail);
            expect(newInt.getRole()).toEqual("Intern");
        });
        it("call getSchool() and return the school name of Intern", () => {
            const name = "Leland";
            const newId = "0003";
            const setEmail = "lelandkhayes13@gmail.com";
            const newSchool = "RCC";
            const newInt = new Intern(name, newId, setEmail, newSchool);
            expect(newInt.getSchool()).toEqual(newSchool);
        });
    });
});